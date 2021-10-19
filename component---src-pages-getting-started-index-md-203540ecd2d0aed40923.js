(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[3849],{76211:function(e,o,a){"use strict";a.r(o),a.d(o,{_frontmatter:function(){return s},default:function(){return u}});var t=a(22122),n=a(19756),r=(a(15007),a(64983)),i=a(99536),l=a(81292),d=["components"],s={},m={_frontmatter:s},p=i.Z;function u(e){var o=e.components,a=(0,n.Z)(e,d);return(0,r.mdx)(p,(0,t.Z)({},m,a,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"setting-up-your-environment"},"Setting up Your Environment"),(0,r.mdx)("p",null,"During Developer Preview, please follow the steps below to acquire access and credentials, and to set up your local environment to build your first Project Firefly."),(0,r.mdx)("h2",{id:"acquire-access-and-credentials"},"Acquire Access and Credentials"),(0,r.mdx)("p",null,"Please first follow instructions in ",(0,r.mdx)("a",{parentName:"p",href:"../overview/getting_access.md"},"How to Get Access to Project Firefly")," to join the Developer Preview program. "),(0,r.mdx)("p",null,"Once you have been added to the program, you will need the following information for kicking off your development work. "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An Adobe Experience Cloud Organization (required)",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"An Adobe Experience Cloud Org is required if you would like to use APIs from Adobe, access Developer Console, set up a Firefly project, publish custom applications, and/or access published custom applications."),(0,r.mdx)("li",{parentName:"ul"},"As an enterprise customer or partner, you should have access to an Adobe Experience Cloud Org. If you do not have access to an organization:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Customers: Please contact your account manager for access."),(0,r.mdx)("li",{parentName:"ul"},"Partners: Please contact your partner manager or request sandbox access via ",(0,r.mdx)("a",{parentName:"li",href:"https://solutionpartners.adobe.com/home.html"},"Adobe Solution Partner Portal"),"."))))),(0,r.mdx)("li",{parentName:"ul"},"Access to Adobe Developer Console (required)",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Adobe Developer Console gives you access to APIs, SDKs and developer tools to build on, integrate, and extend Adobe products. You will set up your credentials using the Developer Console. "),(0,r.mdx)("li",{parentName:"ul"},"You must have developer role or system admin role for an Adobe Experience Cloud organization to access Adobe Developer Console."))),(0,r.mdx)("li",{parentName:"ul"},"A GitHub Account (optional)",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/"},"GitHub")," account is optional for setting up your CI/CD workflow. ")))),(0,r.mdx)("h2",{id:"local-environment-set-up"},"Local Environment Set Up"),(0,r.mdx)("h3",{id:"required-tools"},"Required tools"),(0,r.mdx)("p",null,"These prerequisites should be fulfilled on the developer's machine:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"NodeJS")," ",(0,r.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/blog/release/v14.17.0/"},">=12.22 ... 14.17-LTS"),", odd versions not recommended). It should also install npm together. We recommend using ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm/blob/master/README.md"},"nvm")," to manage NodeJS installation and versions on the developer's machine. "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"Adobe I/O CLI"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install -g @adobe/aio-cli")),(0,r.mdx)("li",{parentName:"ul"},"If you already have Adobe I/O CLI on your local, please ensure you have the latest version of Adobe I/O CLI installed. (Current version: ",(0,r.mdx)(l.Z,{mdxType:"NPMBadge"}),")",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"For the Adobe I/O CLI, you can check the version through ",(0,r.mdx)("inlineCode",{parentName:"li"},"aio -v")," and compare it with ",(0,r.mdx)("inlineCode",{parentName:"li"},"npm show @adobe/aio-cli version"),". If your CLI is outdated, update your CLI by running ",(0,r.mdx)("inlineCode",{parentName:"li"},"npm install -g @adobe/aio-cli"),". "),(0,r.mdx)("li",{parentName:"ul"},"If your Adobe I/O CLI is up to date, you can simply run ",(0,r.mdx)("inlineCode",{parentName:"li"},"aio update")," to ensure all core plugins are updated as well."),(0,r.mdx)("li",{parentName:"ul"},"Other than the checking the version on your CLI, whenever a new version of Adobe I/O CLI is updated, we will inform you on your command line by writing a message like this out before the command output. This message last for 7 days after a new release.",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre"},"›   Warning: @adobe/aio-cli update available from 3.3.0 to 3.4.1.\n›   Run npm install -g @adobe/aio-cli to update.\n")))))))),(0,r.mdx)("h4",{id:"supported-local-environment"},"Supported Local Environment"),(0,r.mdx)("p",null,"We aim to provide the similar quality of local development experience on both Windows 10 and macOS 10.14 and higher.\nOur ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," and its plugins are automatically tested against NodeJS versions 10 and 12 on both Windows and ",(0,r.mdx)("a",{parentName:"p",href:"http://releases.ubuntu.com/16.04/"},"Linux Xenial"),"."),(0,r.mdx)("h4",{id:"supported-terminals-for-the-cli"},"Supported terminals for the CLI"),(0,r.mdx)("p",null,"Our ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," uses the popular ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/inquirer"},"inquirer")," package for all its interactive functionalities, such as the application generators."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/inquirer#support-os-terminals"},"inquirer's Support section")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/inquirer#know-issues"},"its known issues")," for up-to-date details."),(0,r.mdx)("h3",{id:"optional-tools"},"Optional tools"),(0,r.mdx)("p",null,"The following set up is required if you intend to use the local development features provided by the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI"),": "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"Visual Studio Code")," (VS Code) as the supported IDE for editor, debuggger, etc. You can use any other IDE as a code editor, but advanced usage (e.g. debugger) is not yet supported."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.oracle.com/technetwork/java/javase/overview/index.html"},"Java Development Kit (JDK)")," (at least Java 11)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/Microsoft/vscode-chrome-debug"},"Chrome debugger extension in VSCode")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker Desktop"))),(0,r.mdx)("p",null,"The following commands must be executed to install the required Docker images:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"# NodeJS 10 images\ndocker pull openwhisk/action-nodejs-v10:latest\ndocker pull adobeapiplatform/adobe-action-nodejs-v10:3.0.21\n\n# NodeJS 12 images\ndocker pull openwhisk/action-nodejs-v12:latest\ndocker pull adobeapiplatform/adobe-action-nodejs-v12:3.0.22\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," Developers on Windows machines should make sure that they are using Linux containers for the images above.\nThe steps to switch to Linux containers are described in the ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/"},"Docker for Windows documentation"),"."),(0,r.mdx)("h2",{id:"next-step"},"Next Step"),(0,r.mdx)("p",null,"Now that you have your environment set up, you can start ",(0,r.mdx)("a",{parentName:"p",href:"first_app.md"},"creating your own Project Firefly application"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-md-203540ecd2d0aed40923.js.map