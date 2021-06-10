(self.webpackChunk=self.webpackChunk||[]).push([[714],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=l,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4607:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>s,toc:()=>d,default:()=>u});var a=t(2122),l=t(9756),o=(t(7294),t(3905)),r=["components"],i={id:"pysa-model-dsl",title:"Model Domain Specific Language (DSL)",sidebar_label:"Model DSL"},s={unversionedId:"pysa-model-dsl",id:"pysa-model-dsl",isDocsHomePage:!1,title:"Model Domain Specific Language (DSL)",description:"We have started developing a model Domain Specific Language (DSL) that can be",source:"@site/docs/pysa_model_dsl.md",sourceDirName:".",slug:"/pysa-model-dsl",permalink:"/docs/pysa-model-dsl",editUrl:"https://github.com/facebook/pyre-check/tree/master/documentation/website/docs/pysa_model_dsl.md",version:"current",sidebar_label:"Model DSL",frontMatter:{id:"pysa-model-dsl",title:"Model Domain Specific Language (DSL)",sidebar_label:"Model DSL"},sidebar:"pysa",previous:{title:"Dynamically Generating Models",permalink:"/docs/pysa-model-generators"},next:{title:"Debugging False Negatives",permalink:"/docs/pysa-false-negatives"}},d=[{value:"Basics",id:"basics",children:[]},{value:"Find clauses",id:"find-clauses",children:[]},{value:"Where clauses",id:"where-clauses",children:[{value:"<code>name.matches</code>",id:"namematches",children:[]},{value:"<code>name.equals</code>",id:"nameequals",children:[]},{value:"<code>return_annotation</code> clauses",id:"return_annotation-clauses",children:[]},{value:"<code>any_parameter</code> clauses",id:"any_parameter-clauses",children:[]},{value:"<code>AnyOf</code> clauses",id:"anyof-clauses",children:[]},{value:"<code>Decorator</code> clauses",id:"decorator-clauses",children:[]},{value:"<code>parent.equals</code> clause",id:"parentequals-clause",children:[]},{value:"<code>parent.matches</code> clause",id:"parentmatches-clause",children:[]},{value:"<code>parent.extends</code> clause",id:"parentextends-clause",children:[]},{value:"<code>Not</code> clauses",id:"not-clauses",children:[]}]},{value:"Generated models (Model clauses)",id:"generated-models-model-clauses",children:[{value:"Returned taint",id:"returned-taint",children:[]},{value:"Parameter taint",id:"parameter-taint",children:[]},{value:"Tainting all parameters",id:"tainting-all-parameters",children:[]},{value:"Models for attributes",id:"models-for-attributes",children:[]}]}],p={toc:d};function u(e){var n=e.components,t=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have started developing a model Domain Specific Language (DSL) that can be\nused to solve many of the same problems as ",(0,o.kt)("a",{parentName:"p",href:"/docs/pysa-model-generators"},"model\ngenerators"),", while still keeping model information in\n",(0,o.kt)("inlineCode",{parentName:"p"},".pysa")," files. The DSL aims to provide a compact way to generate models for all\ncode that matches a given query. This allows users to avoid writing hundereds or\nthousand of models."),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("p",null,"The most basic form of querying Pysa's DSL is by generating models based on function names. To\ndo so, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelQuery")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},".pysa")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ModelQuery(\n  # Indicates that this query is looking for functions\n  find = \"functions\",\n  # Indicates those functions should be called 'foo'\n  where = [name.matches(\"foo\")],\n  # Indicates that matched function should be modeled as returning 'Test' taint\n  model = [\n    Returns(TaintSource[Test]),\n  ]\n)\n")),(0,o.kt)("p",null,"Things to note in this example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"find")," clause lets you pick whether you want to model functions, methods or attributes."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"where")," clause is how you refine your criteria for when a model should be generated - in this example, we're filtering for functions where the name matches ",(0,o.kt)("inlineCode",{parentName:"li"},'"foo"'),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"model")," clause is a list of models to generate. Here, the syntax means that the functions matching the where clause should be modelled as returning ",(0,o.kt)("inlineCode",{parentName:"li"},"TaintSource[Test]"),".")),(0,o.kt)("p",null,"When invoking Pysa, if you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dump-model-query-results")," flag to your invocation, the generated models will be written to a file in JSON format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pyre analyze --dump-model-query-results\n...\n> Emitting the model query results to `/my/home/dir/.pyre/model_query_results.pysa`\n")),(0,o.kt)("p",null,"You can then view this file to see the generated models."),(0,o.kt)("h2",{id:"find-clauses"},"Find clauses"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," clause specifies what entities to model, and currently supports ",(0,o.kt)("inlineCode",{parentName:"p"},'"functions"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"methods"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"attributes"'),". ",(0,o.kt)("inlineCode",{parentName:"p"},'"functions"')," indicates that you're querying for free functions, ",(0,o.kt)("inlineCode",{parentName:"p"},'"methods"')," indicates that you're only querying class methods, and ",(0,o.kt)("inlineCode",{parentName:"p"},'"attributes"')," indicates that you're querying for attributes on classes."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},'"attributes"')," also includes constructor-initialized attributes, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"C.y")," in the following case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class C:\n  x = ...\n\n  def __init__(self):\n    self.y = ...\n")),(0,o.kt)("h2",{id:"where-clauses"},"Where clauses"),(0,o.kt)("p",null,"Where clauses are a list of predicates, all of which must match for an entity to be modelled. Note that certain predicates are only compatible with specific find clause kinds."),(0,o.kt)("h3",{id:"namematches"},(0,o.kt)("inlineCode",{parentName:"h3"},"name.matches")),(0,o.kt)("p",null,"The most basic query predicate is a name match - the name you're searching for is compiled as a regex, and the entity's fully qualified name is compared against it. A fully qualified name includes the module and class - for example, for a method ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," in class ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," which is part of module ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),", the fully qualified name is ",(0,o.kt)("inlineCode",{parentName:"p"},"bar.C.foo"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = ...,\n  where = [\n    name.matches("foo.*")\n  ],\n  model = ...\n)\n')),(0,o.kt)("h3",{id:"nameequals"},(0,o.kt)("inlineCode",{parentName:"h3"},"name.equals")),(0,o.kt)("p",null,"This clause will match when the entity's fully qualified name is exactly the same as the specified string."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = ...,\n  where = [\n    name.equals("bar.C.foo")\n  ],\n  model = ...\n)\n')),(0,o.kt)("h3",{id:"return_annotation-clauses"},(0,o.kt)("inlineCode",{parentName:"h3"},"return_annotation")," clauses"),(0,o.kt)("p",null,"Model queries allow for querying based on the return annotation of a function. Pysa currently only allows querying whether a function type is ",(0,o.kt)("inlineCode",{parentName:"p"},"typing.Annotated"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ModelQuery(\n  find = ...,\n  where = [\n    return_annotation.is_annotated_type(),\n  ],\n  model = ...\n)\n")),(0,o.kt)("h3",{id:"any_parameter-clauses"},(0,o.kt)("inlineCode",{parentName:"h3"},"any_parameter")," clauses"),(0,o.kt)("p",null,"Model queries allow matching callables where any parameter matches a given clause. For now, the only clauses we support for parameters is type- based ones."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = [\n    any_parameter.annotation.is_annotated_type()\n  ],\n  model = ...\n)\n')),(0,o.kt)("p",null,"This model query will taint all functions which have one parameter with type ",(0,o.kt)("inlineCode",{parentName:"p"},"typing.Annotated"),"."),(0,o.kt)("h3",{id:"anyof-clauses"},(0,o.kt)("inlineCode",{parentName:"h3"},"AnyOf")," clauses"),(0,o.kt)("p",null,"There are cases when we want to model entities which match any of a set of clauses. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AnyOf")," clause represents exactly this case."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "methods",\n  where = [\n    AnyOf(\n      any_parameter.annotation.is_annotated_type(),\n      return_annotation.is_annotated_type(),\n    )\n  ],\n  model = ...\n)\n')),(0,o.kt)("h3",{id:"decorator-clauses"},(0,o.kt)("inlineCode",{parentName:"h3"},"Decorator")," clauses"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Decorator")," clauses are used to find callables decorated with decorators that match a pattern. The syntax for using this clause is ",(0,o.kt)("inlineCode",{parentName:"p"},"Decorator(<name clause>, [<arguments clause>])"),"."),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"Decorator")," should be a name clause, which is used to match the name of a decorator. The supported name clauses are the same as the ones discussed above for model query constraints, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},'name.matches("pattern")'),", which will match when the decorator matches the regex pattern specified as a string, and ",(0,o.kt)("inlineCode",{parentName:"p"},'name.equals("foo.bar.d1")')," which will match when the fully-qualified name of the decorator equals the specified string exactly."),(0,o.kt)("p",null,"For example, if you wanted to find all functions which are decorated by ",(0,o.kt)("inlineCode",{parentName:"p"},"@app.route()"),", a decorator imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"my_module"),", you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = Decorator(name.matches("app.route")),\n  ...\n)\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = Decorator(name.equals("my_module.app.route")),\n  ...\n)\n')),(0,o.kt)("p",null,"The second argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"Decorator")," is an optional arguments clause, which is used to match on the arguments provided to the decorator. The supported arguments clauses are ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments.contains(...)"),", which will match when the arguments specified are a subset of the decorator's arguments, and ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments.equals(...)"),", which will match when the decorator has the specified arguments exactly."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"arguments.contains()")," supports both positional and keyword arguments. For positional arguments, the list of positonal arguments supplied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments.contains()")," clause must be a prefix of the list of positional arguments on the actual decorator, i.e. the value of the argument at each position should be the same. For example, with the following Python code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@d1(a, 2)\ndef match1():\n  ...\n\n@d1(a, 2, 3, 4)\ndef match2():\n  ...\n\n@d1(2, a):\ndef nomatch():\n  ...\n")),(0,o.kt)("p",null,"This query will match both ",(0,o.kt)("inlineCode",{parentName:"p"},"match1()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"match2()"),", but not ",(0,o.kt)("inlineCode",{parentName:"p"},"nomatch()"),", since the values of the positional arguments don't match up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = Decorator(\n    name.matches("d1"),\n    arguments.contains(a, 2)\n  ),\n  ...\n)\n')),(0,o.kt)("p",null,"For keyword arguments in ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments.contains()"),", the specified keyword arguments must be a subset of the decorator's keyword arguments, but can be specified in any order. For example, with the following Python code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@d1(a, 2, foo="Bar")\ndef match1():\n  ...\n\n@d1(baz="Boo", foo="Bar")\ndef match2():\n  ...\n')),(0,o.kt)("p",null,"This query will match both ",(0,o.kt)("inlineCode",{parentName:"p"},"match1()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"match2()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = Decorator(\n    name.matches("d1"),\n    arguments.contains(foo="Bar")\n  ),\n  ...\n)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"arguments.equals()")," operates similarly, but will only match if the specified arguments match the decorator's arguments exactly. This means that for positional arguments, all arguments in each position must match by value exactly. Keyword arguments can be specified in a different order, but the set of specified keyword arguments and the set of the decorator's actual keyword arguments must be the same. For example, with the following Python code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@d1(a, 2, foo="Bar", baz="Boo")\ndef match1():\n  ...\n\n@d1(a, 2, baz="Boo", foo="Bar")\ndef match2():\n  ...\n\n@d1(2, a, baz="Boo", foo="Bar")\ndef nomatch1():\n  ...\n\n@d1(a, 2, 3, baz="Boo", foo="Bar")\ndef nomatch2():\n  ...\n')),(0,o.kt)("p",null,"This query will match both ",(0,o.kt)("inlineCode",{parentName:"p"},"match1()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"match2()"),", but not ",(0,o.kt)("inlineCode",{parentName:"p"},"nomatch1()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"nomatch2()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = Decorator(\n    name.matches("d1"),\n    arguments.equals(a, 2, foo="bar", baz="Boo")\n  ),\n  ...\n)\n')),(0,o.kt)("h3",{id:"parentequals-clause"},(0,o.kt)("inlineCode",{parentName:"h3"},"parent.equals")," clause"),(0,o.kt)("p",null,"You may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," clause to specify predicates on the parent class. This predicate can only be used when the find clause specifies methods or attributes."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"parent.equals")," clause is used to model entities when the parent's fully qualified name is an exact match for the specified string."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "methods",\n  where = parent.equals("foo.Bar"),\n  ...\n)\n')),(0,o.kt)("h3",{id:"parentmatches-clause"},(0,o.kt)("inlineCode",{parentName:"h3"},"parent.matches")," clause"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"parent.matches")," clause is used to model entities when the parent's fully qualified name matches the provided regex."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "methods",\n  where = parent.matches(".*Foo.*"),\n  ...\n)\n')),(0,o.kt)("h3",{id:"parentextends-clause"},(0,o.kt)("inlineCode",{parentName:"h3"},"parent.extends")," clause"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"parent.extends")," clause is used to model entities when the parent's class is a subclass of the provided class name."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "attributes",\n  where = parent.extends("C"),\n  ...\n)\n')),(0,o.kt)("p",null,"The default behavior is that it will only match if the parent class is an instance of, or a direct subclass of the specified class. For example, with classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class C:\n  x = ...\n\nclass D(C):\n  y = ...\n\nclass E(D):\n  z = ...\n")),(0,o.kt)("p",null,"the above query will only model the attributes ",(0,o.kt)("inlineCode",{parentName:"p"},"C.z")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"D.y"),", since ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," is considered to extend itself, and ",(0,o.kt)("inlineCode",{parentName:"p"},"D")," is a direct subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),". However, it will not model ",(0,o.kt)("inlineCode",{parentName:"p"},"E.z"),", since ",(0,o.kt)("inlineCode",{parentName:"p"},"E")," is a sub-subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),"."),(0,o.kt)("p",null,"If you would like to model a class and all subclasses transitively, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"is_transitive")," flag to get this behavior."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "attributes",\n  where = parent.extends("C", is_transitive=True),\n  ...\n)\n')),(0,o.kt)("p",null,"This query will model ",(0,o.kt)("inlineCode",{parentName:"p"},"C.x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"D.y")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"E.z"),"."),(0,o.kt)("h3",{id:"not-clauses"},(0,o.kt)("inlineCode",{parentName:"h3"},"Not")," clauses"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Not")," clause negates any existing clause that is valid for the entity being modelled."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "methods",\n  where = [\n    Not(\n      name.matches("foo.*"),\n      parent.matches("testing.unittest.UnitTest"),\n    )\n  ],\n  model = ...\n)\n')),(0,o.kt)("h2",{id:"generated-models-model-clauses"},"Generated models (Model clauses)"),(0,o.kt)("p",null,"The last bit of model queries is actually generating models for all entities that match the provided where clauses. For callables, we support generating models for parameters by name or position, as well as generating models for all paramaters. Additionally, we support generating models for the return annotation."),(0,o.kt)("h3",{id:"returned-taint"},"Returned taint"),(0,o.kt)("p",null,"Returned taint takes the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"Returns(TaintSpecification)"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"TaintSpecification")," is either a taint annotation or a list of taint annotations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "methods",\n  where = ...,\n  model = [\n    Returns(TaintSource[Test, Via[foo]])\n  ]\n)\n')),(0,o.kt)("h3",{id:"parameter-taint"},"Parameter taint"),(0,o.kt)("p",null,"Parameter taint can be specified by name or by position."),(0,o.kt)("p",null,"Named parameter taint takes the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedParameter(name=..., taint = TaintSpecification)"),", and positional parameter taint takes the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"PositionalParameter(index=..., taint = TaintSpecification)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "methods",\n  where = ...,\n  model = [\n    NamedParameter(name="x", taint = TaintSource[Test, Via[foo]]),\n    PositionalParameter(index=0, taint = TaintSink[Test, Via[bar]]),\n  ]\n)\n')),(0,o.kt)("h3",{id:"tainting-all-parameters"},"Tainting all parameters"),(0,o.kt)("p",null,"One final convenience we provide is the ability to taint all parameters of a callable. The syntax is ",(0,o.kt)("inlineCode",{parentName:"p"},"AlllParameters(TaintSpecification)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = ...,\n  model = [\n    AllParameters(TaintSource[Test])\n  ]\n)\n')),(0,o.kt)("p",null,"You can choose to exclude a single parameter or a list of parameters in order to avoid overtainting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "functions",\n  where = ...,\n  model = [\n    AllParameters(TaintSource[Test], exclude="self")\n  ]\n)\n\nModelQuery(\n  find = "functions",\n  where = ...,\n  model = [\n    AllParameters(TaintSource[Test], exclude=["self", "other"])\n  ]\n)\n')),(0,o.kt)("h3",{id:"models-for-attributes"},"Models for attributes"),(0,o.kt)("p",null,"Taint for attribute models requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"AttributeModel")," model clause, which can only be used when the find clause specifies attributes."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ModelQuery(\n  find = "attributes",\n  where = ...,\n  model = [\n    AttributeModel(TaintSource[Test], TaintSink[Test])\n  ]\n)\n')))}u.isMDXComponent=!0}}]);