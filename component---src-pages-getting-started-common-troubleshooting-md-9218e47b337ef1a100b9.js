(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[9439],{5013:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var o=a(2122),i=a(9756),n=(a(5007),a(4983)),r=a(9536),s=["components"],d={},l={_frontmatter:d},u=r.Z;function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.mdx)(u,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"common-troubleshooting"},"Common Troubleshooting"),(0,n.mdx)("p",null,"Here are troubleshooting guides for some of the most common issues as you develop your first Firefly apps."),(0,n.mdx)("h2",{id:"before-you-proceed"},"Before you proceed"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Check your Node version and tool versions to ensure they are supported by Project Firefly and up-to-date. You can find the latest supported version ",(0,n.mdx)("a",{parentName:"li",href:"index.md"},"here"),"."),(0,n.mdx)("li",{parentName:"ul"},"Check if your application is on Dropbox or OneDrive as file watchers sometimes cause unexpected errors. ")),(0,n.mdx)("h2",{id:"general-debugging"},"General debugging"),(0,n.mdx)("p",null,"When your action code doesn't work as expected, you may want to investigate into what exactly went wrong. Project Firefly provides the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-core-logging"},"Logging SDK"),", please check out ",(0,n.mdx)("a",{parentName:"p",href:"../guides/application_logging.md"},"Firefly's Application Logging")," for more details. "),(0,n.mdx)("p",null,"To see the latest activations of your project, run this command:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"aio runtime activation list\n")),(0,n.mdx)("p",null,"It lists the most recent activations and summary (ID, start / end time, duration, status, and so on). There are 4 most popular statuses of a finished activation:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"success"),": the action was successfully executed and you can obtain it's result with ",(0,n.mdx)("inlineCode",{parentName:"li"},"aio runtime activation result activationID")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"developer error"),": the most likely reasons of this are compilation errors (missing variables, module not found) and action time-out (due to an internal issue within the action or time-out of a backend service the action connects to). You can get the activation details to see what exact error causing this by running the command ",(0,n.mdx)("inlineCode",{parentName:"li"},"aio runtime activation get activationID")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"application error"),": this error is usually due to some issues at runtime, such as thrown exceptions, getting value of an ",(0,n.mdx)("inlineCode",{parentName:"li"},"undefined")," variable. With appropriate try-catch blocks and logging, you can see what goes wrong from the logs ",(0,n.mdx)("inlineCode",{parentName:"li"},"aio runtime activation logs activationID")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"internal error"),": this could be an error caused by an external factor unrelated to the action itself, e.g. not enough resources to run the action. I/O Runtime is a scalable platform, so you would never see it with default action settings. If you do, please let us know by ",(0,n.mdx)("a",{parentName:"li",href:"mailto:iodev@adobe.com"},"email")," so that we can help to troubleshoot what causes it.")),(0,n.mdx)("p",null,"You could also try ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/apache/openwhisk-wskdebug"},"openwhisk-wskdebug")," which offers extensive capabilities to develop and debug the I/O Runtime actions of your Project Firefly applications."),(0,n.mdx)("h2",{id:"action-logs"},"Action logs"),(0,n.mdx)("p",null,"When you have ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#invoking-web-actions"},"web actions")," in your app, they are blocking requests and their activation results are not recorded if they are invoked successfully. To enforce the persistence of activation results, you need to pass the ",(0,n.mdx)("inlineCode",{parentName:"p"},"x-ow-extra-logging: on"),' flag in the request headers. In the development mode of an SPA, you can add this flag directly to the "invoking action" function so that you will have the activation results and logs recorded for all requests. Then they could be retrieved as demonstrated in the ',(0,n.mdx)("a",{parentName:"p",href:"#general-debugging"},"General debugging")," section above."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"headers['x-ow-extra-logging'] = 'on'\n")),(0,n.mdx)("h2",{id:"action-authentication-errors"},"Action authentication errors"),(0,n.mdx)("p",null,"When Adobe authentication and authorization checks are enabled for an action with the ",(0,n.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth")," annotation set to ",(0,n.mdx)("inlineCode",{parentName:"p"},"true"),", you may see the following errors when making requests to the action:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("inlineCode",{parentName:"li"},"request is invalid, failed authorization. Please use a valid user token for this SPA.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("inlineCode",{parentName:"li"},"request is invalid, failed authorization. Please use a valid JWT or user access token for this headless application."))),(0,n.mdx)("p",null,"An SPA is an application with web UI components (located in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"web-src/")," folder). Headless app are back-end microservices without web UI.\nFor authentication and authorization checks, the back-end actions of an SPA are validated against a valid user token which is passed directly from Adobe Experience Cloud (ExC) Shell. "),(0,n.mdx)("p",null,"On the other hand, the actions of a headless app can be validated against a valid user token from ExC Shell or a valid access token generated with the ",(0,n.mdx)("a",{parentName:"p",href:"/project-firefly/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWT.md"},"JWT (Service Account) Authentication"),". Please go through the ",(0,n.mdx)("a",{parentName:"p",href:"../guides/security/index.md"},"Firefly Security Overview")," for more details about SPA vs. headless app authentication. "),(0,n.mdx)("p",null,"If you are developing a headless app but accidentally have the ",(0,n.mdx)("inlineCode",{parentName:"p"},"web-src/")," folder added during the app initialization process, you could remove it by executing the command ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app delete web-assets")," at the root of your application source code folder. This will also assure that your actions are validated against the appropriate JWT auth."),(0,n.mdx)("h2",{id:"debugging-errors-with-state-and-files-sdk"},"Debugging errors with State and Files SDK"),(0,n.mdx)("p",null,"If your code uses Project Firefly ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"State")," or ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-files"},"Files")," SDKs, you cannot use ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/apache/openwhisk-wskdebug"},"wskdebug")," to debug it. The reason is that ",(0,n.mdx)("inlineCode",{parentName:"p"},"wskdebug")," forwards the debugged action from the I/O Runtime system to a local container on your machine and executes it there. This local container is not authorized to access the out-of-the-box cloud storage behind State and Files SDKs, as this would be the case with an action deployed to I/O Runtime."),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"Note: This is not a problem if you configure the State or Files SDKs to connect to your own cloud storage (e.g. Cosmos DB).")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-troubleshooting-md-9218e47b337ef1a100b9.js.map