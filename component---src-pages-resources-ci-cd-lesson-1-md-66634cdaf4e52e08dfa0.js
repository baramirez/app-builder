(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[5798],{21640:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(22122),o=a(19756),i=(a(15007),a(64983)),r=a(99536),p=["components"],s={},l={_frontmatter:s},c=r.Z;function d(e){var t=e.components,a=(0,o.Z)(e,p);return(0,i.mdx)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"lesson-1-setup-cicd"},"Lesson 1: Setup CI/CD"),(0,i.mdx)("p",null,"Project Firefly comes with pre-defined GitHub actions to manage your CI/CD workflow. ",(0,i.mdx)("strong",{parentName:"p"},"GitHub actions can only work once the Firefly app and the corresponding GitHub actions are committed to a GitHub repository.")),(0,i.mdx)("h2",{id:"setup-your-github-repository-for-your-firefly-app"},"Setup your GitHub repository for your Firefly App"),(0,i.mdx)("p",null,"To put your Firefly App up on GitHub, you'll need to create a repository for it to live in. You can follow these ",(0,i.mdx)("a",{parentName:"p",href:"https://help.github.com/en/github/getting-started-with-github/create-a-repo"},"steps")," to create an empty repository.\nOnce your repository is available on GitHub, you can copy your repository url e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://github.com/<org>/<project_name>.git"),"."),(0,i.mdx)("p",null,"Then in the command line, use ",(0,i.mdx)("inlineCode",{parentName:"p"},"git clone https://github.com/<org>/<project_name>.git")," to clone the repository to your local system."),(0,i.mdx)("p",null,"Go to the project folder with ",(0,i.mdx)("inlineCode",{parentName:"p"},"cd <project_name>")," and run the command ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app init")," to bootstrap a new Project Firefly Application from the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI"),", the application generator will ask whether to include GitHub Actions based workflows for Build, Test and Deploy."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"18.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/cb523/bootstrap.webp 320w","/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/797b9/bootstrap.webp 640w","/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/4b075/bootstrap.webp 1280w","/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/d4f07/bootstrap.webp 1384w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/72799/bootstrap.png 320w","/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/6af66/bootstrap.png 640w","/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/21b4d/bootstrap.png 1280w","/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/0e904/bootstrap.png 1384w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/ce95ac917b3bdad69bccb0f3a268016a/21b4d/bootstrap.png",alt:"bootstrap",title:"bootstrap",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"github-actions"},"GitHub actions"),(0,i.mdx)("p",null,"The CI/CD workflow relies on Adobe I/O GitHub Actions published on the GitHub Marketplace:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"adobe/aio-cli-setup-action")," used to install and configure the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli"},"CLI")," on the GitHub infrastructure running the workflow that invoked the action. See ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/marketplace/actions/aio-cli-setup"},"CLI Setup"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"adobe/aio-apps-action")," used to centralize the support for a GitHub workflow to leverage several application specific commands, such as testing via ",(0,i.mdx)("inlineCode",{parentName:"li"},"aio app test")," and deployment via ",(0,i.mdx)("inlineCode",{parentName:"li"},"aio app deploy"),". See ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-apps-action"},"Apps"),".                                                                              ")),(0,i.mdx)("p",null,"By selecting the CI/CD workflow option, the application code will be initialized with an additional ",(0,i.mdx)("inlineCode",{parentName:"p"},".github")," folder at its root. "),(0,i.mdx)("p",null,"This folder contains default GitHub Workflows that can be customized and extended if needed. "),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"pr_test.yml")," is the GitHub action that will run the App unit tests on the stage environment by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app test")," against the requested changes. It will run anytime the ",(0,i.mdx)("a",{parentName:"p",href:"https://help.github.com/en/actions/reference/events-that-trigger-workflows#pull-request-event-pull_request"},"pull_request")," event occurs."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"name: AIO App CI\n\non: [pull_request]\njobs:\n  test:\n    name: Test PR\n    runs-on: ${{ matrix.os }}\n    strategy:\n      matrix:\n        node-version: ['14']\n        os: [macOS-latest, ubuntu-latest, windows-latest]\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v1\n        with:\n          node-version: ${{ matrix.node-version }}\n      - name: npm install\n        run: npm i\n      - name: Setup CLI\n        uses: adobe/aio-cli-setup-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n      - name: Build\n        uses: adobe/aio-apps-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n          command: build\n          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_STAGE }}\n      - name: Test\n        uses: adobe/aio-apps-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n          command: test\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"deploy_stage.yml")," is the GitHub action that will deploy the Firefly App to the stage environment on every new commit on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"master")," branch by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),".\nIt will run anytime the ",(0,i.mdx)("a",{parentName:"p",href:"https://help.github.com/en/actions/reference/events-that-trigger-workflows#push-event-push"},"push")," event occurs on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"master")," branch. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"name: AIO App CI\n\non:\n  push:\n    branches:\n      - master\njobs:\n  deploy:\n    name: Deploy to Stage\n    runs-on: ${{ matrix.os }}\n    strategy:\n      max-parallel: 1\n      matrix:\n        node-version: ['14']\n        os: [ubuntu-latest]\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v1\n        with:\n          node-version: ${{ matrix.node-version }}\n      - name: npm install\n        run: npm i\n      - name: Setup CLI\n        uses: adobe/aio-cli-setup-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n      - name: Build\n        uses: adobe/aio-apps-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n          command: build\n          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_STAGE }}\n      - name: Deploy\n        uses: adobe/aio-apps-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n          command: deploy\n          AIO_RUNTIME_AUTH: ${{ secrets.AIO_RUNTIME_AUTH_STAGE }}\n          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_STAGE }}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"deploy_prod.yml")," is the GitHub action that will deploy the Firefly App to the production environment by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),". It will run anytime the ",(0,i.mdx)("a",{parentName:"p",href:"https://help.github.com/en/actions/reference/events-that-trigger-workflows#release-event-release"},"release")," event occurs. Please read ",(0,i.mdx)("a",{parentName:"p",href:"https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository"},"GitHub's documentation ")," to learn how to perform releases. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"name: AIO App CI\n\non:\n  release:\n    types: [published]\njobs:\n  deploy:\n    name: Deploy to Prod\n    runs-on: ${{ matrix.os }}\n    strategy:\n      max-parallel: 1\n      matrix:\n        node-version: ['14']\n        os: [ubuntu-latest]\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v1\n        with:\n          node-version: ${{ matrix.node-version }}\n      - name: npm install\n        run: npm i\n      - name: Setup CLI\n        uses: adobe/aio-cli-setup-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n      - name: Build\n        uses: adobe/aio-apps-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n          command: build\n          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_PROD }}\n      - name: Deploy\n        uses: adobe/aio-apps-action@1.0.0\n        with:\n          os: ${{ matrix.os }}\n          command: deploy\n          AIO_RUNTIME_AUTH: ${{ secrets.AIO_RUNTIME_AUTH_PROD }}\n          AIO_RUNTIME_NAMESPACE: ${{ secrets.AIO_RUNTIME_NAMESPACE_PROD }} \n")),(0,i.mdx)("p",null,"The back-end serverless actions get deployed to Runtime, while the SPA gets deployed to the out-of-the-box CDN for every deployment whether to stage or production.    "),(0,i.mdx)("p",null,"For that, we'll push the project on GitHub with ",(0,i.mdx)("inlineCode",{parentName:"p"},'git commit "Initial commit" && git push origin master')," which will commit the Firefly App to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"master")," branch of the GitHub repository."),(0,i.mdx)("p",null,"The GitHub actions defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"deploy_stage.yml")," will run by default. Go to ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://github.com/<org>/<project_name>/actions")," to see the workflow running:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.375000000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/cb523/workflow-failure.webp 320w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/797b9/workflow-failure.webp 640w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/4b075/workflow-failure.webp 1280w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/f3ff0/workflow-failure.webp 1920w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/a662b/workflow-failure.webp 2560w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/7f17f/workflow-failure.webp 2684w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/72799/workflow-failure.png 320w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/6af66/workflow-failure.png 640w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/21b4d/workflow-failure.png 1280w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/29114/workflow-failure.png 1920w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/c2d13/workflow-failure.png 2560w","/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/ddb69/workflow-failure.png 2684w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/9817a440d7eceb370f033a8f746dd89b/21b4d/workflow-failure.png",alt:"workflow-failure",title:"workflow-failure",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"By default, the workflow will fail as we didn't specify the GitHub secrets yet.")),(0,i.mdx)("h2",{id:"github-secrets"},"GitHub secrets"),(0,i.mdx)("p",null,"To differentiate stage from production, the GitHub actions rely on ",(0,i.mdx)("a",{parentName:"p",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"GitHub secrets"),".\nEncrypted secrets allow you to store sensitive information, such as access tokens, in your repository. "),(0,i.mdx)("p",null,"By default, the secrets required for ",(0,i.mdx)("inlineCode",{parentName:"p"},"deploy_prod.yml")," for the ",(0,i.mdx)("strong",{parentName:"p"},"production environment")," are named: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"AIO_RUNTIME_NAMESPACE_PROD")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"AIO_RUNTIME_AUTH_PROD"))),(0,i.mdx)("p",null,"And the secrets required for ",(0,i.mdx)("inlineCode",{parentName:"p"},"deploy_stage.yml")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"pr_test.yml")," for the ",(0,i.mdx)("strong",{parentName:"p"},"stage environment")," are named: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"AIO_RUNTIME_NAMESPACE_STAGE")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"AIO_RUNTIME_AUTH_STAGE"))),(0,i.mdx)("p",null,"To add a secret to your project:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Go to ",(0,i.mdx)("inlineCode",{parentName:"li"},"https://github.com/<org>/<project_name>/settings/secrets")),(0,i.mdx)("li",{parentName:"ol"},"Type the name of your secret e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"AIO_RUNTIME_NAMESPACE_PROD"),' in the "Name" input box.'),(0,i.mdx)("li",{parentName:"ol"},"Type the value for your secret. ")),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.06250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/cb523/secrets.webp 320w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/797b9/secrets.webp 640w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/4b075/secrets.webp 1280w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/f3ff0/secrets.webp 1920w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/b33bd/secrets.webp 2020w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/72799/secrets.png 320w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/6af66/secrets.png 640w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/21b4d/secrets.png 1280w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/29114/secrets.png 1920w","/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/26162/secrets.png 2020w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/5e1c03d74d39c30b42e6bbcead6f78a9/21b4d/secrets.png",alt:"secrets",title:"secrets",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"If you can't add secrets to the repository, the reason could be that:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You're not the repository owner if the repository is a user account repository."),(0,i.mdx)("li",{parentName:"ul"},"You don't have admin access for an organization repository."),(0,i.mdx)("li",{parentName:"ul"},"You don't have write access to the repository if you're using the ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.github.com/v3/actions/secrets/#create-or-update-a-secret-for-a-repository"},"GitHub Actions secrets API"))),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"The secrets value can be retrieved in the ",(0,i.mdx)("a",{parentName:"strong",href:"https://console.adobe.io/"},"Developer Console"))," from where you can download the stage and production namespace and credential."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/cb523/developer-console.webp 320w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/797b9/developer-console.webp 640w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/4b075/developer-console.webp 1280w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/f3ff0/developer-console.webp 1920w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/ae564/developer-console.webp 2004w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/72799/developer-console.png 320w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/6af66/developer-console.png 640w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/21b4d/developer-console.png 1280w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/29114/developer-console.png 1920w","/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/813c1/developer-console.png 2004w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/869e85e4cd863840a5b5d3b7eb96a315/21b4d/developer-console.png",alt:"developer-console",title:"developer-console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,i.mdx)("p",null,"Follow these steps to retrieve the value for the secrets ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_RUNTIME_NAMESPACE_STAGE"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_RUNTIME_AUTH_STAGE")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_RUNTIME_NAMESPACE_PROD"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_RUNTIME_AUTH_PRD"),": "),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Go to the ",(0,i.mdx)("a",{parentName:"li",href:"https://console.adobe.io/"},"Developer Console")),(0,i.mdx)("li",{parentName:"ol"},"Select the right org, project and workspace. "),(0,i.mdx)("li",{parentName:"ol"},"Click on the Download all button on the top right. ")),(0,i.mdx)("p",null,"This will download a ",(0,i.mdx)("inlineCode",{parentName:"p"},"json")," file like the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n    "project": {\n        "id": "...",\n        "name": "...",\n        "title": "...",\n        "org": {\n            "id": "...",\n            "name": "...",\n            "ims_org_id": "..."\n        },\n        "workspace": {\n            "id": "...",\n            "name": "...",\n            "title": "...",\n            "description": "...",\n            "action_url": "...",\n            "app_url": "...",\n            "details": {\n                "credentials": [],\n                "services": [],\n                "runtime": {\n                    "namespaces": [\n                        {\n                            "name": AIO_RUNTIME_NAMESPACE_VALUE,\n                            "auth": AIO_RUNTIME_AUTH_VALUE\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\n')),(0,i.mdx)("p",null,"Now you can copy the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_RUNTIME_NAMESPACE_VALUE")," and to ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_RUNTIME_AUTH_VALUE")," to your GitHub secrets.\nSimply repeat the steps for your stage / production workspace. "),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Alternatively you can also use the CLI to retrieve these values.")," "),(0,i.mdx)("p",null,"Simply run the following commands:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"aio where // Shows you where your CLI config points to in terms of org/project/workspace\n\naio console org list // List which org you can work with\naio console org select <orgId> // Select the org you want to work with\n\naio console project list // List which project you can work with\naio console project select <projectid> // Select the project you want to work with\n\naio console workspace list // List which workspace you can work with\naio console workspace select <wkspId> // Select the workspace you want to work with\n\naio app use -m // Merge the selected environment settings from the Developer Console into the current working environment.  \n")),(0,i.mdx)("p",null,"Then go to the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file in your project and copy the values of ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_runtime_namespace")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_runtime_auth")," into your GitHub secrets.\nSimply repeat the steps for stage / production by switching to another workspace with ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio console workspace select <wkspId>"),".   "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-ci-cd-lesson-1-md-66634cdaf4e52e08dfa0.js.map