(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(138)),l={title:"How to Debug during Mobile Development",date:"2020-05-13",template:"post",tags:["FE","Dev","ReactNative","Vue"]},c={permalink:"/blog/2020/05/13/How-to-Debug-during-Mobile-Development",source:"@site/blog/2020-05-13-How-to-Debug-during-Mobile-Development.md",description:"RN \u8c03\u8bd5",date:"2020-05-13T00:00:00.000Z",formattedDate:"May 13, 2020",tags:[{label:"FE",permalink:"/blog/tags/fe"},{label:"Dev",permalink:"/blog/tags/dev"},{label:"ReactNative",permalink:"/blog/tags/react-native"},{label:"Vue",permalink:"/blog/tags/vue"}],title:"How to Debug during Mobile Development",readingTime:.38,truncated:!0,prevItem:{title:"CSS \u7684\u7edd\u5bf9\u5355\u4f4d\u3001\u76f8\u5bf9\u5355\u4f4d\u3001\u6700\u5c0f\u5355\u4f4d",permalink:"/blog/2020/05/17/CSS \u7684\u7edd\u5bf9\u5355\u4f4d\u3001\u76f8\u5bf9\u5355\u4f4d\u3001\u6700\u5c0f\u5355\u4f4d"},nextItem:{title:"How to Install Docker Desktop for Windows",permalink:"/blog/2020/04/28/How-to-Install-Docker-Desktop-for-Windows"}},i=[{value:"RN \u8c03\u8bd5",id:"rn-\u8c03\u8bd5",children:[{value:"react-devtools",id:"react-devtools",children:[]},{value:"react native debugger(recommended)",id:"react-native-debuggerrecommended",children:[]}]},{value:"Vue \u8c03\u8bd5",id:"vue-\u8c03\u8bd5",children:[]},{value:"vue-devtools",id:"vue-devtools",children:[]},{value:"\u6293\u5305",id:"\u6293\u5305",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"rn-\u8c03\u8bd5"},"RN \u8c03\u8bd5"),Object(a.b)("h3",{id:"react-devtools"},"react-devtools"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"react-devtools")," \u4f9d\u8d56\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"electron"),"\uff0c\u800c ",Object(a.b)("inlineCode",{parentName:"p"},"electron")," \u9700\u8981\u5230\u56fd\u5916\u670d\u52a1\u5668\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305\uff0c\u6240\u4ee5\u56fd\u5185\u7528\u6237\u8fd9\u4e00\u6b65\u5f88\u53ef\u80fd\u4f1a\u5361\u4f4f\u3002\u6b64\u65f6\u8bf7\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u6dfb\u52a0 ",Object(a.b)("inlineCode",{parentName:"p"},"electron")," \u4e13\u7528\u7684\u56fd\u5185\u955c\u50cf\u6e90\uff1a",Object(a.b)("inlineCode",{parentName:"p"},'ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"'),"\uff0c\u7136\u540e\u518d\u5c1d\u8bd5\u5b89\u88c5 ",Object(a.b)("inlineCode",{parentName:"p"},"react-devtools"),"\u3002"),Object(a.b)("p",null,"\u7531\u4e8e\u6211\u4eec\u9879\u76ee\u7684 RN \u7248\u672c\uff0c\u9700\u8981\u5b89\u88c5 ",Object(a.b)("inlineCode",{parentName:"p"},"react-devtools@3"),"\u3002"),Object(a.b)("p",null,"\u6211\u7528\u7684\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"zsh"),", \u6240\u4ee5\u4fee\u6539 ",Object(a.b)("inlineCode",{parentName:"p"},".zshrc"),"\u6587\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'vi ~/.zshrc\nexport ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"\nsource ~/.zshrc\nnpm install -g react-devtools\n\nreact-devtools\n')),Object(a.b)("p",null,"\u6709\u65f6\u5019\u8fde\u63a5\u6bd4\u8f83\u8fdf\u949d\uff0c\u8c03\u8bd5props\u6bd4\u8f83\u65b9\u4fbf\u3002"),Object(a.b)("h3",{id:"react-native-debuggerrecommended"},"react native debugger(recommended)"),Object(a.b)("p",null,"\u5982\u679c ",Object(a.b)("inlineCode",{parentName:"p"},"brew update && brew cask install react-native-debugger")," \u4e0b\u8f7d\u5931\u8d25\uff0c\u53bb ",Object(a.b)("a",{parentName:"p",href:"https://github.com/jhen0409/react-native-debugger/releases"},"Github release\u9875\u9762"),"\u76f4\u63a5\u4e0b\u8f7dv.10.10\u6216\u4ee5\u4e0b\u7684\u7248\u672c\u3002"),Object(a.b)("h2",{id:"vue-\u8c03\u8bd5"},"Vue \u8c03\u8bd5"),Object(a.b)("h2",{id:"vue-devtools"},"vue-devtools"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\nnpm install -g vue-devtools\n\n# \u542f\u52a8\nvue-devtools\n")),Object(a.b)("p",null,"\u6309\u7167\u63d0\u793a\u628a ",Object(a.b)("inlineCode",{parentName:"p"},'<script src="http://172.19.203.229:8098"><\/script>')," \u6dfb\u52a0\u5230html\u6a21\u677f\u9875\u9762\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"<head>")," \u6807\u7b7e\u5185\u7684\u9996\u884c\uff0c\u5237\u65b0\u5f85\u8c03\u8bd5\u7684\u9875\u9762\uff0c\u7b49\u5f85\u8fde\u63a5\u3002"),Object(a.b)("h2",{id:"\u6293\u5305"},"\u6293\u5305"),Object(a.b)("p",null,"Charles"))}b.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,m=u["".concat(l,".").concat(s)]||u[s]||d[s]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);