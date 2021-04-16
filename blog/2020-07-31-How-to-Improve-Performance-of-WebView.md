---
title: How to Improve Performance of WebView
date: "2020-07-31"
template: "post"
tags:
  - 'FE'
  - "WebView"
---

在 App 开发中，内嵌 WebView 始终占有着一席之地。它能以较低的成本实现 Android、iOS 和 Web 的复用，也可以冠冕堂皇的突破苹果对热更新的封锁。

以发展的眼光来看，功能的动态加载以及三端的融合将会是大趋势。然而便利性的同时，WebView 的性能体验却备受质疑，导致很多客户端中需要动态更新等页面时不得不采用其他方案，那么如何克服 WebView 固有的问题呢？

<!--truncate-->

对于 WebView 的性能，给人最直观的莫过于：打开速度比 Native 慢。

在浏览器中，我们输入地址时（甚至在之前），浏览器就可以开始加载页面；而在客户端中，客户端需要先花费时间初始化 WebView 完成后，才开始加载。

![webview](/img/blog/2020-07-31-How-to-Improve-Performance-of-WebView/webview.png)

当 App 首次打开时，默认是并不初始化浏览器内核的；只有当创建 WebView 实例的时候，才会创建 WebView 的基础框架。所以与浏览器不同，App 中打开 WebView 的第一步并不是建立连接，而是启动浏览器内核。

- WebView 首次初始化时间：客户端冷启动后，第一次打开 WebView，从开始创建 WebView 到开始建立网络连接之间的时间。

- WebView 非首次初始化时间：在打开过 WebView 后，退出 WebView，再重新打开 WebView，从开始创建 WebView 到开始建立网络连接之间的时间。

一个 H5 页面的过程中，Native、网络、后端处理、CPU 都会参与，各自都有必要的工作和依赖关系；让他们相互并行处理而不是相互阻塞才可以让网页加载更快：

- WebView 初始化慢

  - 在 WebView 初始化的同时，通过 Native 代理并行请求数据。

  - 初始化一个全局 WebView 待用（每次需要清除上一个页面，可能存在内存泄漏的问题）。

- 服务器处理慢

  - 同步渲染采用 chunk 编码，在后端计算的同时前端也加载网络静态资源。

- 脚本执行慢

  - 让脚本在最后运行，不阻塞页面解析。

  - 拆分基础框架代码，在请求页面之前就执行完毕。

- 建立连接慢

  - DNS解析，复用客户端使用的域名和链接。

  - 合理的预加载、预缓存可以让加载速度的瓶颈更小。

参考资料：

[WebView性能、体验分析与优化​](https://tech.meituan.com/2017/06/09/webviewperf.html)
