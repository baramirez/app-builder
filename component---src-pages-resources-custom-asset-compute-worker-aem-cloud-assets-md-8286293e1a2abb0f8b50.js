(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[9908],{53491:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return m}});var s=a(22122),i=a(19756),o=(a(15007),a(64983)),r=a(99536),n=["components"],c={},p={_frontmatter:c},l=r.Z;function m(e){var t=e.components,a=(0,i.Z)(e,n);return(0,o.mdx)(l,(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-aem-as-cloud-assets-works"},"How AEM as Cloud assets works"),(0,o.mdx)("p",null,"Asset binaries are no longer processed by the AEM instance. AEM only coordinates access to the Azure Blob storage where binaries are stored."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"713px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.93750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/c4858b3c4c344b0264a2e25bf6aa0581/cb523/aemcloud-assets-overview.webp 320w","/project-firefly/static/c4858b3c4c344b0264a2e25bf6aa0581/797b9/aemcloud-assets-overview.webp 640w","/project-firefly/static/c4858b3c4c344b0264a2e25bf6aa0581/27858/aemcloud-assets-overview.webp 713w"],sizes:"(max-width: 713px) 100vw, 713px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/c4858b3c4c344b0264a2e25bf6aa0581/cb69c/aemcloud-assets-overview.jpg 320w","/project-firefly/static/c4858b3c4c344b0264a2e25bf6aa0581/c08c5/aemcloud-assets-overview.jpg 640w","/project-firefly/static/c4858b3c4c344b0264a2e25bf6aa0581/def00/aemcloud-assets-overview.jpg 713w"],sizes:"(max-width: 713px) 100vw, 713px",type:"image/jpeg"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/c4858b3c4c344b0264a2e25bf6aa0581/def00/aemcloud-assets-overview.jpg",alt:"AEM as Cloud - Assets overview",title:"AEM as Cloud - Assets overview",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"The right-hand red box on the diagram called ",(0,o.mdx)("strong",{parentName:"p"},"Asset microservices")," are the services that are driven by Adobe Asset Compute which is built on top of Adobe IO Runtime. The aim of this service is to:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Perform any kind of asset binary transformation, such as: resizing, cropping, intelligent cropping, colours\nmanipulation or anything else you can imagine"),(0,o.mdx)("li",{parentName:"ul"},"An image transformation is driven by the Adobe's internal services for image manipulation or by 3rd-party services in\ncase of custom implementation."),(0,o.mdx)("li",{parentName:"ul"},"Store the result of the processing back to AEM as an asset rendition.")),(0,o.mdx)("p",null,"The high level architecture of the Asset Compute service is shown below."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"942px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.68750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/4c6d83a6b68034e2b97cd987ac999f3a/cb523/asset-compute-overview.webp 320w","/project-firefly/static/4c6d83a6b68034e2b97cd987ac999f3a/797b9/asset-compute-overview.webp 640w","/project-firefly/static/4c6d83a6b68034e2b97cd987ac999f3a/a5086/asset-compute-overview.webp 942w"],sizes:"(max-width: 942px) 100vw, 942px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/4c6d83a6b68034e2b97cd987ac999f3a/cb69c/asset-compute-overview.jpg 320w","/project-firefly/static/4c6d83a6b68034e2b97cd987ac999f3a/c08c5/asset-compute-overview.jpg 640w","/project-firefly/static/4c6d83a6b68034e2b97cd987ac999f3a/10fd8/asset-compute-overview.jpg 942w"],sizes:"(max-width: 942px) 100vw, 942px",type:"image/jpeg"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/4c6d83a6b68034e2b97cd987ac999f3a/10fd8/asset-compute-overview.jpg",alt:"Asset Compute service architecture",title:"Asset Compute service architecture",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"A usual flow of the data goes through the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Once an asset is uploaded, AEM sends a processing job to the Asset Compute service.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"A job carries information such as the location of the source asset (on azure blob storage), desired rendition\nformat (png, jpg, etc.), rendition sizes and/or quality, etc."),(0,o.mdx)("li",{parentName:"ul"},"Optionally, the job can hold extra parameters defined on AEM if a custom worker is used."))),(0,o.mdx)("li",{parentName:"ol"},"Asset Compute service immediately returns the job ID back to the AEM and dispatches the job among available workers:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"As you can see from the diagram, workers can be Adobe built-in workers or a custom worker, this is the thing we're\nabout to build in this article."))),(0,o.mdx)("li",{parentName:"ol"},"When the worker is invoked, it usually downloads the source asset from the binary cloud storage and either forwards\nit to the third-party service for processing or does the image processing itself."),(0,o.mdx)("li",{parentName:"ol"},"Once the worker's job is done, it uploads the result back to the binary cloud storage and notifies Asset Compute\nservice it's done."),(0,o.mdx)("li",{parentName:"ol"},'Asset Compute service generates an asynchronous event via the "Adobe I/O Events" service and the processing flow\nfinishes.'),(0,o.mdx)("li",{parentName:"ol"},"Because of the asynchronous nature of the processing (AEM doesn't block itself waiting for a result), AEM has to\nperiodically poll the IO Events service for a given job ID to get its status."),(0,o.mdx)("li",{parentName:"ol"},"If the IO Events journal returns that the job is finished, AEM updates a JCR representation of the asset with the\ninfo about the generated renditions (links internally the JCR rendition node to the binary cloud storage where the\nrendition binary sits)")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-custom-asset-compute-worker-aem-cloud-assets-md-8286293e1a2abb0f8b50.js.map