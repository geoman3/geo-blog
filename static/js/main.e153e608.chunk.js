(this["webpackJsonpgeo-blog"]=this["webpackJsonpgeo-blog"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(15),r=c.n(i),s=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))},a=c(6),j=c(2),l=c(5),o=(c(27),c(1));function b(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("/geo-blog/articles/articleMetaData.json").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(o.jsx)("div",{className:"Home",children:Object(o.jsx)("div",{className:"Featured",children:c.slice(0,4).map((function(e){return Object(o.jsx)(a.b,{className:"FeaturedItem",to:"/article/"+e.filename,children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.preamble})]})})}))})})}c(29);function u(){return Object(o.jsxs)("div",{className:"Navbar",children:[Object(o.jsx)("div",{children:[{path:"/",page:"Home"},{path:"/archive",page:"Archive"},{path:"/about",page:"About"}].map((function(e){return Object(o.jsx)(a.b,{to:e.path,className:"SectionLink",children:Object(o.jsx)("h2",{children:e.page})})}))}),Object(o.jsx)("div",{className:"Geo",children:Object(o.jsx)("h2",{children:"GeoBlog"})})]})}function h(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("/geo-blog/articles/articleMetaData.json").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(o.jsxs)("div",{className:"archive",children:[Object(o.jsx)("h1",{children:"Archive"}),Object(o.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:c.map((function(e){return Object(o.jsx)(a.b,{to:"/article/"+e.filename,style:{color:"white"},children:e.title})}))})]})}function O(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"About"})})}c(30);function d(){return Object(o.jsx)("footer",{className:"Footer"})}var f=c(20);function x(){var e=Object(j.g)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){fetch("/geo-blog/articles/"+e.title).then((function(e){return e.text()})).then((function(e){return r(e)}))}),[e]),Object(o.jsx)("div",{children:Object(o.jsx)(f.a,{children:i})})}c(35);function m(){return Object(o.jsxs)("div",{className:"Main",children:[Object(o.jsx)("div",{className:"Content",children:Object(o.jsxs)(a.a,{basename:"/geo-blog",children:[Object(o.jsx)(u,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",element:Object(o.jsx)(b,{})}),Object(o.jsx)(j.a,{path:"/archive",element:Object(o.jsx)(h,{})}),Object(o.jsx)(j.a,{path:"/about",element:Object(o.jsx)(O,{})}),Object(o.jsx)(j.a,{path:"/article/:title",element:Object(o.jsx)(x,{})})]})]})}),Object(o.jsx)(d,{})]})}r.a.render(Object(o.jsx)(m,{}),document.getElementById("root")),s()}},[[36,1,2]]]);
//# sourceMappingURL=main.e153e608.chunk.js.map