(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,p(p({ref:t},i),{},{components:n})):a.a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(138)),c={title:"Vue Router Dynamic Route Matching",date:"2018-07-07",template:"post",tags:["FE","Vue","Vue Router"]},p={permalink:"/cn/blog/2018/07/07/Vue-Router-Dynamic-Route-Matching",source:"@site/blog/2018-07-07-Vue-Router-Dynamic-Route-Matching.md",description:"\u6700\u8fd1\u5728\u628a\u51e0\u4e2aVue\u5355\u9875\u9762\u5e94\u7528\u5408\u5e76\u5347\u7ea7\u6210\u591a\u9875\u9762\u5e94\u7528\uff0c\u51cf\u5c11\u4ee3\u7801\u5197\u4f59\u548c\u91cd\u590d\u6253\u5305\u3002\u7531\u4e8e\u662f\u5728\u539f\u6709\u7684Django\u7ed3\u6784\u548cVue-cli\u914d\u7f6e\u91cc\u585e\u4e1c\u897f\uff0c\u6240\u4ee5\u4f1a\u6709\u5f88\u591a\u4e3a\u4e86\u914d\u5408Django\u800c\u4ea7\u751f\u7684\u914d\u7f6e\u66f4\u6539\uff0c\u4e0d\u5177\u6709\u666e\u904d\u7684\u79fb\u690d\u6027\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002",date:"2018-07-07T00:00:00.000Z",formattedDate:"2018 M07 7",tags:[{label:"FE",permalink:"/cn/blog/tags/fe"},{label:"Vue",permalink:"/cn/blog/tags/vue"},{label:"Vue Router",permalink:"/cn/blog/tags/vue-router"}],title:"Vue Router Dynamic Route Matching",readingTime:.695,truncated:!0,prevItem:{title:"How to use free GPU on Google Colaboratory",permalink:"/cn/blog/2020/01/14/How-to-Use-Free-GPU-on-Google-Colaboratory"}},u=[],i={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6700\u8fd1\u5728\u628a\u51e0\u4e2aVue\u5355\u9875\u9762\u5e94\u7528\u5408\u5e76\u5347\u7ea7\u6210\u591a\u9875\u9762\u5e94\u7528\uff0c\u51cf\u5c11\u4ee3\u7801\u5197\u4f59\u548c\u91cd\u590d\u6253\u5305\u3002\u7531\u4e8e\u662f\u5728\u539f\u6709\u7684Django\u7ed3\u6784\u548cVue-cli\u914d\u7f6e\u91cc\u585e\u4e1c\u897f\uff0c\u6240\u4ee5\u4f1a\u6709\u5f88\u591a\u4e3a\u4e86\u914d\u5408Django\u800c\u4ea7\u751f\u7684\u914d\u7f6e\u66f4\u6539\uff0c\u4e0d\u5177\u6709\u666e\u904d\u7684\u79fb\u690d\u6027\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"),Object(o.b)("p",null,"\u5148\u4ece\u8def\u7531\u5f00\u59cb\uff0c\u4e3b\u8981\u601d\u8def\u5c31\u662f\u4e00\u4e2a\u5165\u53e3\u5bf9\u5e94\u4e00\u4e2a\u5355\u9875\u9762\u5e94\u7528\uff0c\u6bcf\u4e2a\u5355\u9875\u9762\u5e94\u7528\u90fd\u662f\u72ec\u7acb\u7684\uff0c\u4e92\u76f8\u4e4b\u95f4\u4e0d\u5b58\u5728\u8def\u7531\u8df3\u8f6c\uff0c\u800c\u5355\u9875\u9762\u5e94\u7528\u4e2d\u5b58\u5728\u591a\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u8def\u7531\u8df3\u8f6c\uff0c\u56e0\u6b64\u6bcf\u4e2a\u5355\u9875\u9762\u5e94\u7528\u90fd\u6709\u81ea\u5df1\u7684\u8def\u7531\u914d\u7f6e\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u52a8\u6001\u8def\u7531\u5339\u914d"),"\uff0c\u5c31\u662f\u628a\u67d0\u79cd\u6a21\u5f0f\u5339\u914d\u5230\u7684\u6240\u6709\u8def\u7531\u5168\u90e8\u6620\u5c04\u5230\u540c\u4e2a\u7ec4\u4ef6\u3002"),Object(o.b)("p",null,"\u9605\u8bfb\u51c6\u5907\uff1aVue\u5168\u5bb6\u6876\u4e4b ",Object(o.b)("a",{parentName:"p",href:"https://github.com/vuejs-templates"},"Vue-cli"),"\uff0c",Object(o.b)("a",{parentName:"p",href:"https://router.vuejs.org/"},"Vue-router")),Object(o.b)("p",null,'\u6839\u636e\u5b98\u65b9\u6587\u6863\u7ed9\u51fa\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982\u6211\u4eec\u6709\u4e00\u4e2aRequestList\u7ec4\u4ef6\u5305\u542b\u4e86\u6240\u6709\u7684Request\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u70b9\u51fb\u67d0\u4e2aRequest\u7684ID\u53ef\u8df3\u8f6c\u67e5\u770b\u8be5Request\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5bf9\u4e8eID\u4e0d\u540c\u7684\u6240\u6709Request\u90fd\u53ef\u4ee5\u7528RequestDetail\u7ec4\u4ef6\u6765\u6e32\u67d3\uff0c\u53ef\u4ee5\u901a\u8fc7"\u52a8\u6001\u8def\u5f84\u53c2\u6570\uff08Dynamic Segment\uff09"\u6765\u5b9e\u73b0\u6548\u679c\u3002\n\u8fd9\u6837',Object(o.b)("inlineCode",{parentName:"p"},"/demo/request/1")," \u548c\u3001",Object(o.b)("inlineCode",{parentName:"p"},"/demo/request/2"),"\u90fd\u4f1a\u6620\u5c04\u5230\u76f8\u540c\u7684\u8def\u7531\uff0c\u53c2\u6570\u901a\u8fc7\u8def\u7531\u4f20\u9012\u7ed9\u7ec4\u4ef6RequestDetail\uff0c\u53ef\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"this.$route.params"),"\u8bbf\u95ee\u5230\u4f20\u9012\u6765\u7684\u53c2\u6570\uff0c\u53c2\u6570\u53ef\u80fd\u662f\u4e00\u4e2a\uff0c\u4e5f\u53ef\u80fd\u662f\u591a\u4e2a\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import RequestList from "@/components/RequestList";\nimport RequestDetail from "@/components/RequestDetail";\n\nexport default {\n  base: "/demo/",\n  mode: "history",\n  linkActiveClass: "active",\n  routes: [\n    {\n      path: "/",\n      name: "requestList",\n      component: RequestList,\n    },\n    {\n      path: "/request/:requestId",\n      name: "requestDetail",\n      component: RequestDetail,\n      props: props, //\u8def\u7531\u4f20\u53c2\n    },\n  ],\n};\n')),Object(o.b)("p",null,"\u6709\u65f6\u5019\u4e5f\u53ef\u4ee5\u914d\u7f6e\u6210\u5e26\u67e5\u8be2\u53c2\u6570\u7684\u8def\u7531\uff0c\u4f46\u4e2a\u4eba\u89c9\u5f97\u8fd9\u6837\u7684\u8def\u7531",Object(o.b)("inlineCode",{parentName:"p"},"/demo/request?requestId=1"),"\u957f\u5f97\u4e0d\u662f\u5f88\u7f8e\u89c2\uff0c\u800c\u4e14\u628a\u53c2\u6570\u66b4\u9732\u7ed9\u7528\u6237\u4e86\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    path: "/request",\n    name: "requestDetail",\n    component: RequestDetail,\n    props: route => ({ requestId: route.query.requestId }), //\u8def\u7531\u4f20\u53c2\n},\n')),Object(o.b)("p",null,"\u8fd9\u5468\u5728\u591a\u9875\u9762\u5e94\u7528\u4e2d\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u5355\u9875\u9762\u5e94\u7528\uff0c\u914d\u7f6e\u4e86\u52a8\u6001\u8def\u7531\uff0c\u5728",Object(o.b)("inlineCode",{parentName:"p"},"dev"),"\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5374\u53ea\u80fd\u5339\u914d\u5230\u6839\u8def\u7531",Object(o.b)("inlineCode",{parentName:"p"},"/"),"\uff0c\u4e00\u76f4",Object(o.b)("inlineCode",{parentName:"p"},"cannot get"),"\u5b50\u8def\u7531\uff0c\u4ec0\u4e48\u90fd\u6e32\u67d3\u4e0d\u51fa\u6765\u3002\u5f00\u59cb\u4e5f\u6ca1\u6709\u627e\u5230\u5408\u9002\u7684\u5173\u952e\u8bcd\u53bb\u641c\u7d22\u76f8\u5173issue\uff0c\u6298\u817e\u4e86\u5927\u534a\u5929\u7ec8\u4e8e\u53d1\u73b0\u6709\u4eba\u4e5f\u9047\u5230\u4e86\u540c\u6837\u7684\u95ee\u9898",Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/48123503/why-does-vue-router-webpack-dev-server-shows-cannot-get-path-on-page-refresh"},"why-does-vue-router-webpack-dev-server-shows-cannot-get-path-on-page-refresh"),"\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It turns out it was a bug in the Vue webpack template on Windows.")),Object(o.b)("p",null,"Ok\uff0cfine :)"),Object(o.b)("p",null,"\u5176\u5b9e\u8fd9\u4e2aBug\u5728\u73b0\u5728\u7684Vue webpack template\u91cc\u5df2\u7ecf\u89e3\u51b3\u4e86\uff0c\u5728",Object(o.b)("inlineCode",{parentName:"p"},"webpack.dev.conf.js"),"\u7684",Object(o.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback"},"devServer")," \u914d\u7f6e\u4e2d\u6709",Object(o.b)("inlineCode",{parentName:"p"},"historyApiFallback"),". \u5f53\u6211\u4eec\u4f7f\u7528HTML5 History API\u7684\u65f6\u5019\uff0cindex.html\u4f1a\u5728404\u627e\u4e0d\u5230\u8d44\u6e90\u7684\u65f6\u5019\u88ab\u8fd4\u56de\uff0c\u8fd9\u91cc\u7684index.html\u662f\u4ec0\u4e48? "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'historyApiFallback: {\n    rewrites: [\n        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath\uff0c"index.html") },\n    ],\n},\n')),Object(o.b)("p",null,"\u5728dev\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0c\u5176\u5b9e\u662f\u76f8\u5f53\u4e8e\u5728\u672c\u5730\u8d77\u4e86\u4e00\u53f0\u865a\u62df\u7684\u670d\u52a1\u5668\uff0c\u4e00\u4e2a\u5355\u9875\u9762\u5e94\u7528\u5bf9\u5e94\u4e00\u4e2ahtml\u6a21\u677f\u6587\u4ef6\uff0c\u5165\u53e3\u5bf9\u5e94\u7684\u6240\u6709\u76f8\u5173\u7ec4\u4ef6\u7684js css\u4ee3\u7801\u90fd\u4f1a\u88ab\u6ce8\u5165\u5230\u8fd9\u4e2ahtml\u6a21\u677f\u6587\u4ef6\u91cc\uff0c\u6240\u4ee5\u6211\u4eec\u7684\u8def\u7531\u914d\u7f6e\u4e5f\u9700\u8981\u5230\u76f8\u5e94\u7684\u6a21\u677f\u6587\u4ef6\u91cc\u7684js\u4ee3\u7801\u53bb\u89e3\u6790\u3001\u5339\u914d\u3002\u4f46\u662f\u7531\u4e8e\u6211\u7684\u591a\u9875\u9762\u5e94\u7528\u914d\u7f6e\uff0c\u5f53\u6211\u5728\u5730\u5740\u680f\u8f93\u5165",Object(o.b)("inlineCode",{parentName:"p"},"/demo/request/1"),"\uff0c\u5176\u5b9e\u662f\u627e\u4e0d\u5230\u5339\u914d\u7684\u8d44\u6e90\u7684\uff0c\u9700\u8981\u8fd4\u56de\u5230\u76f8\u5bf9\u5e94\u7684html\u6a21\u677f\u6587\u4ef6\u4e2d\u53bb,\u8fd9\u4e5f\u548c\u4f60dev\u914d\u7f6e\u7684\u6a21\u677f\u6587\u4ef6\u8def\u5f84\u6709\u5173\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'devServer: {\n  historyApiFallback: {\n      rewrites: [\n        { from: /^\\/demo/, to: path.posix.join(config.dev.assetsPublicPath, "demo/index.html") },\n        { from: /^\\/test/, to: path.posix.join(config.dev.assetsPublicPath, "test/index.html") },\n      ],\n  },\n}\n')),Object(o.b)("p",null,"\u5f88\u591a\u524d\u7aef\u840c\u65b0\u5728\u521a\u63a5\u89e6Vue\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u9009\u62e9\u7528Vue-cli\u53bb\u642d\u9879\u76ee\uff0c\u6a21\u677f\u7684\u914d\u7f6e\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u914d\u7f6e\u4e5f\u5f88\u5b8c\u6574\uff0c\u8db3\u591f\u6ee1\u8db3\u4e00\u822c\u5355\u9875\u9762\u5e94\u7528\u7684\u9700\u6c42\uff0c\u786e\u5b9e\u7701\u4e8b\u3002\u4f46\u662f\u524d\u7aef\u65e9\u5df2\u4e0d\u662f\u53ea\u6ce8\u91cd\u4ee3\u7801\uff0c\u800c\u662f\u5173\u6ce8\u5230\u6574\u4e2a\u9879\u76ee\u67b6\u6784\u7684\u8bbe\u8ba1\uff0c\u4e00\u4e2a\u597d\u7684\u7ed3\u6784\u76f8\u5f53\u4e8e\u6210\u529f\u4e86\u4e00\u534a\uff0c\u540e\u7eed\u5f00\u53d1\u6d41\u7a0b\u4f1a\u975e\u5e38\u6d41\u7545\u3002"))}l.isMDXComponent=!0}}]);