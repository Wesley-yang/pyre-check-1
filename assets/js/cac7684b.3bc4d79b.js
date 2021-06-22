(self.webpackChunk=self.webpackChunk||[]).push([[415],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8987:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>l,toc:()=>d,default:()=>c});var a=t(2122),i=t(9756),r=(t(7294),t(3905)),s=["components"],o={id:"pysa-advanced",title:"Advanced Topics",sidebar_label:"Advanced Topics"},l={unversionedId:"pysa-advanced",id:"pysa-advanced",isDocsHomePage:!1,title:"Advanced Topics",description:"This page documents less straightforward bits of Pysa.",source:"@site/docs/pysa_advanced.md",sourceDirName:".",slug:"/pysa-advanced",permalink:"/docs/pysa-advanced",editUrl:"https://github.com/facebook/pyre-check/tree/master/documentation/website/docs/pysa_advanced.md",version:"current",sidebar_label:"Advanced Topics",frontMatter:{id:"pysa-advanced",title:"Advanced Topics",sidebar_label:"Advanced Topics"},sidebar:"pysa",previous:{title:"Feature Annotations",permalink:"/docs/pysa-features"},next:{title:"Implementation Details",permalink:"/docs/pysa-implementation-details"}},d=[{value:"Tainting Specific <code>kwargs</code>",id:"tainting-specific-kwargs",children:[]},{value:"Instance attributes versus class attributes",id:"instance-attributes-versus-class-attributes",children:[]},{value:"Literal String Sources And Sinks",id:"literal-string-sources-and-sinks",children:[]},{value:"Combined Source Rules",id:"combined-source-rules",children:[]},{value:"Prevent Inferring Models with <code>SkipAnalysis</code>",id:"prevent-inferring-models-with-skipanalysis",children:[]},{value:"Ignoring overrides",id:"ignoring-overrides",children:[]},{value:"Limit the trace length for better signal and performance",id:"limit-the-trace-length-for-better-signal-and-performance",children:[]},{value:"Limit the tito depth for better signal and performance",id:"limit-the-tito-depth-for-better-signal-and-performance",children:[]},{value:"Prevent Inlining Decorators with <code>SkipDecoratorWhenInlining</code>",id:"prevent-inlining-decorators-with-skipdecoratorwheninlining",children:[]}],p={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page documents less straightforward bits of Pysa."),(0,r.kt)("h2",{id:"tainting-specific-kwargs"},"Tainting Specific ",(0,r.kt)("inlineCode",{parentName:"h2"},"kwargs")),(0,r.kt)("p",null,"Sometimes, a function can have potential sinks mixed together with benign\nparameters in the keyword arguments (",(0,r.kt)("inlineCode",{parentName:"p"},"kwargs"),") that it accepts. In these cases,\ntainting the whole ",(0,r.kt)("inlineCode",{parentName:"p"},"kwargs")," variable will result in false positives when tainted\ndata flows into a benign ",(0,r.kt)("inlineCode",{parentName:"p"},"kwarg"),". Instead, for a function like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def eval_and_log(**kwargs):\n    eval(kwargs["eval"])\n    logging.debug(kwargs["log"])\n')),(0,r.kt)("p",null,"We can lie a bit in our ",(0,r.kt)("inlineCode",{parentName:"p"},".pysa")," file, and break out the dangerous argument for\ntainting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def eval_and_log(*, eval: TaintSink[RemoteCodeExecution], **kwargs): ...\n")),(0,r.kt)("p",null,"This allows us to catch flows only into the ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," keyword argument."),(0,r.kt)("h2",{id:"instance-attributes-versus-class-attributes"},"Instance attributes versus class attributes"),(0,r.kt)("p",null,"Models can specify sources and sinks on attributes, following the type annotation\nsyntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"django.http.request.HttpRequest.GET: TaintSource[UserControlled]\n")),(0,r.kt)("p",null,"Any access to ",(0,r.kt)("inlineCode",{parentName:"p"},"request.GET")," will be tainted when ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," is an instance of\n",(0,r.kt)("inlineCode",{parentName:"p"},"HttpRequest")," or any of its children. However, note that the access to the class\nattribute (i.e, ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpRequest.GET"),") won't be considered tainted."),(0,r.kt)("p",null,"To specify sources and sinks on class attributes, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"__class__")," prefix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"django.http.request.HttpRequest.__class__.GET: TaintSource[UserControlled]\n")),(0,r.kt)("p",null,"To specify a source on both the class attribute and instance attribute, simply\nuse both lines."),(0,r.kt)("h2",{id:"literal-string-sources-and-sinks"},"Literal String Sources And Sinks"),(0,r.kt)("p",null,"Some security vulnerabilities are best captured by modelling strings of a given\nform flowing to dangerous functions, or format strings that match a pattern getting\ntainted data passed in."),(0,r.kt)("p",null,"To mark all literal strings matching a pattern as sources, you first need to add a\nregular expression corresponding to the pattern to your ",(0,r.kt)("inlineCode",{parentName:"p"},"taint.config"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "IPAddress"\n    }\n  ],\n  "implicit_sources": {\n     "literal_strings": [\n       {\n         "regexp": "\\\\d{1,3}(\\\\.\\\\d{1,3})+",\n         "kind": "IPAddress",\n         "description": "String that looks like an IP address."\n       }\n     ]\n  }\n}\n')),(0,r.kt)("p",null,"With this regex in place, whenever Pysa sees a string such as ",(0,r.kt)("inlineCode",{parentName:"p"},"123.456.789.123"),", it will flag it\nas a taint source with the kind ",(0,r.kt)("inlineCode",{parentName:"p"},"IPAddress"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def test() -> None:\n    ip_address = "123.456.789.123"\n    dont_pass_an_ip_address(ip_address) # Pysa will now flag this.\n')),(0,r.kt)("p",null,"The converse of supporting literal strings as sinks is also supported, with a narrower use case. The\nsyntax allows you to model data being used to format f-strings. To add a literal sink, first add the\nliteral_sink to your configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sinks": [\n    {\n      "name": "MayBeRendered"\n    }\n  ],\n  "implicit_sinks": {\n     "literal_strings": [\n       {\n         "regexp": "^<.*>$",\n         "kind": "MayBeRendered",\n         "description": "Indicates a string whose contents may be rendered."\n       }\n     ]\n  }\n')),(0,r.kt)("p",null,"Now, Pysa will treat any values flowing into a f-string as a regular sink:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def may_render(parameter: str) -> None:\n    result = f"<content={parameter}>"\n')),(0,r.kt)("h2",{id:"combined-source-rules"},"Combined Source Rules"),(0,r.kt)("p",null,"Some security vulnerabilities are better modeled as ",(0,r.kt)("em",{parentName:"p"},"multiple")," sources reaching\na sink. For example, leaking credentials via ",(0,r.kt)("inlineCode",{parentName:"p"},"requests.get")," could be modeled as\nuser controlled data flowing into the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," parameter and credentials flowing\ninto the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," parameter. These flows can be modeled by ",(0,r.kt)("em",{parentName:"p"},"combined source\nrules"),"."),(0,r.kt)("p",null,"Sources for combined source rules are declared as normal in ",(0,r.kt)("inlineCode",{parentName:"p"},"taint.config"),".\nSinks, however, need to be unique to the combined source rule and are declared inside\nthe rule definition. The rule itself is declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"combined_source_rules"),"\ntop level entry. The rule lists all the same things as a reglular rule, but also ties\nlabels to its sources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    { "name": "UserControlled" },\n    { "name": "Credentials" }\n  ],\n  "combined_source_rules": [\n    {\n       "name": "Credentials leaked through requests",\n       "sources": { "url": "UserControlled", "creds": "Credentials" },\n       "partial_sink": "UserControlledRequestWithCreds",\n       "code": 1,\n       "message_format": "Credentials leaked through requests"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Sources are declared as normal in ",(0,r.kt)("inlineCode",{parentName:"p"},".pysa")," files. Instead of specifying sinks\nwith a ",(0,r.kt)("inlineCode",{parentName:"p"},"TaintSink")," annotation, however, ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialSink")," annotations are used to\nspecify where each source needs to flow for the combined source rule. These\n",(0,r.kt)("inlineCode",{parentName:"p"},"PartialSink")," must reference the labels that were declared in\n",(0,r.kt)("inlineCode",{parentName:"p"},"multi_sink_labels"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def requests.api.get(\n  url: PartialSink[UserControlledRequestWithCreds[url]],\n  params: PartialSink[UserControlledRequestWithCreds[creds]],\n  **kwargs\n): ...\n")),(0,r.kt)("p",null,"With the above configuration, Pysa can detect cases where ",(0,r.kt)("inlineCode",{parentName:"p"},"UserControlled")," flows\ninto ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Credentials")," flow into ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," ",(0,r.kt)("em",{parentName:"p"},"at the same time"),"."),(0,r.kt)("h2",{id:"prevent-inferring-models-with-skipanalysis"},"Prevent Inferring Models with ",(0,r.kt)("inlineCode",{parentName:"h2"},"SkipAnalysis")),(0,r.kt)("p",null,"In addition to the models defined in ",(0,r.kt)("inlineCode",{parentName:"p"},".pysa")," files, Pysa will infer models for\nfunctions based what sources, sinks, etc. they call in their body. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"SkipAnalysis")," annotation can be used to prevent Pysa from inferring models, and\ninstead force it to use only the user defined models for determining taint flow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@SkipAnalysis\ndef qualifier.dont_generate_models(argument): ...\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SkipAnalysis")," can be applied at the class level as a shorthand to prevent pysa\nfrom infering models for all functions in a class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class skip_analysis.SkipMe(SkipAnalysis): ...\n")),(0,r.kt)("h2",{id:"ignoring-overrides"},"Ignoring overrides"),(0,r.kt)("p",null,"When a method is called on a base class, Pysa has to assume that that call could\nactually invoke any subclass methods that override the base class's method. For\nheavily overriden methods, this can lead to both performance impacts and false\npositives. When running Pysa, you may see messages such as this in the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2020-09-02 09:25:50,677 WARNING `object.__init__` has 106 overrides, this might slow down the analysis considerably.\n")),(0,r.kt)("p",null,"The above message indicates that 106 subclasses of ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," have overridden\n",(0,r.kt)("inlineCode",{parentName:"p"},"__init__"),". If Pysa sees taint flowing into ",(0,r.kt)("inlineCode",{parentName:"p"},"object.__init__"),", then it will\ntreat all 106 overrides of ",(0,r.kt)("inlineCode",{parentName:"p"},"object.__init__")," as also receiving that taint."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@SkipOverrides")," decorator can be applied to deal with false positives or\nperformance issues from having too many overrides on a given function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@SkipOverrides\ndef object.__init__(self): ...\n")),(0,r.kt)("p",null,"This annotation will cause Pysa not to propagate taint into to and from\noverridden methods on subclasses, when analyzing functions that call the\noverriden method on the base class."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maximum_overrides_to_analyze")," can be added the the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," block of\n",(0,r.kt)("inlineCode",{parentName:"p"},"taint.config")," to limit the number of overrides that Pysa will analyze:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [],\n  "sinks": [],\n  "features": [],\n  "rules": [],\n  "options": {\n    "maximum_overrides_to_analyze": 60\n  }\n}\n')),(0,r.kt)("p",null,"This can speed up the analysis, but it will lead to false negatives, because\nPysa will only propagate taint to or from 60 (in the case of the above example)\noverriden methods on subclasses. The remaining overriding methods will be\nignored and treated as if they weren't actually overriding the base class\nmethod."),(0,r.kt)("p",null,"By default, Pysa skips overrides on some functions that are typically\nproblematic. You can find the full list of default-skipped functions in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/pyre-check/blob/master/stubs/taint/skipped_overrides.pysa"},(0,r.kt)("inlineCode",{parentName:"a"},"stubs/taint/skipped_overrides.pysa"))),(0,r.kt)("h2",{id:"limit-the-trace-length-for-better-signal-and-performance"},"Limit the trace length for better signal and performance"),(0,r.kt)("p",null,"By default, Pysa will find all flows from sources to sinks matching a rule.\nThis can lead to very long traces which are hard to understand and tend to be\nfalse positives. This also brings down the performance a lot."),(0,r.kt)("p",null,"Pysa provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"--maximum-trace-length <integer>")," command line argument which\nlimits the length of traces that it finds. In general, this will also make Pysa\nfaster."),(0,r.kt)("p",null,"This option can also be added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"taint.config")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [],\n  "sinks": [],\n  "features": [],\n  "rules": [],\n  "options": {\n    "maximum_trace_length": 20\n  }\n}\n')),(0,r.kt)("p",null,"Note that this is not a silver bullet and that this might hide security\nvulnerabilities. Use it with caution."),(0,r.kt)("h2",{id:"limit-the-tito-depth-for-better-signal-and-performance"},"Limit the tito depth for better signal and performance"),(0,r.kt)("p",null,"Pysa infers automatically when a function propagate the taint from one argument\nto its return value. This is called tito, for Taint In Taint Out. In practice,\ninfering it can be very expensive since the taint can go through an arbitrary\nnumber of hops (i.e, depth)."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def foo(x):\n  return x\ndef bar(x):\n  return foo(x)\ndef baz(x):\n  return bar(x)\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"baz")," propagates the taint on its argument to the return value\nusing 3 hops."),(0,r.kt)("p",null,"Pysa provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"--maximum-tito-depth <integer>")," command line argument which\nlimints the depth of inferred propagations. In combination with the trace length\nlimit, this usually makes Pysa faster."),(0,r.kt)("p",null,"This option can also be added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"taint.config")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [],\n  "sinks": [],\n  "features": [],\n  "rules": [],\n  "options": {\n    "maximum_tito_depth": 20\n  }\n}\n')),(0,r.kt)("h1",{id:"inlining-decorators-during-analysis"},"Inlining Decorators during Analysis"),(0,r.kt)("p",null,"By default, Pysa ignores issues that arise in the bodies of decorators. For example, it misses issues like decorators logging data. In the code below, Pysa will not catch the flow from ",(0,r.kt)("inlineCode",{parentName:"p"},"loggable_string")," to the sink within the decorator ",(0,r.kt)("inlineCode",{parentName:"p"},"with_logging"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def with_logging(f: Callable[[str], None]) -> Callable[[str], None]:\n\n  def inner(y: str) -> None:\n    log_to_my_sink(y)\n    f(y)\n\n  return inner\n\n@with_logging\ndef foo(z: str) -> None:\n  print(z)\n\nfoo(loggable_string)\n")),(0,r.kt)("p",null,"However, Pysa has the ability to inline decorators within functions before analyzing them so that it can catch such flows. This is currently an experimental feature hidden behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"--inline-decorators")," flag."),(0,r.kt)("h2",{id:"prevent-inlining-decorators-with-skipdecoratorwheninlining"},"Prevent Inlining Decorators with ",(0,r.kt)("inlineCode",{parentName:"h2"},"SkipDecoratorWhenInlining")),(0,r.kt)("p",null,"Decorator inlining comes at the cost of increasing the analysis time and also increasing the lengths of traces. If you would like to prevent certain decorators from being inlined, you can mark them in your ",(0,r.kt)("inlineCode",{parentName:"p"},".pysa")," file using ",(0,r.kt)("inlineCode",{parentName:"p"},"@SkipDecoratorWhenInlining"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# foo.pysa\n@SkipDecoratorWhenInlining\ndef foo.decorator_to_be_skipped(f): ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# foo.py\n@decorator_to_be_skipped\ndef bar(x: int) -> None:\n  pass\n")),(0,r.kt)("p",null,"This will prevent the decorator from being inlined when analyzing ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),". Note that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"@SkipDecoratorWhenInlining")," on the decorator that is to be skipped, not the function on which the decorator is applied."))}c.isMDXComponent=!0}}]);