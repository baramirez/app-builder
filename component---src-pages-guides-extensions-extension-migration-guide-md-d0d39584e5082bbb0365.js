(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[2937],{22332:function(e,n,i){"use strict";i.r(n),i.d(n,{_frontmatter:function(){return d},default:function(){return m}});var t=i(22122),o=i(19756),a=(i(15007),i(64983)),l=i(99536),r=["components"],d={},s={_frontmatter:d},p=l.Z;function m(e){var n=e.components,i=(0,o.Z)(e,r);return(0,a.mdx)(p,(0,t.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"extension-migration-guide"},"Extension Migration Guide"),(0,a.mdx)("p",null,"As of July 28, 2021, we have officially released support for ",(0,a.mdx)("a",{parentName:"p",href:"index.md"},"Extensions")," in Project Firefly. This release allows you to extend Adobe Experience Cloud through Firefly applications in a more native and integrated fashion. "),(0,a.mdx)("p",null,"While all existing application built prior to July 28,2021 should continue to work as expected without any further action. In the next 90 days (until Oct 28, 2021), please update your Adobe I/O CLI and migrate your application as we’ll be retiring the previous services. Follow this guide to migrate your application in a few simple steps."),(0,a.mdx)("h2",{id:"understanding-configuration-changes"},"Understanding Configuration Changes"),(0,a.mdx)("p",null,"With the introduction of ",(0,a.mdx)("a",{parentName:"p",href:"index.md"},"Extensions"),", we have made a few changes to Firefly project file structures and to how we compile configurations. Before you get started on the migration, please read through the changes so that you can make an informed decision for how to refactor your project during the migration."),(0,a.mdx)("h3",{id:"old-file-structure"},"Old File Structure"),(0,a.mdx)("p",null,"Previously, if you initialize a new Firefly Project in the CLI, you will see the following folders and files in your project: "),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"actions"),": this folder is intended for backend source code for all serverless actions"),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"web-src"),": this folder is intended for frontend source code such as html templates, react components, JS, CSS"),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"test"),": this folder is intended for back-end action unit tests and integration tests"),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"e2e"),": this folder is intended for  end-to-end tests"),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml"),": this file describes the backend actions you would like to deploy or to redeploy. ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"The manifest file contents should adhere to the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/apache/openwhisk-wskdeploy/tree/master/specification#package-specification"},"OpenWhisk deployment YAML specification"),". Once defined, the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"CLI")," use this file to deploy or redeploy actions. You might see values like ",(0,a.mdx)("inlineCode",{parentName:"li"},"$CUSTOMER_PROFILE_TENANT")," listed on this page. These are environment variables that you can define in your ",(0,a.mdx)("inlineCode",{parentName:"li"},".env")," file. "))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"package.json"),": this file describes project definition and various metadata relevant to the project. ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"It is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. Learn more ",(0,a.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/"},"here"),"."))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},".aio"),": this file contains config variables that are useful for the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"CLI")," to facilitate the app, e.g. supported API services. ",(0,a.mdx)("strong",{parentName:"li"},"This file can be committed to a source code versioning system."),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"You can manually update the file or use the ",(0,a.mdx)("inlineCode",{parentName:"li"},"aio config")," commands to add or to remove configurations. Learn more about the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-config"},"Config Plugin"),". "))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},".env"),": this file contains environment variables that are useful for the app during development, e.g. Adobe I/O Runtime credentials and Adobe Product API tenant specifics (API key, secrets, etc.)",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"The environment variables defined here can be used in the application (e.g. in ",(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml"),"). If you've set up credentials for the selected workspaces, you should be able to see some of those values prepopulated upon initialization, like ",(0,a.mdx)("inlineCode",{parentName:"li"},"AIO_runtime_auth")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"AIO_runtime_namespace"),". "),(0,a.mdx)("li",{parentName:"ul"},"This file is automatically included in ",(0,a.mdx)("inlineCode",{parentName:"li"},".gitignore"),". ",(0,a.mdx)("strong",{parentName:"li"},"It is not intended be shared given the credentials and secrets listed.")))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"console.json"),": this file contains the credentials set up through your Project Firefly project. ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"This file is also automatically included in ",(0,a.mdx)("inlineCode",{parentName:"li"},".gitignore"),". ",(0,a.mdx)("strong",{parentName:"li"},"It is not intended be shared given the credentials and secrets listed.")," "),(0,a.mdx)("li",{parentName:"ul"},"This file can be downloaded directly from the ",(0,a.mdx)("a",{parentName:"li",href:"/project-firefly/console"},"Adobe Developer Console")," as well. You can retrieve it by going to a workspace, and clicking on the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Download all")," button. ")))),(0,a.mdx)("h3",{id:"new-file-structure"},"New File Structure"),(0,a.mdx)("p",null,"With the introduction of extensions, your new file structure would look something like this --"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"src"),": Instead of one folder for all ",(0,a.mdx)("inlineCode",{parentName:"li"},"actions")," and all ",(0,a.mdx)("inlineCode",{parentName:"li"},"web-src"),", you will see individual folders under ",(0,a.mdx)("inlineCode",{parentName:"li"},"src")," for each Extension point you have selected. For instance, a ",(0,a.mdx)("inlineCode",{parentName:"li"},"dx-excshell-1")," folder for your Experience Cloud SPA actions and frontend resources. ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Under each folder, you should be able to see both the actions and the frontend code when application. In addition, you should be able to see ",(0,a.mdx)("inlineCode",{parentName:"li"},"ext.config.yaml"),". This file contains all the action and extension configuration for the extension point where it's located. This individual configuration allows for more flexibility in defining and managing individual extension points. You can see that this file is also imported to ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," as that's the master config file. "),(0,a.mdx)("li",{parentName:"ul"},"The action definition in this file shoud adhere to the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/apache/openwhisk-wskdeploy/tree/master/specification#package-specification"},"OpenWhisk deployment YAML specification"),"."),(0,a.mdx)("li",{parentName:"ul"},"Once defined, the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"CLI")," use this file to deploy or redeploy actions. You might see values like ",(0,a.mdx)("inlineCode",{parentName:"li"},"$CUSTOMER_PROFILE_TENANT")," listed under environments in this file. These are environment variables that you can define in your ",(0,a.mdx)("inlineCode",{parentName:"li"},".env")," file. "))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),": this is the master configuration file. It follows the same principle as the individual ",(0,a.mdx)("inlineCode",{parentName:"li"},"ext.config.yaml"),", and compiles these individual file into one comprehensive config upon application build. "),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"lib"),": this folder will contain all the shared utility actions across different extension points. "),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"package.json"),": this file describes project definition and various metadata relevant to the project. ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"It is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. Learn more ",(0,a.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/"},"here"),"."))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},".aio"),": this file contains config variables that are useful for the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"CLI")," to facilitate the app, e.g. supported API services. ",(0,a.mdx)("strong",{parentName:"li"},"This file can be committed to a source code versioning system."),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"You can manually update the file or use the ",(0,a.mdx)("inlineCode",{parentName:"li"},"aio config")," commands to add or to remove configurations. Learn more about the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-config"},"Config Plugin"),". "))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},".env"),": this file contains environment variables that are useful for the app during development, e.g. Adobe I/O Runtime credentials and Adobe Product API tenant specifics (API key, secrets, etc.)",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"The environment variables defined here can be used in the application (e.g. in ",(0,a.mdx)("inlineCode",{parentName:"li"},"ext.config.yaml")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),"). If you've set up credentials for the selected workspaces, you should be able to see some of those values prepopulated upon initialization, like ",(0,a.mdx)("inlineCode",{parentName:"li"},"AIO_runtime_auth")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"AIO_runtime_namespace"),". "),(0,a.mdx)("li",{parentName:"ul"},"This file is automatically included in ",(0,a.mdx)("inlineCode",{parentName:"li"},".gitignore"),". ",(0,a.mdx)("strong",{parentName:"li"},"It is not intended be shared given the credentials and secrets listed."))))),(0,a.mdx)("h2",{id:"step-by-step-migration-instruction"},"Step-by-step Migration Instruction"),(0,a.mdx)("p",null,"Please follow the steps below for a detailed instruction for how to migrate your application! "),(0,a.mdx)("h3",{id:"0-understanding-the-difference"},"0. Understanding the Difference"),(0,a.mdx)("p",null,"Let's start with the why you need to migrate your application. What happens if you migrate your application:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"You will be able to take advantage of Extensions and the flexibility of our new configuration set up!"),(0,a.mdx)("li",{parentName:"ol"},"Your application will be using our new validator -- providing more granular access control to ensure the security of your application. Read more about this in our ",(0,a.mdx)("a",{parentName:"li",href:"../security/index.md"},"Security Guide"),".")),(0,a.mdx)("p",null,"What happens if you don't migrate:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"During this release, we have automatically indexed your application in the backend. If you update your application (and it is an SPA in Experience Cloud or an AEM Asset Microservices Custom Processing Profile) using the old CLI (up to 7.1.0), you should see no change until the end of October when we retire some services. "),(0,a.mdx)("li",{parentName:"ol"},"If you update the CLI before the end of October, but didnot refactor your code following the guide below, you may no longer be able to see your application in Experience Cloud UI and will need to refactor your code. "),(0,a.mdx)("li",{parentName:"ol"},"Long story short -- don't upgrade the CLI until you are ready to refactor your project, and do refactor your project within the next three months. ")),(0,a.mdx)("p",null,"With this context, let's dive in. "),(0,a.mdx)("h3",{id:"1-update-tooling"},"1. Update Tooling"),(0,a.mdx)("p",null,"First of all, please make sure your local tooling and environment set up is up to date. You can find the latest supported environment and tooling info in ",(0,a.mdx)("a",{parentName:"p",href:"https://www.adobe.io/project-firefly/docs/getting_started/"},"here"),". "),(0,a.mdx)("h3",{id:"2-update-configuration"},"2. Update Configuration"),(0,a.mdx)("p",null,"Your existing application could be one of three types: "),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"an application not extending any Extension Points (for instance, your application is a standalone Headless application ",(0,a.mdx)("strong",{parentName:"li"},"OR")," a standalone Single Page Application that does not integrate with Experience Cloud UI)"),(0,a.mdx)("li",{parentName:"ol"},"an application extending ",(0,a.mdx)("strong",{parentName:"li"},"one")," Extension Points (for instance, your application is a Single Page Application accessed through Experience Cloud UI ",(0,a.mdx)("strong",{parentName:"li"},"OR")," a Custom Processing Profile for AEM Asset Microservices)"),(0,a.mdx)("li",{parentName:"ol"},"an application extending ",(0,a.mdx)("strong",{parentName:"li"},"two or more")," Extension Points (for instance, your application is a Custom Processing Profile for AEM Asset Microservices ",(0,a.mdx)("strong",{parentName:"li"},"AND")," contains a Single Page Application accessible through Experience Cloud UI).")),(0,a.mdx)("p",null,"Learn more about Extension Points in ",(0,a.mdx)("a",{parentName:"p",href:"index.md"},"Introduction to Extensions"),". Based on the nature of your existing project, please following the corresponding the section below. "),(0,a.mdx)("h4",{id:"21-application-not-extending-any-extension-points"},"2.1 Application not extending any Extension Points"),(0,a.mdx)("p",null,"Congratulations! Technically you won't NEED to do any refactoring. Our CLI will continue to support the old configuration system. "),(0,a.mdx)("p",null,"That being said, if you do plan to integrate with Extension Points in the future or simply want to make sure your project is up-to-date, we highly recommend that you follow the instruction in the next section to refactor your codebase. "),(0,a.mdx)("p",null,"Please note that if you have a headless application and you have the ",(0,a.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth")," set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"true"),", refactoring your codebase and redeploying your application with the new CLI will switch you to our new validator, which means we'll validate the token passed in belongs to the same IMS organization, and contains product profile required for your application. For instance, if your application uses Adobe Analytics API, the token you pass in must also have access to Adobe Analytics."),(0,a.mdx)("h5",{id:"instructions"},"Instructions:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Create ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," file in the root directory of your project."),(0,a.mdx)("li",{parentName:"ol"},"Move the content of the ",(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml")," to ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),", then delete ",(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml")," file"),(0,a.mdx)("li",{parentName:"ol"},"Move any application hooks you have set up under ",(0,a.mdx)("inlineCode",{parentName:"li"},"scripts")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"package.json")," into ",(0,a.mdx)("inlineCode",{parentName:"li"},"applications.hooks")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," configuration file."),(0,a.mdx)("li",{parentName:"ol"},"Move any configuration found under the ",(0,a.mdx)("inlineCode",{parentName:"li"},".app")," section of the ",(0,a.mdx)("inlineCode",{parentName:"li"},".aio")," configuration file into the ",(0,a.mdx)("inlineCode",{parentName:"li"},"applications")," section of the new ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," configuration file.")),(0,a.mdx)("h5",{id:"sample-appconfigyaml-file-after-the-refactoring"},"Sample ",(0,a.mdx)("inlineCode",{parentName:"h5"},"app.config.yaml")," File after the refactoring:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"# standalone application\napplication:\n  hostname: 'customhost'\n  runtimeManifest:\n    packages:\n      application-pkg:\n        license: Apache-2.0\n        actions:\n          count-apples:\n            function: actions/count-apples/index.js\n            web: 'yes'\n            annotations:\n              require-adobe-auth: true\n  env:\n    SOME_ENV: dev\n  hooks:\n    post-app-build: 'echo hook'\n")),(0,a.mdx)("h4",{id:"22-application-extending-one-extension-point"},"2.2 Application Extending one Extension Point"),(0,a.mdx)("p",null,"Follow this section if your application is a Single Page Application accessed through Experience Cloud UI OR a Custom Processing Profile for AEM Asset Microservices."),(0,a.mdx)("h5",{id:"instructions-1"},"Instructions:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Create ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," file in the root directory of your project."),(0,a.mdx)("li",{parentName:"ol"},"Create a definition for the extension in your ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),". If you have a Single Page Application in Experience Cloud UI, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"dx/exchshell/1:")," with ",(0,a.mdx)("inlineCode",{parentName:"li"},"operations")," set to ",(0,a.mdx)("inlineCode",{parentName:"li"},"view"),". If you have a AEM Asset Microservices Custom Profile, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"dx/sset-compute/worker/1:")," with ",(0,a.mdx)("inlineCode",{parentName:"li"},"operations")," set to ",(0,a.mdx)("inlineCode",{parentName:"li"},"workerProcess"),". (See sample configurations below)"),(0,a.mdx)("li",{parentName:"ol"},"Move the content of the ",(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml")," under the extensions in ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),", then delete ",(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml")," file"),(0,a.mdx)("li",{parentName:"ol"},"Move any application hooks you have set up under ",(0,a.mdx)("inlineCode",{parentName:"li"},"scripts")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"package.json")," into ",(0,a.mdx)("inlineCode",{parentName:"li"},"extensions.<extensionname>.hooks")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")),(0,a.mdx)("li",{parentName:"ol"},"move any configuration under ",(0,a.mdx)("inlineCode",{parentName:"li"},".app")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},".aio")," into ",(0,a.mdx)("inlineCode",{parentName:"li"},"extensions.<extensionname>")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),".")),(0,a.mdx)("h5",{id:"sample-appconfigyaml-file-after-the-refactoring-1"},"Sample ",(0,a.mdx)("inlineCode",{parentName:"h5"},"app.config.yaml")," File after the refactoring:"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"SPA in Experience Cloud UI")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"extensions:\n  dx/excshell/1:\n    operations:\n      view:\n        - type: web\n          impl: index.html\n    runtimeManifest:\n      packages:\n        <newpackagename>:\n          license: Apache-2.0\n          actions:\n            todolist:\n              function: actions/todolist/index.js\n              web: 'yes'\n              runtime: 'nodejs:14'\n              inputs:\n                LOG_LEVEL: debug\n              annotations:\n              require-adobe-auth: true\n              final: true\n  env:\n    SOME_ENV: dev\n  hooks:\n    post-app-build: 'echo hook'\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"AEM Asset Microservices")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"extensions:\n  dx/asset-compute/worker/1:\n    operations:\n      workerProcess:\n        - type: web\n          impl: worker\n    runtimeManifest:\n      packages:\n        <newpackagename>:\n          license: Apache-2.0\n          actions:\n            worker:\n              function: actions/worker/index.js\n              web: 'yes'\n              runtime: 'nodejs:14'\n              inputs:\n                LOG_LEVEL: debug\n              annotations:\n              require-adobe-auth: true\n              final: true\n  env:\n    SOME_ENV: dev\n  hooks:\n    post-app-build: 'echo hook'\n")),(0,a.mdx)("h4",{id:"23-application-extending-two-or-more-extension-points"},"2.3 Application Extending two or more Extension Points"),(0,a.mdx)("p",null,"Follow this section your application is a Custom Processing Profile for AEM Asset Microservices AND contains a Single Page Application accessible through Experience Cloud UI. "),(0,a.mdx)("p",null,"Please note that there are multiple ways to structure your configuration. You can refactor your code into folders for each extension, and create extension specific configuration, then import them into your main ",(0,a.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," using ",(0,a.mdx)("inlineCode",{parentName:"p"},"$include: path/to/myfile.yaml"),", you can also manage them all in one file in the root directory ",(0,a.mdx)("inlineCode",{parentName:"p"},"app.config.yaml"),". You could try to initialize a new project with multiple extension points through ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio app init")," to see how we structure the code and config file my default. Below, we are showing the easiest way to refactor by merging all config into ",(0,a.mdx)("inlineCode",{parentName:"p"},"app.config.yaml"),", but you are more than welcome to explore and to try different methods. "),(0,a.mdx)("h5",{id:"instructions-2"},"Instructions:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Create ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," file in the root directory of your project."),(0,a.mdx)("li",{parentName:"ol"},"Create the definitions for the extensions in your ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),". For the Single Page Application in Experience Cloud UI, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"dx/exchshell/1:")," with ",(0,a.mdx)("inlineCode",{parentName:"li"},"operations")," set to ",(0,a.mdx)("inlineCode",{parentName:"li"},"view"),". For the AEM Asset Microservices Custom Profile, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"dx/sset-compute/worker/1:")," with ",(0,a.mdx)("inlineCode",{parentName:"li"},"operations")," set to ",(0,a.mdx)("inlineCode",{parentName:"li"},"workerProcess"),". (See sample configurations below)"),(0,a.mdx)("li",{parentName:"ol"},"Move the content of the ",(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml")," under the extensions in ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),", then delete ",(0,a.mdx)("inlineCode",{parentName:"li"},"manifest.yml")," file"),(0,a.mdx)("li",{parentName:"ol"},"Move any application hooks you have set up under ",(0,a.mdx)("inlineCode",{parentName:"li"},"scripts")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"package.json")," into ",(0,a.mdx)("inlineCode",{parentName:"li"},"extensions.<extensionname>.hooks")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")),(0,a.mdx)("li",{parentName:"ol"},"move any configuration under ",(0,a.mdx)("inlineCode",{parentName:"li"},".app")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},".aio")," into ",(0,a.mdx)("inlineCode",{parentName:"li"},"extensions.<extensionname>")," in ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.config.yaml"),".")),(0,a.mdx)("h5",{id:"sample-appconfigyaml-file-after-the-refactoring-2"},"Sample ",(0,a.mdx)("inlineCode",{parentName:"h5"},"app.config.yaml")," File after the refactoring:"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Firefly Project Extending Multiple Extension Points")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"extensions:\n  dx/excshell/1:\n    operations:\n      view:\n        - type: web\n          impl: index.html\n    runtimeManifest:\n      packages:\n        <newpackagename>:\n          license: Apache-2.0\n          actions:\n            todolist:\n              function: actions/todolist/index.js\n              web: 'yes'\n              runtime: 'nodejs:14'\n              inputs:\n                LOG_LEVEL: debug\n              annotations:\n              require-adobe-auth: true\n              final: true\n  dx/asset-compute/worker/1:\n    operations:\n      workerProcess:\n        - type: web\n          impl: worker\n    runtimeManifest:\n      packages:\n        <newpackagename>:\n          license: Apache-2.0\n          actions:\n            worker:\n              function: actions/worker/index.js\n              web: 'yes'\n              runtime: 'nodejs:14'\n              inputs:\n                LOG_LEVEL: debug\n              annotations:\n              require-adobe-auth: true\n              final: true\n  env:\n    SOME_ENV: dev\n  hooks:\n    post-app-build: 'echo hook'\n")),(0,a.mdx)("h3",{id:"3-testing"},"3. Testing"),(0,a.mdx)("p",null,"Once you've completed your refactoring, simply try ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio app run")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),", and everything should work as usual. "),(0,a.mdx)("p",null,"Should you run into any issues, please contact us through the ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleaguecommunities.adobe.com/t5/project-firefly/ct-p/project-firefly"},"Experience League Forum")," and we'll support you as soon as possible."),(0,a.mdx)("h2",{id:"adding-or-removing-endpoints-from-existing-projects"},"Adding or removing Endpoints from Existing Projects"),(0,a.mdx)("p",null,"Similar to actions, you can choose to directly edit your extension configuration by modifying your code. Alternatively, we provide a few simple commands:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"aio app add ext")," for adding a new Extension Point to your application. "),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"aio app delete ext")," for deleting an existing Extension Point project and configuration. ")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-extensions-extension-migration-guide-md-d0d39584e5082bbb0365.js.map