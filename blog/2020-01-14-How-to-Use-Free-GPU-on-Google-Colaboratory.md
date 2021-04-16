---
title: How to use free GPU on Google Colaboratory
date: "2020-01-14"
update: "2020-10-12"
template: "post"
tags:
  - "OS"
  - "DeepLearning"
---


<!--truncate-->

## Prepare

Google 账号，科学上网。

## Setup

在Google Drive里，右键点击New Folder，创建放代码和数据的文件夹；进入该文件夹，upload相关的代码和数据，和本地目录结构保持一致。

在该文件夹下，右键 More，创建Google Colaboratory笔记本；（第一次创建可能没有Colaboratory选项，点击最下方的Connect more apps，搜索Google Colaboratory进行关联）。

笔记本的命名随意，后续要打开笔记本，右键 open with Google Colaboratory；进入笔记本，通过 `Edit -> Notebook settings` 设置GPU（设置一次保存即可）。

## Apply

每次重新登录笔记本，都需要执行“重新挂载”的代码块（即关联Google Drive和服务器），如下所示。新代码块用 `+Code` 创建：

```bash
from google.colab import drive
drive.mount('/content/drive/', force_remount=True)
```

执行代码块后，点击下方出现的URL进行谷歌账号的验证，复制得到的一长串验证码，粘贴到下方的输入框里；出现 `Mounted at /content/drive/` 的msg说明挂载成功。

连接到服务器后，再执行定位到项目所在文件夹的代码块：

```bash
import os
path = '/content/drive/My Drive/<dir>'
os.chdir(path)
```

`+code` 新建代码块，执行相应的带参数脚本，和在本地跑差不多，只需在最前面加半角的感叹号 `!`：

```bash
! python main.py --arg1 --arg2
```
 
查看当前 TensorFlow 的版本：

```python
import tensorflow
print(tensorflow.__version__)
```

目前（2020。10）Colab 上已经升级到了 tensorflow2.x 的版本，但是和 1.x 版本的兼容性并不好，可以自己选择切换到 tensorflow 1.x 版本（默认是 1.15），而且官方不建议通过 `pip install` 的方式额外安装。

```bash
%tensorflow_version 1.x
```

## Suggestions

- 执行代码块后，下方会输出相应的日志，warning 忽略，遇到 error 会停止，根据报错信息 debug。

- 不支持在线编辑文件，需要本地 debug 再上传到 Google Drive，大文件比较考验网速。

- 很多 bug 都是文件路径不匹配、不存在的坑，所以最好用小样本在本地试跑一下，不然可能跑了半天白跑了。

- 如果想手动停止正在执行的代码，点击代码框前方的按钮。

- Google Drive 只有 15GB 的免费存储，可加钱升级扩容；训练得到的 ckpt 文件比较大，容量不足会自动删除放到 Trash 里，重要的文件及时下载备份到本地，再清空Trash。
