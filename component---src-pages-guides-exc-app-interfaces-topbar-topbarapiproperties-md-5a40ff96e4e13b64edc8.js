(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[761],{60150:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return d}});var r=a(22122),t=a(19756),p=(a(15007),a(64983)),o=a(99536),m=["components"],l={},s={_frontmatter:l},i=o.Z;function d(e){var n=e.components,a=(0,t.Z)(e,m);return(0,p.mdx)(i,(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"interface-topbarapiproperties"},"Interface: TopbarApiProperties"),(0,p.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"TopbarApiProperties")),(0,p.mdx)("p",{parentName:"li"},"↳ ",(0,p.mdx)("a",{parentName:"p",href:"topbar.topbarapi.md"},"TopbarApi")))),(0,p.mdx)("h2",{id:"index"},"Index"),(0,p.mdx)("h3",{id:"properties"},"Properties"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"topbar.topbarapiproperties.md#customenvlabel"},"customEnvLabel")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"topbar.topbarapiproperties.md#solution"},"solution")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"topbar.topbarapiproperties.md#workspaces"},"workspaces"))),(0,p.mdx)("h2",{id:"properties-1"},"Properties"),(0,p.mdx)("h3",{id:"customenvlabel"},"customEnvLabel"),(0,p.mdx)("p",null,"• ",(0,p.mdx)("strong",{parentName:"p"},"customEnvLabel"),": ",(0,p.mdx)("em",{parentName:"p"},"string")),(0,p.mdx)("p",null,"Gets or sets a custom environment label in the shell."),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},(0,p.mdx)("em",{parentName:"strong"},"Example:"))),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-typescript"},"topbar.customEnvLabel = 'Beta';\n")),(0,p.mdx)("hr",null),(0,p.mdx)("h3",{id:"solution"},"solution"),(0,p.mdx)("p",null,"• ",(0,p.mdx)("strong",{parentName:"p"},"solution"),": ",(0,p.mdx)("em",{parentName:"p"},(0,p.mdx)("a",{parentName:"em",href:"topbar.solution.md"},"Solution"))),(0,p.mdx)("p",null,"Configuration for solution name and hero."),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},(0,p.mdx)("em",{parentName:"strong"},"Example:"))),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-typescript"},"topbar.solution = {\n  icon: 'AdobeExperienceCloud',\n  title: 'Adobe Experience Cloud22',\n  shortTitle: 'AEC'\n};\n")),(0,p.mdx)("hr",null),(0,p.mdx)("h3",{id:"workspaces"},"workspaces"),(0,p.mdx)("p",null,"• ",(0,p.mdx)("strong",{parentName:"p"},"workspaces"),": ",(0,p.mdx)("em",{parentName:"p"},"WorkspaceMenu[]")),(0,p.mdx)("p",null,"Configuration for the Shell workspaces. Workspace names should be unique, and should be\nlocalized using the unified shell locale prior to setting runtime.workspaces."),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-typescript"},"topbar.workspaces = [\n  {name: 'Home', url: '/'},\n  {name: 'ABC', url: '/abc'},\n  {name: 'DEF', url: '/def'}\n];\n")),(0,p.mdx)("p",null,"Unified shell also supports workspace flyout menus, where clicking on a workspace displays a\ndropdown menu. The top-level workspace is present in the dropdown menu as the first menu item.\nMenus may be nested multiple times, and used in combination with normal workspaces. By default,\nparent menu items will be automatically added to the sub-menu due to how the user interaction\nworks. To prevent this functionality, simply remove the url property on the parent item and it\nwill not be injected into the sub-menu."),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-typescript"},"topbar.workspaces = [\n  {name: 'Home', url: '/'},\n  {name: 'ABC', url: '/abc'},\n  {\n    name: 'DEF',\n    url: '/def',\n    menu: [\n      {\n        name: 'GHI',\n        url: '/def/ghi',\n        menu: [\n          {name: 'JKL', url: '/def/ghi/jkl'}\n        ]\n      }\n    ]\n  }\n];\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-exc-app-interfaces-topbar-topbarapiproperties-md-5a40ff96e4e13b64edc8.js.map