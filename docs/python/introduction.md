---
title: Python简介
---

<TOC />

# Python是什么？

## 1、python是一种解释型语言

编译型语言：代码执行前先通过编译器，转化为机器语言，然后可以直接运行。例如C/C++，代码文件(windows)编译成二进制的可执行文件exe，可以直接运行。

解释型语言：每次代码执行时都需要通过解释器逐行解释运行。例如python、js、shell等。

![解释型语言](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/解释型语言.png)

## 2、python2和python3

目前广泛使用的是python3。

是比较老的版本，从2020年开始官方不再维护python2。

要注意的是python3相较于python2有较大的升级，并且python3不完全兼容python2。

所以此后提到的python默认指python3。

## 3、包管理工具：pip

python的一大特点就是有丰富的标准库和第三方库，可以用于实现各种各样的功能。例如封装了http协议的库requests，用于图像处理的opencv_python，用于机器学习的tensorflow，甚至有用于量子计算的qiskit。

使用包管理工具我们可以很方便的下载、安装和卸载这些库。

pip就是一个包管理工具，python 3.4以后都已经自带该工具。

例如：

```bash
pip install requests
```


注意pip默认是从国外的服务器上查找和下载包，国内使用时可能很慢，我们可以通过使用国内的镜像地址下载，速度就很快了。

例如临时使用清华的镜像地址：

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ requests
```

也可设置pip的默认镜像地址，参考：https://www.runoob.com/w3cnote/pip-cn-mirror.html

提醒一下：有些linux自带python2，需要单独安装python3，同样要使用pip3

## 4、python发行版

官方发布的python是精简的，很多库和工具都需要自己安装。而发行版是包含了一些第三方库和工具的python，发行版本质上就是python。

常见的发行版有Anaconda、ActivePython、WinPython等。

这里比较推荐的是Anaconda，他有一个类似pip但更强大的包管理工具conda，比如conda可以很方便的创建python虚拟环境：

```bash
conda create -n env_name python=3.6
```

## 5、Hello world

hello_world.py

``` python
print("Hello world")
```

执行python脚本的方式

``` sh
# python解释器 脚本文件名
python hello_world.py
```

