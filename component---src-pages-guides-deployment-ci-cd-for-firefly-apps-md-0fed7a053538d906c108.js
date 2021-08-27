(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[8621],{47623:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return d}});var i=a(22122),o=a(19756),n=(a(15007),a(64983)),r=a(99536),c=["components"],p={},l={_frontmatter:p},s=r.Z;function d(e){var t=e.components,a=(0,o.Z)(e,c);return(0,n.mdx)(s,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"cicd-for-project-firefly-applications"},"CI/CD for Project Firefly Applications"),(0,n.mdx)("p",null,"Continuous integration and continuous delivery (CI/CD) is a crucial component for the success of any development team -- a team working on Project Firefly Applications is no difference. Allowing the development team to focus on requirements, code quality, and security with deployment automated, CI/CD is one of the best practice to implement and for us to support. "),(0,n.mdx)("p",null,"Project Firefly allows you to manage multiple environments. This is achieved through ",(0,n.mdx)("strong",{parentName:"p"},"Workspace")," in Adobe Developer Console. Every new application project created by an entitled organization administrator or developer in the Developer Console will be setup with two named workspaces: Stage and Production. Each workspace will have its own setup:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"List of Adobe services to integrate via user or technical user accounts"),(0,n.mdx)("li",{parentName:"ul"},"Runtime namespace"),(0,n.mdx)("li",{parentName:"ul"},"Cloud storage for the SPA static files "),(0,n.mdx)("li",{parentName:"ul"},"CDN delegation and sub-domain provisioned on ",(0,n.mdx)("inlineCode",{parentName:"li"},"adobeio-static.net")),(0,n.mdx)("li",{parentName:"ul"},"Related credentials and secrets (API Key, access token, Runtime namespace credentials...)")),(0,n.mdx)("p",null,"The entitled organization users will also be allowed to create as many additional workspaces as required by their project, whether this is to add an extra stage (e.g. qa, preproduction...) to match their infrastructure needs, or to define developer specific workspaces for each of their development team member to work locally against."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.87500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/e780bade413b605c23cef35b562181ba/cb523/high-level-ci-cd-architecture.webp 320w","/project-firefly/static/e780bade413b605c23cef35b562181ba/797b9/high-level-ci-cd-architecture.webp 640w","/project-firefly/static/e780bade413b605c23cef35b562181ba/4b075/high-level-ci-cd-architecture.webp 1280w","/project-firefly/static/e780bade413b605c23cef35b562181ba/f3ff0/high-level-ci-cd-architecture.webp 1920w","/project-firefly/static/e780bade413b605c23cef35b562181ba/a662b/high-level-ci-cd-architecture.webp 2560w","/project-firefly/static/e780bade413b605c23cef35b562181ba/e9629/high-level-ci-cd-architecture.webp 3320w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/e780bade413b605c23cef35b562181ba/72799/high-level-ci-cd-architecture.png 320w","/project-firefly/static/e780bade413b605c23cef35b562181ba/6af66/high-level-ci-cd-architecture.png 640w","/project-firefly/static/e780bade413b605c23cef35b562181ba/21b4d/high-level-ci-cd-architecture.png 1280w","/project-firefly/static/e780bade413b605c23cef35b562181ba/29114/high-level-ci-cd-architecture.png 1920w","/project-firefly/static/e780bade413b605c23cef35b562181ba/c2d13/high-level-ci-cd-architecture.png 2560w","/project-firefly/static/e780bade413b605c23cef35b562181ba/f71a1/high-level-ci-cd-architecture.png 3320w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/e780bade413b605c23cef35b562181ba/21b4d/high-level-ci-cd-architecture.png",alt:"High-Level CI/CD architecture",title:"High-Level CI/CD architecture",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h2",{id:"local-application-development"},"Local Application Development"),(0,n.mdx)("p",null,"In your project, there could be several developers working on the same application code. They may clone the code from the same branch, or create different branches for new features, but the deployments should all be different so that they do not interfere each other. Each developer is able to use individual workspaces described above to create their own deployment. "),(0,n.mdx)("p",null,"The pre-requisites are, application code already cloned to the local machine, and the workspace config JSON file that is downloaded from Adobe Developer Console. Then in the terminal, navigate to the home directory of the application code and run this command:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app use path/to/workspace.json\n")),(0,n.mdx)("p",null,"You can then check if the workspace is set up for the app by verifying the ",(0,n.mdx)("inlineCode",{parentName:"p"},".aio")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},".env")," files, which contain the target workspace details."),(0,n.mdx)("h2",{id:"github-actions-support"},"GitHub Actions Support"),(0,n.mdx)("p",null,"A sample CI/CD workflow is provided out-of-the-box on top of ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),".\nUpon bootstrapping of a new Project Firefly Application from the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," by using the ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app init")," command, the application generator asks the developer whether to ",(0,n.mdx)("inlineCode",{parentName:"p"},"include GitHub Actions based workflows for Build, Test and Deploy"),"."),(0,n.mdx)("p",null,"If the developer selects this option, the application code will be initialized with an additional ",(0,n.mdx)("inlineCode",{parentName:"p"},".github")," folder at its root. This folder contains default ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/generator-aio-app/tree/master/generators/add-ci/.github/workflows"},"GitHub Workflows")," that can be extended at application level depending on the developer's needs."),(0,n.mdx)("h3",{id:"github-workflows"},"Github Workflows"),(0,n.mdx)("p",null,"The default GitHub Workflows enable the following actions based on specific Github events triggered on the application repository:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"On ",(0,n.mdx)("inlineCode",{parentName:"p"},"Pull Request"),", the application unit tests are executed by calling ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app test")," against the requested changes. See the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/pr_test.yml"},"PR workflow"),".")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"On ",(0,n.mdx)("inlineCode",{parentName:"p"},"Branch Merge"),", the application gets deployed to the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Stage")," workspace by calling ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),". The back-end serverless actions get deployed to Runtime, while the SPA gets deployed to the out-of-the-box CDN if the application has a web UI. See the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/deploy_stage.yml"},"Deploy Stage workflow"),".")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"On ",(0,n.mdx)("inlineCode",{parentName:"p"},"Repository Release"),", the application gets deployed to the ",(0,n.mdx)("inlineCode",{parentName:"p"},"Production")," workspace by calling ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),". The back-end serverless actions get deployed to Runtime, while the SPA gets deployed to the out-of-the-box CDN if the application has a web UI. See the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/generator-aio-app/blob/master/generators/add-ci/.github/workflows/deploy_prod.yml"},"Deploy Prod workflow"),"."))),(0,n.mdx)("p",null,"Each of the default ",(0,n.mdx)("a",{parentName:"p",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow"},"Github Workflows")," leverages two core features provided by Github: ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/features/actions"},"Github Actions")," and ",(0,n.mdx)("a",{parentName:"p",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"Github Secrets"),"."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.50000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/f1f5047e686220730b1199a6edb973bf/cb523/ci-cd-github-actions-architecture.webp 320w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/797b9/ci-cd-github-actions-architecture.webp 640w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/4b075/ci-cd-github-actions-architecture.webp 1280w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/f3ff0/ci-cd-github-actions-architecture.webp 1920w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/a662b/ci-cd-github-actions-architecture.webp 2560w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/5c142/ci-cd-github-actions-architecture.webp 2964w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/f1f5047e686220730b1199a6edb973bf/72799/ci-cd-github-actions-architecture.png 320w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/6af66/ci-cd-github-actions-architecture.png 640w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/21b4d/ci-cd-github-actions-architecture.png 1280w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/29114/ci-cd-github-actions-architecture.png 1920w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/c2d13/ci-cd-github-actions-architecture.png 2560w","/project-firefly/static/f1f5047e686220730b1199a6edb973bf/12cf6/ci-cd-github-actions-architecture.png 2964w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/f1f5047e686220730b1199a6edb973bf/21b4d/ci-cd-github-actions-architecture.png",alt:"CI/CD with Github Actions",title:"CI/CD with Github Actions",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h3",{id:"github-actions-for-aio-cli"},"GitHub Actions for AIO CLI"),(0,n.mdx)("p",null,"The following ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," have been built to support the usage of the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," in a CI/CD workflow running within GitHub infrastructure."),(0,n.mdx)("p",null,"They are used in the default ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/generator-aio-app/tree/master/generators/add-ci/.github/workflows"},"Project Firefly Apps workflows"),", but can also be used further in custom GitHub workflows built by developers to fulfil their project needs."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"The ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli-setup-action"},"CLI Setup Action")," can be used to install and configure the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," on the GitHub infrastructure running the workflow that invoked the action.")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"The ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-apps-action"},"Apps Action")," centralizes the support for a GitHub workflow to leverage several application specific commands, such as testing via ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app test")," and deployment via ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),"."))),(0,n.mdx)("p",null,"These both actions have been published and can be found on GitHub Marketplace. See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/marketplace/actions/aio-cli-setup"},"CLI Setup")," and ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/marketplace/actions/aio-apps"},"Apps"),"."),(0,n.mdx)("h3",{id:"github-secrets"},"GitHub Secrets"),(0,n.mdx)("p",null,"The following ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," leverage ",(0,n.mdx)("a",{parentName:"p",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"GitHub Secrets")," to store environment specific secrets."),(0,n.mdx)("p",null,"They currently need an administrator to manually add the following secrets to the application repository:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"AIO_RUNTIME_NAMESPACE_STAGE"),": the name of the Runtime namespace associated to the ",(0,n.mdx)("inlineCode",{parentName:"li"},"Stage")," Project Firefly workspace."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"AIO_RUNTIME_AUTH_STAGE"),": the credentials for the Runtime namespace associated to the ",(0,n.mdx)("inlineCode",{parentName:"li"},"Stage")," Project Firefly workspace."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"AIO_RUNTIME_NAMESPACE_PROD"),": the name of the Runtime namespace associated to the ",(0,n.mdx)("inlineCode",{parentName:"li"},"Prod")," Project Firefly workspace."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"AIO_RUNTIME_AUTH_PROD"),": the credentials for the Runtime namespace associated to the ",(0,n.mdx)("inlineCode",{parentName:"li"},"Prod")," Project Firefly workspace.")),(0,n.mdx)("p",null,"We aim to simplify this configuration process in the future. "),(0,n.mdx)("h2",{id:"bring-your-own-cicd-pipeline"},"Bring your own CI/CD pipeline"),(0,n.mdx)("p",null,"The default implementation of the CI/CD workflow for Project Firefly Applications relies on GitHub capabilities. However, a developer might need an alternative solution due to project specific requirements, or team preference."),(0,n.mdx)("p",null,"In that case, we recommend implementing the custom solution with focus on two main aspects:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The ",(0,n.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"CLI")," is the official tool to manage the Project Firefly Application development lifecycle from bootstrapping to deployment, and can be used within a CI/CD workflow for automation purpose."),(0,n.mdx)("li",{parentName:"ul"},"Security is a key requirement, and any alternative CI/CD workflow should propose a solid secret management solution to store the credentials required to deploy a Project Firefly Application against a specific ",(0,n.mdx)("strong",{parentName:"li"},"Workspace"),".")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-deployment-ci-cd-for-firefly-apps-md-0fed7a053538d906c108.js.map