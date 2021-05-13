(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return a}));var r=n(22);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function a(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},111:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,s=[],u=!1,b=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):b=-1,s.length&&d())}function d(){if(!u){var e=c(p);u=!0;for(var t=s.length;t;){for(l=s,s=[];++b<t;)l&&l[b].run();b=-1,t=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||u||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},125:function(e,t,n){(function(t){const r=["internal","external"];let o;try{o=n(107).usePluginData}catch(l){o=null}function i(e){return function(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${r}. Instead got ${e}`);if(!Object.keys(e).find((e=>r.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${r}`);const t=Object.keys(e).filter((e=>!r.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${r}`)}(e),c()?"internal"in e?a(e.internal):[]:"external"in e?a(e.external):[]}function a(e){return"function"==typeof e?e():e}function c(){return t.env.FB_INTERNAL||o&&o("internaldocs-fb").FB_INTERNAL}e.exports={fbContent:i,fbInternalOnly:function(e){return i({internal:e})},isInternal:c,FbInternalOnly:function(e){return c()?e.children:null},OssOnly:function(e){return c()?null:e.children}}}).call(this,n(111))},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r,o=n(3),i=n(7),a=(n(0),n(99)),c=n(125),l={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},s={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Pyre can be run without a configuration (see Command Line Arguments) but we do recommend that you create a configuration (see Getting Started) and commit that to your version control system to make sure everyone working on your project is using the same settings.",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/facebook/pyre-check/tree/master/documentation/website/docs/configuration.md",version:"current",sidebar_label:"Configuration",sidebar:"pyre",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Types in Python",permalink:"/docs/types-in-python"}},u=[{value:"Configuration Files",id:"configuration-files",children:[{value:"The Global Configuration",id:"the-global-configuration",children:[]},{value:"Local Configurations",id:"local-configurations",children:[]}]},{value:"Command Line Arguments",id:"command-line-arguments",children:[{value:"Commands",id:"commands",children:[]},{value:"Commonly Used Flags",id:"commonly-used-flags",children:[]}]}],b=(r="FbConfiguration",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),p={rightToc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(a.b)(b,{mdxType:"FbConfiguration"})),Object(a.b)(c.OssOnly,{mdxType:"OssOnly"},Object(a.b)("p",null,"Pyre can be run without a configuration (see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/configuration#command-line-arguments"}),"Command Line Arguments"),") but we do recommend that you create a configuration (see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting Started"),") and commit that to your version control system to make sure everyone working on your project is using the same settings."),Object(a.b)("h2",{id:"configuration-files"},"Configuration Files"),Object(a.b)("p",null,"Pyre has two types of configurations: a ",Object(a.b)("em",{parentName:"p"},"global")," configuration covering the full project, and ",Object(a.b)("em",{parentName:"p"},"local")," configurations that apply to subdirectories of the project. In most cases you will only need a global configuration but local configurations can be useful if you are dealing with a big repository containing heterogeneous projects."),Object(a.b)("h3",{id:"the-global-configuration"},"The Global Configuration"),Object(a.b)("p",null,"The global configuration is a ",Object(a.b)("inlineCode",{parentName:"p"},".pyre_configuration")," file sitting at the root of your project. Running Pyre anywhere inside your project directory will use the settings in this global configuration. You can generate an initial configuration in your project directory with"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ pyre init\n")),Object(a.b)("p",null,"The configuration is a ",Object(a.b)("inlineCode",{parentName:"p"},"JSON")," file. For example,"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "source_directories": [\n    "."\n  ],\n  "search_path": [\n    "/external/library"\n  ]\n}\n')),Object(a.b)("p",null,"specifies that the code Pyre checks is in the directory of the configuration and that Pyre should look in an additional directory for library code."),Object(a.b)("p",null,"You specify additional information to configure Pyre. The following fields are supported:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"source_directories"),": List of paths to type check."),Object(a.b)("p",{parentName:"li"},"Note: Pyre assumes that all imports are relative to the given source directory. For example, if your source directory is ",Object(a.b)("inlineCode",{parentName:"p"},"root/directory"),", then an import statement ",Object(a.b)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",Object(a.b)("inlineCode",{parentName:"p"},"root.directory.module"),". If you wish to set a different import root for your source directory, you can provide an object ",Object(a.b)("inlineCode",{parentName:"p"},'{"import_root": "root", "source": "directory"}')," instead of ",Object(a.b)("inlineCode",{parentName:"p"},'"root/directory"'),". In this case, ",Object(a.b)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",Object(a.b)("inlineCode",{parentName:"p"},"root.module"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"search_path"),": List of paths to Python modules to include in the typing\nenvironment. ",Object(a.b)("strong",{parentName:"p"},"Note"),": ",Object(a.b)("inlineCode",{parentName:"p"},"search_path")," takes precendence over ",Object(a.b)("inlineCode",{parentName:"p"},"source_directories")," and the order within the search path indicates precedence.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"exclude"),": List of regular expressions such as ",Object(a.b)("inlineCode",{parentName:"p"},'".*\\/node_modules\\/.*"')," which\nspecify files and directories that should be completely ignored by Pyre. The\nregular expression will be matched against the ",Object(a.b)("em",{parentName:"p"},"full")," path of files as opposed\nto their relative path.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"ignore_all_errors"),": A list of paths to omit from type-checking. This may be\nuseful for generated files, virtualenv directories, etc.  These should be paths\nrelative to the location of the configuration file (or the local configuration\nif applicable) and support globs. ",Object(a.b)("strong",{parentName:"p"},"Note"),": Files\nmatching these paths will still be processed (i.e. type and module names in those files are still visible to Pyre). Please refer to the ",Object(a.b)("inlineCode",{parentName:"p"},"exclude"),"\nconfiguration item if you have files that are intended to be hidden from Pyre.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"binary"),": Location of Pyre's native binary.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"logger"),": Pyre will invoke this exectuable on every run, passing it statistics in JSON format.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"typeshed"),": Path to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/python/typeshed"}),"Typeshed")," standard library, which\nprovides typed stubs for library functions.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"workers"),": Number of workers to spawn for multiprocessing.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"extensions"),": Consider extensions in this list equivalent to ",Object(a.b)("inlineCode",{parentName:"p"},".py")," for type checking.\nEmpty string indicates extensionless files.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"strict"),": Setting this to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," will make ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/types-in-python#strict-mode"}),"strict mode")," the default in your project."))),Object(a.b)("h3",{id:"local-configurations"},"Local Configurations"),Object(a.b)("p",null,"If you have sub-projects within your project root that you would like to run Pyre on, you\ncan create a ",Object(a.b)("inlineCode",{parentName:"p"},".pyre_configuration.local")," at the root of your subproject and override any\nof the fields set in ",Object(a.b)("inlineCode",{parentName:"p"},".pyre_configuration")," above. If you are using local configurations, your\n",Object(a.b)("inlineCode",{parentName:"p"},".pyre_configuration")," should not specify any sources itself."),Object(a.b)("p",null,"When calling Pyre, the nearest local configuration at- or above the current directory will be used.\nYou can use the ",Object(a.b)("inlineCode",{parentName:"p"},"--local-configuration")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"-l"),") flag to invoke Pyre on a project that includes a\nlocal configuration, while outside its source directory. It works like ",Object(a.b)("inlineCode",{parentName:"p"},"make -C"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ ls project\n  .pyre_configuration.local   project_file.py   ...\n$ pyre -l project\n  Checking...\n")),Object(a.b)("h4",{id:"nested-local-configurations"},"Nested Local Configurations"),Object(a.b)("p",null,"Nesting local configurations is not supported. The configuration should live at the root of your\nproject unit and inclusion/exclusion of files from type checking can be done by specifying sources, using\n",Object(a.b)("inlineCode",{parentName:"p"},"ignore_all_errors"),", or by adding ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/errors#suppressing-individual-errors"}),"local suppression"),"."),Object(a.b)("h2",{id:"command-line-arguments"},"Command Line Arguments"),Object(a.b)("p",null,"You can get a full and current list of options to run Pyre by running ",Object(a.b)("inlineCode",{parentName:"p"},"pyre --help"),". The following is a list of commonly used commands and options."),Object(a.b)("h3",{id:"commands"},"Commands"),Object(a.b)("p",null,"Pyre comes with a couple commands that can be invoked with ",Object(a.b)("inlineCode",{parentName:"p"},"pyre <COMMAND>"),"."),Object(a.b)("p",null,"The first command you might come in contact with is"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initialize"),", ",Object(a.b)("inlineCode",{parentName:"li"},"init"),": Initial setup of a configuration for a project.")),Object(a.b)("p",null,"If ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/watchman/docs/install/"}),"Watchman")," is\ninstalled, running Pyre with no positional arguments defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"incremental"),",\notherwise defaults to check."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"check"),": Run Pyre end-to-end, i.e. ",Object(a.b)("em",{parentName:"li"},"not")," incrementally."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"incremental"),": Run Pyre incrementally. When invoked for the first time, the command will automatically start a server listening to changes to the filesystem. Subsequent invocations will be faster.")),Object(a.b)("p",null,"When Pyre is run incrementally, you can control the Pyre's ",Object(a.b)("em",{parentName:"p"},"server")," working in the background with the following commands."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"start"),": Start the Pyre server."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"stop"),": Stop the Pyre server."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"restart"),": Restart the Pyre server."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"servers"),": List all currently running Pyre servers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"kill"),": In case somethign goes wrong and the server becomes unresponsivbe ",Object(a.b)("inlineCode",{parentName:"li"},"kill")," will attempt to terminate any processes."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rage"),": Print server logs for debugging or for context when reporting server errors.")),Object(a.b)("h3",{id:"commonly-used-flags"},"Commonly Used Flags"),Object(a.b)("p",null,"These flags can be passed in before any of the positional arguments above. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre --source-directory "." --noninteractive check\n$ pyre --source-directory "." restart\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--local-configuration LOCAL_CONFIGURATION"),": Call Pyre specifying the path to a local\nconfiguration.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--noninteractive"),": Disable interactive logging, which by default overwrites intermediate\nlogging output and adds colors for a more streamlined user experience.\nNon-interactive mode ensures all terminal output remains visible.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--output {text, json}"),": Formatting for error return values. Defaults to text.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--search-path SEARCH_PATH"),": Provide additional stubs or modules external to the project\nbeing type-checked. Can also be set in ",Object(a.b)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--source-directory SOURCE_DIRECTORY"),": Provide a path to the source root to check. This can also\nbe specified in ",Object(a.b)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--typeshed TYPESHED"),": Path to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/python/typeshed"}),"Typeshed")," standard library,\nwhich provides typed stubs for library functions. This can also be set in ",Object(a.b)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--verbose"),": Enable verbose logging. Most useful when used in conjunction with ",Object(a.b)("inlineCode",{parentName:"p"},"--noninteractive"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--version"),": Print the current version of Pyre.")))))}d.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);