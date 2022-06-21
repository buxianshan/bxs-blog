---
title: linux服务器java环境变量问题
sidebar: false
---

<h1 align='center'>
    linux服务器java环境变量问题
</h1>


## 问题背景

在一台服务器上编译java项目时，遇到了报错"程序包javafx.scene不存在"，查了一下原来服务器上安装的是Open JDK（没有jfxrt.jar这个包）。干脆直接换Oracle JDK吧。[华为云 jdk 镜像](https://mirrors.huaweicloud.com/java/jdk/8u202-b08/) 从这里很容易下载解压好了。然后肯定要修改java环境变量为新的这个。

明明已经在 /etc/profile 中做了如下修改，并且已经 source /etc/profile 让它生效了：

```
JAVA_HOME=/usr/lib/jvm/jdk1.8.0_202
PATH=$PATH:$JAVA_HOME/bin
CLASSPATH=.:$JAVA_HOME/lib
export JAVA_HOME CLASSPATH PATH
```

但是`java -version`一看，好家伙还是Open JDK的版本。到底是什么问题呢？

## 排查原因

首先`which java`看一下当前java命令的路径，注意这里看到的可能只是一个软链接的路径，再用`ls -l`命令看一下到底链接到哪里了。

然后很容易看出来，当前执行的java命令链接到的还是原来的Open JDK的路径。

把原来的这些java相关的软链接都删掉，再次执行`which java`：

```bash
[root@localhost jvm]# which java
/usr/lib/jvm/jdk1.8.0_202/bin/java
```

这下看起来就对了，`java -version`再确认一下果然已经换成了Oracle JDK的版本。

## 总结

因为系统的`$PATH`中已经配了很多路径，在执行某个命令时应该用的是最先匹配到的那个，所以才看起来明明环境变量生效了，执行的却不是想要的版本。

有了这次的经验，以后遇到类似问题应该很容易排查了😂