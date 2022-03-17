<h1 align='center'>关于shell</h1>

## 查看shell的类型

centos通常用的是/bin/bash，而有些shell看起来很炫，例如zsh，怎么查看当前shell到底是什么类型呢？

执行：`echo $0`

```shell
# 终端1：centos7默认的shell
[root@localhost ~]# echo $0
-bash

# 终端2：安装了zsh的shell
# root @ FusionWrt in ~ [11:39:58] 
$ echo $0
-zsh
```

## 查看当前系统有哪些shell

```sh
# 终端1
[root@localhost ~]# cat /etc/shells 
/bin/sh
/bin/bash
/sbin/nologin
/usr/bin/sh
/usr/bin/bash
/usr/sbin/nologin
/bin/tcsh
/bin/csh

# 终端2
# root @ FusionWrt in ~ [11:39:44] 
$ cat /etc/shells 
/bin/ash
/bin/bash
/bin/rbash
/usr/bin/zsh
```

## 查看用户(默认)使用的shell

```sh
# 终端1
[root@localhost ~]# echo $SHELL
/bin/bash

# 终端2
# root @ FusionWrt in ~ [13:35:04] 
$ echo $SHELL
/usr/bin/zsh
```

## 查看当前shell所有环境变量：env

终端1：

```sh
[root@localhost ~]# env
XDG_SESSION_ID=348803
HOSTNAME=localhost.localdomain
SELINUX_ROLE_REQUESTED=
TERM=xterm
SHELL=/bin/bash
HISTSIZE=1000
SSH_CLIENT=2.0.1.5 38471 22
GRADLE_HOME=/opt/gradle-6.6
SELINUX_USE_CURRENT_RANGE=
SSH_TTY=/dev/pts/5
ANT_HOME=/opt/apache-ant
USER=root
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:
MAVEN_HOME=/usr/local/apache-maven-3.6.3
MAIL=/var/spool/mail/root
PATH=/usr/local/python3/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/gradle-6.6/bin:/usr/local/apache-maven-3.6.3/bin:/usr/lib/jvm/jdk1.8.0_281/bin:/opt/apache-ant/bin:/root/bin
PWD=/root
JAVA_HOME=/usr/lib/jvm/jdk1.8.0_281
LANG=zh_CN.UTF-8
SELINUX_LEVEL_REQUESTED=
HISTCONTROL=ignoredups
GRADLE_USER_HOME=/opt/.gradle
SHLVL=1
HOME=/root
LOGNAME=root
CLASSPATH=.:/usr/lib/jvm/jdk1.8.0_281/lib/dt.jar:/usr/lib/jvm/jdk1.8.0_281/lib/tools.jar
XDG_DATA_DIRS=/root/.local/share/flatpak/exports/share/:/var/lib/flatpak/exports/share/:/usr/local/share/:/usr/share/
SSH_CONNECTION=2.0.1.5 38471 192.168.5.7 22
LESSOPEN=||/usr/bin/lesspipe.sh %s
XDG_RUNTIME_DIR=/run/user/0
DISPLAY=localhost:11.0
_=/usr/bin/env
```

终端2：

```sh
# root @ FusionWrt in ~ [13:35:18] 
$ env        
USER=root
LOGNAME=root
HOME=/root
SHELL=/usr/bin/zsh
PATH=/usr/sbin:/usr/bin:/sbin:/bin
TERM=xterm
SSH_TTY=/dev/pts/0
SSH_CONNECTION=192.168.2.1 44900 192.168.2.1 22
SSH_CLIENT=192.168.2.1 44900 22
SHLVL=1
PWD=/root
OLDPWD=/root
ZSH=/root/.oh-my-zsh
PAGER=less
LESS=-R
LSCOLORS=Gxfxcxdxbxegedabagacad
_=/usr/bin/env
```

## 切换shell

**Oh My Zsh** 是一款社区驱动的命令行工具，正如它的主页上说的，**Oh My Zsh** 是一种生活方式。它基于 **zsh** 命令行，提供了主题配置，插件机制，已经内置的便捷操作。给我们一种全新的方式使用命令行。

```sh
# 安装
yum install -y zsh

# 设置默认的shell（然后关闭当前shell，重新打开一个终端才是zsh）
chsh -s /bin/zsh

# 换成zsh后看起来并没有什么变化
# 安装oh-my-zsh （可能需要科学上网）
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

