---
title: 微软RDP优化
sidebar: false
---

<h1 align='center'>
    微软RDP优化
</h1>

## 简介

用过很多远程桌面的工具，微软的还是比较好用的。

## 开启硬件加速

win + r 输入 gpedit.msc，打开 计算机配置->管理模板->Windows组件->远程桌面服务器->远程桌面会话主机->远程会话环境，开启下图中的两个配置：

![image-20220804091544717](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220804091544717.png)

## 提升帧率

RDP默认帧率只有30，可以通过注册表修改提升到60。

下面用一个脚本修改配置，新建文件 60fps.reg，写入以下内容：

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations]
"DWMFRAMEINTERVAL"=dword:0000000f
```

双击该文件，按提示导入即可。

