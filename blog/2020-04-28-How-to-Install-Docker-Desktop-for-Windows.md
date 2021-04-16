---
title: How to Install Docker Desktop for Windows
date: "2020-04-28"
template: "post"
tags:
  - "OS"
  - "Docker"
---

> 之前在eBay实习的时候在Linux / Unix 系统上使用过Docker，由于最近想体验一下Neo4j，在自己的Win10上安装了Docker Desktop，过程中遇到了一些问题，记录一下。

我个人理解，虚拟机提供的是操作系统，Docker提供的是程序运行环境，即容器。Docker是一种轻量级管理工具，具有启动速度快、性能开销小、共用宿主机操作系统的优点。

<!--truncate-->

Docker官方为Windows系统提供了两种安装包，新版的[Docker Desktop](https://docs.docker.com/docker-for-windows/install/) 和较旧的[Docker ToolBox](https://docs.docker.com/toolbox/toolbox_install_windows/)。Docker ToolBox 利用 Virutal Box 建立 Linux 虚拟机，在虚拟机中安装 Docker（那我为什么不直接在 Linux 虚拟机上安装程序呢？）

因此建议安装Docker Desktop ，但是如果你的操作系统是Win10家庭版（非企业版、专业版），安装时会遇到以下报错：

:::note Your Title

Installation Failed: one prerequisite is not fulfilled.

Docker Desktop requires Windows 10 Pro or Enterprise version 15063 to run.

:::

其实，Docker官方已经给出了安装须知：

- Hyper-V and Containers Windows features must be enabled.
- Windows 10 64-bit: Pro, Enterprise, or Education (Build 15063 or later).

总的来说，Win10专业版默认支持`Hyper-V`和`Container`，可以打开“启用或关闭Window功能”， 查看电脑是否开启Hyper-V，我这里是已经开启了，如果列表中不含 Hyper-V 选项，则标签当前系统不支持 Hyper-V，需要升级系统。

![hyperv](/img/blog/2020-04-28-How-to-Install-Docker-Desktop-for-Windows/hyperv.png)

我在中文社区里找了一圈解决方案，即使成功开启了Hyper-V，安装时还是会同样的错误。果然，我人生中50%的问题都来自Windows &#x1F92A; ，然后在Medium上看到一篇文章，经过尝试是可以work的。

## Step1: 安装Hyper-V

创建`InstallHyperV.cmd`文件，写入以下内容，以管理员权限运行，确认后系统会开始自动更新。

```cmd
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
```

## Step2: 安装Container

创建`InstallContainer.cmd`文件，写入以下内容，以管理员权限运行，确认后系统会开始自动更新。

```cmd
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*containers*.mum >containers.txt
for /f %%i in ('findstr /i . containers.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del containers.txt
dism /online /enable-feature /featurename:Containers -All /LimitAccess /ALL
paus
```

如果失败，可能时粘贴cmd文件内容时的编码格式问题，检查是否使用`UTF-8`。

## Step3: 修改注册表

现在已经有了Hper-V和容器，但是Docker很聪明，知道你不是Win10专业版，通过修改注册表来骗骗它，安装成功后可修改回原样。

1. `WIN` + `R`，输入 `regedit`，打开注册表；
2. 找到 `\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion`；
3. 右键修改 `EditionID`的值为`Professional`；

现在就可以愉快地在Windows 上安装 Docker Desktop了。
附上 [docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet)

## References

[install-docker-on-windows-10-home](https://itnext.io/install-docker-on-windows-10-home-d8e621997c1d)