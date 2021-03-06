---
title: Variance and Invariance across Platforms
tags:
  - 'FE'
  - "WebView"
  - "ReactNative"
---

在这样的时代背景下，无论从资源成本、开发效率，还是从产品迭代、技术演进的角度来看，跨平台开发都是强需求，所以才有了层出不穷的各种跨平台方案探索。

<!--truncate-->

## 跨平台需求

现在：

- 跨 PC 端与移动端：PC 向无线过渡的早期，希望 PC Web 与移动 Web 复用同一套代码

- 跨 Native 与 Web：要求有一套功能差不多的 Web 页能够在端外访问，需要跨 Native App 与 Web

- 跨 Native 双端：出于开发效率等原因，希望 Android、iOS 双端复用一套业务代码

- 跨 App：一些产品功能期望能在多个渠道投放上线，以工具类需求为主，如打车、买票、点餐

未来：

- 跨轻应用：系统级即用即走的轻量级应用，如Android 快应用、iOS App Clips

- 跨 IoT 设备：各种有显示屏的设备都会成为新的“端”，如车载设备、智能家居

- 跨一切客户端：可能是伪需求，同一产品在不同平台的侧重点不同，或许并不需要把所有功能完整地搬到各式各样的客户端设备/平台渠道上，例如快应用与 Native App 的定位显然不一样

方案：

- WebView渲染：依赖WebView进行渲染，在功能和性能上有妥协，例如PhoneGap、Cordova、小程序（有的小程序底层也采用了ReactNative等渲染方案）等。

- 原生渲染：上层拥抱W3C，通过中间层把前端框架翻译为原生控件，例如 ReactNative + React、Weex + Vue的组合，这种方案多了一层转译层，性能上有损耗。随着原生系统的升级，在兼容性上也会有问题。

- 自建渲染：自建渲染框架，底层使用 Skia 等图形库进行渲染，例如 Flutter、Unity。（Flutter拥有自己的开发工具，开发语言、虚拟机，编译机制，线程模型和渲染管线，和Android相比，也可以看做一个小型的 OS 了。）

## 跨平台技术

### 跨平台：Web 与生俱来

跨平台是 Web 与生俱来的优势，浏览器和 WebView 都是 W3C 规范下的标准化 Web 容器。

因此只要有浏览器或 WebView，依托 Web 技术即可轻松跨平台，如 Web App、PWA（Progressive Web Apps）、Hybrid App、PHA（Progress Hybrid App） 

优势：

- 没有额外的学习成本：一套基础技术吃遍端内、端外、甚至 PC 浏览器、电视机顶盒

- 不依赖特殊的配套设施：开发、调试、构建、发布、监控、运维等所有工程化环节都是通用的

- 坐拥庞大的既有生态：npm 百万模块，应有尽有

- Web 基于开放标准：走出去引进来都不是难事

局限：

- 平台能力：受限于Web 标准容器，无法满足平台能力相关的需求，如相机、蓝牙、多媒体等

- 体验：移动端 Web 体验远不及 Native，主要体现在首屏加载慢、动画卡顿、长页滚动闪烁等场景

- 性能：内存消耗大，CPU 利用率低

- Web 特性更迭周期太长

### 跨端：容器化 Native

除 Web 天然跨端之外，另一种统一多端的思路是将 Native 定制成标准容器，让同一份代码跑在一个个标准容器中，例如：

- Android 容器：Native 壳 App

- iOS 容器：Native 壳 App

- Web 容器：Web Runtime

从技术角度来看，ReactNative 与 Weex 在 Native 容器中提供了 JavaScript 运行环境，但是布局引擎、渲染层都采用 Native 控件，因此 UI 交互上仍然存在系统差异。

Flutter 方案更彻底一些，连渲染层也换成了基于图形引擎自绘 UI 控件，从而保证 UI 交互的跨端一致性

优势：

- 平台能力

- 体验

- 性能

局限：

- RN 需要在双端对齐UI 和 底层 API，部分情况存在交互延迟。

- 由于容器化 Native 的方案是从 Native 出发，没有跨端天赋，除了要想办法支持 Web，还面临一个更难解决的问题——跨 App

### 跨 App：小程序一码多投

国内市场中，越来越多的超级 App 支持了小程序，但各自的小程序框架并没有统一标准，于是有了 Taro、kbone、uni-app 等一系列跨小程序框架的方案来满足跨 App 投放产品功能的需求。

技术视角下，小程序跨 Native App 仍然是依靠 Web 方案。但是由于商业竞争等因素，闯入别人家地盘的 Web App 通常会遭到一些限制，如安全警告、权限控制、甚至干脆禁止访问（所以才有了口令分享等弯弯绕绕的方式）。

优势：

- 编译转换：对性能要求较高的业务

- 运行时适配：从 Web 迁移的基础业务

局限：

- 框架标准目前尚不统一

## 小结

- 变量

  - 容器：新的渠道/端/平台都是新的容器

  - 跨容器技术：新容器的出现，意味着新的跨容器技术要求

- 不变量

  - 业务代码

  - 工程化配套设施

  - 容器中的平台能力

同一产品在不同平台的侧重点不同，或许并不需要把所有功能完整地搬到各式各样的客户端设备/平台渠道上。

参考资料：

[移动端跨平台技术之下的变与不变](https://mp.weixin.qq.com/s/9K63v2Y-rwdbkRzsSHnkpw)