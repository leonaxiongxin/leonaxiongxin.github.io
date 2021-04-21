(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{139:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(t),s=r,f=d["".concat(i,".").concat(s)]||d[s]||u[s]||o;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),o=(t(0),t(139)),i={title:"How to IO Using Node",date:"2020-05-25",template:"post",tags:["NLP","Node"],description:"Node \u8bfb\u5199\u6587\u672c\u6587\u4ef6"},c={permalink:"/cn/blog/2020/05/25/How-to-IO-Using-Node",source:"@site/blog/2020-05-25-How-to-IO-Using-Node.md",description:"Node \u8bfb\u5199\u6587\u672c\u6587\u4ef6",date:"2020-05-25T00:00:00.000Z",formattedDate:"2020 M05 25",tags:[{label:"NLP",permalink:"/cn/blog/tags/nlp"},{label:"Node",permalink:"/cn/blog/tags/node"}],title:"How to IO Using Node",readingTime:.855,truncated:!0,prevItem:{title:"node_modules, the Heaviest Object in the Universe",permalink:"/cn/blog/2020/06/04/node_modules-the-heaviest-object-in-the-universe"},nextItem:{title:"CSS \u7684\u7edd\u5bf9\u5355\u4f4d\u3001\u76f8\u5bf9\u5355\u4f4d\u3001\u6700\u5c0f\u5355\u4f4d",permalink:"/cn/blog/2020/05/17/CSS \u7684\u7edd\u5bf9\u5355\u4f4d\u3001\u76f8\u5bf9\u5355\u4f4d\u3001\u6700\u5c0f\u5355\u4f4d"}},l=[{value:"\u6587\u4ef6\u7f16\u7801",id:"\u6587\u4ef6\u7f16\u7801",children:[]},{value:"\u5f02\u6b65\u548c\u540c\u6b65",id:"\u5f02\u6b65\u548c\u540c\u6b65",children:[]},{value:"\u76ee\u6807\u76ee\u5f55\u6216\u6587\u4ef6\u662f\u5426\u5b58\u5728",id:"\u76ee\u6807\u76ee\u5f55\u6216\u6587\u4ef6\u662f\u5426\u5b58\u5728",children:[]}],p={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Node \u7684\u6587\u4ef6\u5904\u7406\u4e3b\u8981\u901a\u8fc7 fs \u6a21\u5757\u3002"),Object(o.b)("h2",{id:"\u6587\u4ef6\u7f16\u7801"},"\u6587\u4ef6\u7f16\u7801"),Object(o.b)("p",null,"\u5f53\u6211\u4eec\u8bfb\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u901a\u5e38\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4f55\u79cd\u7f16\u7801\u65b9\u5f0f\u8bfb\u53d6\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JavaScript"},"const fs = require('fs')\n\u200b\nfs.readFile('./test.txt', 'utf8', function(err, data){\n  console.log(data) //\u8f93\u51fa\u7684\u662futf8\u7f16\u7801\u540e\u7684\u5b57\u7b26\u4e32\n})\n")),Object(o.b)("p",null,"\u4f46\u662f\uff0cNode \u9ed8\u8ba4\u652f\u6301\u7684\u7f16\u7801\u6709utf8\u3001base64\uff0c\u5f53\u4e0d\u8bbe\u5b9a\u7f16\u7801\u65f6\uff0c\u9ed8\u8ba4\u6570\u636e\u7684\u5f62\u5f0f\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"buffer"),"\uff0c\u4e0d\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"gb*")," \u7cfb\u5217\u7f16\u7801\uff0c\u8fd9\u5c31\u4f1a\u5bfc\u81f4\u5728\u5904\u7406\u5305\u542b\u4e2d\u6587\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"gb*"),"\u7f16\u7801\u6587\u4ef6\u65f6\u51fa\u73b0\u4e71\u7801\uff0c\u8bfb\u53d6\u5931\u8d25\u3002"),Object(o.b)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a\u7528 ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/iconv-lite"},"iconv-lite")," \u8f6c\u6362\u7f16\u7801\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JavaScript"},"const iconv = require('iconv-lite')\n\u200b\nconst convertEncoding = (filePath, newFilePath, fromEncoding, toEncoding) => {\n  fs.readFile(filePath, (err, data) => {\n    if (err) throw err\n    data = iconv.decode(data, fromEncoding)  // \u73b0\u5728\u662fbuffer\n    const newData = iconv.encode(data, toEncoding)  // \u73b0\u5728\u8fd8\u662fbuffer\n    fs.writeFile(newFilePath, newData, (err) => {  // \u628abuffer\u5199\u5165\u6587\u4ef6\n      if (err) throw err\n    })\n  })\n}\n")),Object(o.b)("h2",{id:"\u5f02\u6b65\u548c\u540c\u6b65"},"\u5f02\u6b65\u548c\u540c\u6b65"),Object(o.b)("p",null,"fs \u6a21\u5757\u4e2d\u7684\u65b9\u6cd5\u5747\u6709\u5f02\u6b65\u548c\u540c\u6b65\u7248\u672c\uff0c\u4f8b\u5982\u8bfb\u6587\u4ef6\u7684\u51fd\u6570\u6709\u5f02\u6b65\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"fs.readFile()")," \u548c\u540c\u6b65\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"fs.readFileSync()"),"\uff0c\u5199\u6587\u4ef6\u7684\u51fd\u6570\u6709\u5f02\u6b65\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"fs.writeFile()")," \u548c\u540c\u6b65\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"fs.writeFileSync()"),"\u3002"),Object(o.b)("p",null,"\u5f02\u6b65\u7684\u65b9\u6cd5\u51fd\u6570\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4e3a\u56de\u8c03\u51fd\u6570\uff0c\u56de\u8c03\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u5305\u542b\u4e86\u9519\u8bef\u4fe1\u606f(error)\u3002\u6bd4\u8d77\u540c\u6b65\u65b9\u6cd5\uff0c\u5f02\u6b65\u65b9\u6cd5\u6027\u80fd\u66f4\u9ad8\uff0c\u901f\u5ea6\u66f4\u5feb\uff0c\u800c\u4e14\u6ca1\u6709\u963b\u585e\u3002"),Object(o.b)("p",null,"\u4f46\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8981\u6c42\u6309\u7167\u4e00\u5b9a\u987a\u5e8f\u4e32\u884c\u5904\u7406\u6587\u4ef6\uff0c\u8fd8\u662f\u9700\u8981\u7528\u540c\u6b65\u3002\u5982\u679c\u56de\u8c03\u5d4c\u5957\u5c42\u6570\u592a\u591a\u4f1a\u5bfc\u81f4\u4ee3\u7801\u53ef\u8bfb\u6027\u5dee\uff0c\u4e5f\u53ef\u4ee5\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"promise")," \u5305\u88c5\u51fd\u6570\uff0c\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async / await")," \u4f18\u96c5\u5730\u5b9e\u73b0\u5f02\u6b65\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JavaScript"},"const myReadFile = filePath => {\n  return new Promise((resolve, reject) => {\n    fs.readFile(fileName, 'utf8', function (err, data) {\n      if (err) {\n        reject(err)\n      }\n      resolve(data)\n    })\n  })\n}\n\u200b\nasync function run() {\n  let data1\n  let data2\n  let data3\n  try {\n    data1 = await readFile('file1.txt')\n    data2 = await readFile('file2.txt')\n    data3 = await readFile('file3.txt')\n  } catch(err) {\n    console.log(err)\n  }\n}\n\u200b\nrun()\n")),Object(o.b)("h2",{id:"\u76ee\u6807\u76ee\u5f55\u6216\u6587\u4ef6\u662f\u5426\u5b58\u5728"},"\u76ee\u6807\u76ee\u5f55\u6216\u6587\u4ef6\u662f\u5426\u5b58\u5728"),Object(o.b)("p",null,"\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"fs.accessSync(filePath)")," \uff0c\u5f03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"fs.exists(filePath)")),Object(o.b)("p",null,"\u53c2\u8003\uff1a"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html"},"https://nodejs.org/api/fs.html")))}b.isMDXComponent=!0}}]);