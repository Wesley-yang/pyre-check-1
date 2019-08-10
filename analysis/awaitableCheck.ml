(* Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. *)

open Core
open Ast
open Statement
open Pyre
module Error = AnalysisError

module type Context = sig
  val define : Define.t Node.t

  val global_resolution : GlobalResolution.t
end

module State (Context : Context) = struct
  type state =
    | Unawaited of Expression.t
    | Awaited
  [@@deriving show]

  let _ = show_state (* unused *)

  type alias =
    | Reference of Reference.t
    | Location of Location.Reference.t
  [@@deriving compare, sexp, show]

  module AliasMap = Map.Make (struct
    type t = alias [@@deriving sexp, compare]
  end)

  type t = {
    unawaited: state Location.Reference.Map.t;
    locals: Location.Reference.Set.t AliasMap.t;
    need_to_await: bool;
  }

  let show { unawaited; locals; need_to_await } =
    let unawaited =
      Map.to_alist unawaited
      |> List.map ~f:(fun (location, state) ->
             Format.asprintf "%a -> %a" Location.pp location pp_state state)
      |> String.concat ~sep:", "
    in
    let locals =
      let show_locations locations =
        Set.to_list locations |> List.map ~f:Location.show |> String.concat ~sep:", "
      in
      Map.to_alist locals
      |> List.map ~f:(fun (alias, locations) ->
             Format.asprintf "%a -> {%s}" pp_alias alias (show_locations locations))
      |> String.concat ~sep:", "
    in
    Format.sprintf
      "Unawaited expressions: %s\nLocals: %s\nNeed to await: %b"
      unawaited
      locals
      need_to_await


  let pp format state = Format.fprintf format "%s" (show state)

  let initial =
    { unawaited = Location.Reference.Map.empty; locals = AliasMap.empty; need_to_await = true }


  let errors { unawaited; locals; _ } =
    let errors =
      let keep_unawaited = function
        | Unawaited expression -> Some { Error.references = []; expression }
        | Awaited -> None
      in
      Map.filter_map unawaited ~f:keep_unawaited
    in
    let add_reference ~key:alias ~data:locations errors =
      match alias with
      | Reference name ->
          let add_reference errors location =
            match Map.find errors location with
            | Some { Error.references; expression } ->
                Map.set errors ~key:location ~data:{ references = name :: references; expression }
            | None -> errors
          in
          Location.Reference.Set.fold locations ~init:errors ~f:add_reference
      | Location _ -> errors
    in
    let error (location, unawaited_awaitable) =
      Error.create
        ~location
        ~kind:(Error.UnawaitedAwaitable unawaited_awaitable)
        ~define:Context.define
    in
    Map.fold locals ~init:errors ~f:add_reference |> Map.to_alist |> List.map ~f:error


  let less_or_equal ~left ~right =
    let less_or_equal_unawaited (reference, state) =
      match state, Map.find right.unawaited reference with
      | Unawaited _, Some _ -> true
      | Awaited, Some Awaited -> true
      | _ -> false
    in
    let less_or_equal_locals (reference, locations) =
      match Map.find right.locals reference with
      | Some other_locations -> Set.is_subset locations ~of_:other_locations
      | None -> false
    in
    Map.to_alist left.unawaited |> List.for_all ~f:less_or_equal_unawaited
    && Map.to_alist left.locals |> List.for_all ~f:less_or_equal_locals


  let join left right =
    let merge_unawaited ~key:_ left right =
      match left, right with
      | Awaited, _
      | _, Awaited ->
          Awaited
      | unawaited, _ -> unawaited
    in
    let merge_locals ~key:_ left right = Set.union left right in
    {
      unawaited = Map.merge_skewed left.unawaited right.unawaited ~combine:merge_unawaited;
      locals = Map.merge_skewed left.locals right.locals ~combine:merge_locals;
      need_to_await = left.need_to_await || right.need_to_await;
    }


  let widen ~previous ~next ~iteration:_ = join previous next

  let mark_name_as_awaited { unawaited; locals; need_to_await } ~name =
    if Expression.is_simple_name name then
      let unawaited =
        let await_location unawaited location = Map.set unawaited ~key:location ~data:Awaited in
        Map.find locals (Reference (Expression.name_to_reference_exn name))
        >>| (fun locations -> Set.fold locations ~init:unawaited ~f:await_location)
        |> Option.value ~default:unawaited
      in
      { unawaited; locals; need_to_await }
    else (* Non-simple names cannot store awaitables. *)
      { unawaited; locals; need_to_await }


  let mark_location_as_awaited { unawaited; locals; need_to_await } ~location =
    if Map.mem unawaited location then
      { unawaited = Map.set unawaited ~key:location ~data:Awaited; locals; need_to_await }
    else
      match Map.find locals (Location location) with
      | Some locations ->
          let unawaited =
            Set.fold locations ~init:unawaited ~f:(fun unawaited location ->
                Map.set unawaited ~key:location ~data:Awaited)
          in
          { unawaited; locals; need_to_await }
      | None -> { unawaited; locals; need_to_await }


  let rec forward_generator
      ~resolution
      state
      { Expression.Comprehension.target = _; iterator; conditions; async = _ }
    =
    let state =
      List.fold
        conditions
        ~f:(fun state expression -> forward_expression ~resolution ~state ~expression)
        ~init:state
    in
    forward_expression ~resolution ~state ~expression:iterator


  and forward_expression ~resolution ~state ~expression:({ Node.value; location } as expression) =
    let open Expression in
    match value with
    | Await ({ Node.value = Name name; _ } as expression) when Expression.is_simple_name name ->
        let state = forward_expression ~resolution ~state ~expression in
        mark_name_as_awaited state ~name
    | Await ({ Node.location; _ } as expression) ->
        let state = forward_expression ~resolution ~state ~expression in
        mark_location_as_awaited state ~location
    | BooleanOperator { BooleanOperator.left; right; _ } ->
        let state = forward_expression ~resolution ~state ~expression:left in
        forward_expression ~resolution ~state ~expression:right
    | Call { Call.callee; arguments } -> (
        let state = forward_expression ~resolution ~state ~expression:callee in
        let forward_argument state { Call.Argument.value; _ } =
          match value with
          | { Node.value = Name name; _ } -> mark_name_as_awaited state ~name
          | _ -> forward_expression ~resolution ~state ~expression:value
        in
        let need_to_await = state.need_to_await in
        (* Don't introduce awaitables for the arguments of a call, as they will be consumed by the
           call anyway. *)
        let state =
          List.fold arguments ~init:{ state with need_to_await = false } ~f:forward_argument
        in
        let state = { state with need_to_await } in
        let annotation = Resolution.resolve resolution expression in
        let is_awaitable =
          GlobalResolution.less_or_equal
            (Resolution.global_resolution resolution)
            ~left:annotation
            ~right:(Type.awaitable Type.Top)
        in
        let { unawaited; locals; need_to_await } = state in
        let find_aliases { Node.value; location } =
          if Map.mem unawaited location then
            Some (Location.Reference.Set.singleton location)
          else
            match value with
            | Name name when Expression.is_simple_name name ->
                Map.find locals (Reference (Expression.name_to_reference_exn name))
            | _ -> Map.find locals (Location location)
        in
        if need_to_await && is_awaitable then
          (* If the callee is a method on an awaitable, make the assumption that the returned value
             is the same awaitable. *)
          match Node.value callee with
          | Name (Name.Attribute { base; _ }) -> (
            match find_aliases base with
            | Some locations ->
                {
                  unawaited;
                  locals = Map.set locals ~key:(Location location) ~data:locations;
                  need_to_await;
                }
            | None ->
                {
                  unawaited = Map.set unawaited ~key:location ~data:(Unawaited expression);
                  locals;
                  need_to_await;
                } )
          | _ ->
              {
                unawaited = Map.set unawaited ~key:location ~data:(Unawaited expression);
                locals;
                need_to_await;
              }
        else
          match Node.value callee with
          | Name (Name.Attribute { base; _ }) -> (
            match find_aliases base with
            | Some locations ->
                {
                  unawaited;
                  locals = Map.set locals ~key:(Location location) ~data:locations;
                  need_to_await;
                }
            | None -> state )
          | _ -> state )
    | ComparisonOperator { ComparisonOperator.left; right; _ } ->
        let state = forward_expression ~resolution ~state ~expression:left in
        forward_expression ~resolution ~state ~expression:right
    | Dictionary { Dictionary.entries; keywords } ->
        let forward_entry state { Dictionary.key; value } =
          let state = forward_expression ~resolution ~state ~expression:key in
          forward_expression ~resolution ~state ~expression:value
        in
        let state = List.fold entries ~init:state ~f:forward_entry in
        List.fold keywords ~init:state ~f:(fun state expression ->
            forward_expression ~resolution ~state ~expression)
    | Lambda { Lambda.body; _ } -> forward_expression ~resolution ~state ~expression:body
    | Starred (Starred.Once expression)
    | Starred (Starred.Twice expression) ->
        forward_expression ~resolution ~state ~expression
    | Ternary { Ternary.target; test; alternative } ->
        let state = forward_expression ~resolution ~state ~expression:target in
        let state = forward_expression ~resolution ~state ~expression:test in
        forward_expression ~resolution ~state ~expression:alternative
    | List items
    | Set items
    | Tuple items ->
        List.fold items ~init:state ~f:(fun state expression ->
            forward_expression ~resolution ~state ~expression)
    | UnaryOperator { UnaryOperator.operand; _ } ->
        forward_expression ~resolution ~state ~expression:operand
    | Yield (Some expression) -> forward_expression ~resolution ~state ~expression
    | Yield None -> state
    | Generator { Expression.Comprehension.element; generators }
    | ListComprehension { Expression.Comprehension.element; generators }
    | SetComprehension { Expression.Comprehension.element; generators } ->
        let state = List.fold generators ~init:state ~f:(forward_generator ~resolution) in
        forward_expression ~resolution ~state ~expression:element
    | DictionaryComprehension
        { Expression.Comprehension.element = { Expression.Dictionary.key; value }; generators } ->
        let state = List.fold generators ~init:state ~f:(forward_generator ~resolution) in
        let state = forward_expression ~resolution ~state ~expression:key in
        forward_expression ~resolution ~state ~expression:value
    | Name (Name.Attribute { base; _ }) -> forward_expression ~resolution ~state ~expression:base
    (* Base cases. *)
    | Complex _
    | False
    | Float _
    | Integer _
    | String _
    | Name _
    | True
    | Ellipsis ->
        state


  let rec forward_assign
      ~resolution
      ~state:({ unawaited; locals; need_to_await } as state)
      ~annotation
      ~expression
      ~target
    =
    let open Expression in
    let is_nonuniform_sequence ~minimum_length annotation =
      match annotation with
      | Type.Tuple (Type.Bounded (Concrete parameters))
        when minimum_length <= List.length parameters ->
          true
      | _ -> false
    in
    let nonuniform_sequence_parameters annotation =
      match annotation with
      | Type.Tuple (Type.Bounded (Concrete parameters)) -> parameters
      | _ -> []
    in
    match Node.value target with
    | Name target when Expression.is_simple_name target -> (
      match expression with
      | { Node.value = Expression.Name value; _ } when Expression.is_simple_name value ->
          (* Aliasing. *)
          let locals =
            Map.find locals (Reference (Expression.name_to_reference_exn value))
            >>| (fun locations ->
                  Map.set
                    locals
                    ~key:(Reference (Expression.name_to_reference_exn target))
                    ~data:locations)
            |> Option.value ~default:locals
          in
          { unawaited; locals; need_to_await }
      | _ ->
          (* The expression must be analyzed before we call `forward_assign` on it, as that's where
             unawaitables are introduced. *)
          let locals =
            let location = Node.location expression in
            let key = Reference (Expression.name_to_reference_exn target) in
            match Map.find locals (Location location) with
            | Some locations -> Map.set locals ~key ~data:locations
            | None ->
                if Map.mem unawaited location then
                  Map.set locals ~key ~data:(Location.Reference.Set.singleton location)
                else
                  locals
          in
          { unawaited; locals; need_to_await } )
    | List elements
    | Tuple elements
      when is_nonuniform_sequence ~minimum_length:(List.length elements) annotation -> (
        let left, starred, right =
          let is_starred { Node.value; _ } =
            match value with
            | Starred (Starred.Once _) -> true
            | _ -> false
          in
          let left, tail =
            List.split_while elements ~f:(fun element -> not (is_starred element))
          in
          let starred, right =
            let starred, right = List.split_while tail ~f:is_starred in
            let starred =
              match starred with
              | [{ Node.value = Starred (Starred.Once starred); _ }] -> [starred]
              | _ -> []
            in
            starred, right
          in
          left, starred, right
        in
        match Node.value expression with
        | Tuple items ->
            let tuple_values =
              let annotations = List.zip_exn (nonuniform_sequence_parameters annotation) items in
              let left, tail = List.split_n annotations (List.length left) in
              let starred, right = List.split_n tail (List.length tail - List.length right) in
              let starred =
                if not (List.is_empty starred) then
                  let annotation =
                    List.fold starred ~init:Type.Bottom ~f:(fun joined (annotation, _) ->
                        GlobalResolution.join resolution joined annotation)
                    |> Type.list
                  in
                  [annotation, Node.create_with_default_location (List (List.map starred ~f:snd))]
                else
                  []
              in
              left @ starred @ right
            in
            List.zip_exn (left @ starred @ right) tuple_values
            |> List.fold ~init:state ~f:(fun state (target, (annotation, expression)) ->
                   forward_assign ~resolution ~state ~target ~annotation ~expression)
        | _ ->
            (* Right now, if we don't have a concrete tuple to break down, we won't introduce new
               unawaited awaitables. *)
            state )
    | _ -> state


  let forward ?key state ~statement:{ Node.value; _ } =
    let { Node.value = { Define.signature = { name; parent; _ }; _ }; _ } = Context.define in
    let resolution =
      TypeCheck.resolution_with_key ~global_resolution:Context.global_resolution ~parent ~name ~key
    in
    let global_resolution = Resolution.global_resolution resolution in
    let forward_return ~state:{ unawaited; locals; need_to_await } ~expression =
      match Node.value expression with
      | Expression.Name name when Expression.is_simple_name name ->
          mark_name_as_awaited state ~name
      | _ -> { unawaited; locals; need_to_await }
    in
    match value with
    | Assert { Assert.test; _ } -> forward_expression ~resolution ~state ~expression:test
    | Assign { value; target; _ } ->
        let state = forward_expression ~resolution ~state ~expression:value in
        let annotation = Resolution.resolve resolution value in
        forward_assign ~state ~resolution:global_resolution ~annotation ~expression:value ~target
    | Delete expression
    | Expression expression ->
        forward_expression ~resolution ~state ~expression
    | Raise { Raise.expression = None; _ } -> state
    | Raise { Raise.expression = Some expression; _ } ->
        forward_expression ~resolution ~state ~expression
    | Return { expression = Some expression; _ } ->
        let state = forward_expression ~resolution ~state ~expression in
        forward_return ~state ~expression
    | Return { expression = None; _ } -> state
    | Yield { Node.value = Expression.Yield (Some expression); _ } ->
        let state = forward_expression ~resolution ~state ~expression in
        forward_return ~state ~expression
    | Yield _ -> state
    | YieldFrom { Node.value = Expression.Yield (Some expression); _ } ->
        forward_expression ~resolution ~state ~expression
    | YieldFrom _ -> state
    (* Control flow and nested functions/classes doesn't need to be analyzed explicitly. *)
    | If _
    | Class _
    | Define _
    | For _
    | While _
    | With _
    | Try _ ->
        state
    (* Trivial cases. *)
    | Break
    | Continue
    | Global _
    | Import _
    | Nonlocal _
    | Pass ->
        state


  let backward ?key:_ _ ~statement:_ = failwith "Not implemented"
end

let name = "Awaitable"

let run ~configuration:_ ~global_resolution ~source =
  let check define =
    let module Context = struct
      let define = define

      let global_resolution = global_resolution
    end
    in
    let module State = State (Context) in
    let module Fixpoint = Fixpoint.Make (State) in
    Fixpoint.forward ~cfg:(Cfg.create (Node.value define)) ~initial:State.initial
    |> Fixpoint.exit
    >>| State.errors
    |> Option.value ~default:[]
  in
  source |> Preprocessing.defines ~include_toplevels:true |> List.map ~f:check |> List.concat
