(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(138)),i={title:"Take a Look at React Components",date:"2020-06-14",template:"post",tags:["FE","React","HOC","Hooks"]},c={permalink:"/leonaxiongxin.github.io/cn/blog/2020/06/14/Take-a-Look-at-React-Components",source:"@site/blog/2020-06-14-Take-a-Look-at-React-Components.md",description:"React \u7ec4\u4ef6\u77e5\u591a\u5c11...",date:"2020-06-14T00:00:00.000Z",formattedDate:"2020 M06 14",tags:[{label:"FE",permalink:"/leonaxiongxin.github.io/cn/blog/tags/fe"},{label:"React",permalink:"/leonaxiongxin.github.io/cn/blog/tags/react"},{label:"HOC",permalink:"/leonaxiongxin.github.io/cn/blog/tags/hoc"},{label:"Hooks",permalink:"/leonaxiongxin.github.io/cn/blog/tags/hooks"}],title:"Take a Look at React Components",readingTime:3.815,truncated:!0,prevItem:{title:"Export & Import of ES6 Module",permalink:"/leonaxiongxin.github.io/cn/blog/2020/07/29/Export-Import-of-ES6-Module"},nextItem:{title:"Add Global Singleton Loading for Http Requests",permalink:"/leonaxiongxin.github.io/cn/blog/2020/06/09/add-global-singleton-loading-for-http-requests"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"React \u7ec4\u4ef6\u77e5\u591a\u5c11..."))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,g=f["".concat(i,".").concat(b)]||f[b]||s[b]||a;return n?o.a.createElement(g,c(c({ref:t},p),{},{components:n})):o.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);