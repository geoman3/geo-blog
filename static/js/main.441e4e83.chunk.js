(this["webpackJsonpgeo-blog"]=this["webpackJsonpgeo-blog"]||[]).push([[0],{357:function(e,t,c){},358:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(49),i=c.n(a),r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,366)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))},s=c(10),j=c(3),l=c(7),o=(c(66),c(1));function b(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("/geo-blog/articles/articleMetaData.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(o.jsx)("div",{className:"Home",children:Object(o.jsx)("div",{className:"Featured",children:c.slice(0,4).map((function(e,t){return Object(o.jsx)(s.b,{className:"FeaturedItem",to:"/article/"+e.filename,children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.preamble})]})})}))})})}c(68);function u(){return Object(o.jsxs)("div",{className:"Navbar",children:[Object(o.jsx)("div",{children:[{path:"/",page:"Home"},{path:"/archive",page:"Archive"},{path:"/about",page:"About"}].map((function(e){return Object(o.jsx)(s.b,{to:e.path,className:"SectionLink",children:Object(o.jsx)("h2",{children:e.page})})}))}),Object(o.jsx)("div",{className:"Geo",children:Object(o.jsx)("h2",{children:"GeoBlog"})})]})}c(69);function h(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("/geo-blog/articles/articleMetaData.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(o.jsx)("div",{className:"archive",children:Object(o.jsx)("div",{className:"archiveList",children:c.map((function(e){var t=new Date(e.timestamp);return Object(o.jsxs)("div",{className:"archiveItem",children:[Object(o.jsxs)(s.b,{to:"/article/"+e.filename,children:[Object(o.jsx)("p",{children:e.title}),Object(o.jsx)("p",{children:t.toISOString().split("T")[0]})]}),Object(o.jsx)("div",{})]})}))})})}function d(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"About"})})}c(70);function O(){return Object(o.jsx)("footer",{className:"Footer",children:Object(o.jsx)("h3",{children:"Site is currently under construction"})})}var f=c(8),x=c(59),m=c(58),g=c(365),v=c(364),p=(c(71),["node","inline","className","children"]);function N(){var e=Object(j.g)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){fetch("/geo-blog/articles/"+e.title).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[e]),Object(o.jsx)("div",{className:"Article",children:Object(o.jsx)(m.a,{className:"Markdown",children:a,transformImageUri:function(e){return"".concat("/geo-blog").concat(e)},components:{code:function(e){e.node;var t=e.inline,c=e.className,n=e.children,a=Object(x.a)(e,p),i=/language-(\w+)/.exec(c||"");return!t&&i?Object(o.jsx)(g.a,Object(f.a)({children:String(n).replace(/\n$/,""),style:v.a,language:i[1],PreTag:"div"},a)):Object(o.jsx)("code",Object(f.a)(Object(f.a)({className:c},a),{},{children:n}))}}})})}c(357);function S(){return Object(o.jsxs)("div",{className:"Main",children:[Object(o.jsx)("div",{className:"Content",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",element:Object(o.jsx)(b,{})}),Object(o.jsx)(j.a,{path:"/archive",element:Object(o.jsx)(h,{})}),Object(o.jsx)(j.a,{path:"/about",element:Object(o.jsx)(d,{})}),Object(o.jsx)(j.a,{path:"/article/:title",element:Object(o.jsx)(N,{})})]})]})}),Object(o.jsx)(O,{})]})}i.a.render(Object(o.jsx)(S,{}),document.getElementById("root")),r()},66:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){}},[[358,1,2]]]);
//# sourceMappingURL=main.441e4e83.chunk.js.map