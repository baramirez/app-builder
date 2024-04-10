"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[6208],{52268:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return p}});var t=a(87462),i=a(63366),o=(a(15007),a(64983)),l=a(91515),d=["components"],m={},s={_frontmatter:m},r=l.Z;function p(e){var n=e.components,a=(0,i.Z)(e,d);return(0,o.mdx)(r,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"app-builder-configuration-files"},"App Builder Configuration Files"),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"An app has three configuration files, ",(0,o.mdx)("strong",{parentName:"p"},"defined in the root of the project folder"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," is the main configuration file, defining the application's behavior and implementation."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},".env")," is used to store secrets and environment variables available during build time."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},".aio")," is populated by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"aio")," CLI to store the current Developer Console Workspace details.")),(0,o.mdx)("p",null,"Note: ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},".aio")," files ",(0,o.mdx)("strong",{parentName:"p"},"should not be committed to version control"),"."),(0,o.mdx)("h2",{id:"appconfigyaml"},(0,o.mdx)("inlineCode",{parentName:"h2"},"app.config.yaml")),(0,o.mdx)("h3",{id:"tldr-give-me-a-full-example"},"Tl;dr: give me a full example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"# standalone application config\napplication:\n  hostname: 'customhost'\n  runtimeManifest:\n    packages:\n      application-pkg:\n        actions:\n          count-apples:\n            function: actions/count-apples/index.js\n            web: 'yes'\n            runtime: nodejs:18\n            annotations:\n              require-adobe-auth: true\n  hooks:\n    post-app-build: 'echo hook'\n\n# extension points config\nextensions:\n  dx/excshell/1:\n    # $include directive stores config in a separate file\n    $include: ./dx-excshell-1/ext.config.yaml\n  dx/asset-compute/worker/1:\n    operations:\n      workerProcess:\n        - type: action\n          impl: dx-asset-compute-worker-1/myworker\n    runtimeManifest:\n      packages:\n        dx-asset-compute-worker-1:\n          actions:\n            myworker:\n              function: actions/worker/index.js\n              web: 'yes'\n              runtime: nodejs:18\n")),(0,o.mdx)("h3",{id:"standalone-application-and-extensions"},"Standalone application and extensions"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," file can contain two top level fields: ",(0,o.mdx)("inlineCode",{parentName:"p"},"application")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"extensions"),".\nOnly one is required."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"# app.config.yaml\n\napplication:\n  <common-config>\nextensions:\n  <extension-type>:\n    <extension-definition>\n    <common-config>\n")),(0,o.mdx)("p",null,"A project can implement a standalone application and N extensions."),(0,o.mdx)("h3",{id:"common-configuration"},"Common configuration"),(0,o.mdx)("p",null,"Extensions and the standalone application behave in a similar way.\nBoth can contain a UI and actions and both support a common configuration.\nThe common configuration contains following fields:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"# <common-config>\n\nruntimeManifest:\n  <runtime-manifest>\nhooks:\n  <app-hooks>\nactions: <path to action folder>\nweb: <path to web folder>\nunitTest: <path to unit test folder>\ne2eTest: <path to e2e test folder>\ndist: <path to build output folder>\nhtmlCacheDuration: <cache duration for UI .html files, default: 60s>\njsCacheDuration: <cache duration for UI .js files, default: about a week>\ncssCacheDuration: <cache duration for UI .css files, default: about a week>\nimageCacheDuration: <cache duration for UI image (.jpg, .png, .gif, etc.) files, default: about a week>\ntvmurl: <alternative tvm url used to upload the UI>\nawsaccesskeyid: <upload UI to own s3, provide credentials>\nawssecretaccesskey: <upload UI to own s3, provide credentials>\ns3bucket: <upload UI to own s3, provide credentials>\nhostname: <alternative hostname for the UI>\n")),(0,o.mdx)("h4",{id:"runtime-manifest"},"Runtime Manifest"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"runtimeManifest")," field holds the backend configuration deployed into Adobe I/O Runtime.\nThe full spec can be found ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/apache/openwhisk-wskdeploy/tree/master/specification/html"},"here"),". Acceptable values for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"limits")," fields below can be found on the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/using/system_settings/"},"Runtime System Settings")," page.\nHere is an example to get started:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"runtimeManifest\n   packages:\n     myapp:\n       license: Apache-2.0\n       actions:\n         generic:\n           # path relative to the configuration file\n           function: src/myapp/actions/generic/index.js\n           web: 'yes'\n           runtime: nodejs:18\n           annotations:\n            require-adobe-auth: true\n         target:\n           function: src/myapp/actions/target/index.js\n           web: 'yes'\n           runtime: nodejs:18\n           limits:\n             timeout: 60000\n             memory: 512\n             concurrency: 1\n             logs: 10\n           include:\n              - [\"myfilestoinclude/*.txt\", \"text/\"]        \n")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Note that the above example also demonstrates the 'include' field of an action.  In some cases you may want to have a file deployed with your action code, and available to your code when it runs.\nThe example will copy all .txt files from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"myfilestoinclude/")," directory and place it in a new dir ",(0,o.mdx)("inlineCode",{parentName:"p"},"text/")," that is available via ",(0,o.mdx)("inlineCode",{parentName:"p"},"fs.readFile('text/somefile.txt', 'utf8', callback);")," when your action is invoked.")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Note the above sets limit values.  Limits are defined as:"),(0,o.mdx)("ul",{parentName:"blockquote"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"concurrency"),": the maximum number of action invocations to send to the same container in parallel (default 200, min: 1,max: 500)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"logs"),": the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"timeout"),": the timeout LIMIT in milliseconds after which the action is terminated (default 60000, min: 100, max: 3600000)",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"for web actions served from cdn there is a hard limit of 30 seconds for timeout")))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"memory"),": the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"setting distinct values (ex. 671) can impact cold starts as Runtime keeps a number of pre-warmed containers, but only for common memory sizes (128, 256, 512, 1024, etc.)"))))),(0,o.mdx)("p",{parentName:"blockquote"},"More info on ",(0,o.mdx)("inlineCode",{parentName:"p"},"limits")," can be found on the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/using/system_settings/"},"Runtime System Settings")," page.")),(0,o.mdx)("h5",{id:"annotations"},"Annotations"),(0,o.mdx)("p",null,"Runtime actions can be decorated with annotations to enhance or modify action behavior. "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"runtimeManifest:\n   packages:\n     myapp:\n       license: Apache-2.0\n       actions:\n         generic:\n           annotations:\n             require-adobe-auth: true\n             disable-download: true  \n")),(0,o.mdx)("p",null,"In addition to the base annotations provided by Runtime (See ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe-apiplatform/incubator-openwhisk/blob/master/docs/annotations.md"},"here"),"), there are a few special annotations: "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"disable-download")," (Default: false) - Determines whether action code can be downloaded. Once this annotation is set to true, it cannot be set back to false. "),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"require-adobe-auth")," (Default: false) - Determines whether the action will require Adobe authentication to invoke. See ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/app-builder/docs/guides/security/#authentication-and-authorization-handling"},"here")," for more.")),(0,o.mdx)("h4",{id:"hooks-to-customize-the-tooling"},"Hooks to customize the tooling"),(0,o.mdx)("p",null,"Hooks can be used to customize ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio app")," commands. Hooks are documented ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/project-firefly/blob/main/src/pages/guides/app-hooks.md"},"here"),"."),(0,o.mdx)("h3",{id:"extension-specific-configuration"},"Extension specific configuration"),(0,o.mdx)("h4",{id:"extension-types"},"Extension types"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"<extension-type>")," indicates which product the extension is extending, currently we support the following product extensions:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"dx/excshell/1")," to implement an Experience Cloud Shell single page application."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"dx/asset-compute/worker/1")," to implement an AEM Asset Compute worker.")),(0,o.mdx)("h4",{id:"dxexcshell1-definition"},(0,o.mdx)("inlineCode",{parentName:"h4"},"dx/excshell/1")," definition"),(0,o.mdx)("p",null,"The Experience Cloud Shell extension supports a ",(0,o.mdx)("inlineCode",{parentName:"p"},"view")," operation that points to the entry html file of the SPA.\nIn the following example the ",(0,o.mdx)("inlineCode",{parentName:"p"},"impl")," field points to an ",(0,o.mdx)("inlineCode",{parentName:"p"},"index.html")," file stored in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"web/")," folder of the extension."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"extensions\n  dx/excshell/1:\n    operations:\n      view:\n        - type: web\n          impl: index.html\n     web-src: web/\n")),(0,o.mdx)("h4",{id:"dxasset-computeworker1-definition"},(0,o.mdx)("inlineCode",{parentName:"h4"},"dx/asset-compute/worker/1")," definition"),(0,o.mdx)("p",null,"The AEM Asset Compute worker extension supports a ",(0,o.mdx)("inlineCode",{parentName:"p"},"workerProcess")," operation that points to the backend Adobe I/O Runtime action implementing the worker logic.\nIn the following example the ",(0,o.mdx)("inlineCode",{parentName:"p"},"impl")," field points to the  ",(0,o.mdx)("inlineCode",{parentName:"p"},"dx-asset-compute-worker-1/worker")," action defined in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"runtimeManifest"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"extensions\n  dx/asset-compute/worker/1:\n    operations:\n      workerProcess:\n        - type: action\n          impl: dx-asset-compute-worker-1/myworker\n    runtimeManifest:\n      packages:\n        dx-asset-compute-worker-1:\n          actions:\n            myworker:\n              function: actions/worker/index.js\n              web: 'yes'\n              runtime: nodejs:18\n")),(0,o.mdx)("h3",{id:"the-include-directive"},"The ",(0,o.mdx)("inlineCode",{parentName:"h3"},"$include")," directive"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"$include")," directive allows to defer any part of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," to another file.\nIn the following example, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"dx/excshell/1")," configuration is stored in another ",(0,o.mdx)("inlineCode",{parentName:"p"},"./src/dx-excshell-1/ext.config.yaml")," file."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"extensions:\n  dx/excshell/1:\n    $include: ./src/dx-excshell-1/ext.config.yaml\n")),(0,o.mdx)("p",null,"Configuration paths defined in ",(0,o.mdx)("inlineCode",{parentName:"p"},"./src/dx-excshell-1/ext.config.yaml")," must be relative to that file."),(0,o.mdx)("h2",{id:"env"},(0,o.mdx)("inlineCode",{parentName:"h2"},".env")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file is used to store:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"secrets to be injected into I/O Runtime Actions."),(0,o.mdx)("li",{parentName:"ol"},"environment variables available to ",(0,o.mdx)("inlineCode",{parentName:"li"},"hooks"),"."),(0,o.mdx)("li",{parentName:"ol"},"auto generated secrets used by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"aio")," CLI, prefixed by ",(0,o.mdx)("inlineCode",{parentName:"li"},"AIO_"),", those should not be edited.")),(0,o.mdx)("h2",{id:"aio"},(0,o.mdx)("inlineCode",{parentName:"h2"},".aio")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},".aio")," file is auto generated and contains Developer Console specific configuration.\nThis file is updated via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio app use")," command and should not be edited manually."),(0,o.mdx)("h2",{id:"legacy-configuration-system"},"Legacy configuration system"),(0,o.mdx)("p",null,"Apps initialized using a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@adobe/aio-cli")," CLI version prior to 8.x use a legacy configuration system that we still support in newer CLI versions.\nThose apps do not support extensions, and only get deployed as standalone applications."),(0,o.mdx)("p",null,"The legacy configuration system does not have an ",(0,o.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," and instead uses:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},".aio")," to store common configuration bits, but hooks and Runtime Manifest, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"actions")," path."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"manifest.yaml")," to stores the Runtime Manifest."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"package.json")," to store hooks."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},".env")," behaves the same.")),(0,o.mdx)("h2",{id:"migrating-between-standalone-application-and-dx-experience-cloud-spa-v1"},"Migrating between Standalone Application and DX Experience Cloud SPA v1"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"migrations/standalone_to_dx_experience_cloud_spa.md"},"Standalone Application to DX Experience Cloud SPA v1")," - Useful if you can't seem to view your application in the App Builder Catalog in Adobe Experience Cloud.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-configuration-index-md-054aeaa988abb90636a0.js.map