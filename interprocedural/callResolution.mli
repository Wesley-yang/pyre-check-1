(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Ast
open Analysis
open Expression

type target = Callable.t * Type.t option [@@deriving eq, show]

val is_local : Identifier.t -> bool

(* Evaluates to the representation of literal strings, integers and enums. *)
val extract_constant_name : Expression.t -> string option

val resolve_target : resolution:Resolution.t -> ?receiver_type:Type.t -> Expression.t -> target list

(* Evaluates to the list of indirect targets and the implicit self that needs to be passed in, if
   any. *)
val get_indirect_targets
  :  resolution:Resolution.t ->
  receiver:Expression.t ->
  method_name:Identifier.t ->
  target list * Call.Argument.t option

(* Given an attribute self.x, returns the underlying callable if x is a @property. *)
val resolve_property_targets
  :  resolution:Resolution.t ->
  base:Expression.t ->
  attribute:string ->
  setter:bool ->
  target list option

type constructor_targets = {
  new_targets: target list;
  init_targets: target list;
}

val get_constructor_targets
  :  resolution:Resolution.t ->
  receiver:Expression.t ->
  constructor_targets

type global_targets =
  | ConstructorTargets of {
      constructor_targets: constructor_targets;
      callee: Expression.t;
    }
  | GlobalTargets of target list

val get_global_targets : resolution:Resolution.t -> Reference.t -> global_targets
