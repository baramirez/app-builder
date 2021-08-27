(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[7165],{86949:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return m},default:function(){return u}});var n=o(22122),a=o(19756),i=(o(15007),o(64983)),r=o(99536),l=["components"],m={},s={_frontmatter:m},d=r.Z;function u(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.mdx)(d,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"configure-services"},"Configure services"),(0,i.mdx)("h2",{id:"create-azure-blob-storages"},"Create Azure blob storages"),(0,i.mdx)("p",null,"You need to ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal",title:"Create storage account and container"},"create Azure blob storage")," on your Azure account. Then, create two containers:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"First, name it ",(0,i.mdx)("inlineCode",{parentName:"li"},"imgix")," - it will be used as assets source for the ",(0,i.mdx)("strong",{parentName:"li"},"imgIX")," service."),(0,i.mdx)("li",{parentName:"ul"},"The second one, name it ",(0,i.mdx)("inlineCode",{parentName:"li"},"source")," - it will be required only for local testing purposes to simulate AEM assets cloud\nstorage.")),(0,i.mdx)("h2",{id:"configure-imgix"},"Configure imgIX"),(0,i.mdx)("p",null,"On your imgIX account, you need to ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.imgix.com/setup/creating-sources/microsoft-azure",title:"Setting up your Microsoft Azure Source"},"create a source pointing to the Azure blob storage"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"During the setup, you define the name of the imgIX subdomain serving transformed images. Write down that domain as we\nwill need it later."),(0,i.mdx)("li",{parentName:"ul"},"In the ",(0,i.mdx)("strong",{parentName:"li"},"Security")," section check ",(0,i.mdx)("strong",{parentName:"li"},"Secure URLs")," checkbox"),(0,i.mdx)("li",{parentName:"ul"},"Once the source provisioning is finished, you need to open it and click on the ",(0,i.mdx)("strong",{parentName:"li"},"Show Token")," button in the\n",(0,i.mdx)("strong",{parentName:"li"},"Security")," section. Write down that token as we will need it later.")),(0,i.mdx)("p",null,"To test your configuration:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Upload any asset to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"imgix")," blob storage container, e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"image.png")),(0,i.mdx)("li",{parentName:"ol"},"Go to the ",(0,i.mdx)("a",{parentName:"li",href:"https://dashboard.imgix.com/tools"},"https://dashboard.imgix.com/tools")," and sign image URL (use the URL\n",(0,i.mdx)("inlineCode",{parentName:"li"},"https://<your-subdomain>.imgix.net/image.png"),")"),(0,i.mdx)("li",{parentName:"ol"},"Open signed URL in the browser to verify the image is loaded.")),(0,i.mdx)("h2",{id:"configure-adobe-io"},"Configure Adobe IO"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Go to the ",(0,i.mdx)("a",{parentName:"li",href:"https://console.adobe.io",title:"Adobe IO Console"},"https://console.adobe.io")," and create a ",(0,i.mdx)("a",{parentName:"li",href:"../../getting_started/first_app.md#2-creating-a-new-project-on-developer-console",title:"Creating new project on Adobe developer console"},"new project using Firefly template"),"."),(0,i.mdx)("li",{parentName:"ol"},"Add the following services to your project workspace:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Asset Compute"),(0,i.mdx)("li",{parentName:"ul"},"I/O Management API"),(0,i.mdx)("li",{parentName:"ul"},"I/O Events"))),(0,i.mdx)("li",{parentName:"ol"},"When adding the first service, you will be asked to generate keys pair or upload your own. Pick ",(0,i.mdx)("strong",{parentName:"li"},"Generate keys\npair")," and your keys will be downloaded as a zip file."),(0,i.mdx)("li",{parentName:"ol"},"Unzip the file and write down the location to the ",(0,i.mdx)("strong",{parentName:"li"},"private.key"),".")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-custom-asset-compute-worker-lesson-1-md-e402e761429884f452d0.js.map