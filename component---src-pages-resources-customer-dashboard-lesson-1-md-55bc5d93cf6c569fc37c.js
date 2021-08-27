(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[6784],{75539:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return l}});var i=t(22122),p=t(19756),n=(t(15007),t(64983)),s=t(99536),r=["components"],o={},d={_frontmatter:o},c=s.Z;function l(e){var a=e.components,t=(0,p.Z)(e,r);return(0,n.mdx)(c,(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"lesson-1-create-a-new-firefly-app-from-campaign-standard-template"},"Lesson 1: Create a New Firefly App from Campaign Standard Template"),(0,n.mdx)("p",null,"To initialize a Firefly app, let's use init command from the CLI."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app init customers-dashboard\n")),(0,n.mdx)("p",null,"You should be selecting the org, project and workspace for your app, and then presented with a few options what you want your app to include (serverless actions, web UI assets, CI/CD pipeline, events). In this lab, we keep all except events."),(0,n.mdx)("p",null,"The next question asks you to select the sample actions to be created as part of the initial app. As customer profiles are pulled from Campaign Standard, we are going to select ",(0,n.mdx)("inlineCode",{parentName:"p"},"Adobe Campaign Standard")," for this question (by pressing ",(0,n.mdx)("inlineCode",{parentName:"p"},"<Space>")," to select / de-select, and ",(0,n.mdx)("inlineCode",{parentName:"p"},"<Enter>")," to confirm the choice)."),(0,n.mdx)("p",null,"Then you will be asked to specify the names of the sample action. Let's name it ",(0,n.mdx)("inlineCode",{parentName:"p"},"get-profiles"),"."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/671518ff49fc383babb0508d0f7d8885/cb523/app-init.webp 320w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/797b9/app-init.webp 640w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/4b075/app-init.webp 1280w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/f3ff0/app-init.webp 1920w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/a6b0b/app-init.webp 2390w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/671518ff49fc383babb0508d0f7d8885/72799/app-init.png 320w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/6af66/app-init.png 640w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/21b4d/app-init.png 1280w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/29114/app-init.png 1920w","/project-firefly/static/671518ff49fc383babb0508d0f7d8885/4a70a/app-init.png 2390w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/671518ff49fc383babb0508d0f7d8885/21b4d/app-init.png",alt:"app-init",title:"app-init",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"What happens next, is that from the command line a NodeJS project is created including the Adobe I/O Runtime actions, configuration files, tests etc. You could explore your project in VS Code, either by opening VSCode -> Open... -> select app folder, or typing the following command."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"code customers-dashboard\n")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"534px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"181.56250000000003%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/22db23343eddb705718425695e6b21ec/cb523/app-explore.webp 320w","/project-firefly/static/22db23343eddb705718425695e6b21ec/22aa8/app-explore.webp 534w"],sizes:"(max-width: 534px) 100vw, 534px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/22db23343eddb705718425695e6b21ec/72799/app-explore.png 320w","/project-firefly/static/22db23343eddb705718425695e6b21ec/a07a7/app-explore.png 534w"],sizes:"(max-width: 534px) 100vw, 534px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/22db23343eddb705718425695e6b21ec/a07a7/app-explore.png",alt:"app-explore",title:"app-explore",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Upon app initialization, some of the mandatory environment variables are automatically defined in the ",(0,n.mdx)("inlineCode",{parentName:"p"},".env")," file, namely ",(0,n.mdx)("inlineCode",{parentName:"p"},"AIO_runtime_namespace"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"AIO_runtime_auth"),", and ",(0,n.mdx)("inlineCode",{parentName:"p"},"SERVICE_API_KEY"),". If they are not set, you can download the Runtime credentials and obtain the API key from I/O Console.  "),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/cb523/acs-api-key.webp 320w","/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/797b9/acs-api-key.webp 640w","/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/4b075/acs-api-key.webp 1280w","/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/99cdd/acs-api-key.webp 1818w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/72799/acs-api-key.png 320w","/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/6af66/acs-api-key.png 640w","/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/21b4d/acs-api-key.png 1280w","/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/019a6/acs-api-key.png 1818w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/9fd638da1a7ba99885dd835c72a69a87/21b4d/acs-api-key.png",alt:"acs-api-key",title:"acs-api-key",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Finally, for Campaign Standard integration, you also need to set the required variable for ",(0,n.mdx)("inlineCode",{parentName:"p"},"CAMPAIGN_STANDARD_TENANT"),". It is usually the subdomain of your Campaign Standard instance. Otherwise, please consult with your Campaign TechOps team for the correct value."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/4d1dd679e5415a50122f92cfed986217/cb523/acs-tenant.webp 320w","/project-firefly/static/4d1dd679e5415a50122f92cfed986217/797b9/acs-tenant.webp 640w","/project-firefly/static/4d1dd679e5415a50122f92cfed986217/4b075/acs-tenant.webp 1280w","/project-firefly/static/4d1dd679e5415a50122f92cfed986217/632ac/acs-tenant.webp 1844w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/4d1dd679e5415a50122f92cfed986217/72799/acs-tenant.png 320w","/project-firefly/static/4d1dd679e5415a50122f92cfed986217/6af66/acs-tenant.png 640w","/project-firefly/static/4d1dd679e5415a50122f92cfed986217/21b4d/acs-tenant.png 1280w","/project-firefly/static/4d1dd679e5415a50122f92cfed986217/80cfc/acs-tenant.png 1844w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/4d1dd679e5415a50122f92cfed986217/21b4d/acs-tenant.png",alt:"acs-tenant",title:"acs-tenant",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"All set environment variables should be then uncommented."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.99999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/cb523/dot-env.webp 320w","/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/797b9/dot-env.webp 640w","/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/4b075/dot-env.webp 1280w","/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/69b14/dot-env.webp 1824w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/72799/dot-env.png 320w","/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/6af66/dot-env.png 640w","/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/21b4d/dot-env.png 1280w","/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/92bb4/dot-env.png 1824w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/8bdef7cf30f71c05b2d343d1ee1074ae/21b4d/dot-env.png",alt:"dot-env",title:"dot-env",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-customer-dashboard-lesson-1-md-55bc5d93cf6c569fc37c.js.map