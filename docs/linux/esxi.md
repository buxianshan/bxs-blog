---
title: ESXi 笔记
sidebar: auto
---

<h1 align='center'>
    ESXi 笔记
</h1>


## 安装ESXi 8.0

1. 下载iso镜像：https://pan.baidu.com/s/1091fZq-TgOxAqw-gpGkr1w?pwd=dud1 
2. 写入U盘：使用[rufus](https://rufus.ie/zh/)很方便
3. U盘插入主机，进bois设置从U盘启动，根据提示安装即可

esxi 8.0 激活码：MV4YN-0L38Q-2ZK60-XUA7K-AAZ18

## 开启SSH密码登录

首先开启SSH服务：

![image-20221107113409330](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20221107113409330.png)

设置允许密码登录：

```bash
# 把 PasswordAuthentication no 改为 yes，保存退出
vi /etc/ssh/sshd_config

# 重启ssh服务
/etc/init.d/SSH restart
```

## SSH显示DCUI

Direct Console User Interface（直连用户界面）：直接控制台用户界面(DCUI)允许您使用基于文本的菜单与主机进行本地交互。

当没有直连显示器时，使用DCUI可以很方便的界面控制服务器。

SSH连接后，只需要输入`dcui`回车即可，`ctrl + c`退出。

![image-20221107135251949](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20221107135251949.png)

## 配置SSL证书

例如使用阿里云可以免费申请SSL证书（有效期一年）。

下载Nginx服务器类型的证书，把`*.key`改名为`rui.key`，把`*.pem `改名为`rui.crt`。

（最好先备份一下）把这两个文件上传覆盖到/etc/vmware/ssl/

```bash
# 重启hostd服务
/etc/init.d/hostd restart
# 重启vpxa服务
/etc/init.d/vpxa restart
```

## 修改主机名

```bash
esxcli system hostname set --host=new_hostname
```

## 查看版本号

```bash
# vmware -vl
VMware ESXi 8.0 GA
VMware ESXi 8.0.0 build-20513097
```

