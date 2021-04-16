---
title: Vue Router Dynamic Route Matching
date: "2018-07-07"
template: "post"
tags:
  - "FE"
  - "Vue"
  - "Vue Router"
---


最近在把几个Vue单页面应用合并升级成多页面应用，减少代码冗余和重复打包。由于是在原有的Django结构和Vue-cli配置里塞东西，所以会有很多为了配合Django而产生的配置更改，不具有普遍的移植性，仅供参考。

先从路由开始，主要思路就是一个入口对应一个单页面应用，每个单页面应用都是独立的，互相之间不存在路由跳转，而单页面应用中存在多个组件之间的路由跳转，因此每个单页面应用都有自己的路由配置。

**动态路由匹配**，就是把某种模式匹配到的所有路由全部映射到同个组件。

阅读准备：Vue全家桶之 [Vue-cli](https://github.com/vuejs-templates)，[Vue-router](https://router.vuejs.org/)

<!--truncate-->

根据官方文档给出的实例，例如我们有一个RequestList组件包含了所有的Request的基本信息，点击某个Request的ID可跳转查看该Request的详细信息，对于ID不同的所有Request都可以用RequestDetail组件来渲染，可以通过"动态路径参数（Dynamic Segment）"来实现效果。
这样`/demo/request/1` 和、`/demo/request/2`都会映射到相同的路由，参数通过路由传递给组件RequestDetail，可通过`this.$route.params`访问到传递来的参数，参数可能是一个，也可能是多个。

```javascript
import RequestList from "@/components/RequestList";
import RequestDetail from "@/components/RequestDetail";

export default {
  base: "/demo/",
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "requestList",
      component: RequestList,
    },
    {
      path: "/request/:requestId",
      name: "requestDetail",
      component: RequestDetail,
      props: props, //路由传参
    },
  ],
};
```

有时候也可以配置成带查询参数的路由，但个人觉得这样的路由`/demo/request?requestId=1`长得不是很美观，而且把参数暴露给用户了。

```javascript
{
    path: "/request",
    name: "requestDetail",
    component: RequestDetail,
    props: route => ({ requestId: route.query.requestId }), //路由传参
},
```

这周在多页面应用中加了一个新的单页面应用，配置了动态路由，在`dev`开发模式下却只能匹配到根路由`/`，一直`cannot get`子路由，什么都渲染不出来。开始也没有找到合适的关键词去搜索相关issue，折腾了大半天终于发现有人也遇到了同样的问题[why-does-vue-router-webpack-dev-server-shows-cannot-get-path-on-page-refresh](https://stackoverflow.com/questions/48123503/why-does-vue-router-webpack-dev-server-shows-cannot-get-path-on-page-refresh)。

> It turns out it was a bug in the Vue webpack template on Windows.

Ok，fine :)

其实这个Bug在现在的Vue webpack template里已经解决了，在`webpack.dev.conf.js`的[devServer](https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback) 配置中有`historyApiFallback`. 当我们使用HTML5 History API的时候，index.html会在404找不到资源的时候被返回，这里的index.html是什么? 

```javascript
historyApiFallback: {
    rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath，"index.html") },
    ],
},
```

在dev开发模式下，其实是相当于在本地起了一台虚拟的服务器，一个单页面应用对应一个html模板文件，入口对应的所有相关组件的js css代码都会被注入到这个html模板文件里，所以我们的路由配置也需要到相应的模板文件里的js代码去解析、匹配。但是由于我的多页面应用配置，当我在地址栏输入`/demo/request/1`，其实是找不到匹配的资源的，需要返回到相对应的html模板文件中去,这也和你dev配置的模板文件路径有关。

```javascript
devServer: {
  historyApiFallback: {
      rewrites: [
        { from: /^\/demo/, to: path.posix.join(config.dev.assetsPublicPath, "demo/index.html") },
        { from: /^\/test/, to: path.posix.join(config.dev.assetsPublicPath, "test/index.html") },
      ],
  },
}
```

很多前端萌新在刚接触Vue的时候，都会选择用Vue-cli去搭项目，模板的配置在一定程度上可配置也很完整，足够满足一般单页面应用的需求，确实省事。但是前端早已不是只注重代码，而是关注到整个项目架构的设计，一个好的结构相当于成功了一半，后续开发流程会非常流畅。
