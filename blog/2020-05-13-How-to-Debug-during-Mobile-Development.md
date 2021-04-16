---
title: How to Debug during Mobile Development
date: "2020-05-13"
template: "post"
tags:
  - "FE"
  - "Dev"
  - "ReactNative"
  - "Vue"
---

<!--truncate-->

## RN 调试

### react-devtools

`react-devtools` 依赖于 `electron`，而 `electron` 需要到国外服务器下载二进制包，所以国内用户这一步很可能会卡住。此时请在环境变量中添加 `electron` 专用的国内镜像源：`ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"`，然后再尝试安装 `react-devtools`。

由于我们项目的 RN 版本，需要安装 `react-devtools@3`。

我用的是 `zsh`, 所以修改 `.zshrc`文件：

```bash
vi ~/.zshrc
export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
source ~/.zshrc
npm install -g react-devtools

react-devtools
```

有时候连接比较迟钝，调试props比较方便。

### react native debugger(recommended)

如果 `brew update && brew cask install react-native-debugger` 下载失败，去 [Github release页面](https://github.com/jhen0409/react-native-debugger/releases)直接下载v.10.10或以下的版本。

## Vue 调试

## vue-devtools

```bash
# 安装
npm install -g vue-devtools

# 启动
vue-devtools
```

按照提示把 `<script src="http://172.19.203.229:8098"></script>` 添加到html模板页面的 `<head>` 标签内的首行，刷新待调试的页面，等待连接。

## 抓包

Charles
