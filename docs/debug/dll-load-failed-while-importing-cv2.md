---
title: "DLL load failed while importing cv2"
sidebar: false
---

<h1 align='center'>
    DLL load failed while importing cv2: 找不到指定的模块
</h1>


## 问题背景

写了个脚本用到了opencv_python这个库，使用pyinstaller打包成exe后，在我自己的笔记本（win10）上正常运行。

然后有同学反馈在 windows server 2012 上启动报错"DLL load failed while importing cv2: 找不到指定的模块。"

## 排查原因

我本地环境是win10、python 3.8、opencv_python 4.5。

确认过pyinstaller打包没问题，甚至指定了相关库的路径后问题仍然复现。

所以怀疑是不是 windows server 2012 本身缺少了一些 dll 库，最终在[这里](https://stackoverflow.com/questions/52349669/dll-load-failed-when-import-cv2-opencv)找到了答案：

![image-20220607143653552](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220607143653552.png)

简单的讲原因是：opencv_python 3.4和以后的版本都需要"windows media feature pack"，而有些版本的windows不预装该媒体包。

## 解决方式

知道了原因后就好处理了，有两个方式：

- 方式一：让该同学在 windows server 2012 机器上安装 "windows media feature pack"
- 方式二：我这边降低 opencv_python 版本到 3.4 以下，再重新打包exe

显然方式一是不合适的，不能每次遇到这种情况都让用户自己去处理，所以还是方式二更好。

然而方式二并没有那么简单，opencv_python3.3只支持python3.6以下，所以我最终是重新创建了python3.6的虚拟环境，然后再安装opencv_python3.3。

重新打包后问题没有复现了。
