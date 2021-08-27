(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[3520],{12140:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return m}});var i=a(22122),o=a(19756),n=(a(15007),a(64983)),r=a(99536),p=["components"],c={},l={_frontmatter:c},s=r.Z;function m(e){var t=e.components,a=(0,o.Z)(e,p);return(0,n.mdx)(s,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"deployment-overview"},"Deployment Overview"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," provides out-of-the-box features for developers to manage the lifecycle of their  Project Firefly Applications. This documentation focuses on the application deployment step of this lifecycle."),(0,n.mdx)("h2",{id:"setup-assumptions"},"Setup Assumptions"),(0,n.mdx)("p",null,"In the following chapters of this documentation, it will be assumed that:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"The Custom Adobe Application has been bootstrapped from a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/generator-aio-app/"},"generator")," using the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"There is a ",(0,n.mdx)("strong",{parentName:"p"},".env")," file at the root of the application folder, which contains the following keys and their values:"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"AIO_RUNTIME_AUTH"),", which holds the credentials for the Runtime namespace to use"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"AIO_RUNTIME_NAMESPACE"),", which holds the name of the Runtime namespace to use")))),(0,n.mdx)("p",null,"If you do not own a ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," namespace, please ",(0,n.mdx)("a",{parentName:"p",href:"https://adobeio.typeform.com/to/obqgRm"},"request trial access"),"."),(0,n.mdx)("p",null,"The ",(0,n.mdx)("a",{parentName:"p",href:"../../getting_started/index.md"},"Setup Requirements")," documentation should also be checked before trying out the deployment scenarios described below."),(0,n.mdx)("p",null,"The ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," offers three types of deployment to the developers."),(0,n.mdx)("h2",{id:"local-deployment"},"Local Deployment"),(0,n.mdx)("p",null,"Local deployment capabilities are offered to developers who want to test and debug their application before this one gets deployed to the out-of-the-box Content Delivery Network."),(0,n.mdx)("h3",{id:"local-runtime-actions-and-ui"},"Local Runtime actions and UI"),(0,n.mdx)("h4",{id:"use-case"},"Use-Case"),(0,n.mdx)("p",null,"This local deployment feature is useful for developers who want to easily get an initial preview of their Custom Application before deploying it to ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," and to the out-of-the-box Content Delivery Network. They will also benefit from local ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," actions and UI debugging capabilities. "),(0,n.mdx)("p",null,"It also helps developers who want to work on their Custom Application implementation without an appropriate Internet connection. Of course, in that case you are not able to interact with ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis"},"Adobe APIs")," or with remote 3rd party systems."),(0,n.mdx)("p",null,"The tradeoff is that developers will not be able to run code that uses ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-files"},"Files")," or ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"State")," SDKs, ",(0,n.mdx)("a",{parentName:"p",href:"https://adobeio-codelabs-alarms-adobedocs.project-helix.page/"},"cron jobs scheduler with Alarms package"),", as well as expose web actions as webhooks for ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/events"},"I/O Events")," or external events providers. These are only available if the actions are deployed to ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime"),"."),(0,n.mdx)("p",null,"This deployment scenario doesn't require any specific credentials, as both ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," actions and application UI are hosted on the developer's machine."),(0,n.mdx)("h4",{id:"cli-command"},"CLI Command"),(0,n.mdx)("p",null,"This deployment is triggered when running ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app run --local")," at the root of the Custom Application source code directory."),(0,n.mdx)("h4",{id:"architecture"},"Architecture"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/cb523/local-actions-local-ui.webp 320w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/797b9/local-actions-local-ui.webp 640w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/4b075/local-actions-local-ui.webp 1280w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/f3ff0/local-actions-local-ui.webp 1920w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/a662b/local-actions-local-ui.webp 2560w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/0a061/local-actions-local-ui.webp 4830w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/72799/local-actions-local-ui.png 320w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/6af66/local-actions-local-ui.png 640w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/21b4d/local-actions-local-ui.png 1280w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/29114/local-actions-local-ui.png 1920w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/c2d13/local-actions-local-ui.png 2560w","/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/bbbe3/local-actions-local-ui.png 4830w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/51a069f31910b095c59ab8a7e7f72cac/21b4d/local-actions-local-ui.png",alt:"Local Runtime Actions and UI",title:"Local Runtime Actions and UI",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"In this scenario, the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," will download a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/tree/master/core/standalone"},"standalone instance")," of ",(0,n.mdx)("a",{parentName:"p",href:"https://openwhisk.apache.org/"},"Apache OpenWhisk"),", which is the open source serverless platform behind ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime"),", on the developer's machine."),(0,n.mdx)("p",null,"The ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," actions of the application will be deployed to this local ",(0,n.mdx)("a",{parentName:"p",href:"https://openwhisk.apache.org/"},"Apache OpenWhisk")," instance, and executed in NodeJS docker containers spinned up locally from the Docker images that are documented in the ",(0,n.mdx)("strong",{parentName:"p"},"Technical Prerequisites")," section above."),(0,n.mdx)("p",null,"The local ",(0,n.mdx)("a",{parentName:"p",href:"https://openwhisk.apache.org/"},"Apache OpenWhisk")," instance runs on port 3233 by default, and the deployed actions will be accessible at:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"http://localhost:3233/api/v1/web/guest/<appname-appversion>/<action-name>\n")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"appname")," and ",(0,n.mdx)("strong",{parentName:"p"},"appversion")," are both application name and version, which are maintained in the package.json file at the root of the Custom Application source code folder."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"action-name")," is the name of the action, which has been chosen by the developer when bootstrapping the application from the generator that was executed with ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app init <appname>"),"."),(0,n.mdx)("p",null,"In case of a headful Custom Application, the UI will be served locally from ",(0,n.mdx)("a",{parentName:"p",href:"https://parceljs.org/cli.html"},"ParcelJS"),", which is the underlying framework used by the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," to build the front-end source code."),(0,n.mdx)("h3",{id:"remote-runtime-actions-and-local-ui"},"Remote Runtime actions and local UI"),(0,n.mdx)("h4",{id:"technical-prerequisites"},"Technical Prerequisites"),(0,n.mdx)("p",null,"This deployment scenario requires ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," credentials in a .env file at the root of the Custom Application source code folder, as documented in the ",(0,n.mdx)("strong",{parentName:"p"},"Setup Assumptions")," above."),(0,n.mdx)("h4",{id:"use-case-1"},"Use-Case"),(0,n.mdx)("p",null,"This feature is useful for developers who want to test and debug locally their Custom Application in a live environment fully integrated to Adobe's ecosystem, with minimal deployment time and efforts. "),(0,n.mdx)("h4",{id:"cli-command-1"},"CLI Command"),(0,n.mdx)("p",null,"This deployment is triggered when running ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app run")," at the root of the Custom Application source code directory."),(0,n.mdx)("h4",{id:"architecture-1"},"Architecture"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.37500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/cb523/remote-actions-local-ui.webp 320w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/797b9/remote-actions-local-ui.webp 640w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/4b075/remote-actions-local-ui.webp 1280w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/f3ff0/remote-actions-local-ui.webp 1920w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/a662b/remote-actions-local-ui.webp 2560w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/b2c1b/remote-actions-local-ui.webp 5728w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/72799/remote-actions-local-ui.png 320w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/6af66/remote-actions-local-ui.png 640w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/21b4d/remote-actions-local-ui.png 1280w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/29114/remote-actions-local-ui.png 1920w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/c2d13/remote-actions-local-ui.png 2560w","/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/bd3e8/remote-actions-local-ui.png 5728w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/f698e0372797b3e5e62cc6a92c637813/21b4d/remote-actions-local-ui.png",alt:"Remote Runtime Actions and local UI",title:"Remote Runtime Actions and local UI",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"The UI is still served locally from ",(0,n.mdx)("a",{parentName:"p",href:"https://parceljs.org/cli.html"},"ParcelJS"),", which allows hot updates of the front-end code. It communicates with ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," actions deployed to the developer's Runtime namespace."),(0,n.mdx)("h2",{id:"full-deployment"},"Full Deployment"),(0,n.mdx)("h4",{id:"technical-prerequisites-1"},"Technical Prerequisites"),(0,n.mdx)("p",null,"This deployment scenario requires ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," credentials in a .env file at the root of the Custom Application source code folder, as documented in the ",(0,n.mdx)("strong",{parentName:"p"},"Setup Assumptions")," above."),(0,n.mdx)("h4",{id:"use-case-2"},"Use-Case"),(0,n.mdx)("p",null,"This feature is useful for developers who want to test and preview their Custom Application fully integrated to Adobe's ecosystem, in conditions that are similar to a production deployment. "),(0,n.mdx)("h4",{id:"cli-command-2"},"CLI Command"),(0,n.mdx)("p",null,"This deployment is triggered when running ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," at the root of the Custom Application source code directory."),(0,n.mdx)("h4",{id:"architecture-2"},"Architecture"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/cb523/remote-actions-remote-ui.webp 320w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/797b9/remote-actions-remote-ui.webp 640w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/4b075/remote-actions-remote-ui.webp 1280w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/f3ff0/remote-actions-remote-ui.webp 1920w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/a662b/remote-actions-remote-ui.webp 2560w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/54548/remote-actions-remote-ui.webp 4532w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/72799/remote-actions-remote-ui.png 320w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/6af66/remote-actions-remote-ui.png 640w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/21b4d/remote-actions-remote-ui.png 1280w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/29114/remote-actions-remote-ui.png 1920w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/c2d13/remote-actions-remote-ui.png 2560w","/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/a9ed1/remote-actions-remote-ui.png 4532w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/6b1836976f6ed4c15a8818f4a5eeb175/21b4d/remote-actions-remote-ui.png",alt:"Remote Runtime Actions and UI",title:"Remote Runtime Actions and UI",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"The UI is deployed to the out-of-the-box content Content Delivery Network on behalf of the developer's Runtime credentials. It communicates with ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime")," actions deployed to the developer's Runtime namespace."),(0,n.mdx)("p",null,"The out-of-the-box ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-tvm"},"Token-Vending Machine")," is implicitely used by the CLI ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," command, and validates the developer's Runtime credentials against ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime"},"Runtime"),"."),(0,n.mdx)("p",null,"If the credentials are valid, the Token-Vending Machine provides an access token to the CLI, which will authorize the CLI to deploy the static files of the Custom Application to the Content Delivery Network."),(0,n.mdx)("p",null,"The deployed Custom Application will then be available at ",(0,n.mdx)("inlineCode",{parentName:"p"},"https://<namespace>.adobeio-static.net/<appname>-<appversion>/index.html"),", where ",(0,n.mdx)("strong",{parentName:"p"},"namespace")," is the developer's namespace, ",(0,n.mdx)("strong",{parentName:"p"},"appname")," and ",(0,n.mdx)("strong",{parentName:"p"},"appversion")," are respectively the Custom Application name and version, which are maintained in the package.json file at the root of the Custom Application source code folder."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-deployment-index-md-b11b964cf4d80b12eb7b.js.map