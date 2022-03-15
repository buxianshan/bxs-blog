<h1 align='center'>Linux命令记录</h1>

::: tip 提示
本文大部分是基于CentOS 7的实践记录。
:::

## 查看当前系统版本

```sh
[root@localhost ~]# cat /etc/os-release
NAME="CentOS Linux"
VERSION="7 (Core)"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="7"
PRETTY_NAME="CentOS Linux 7 (Core)"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:centos:centos:7"
HOME_URL="https://www.centos.org/"
BUG_REPORT_URL="https://bugs.centos.org/"

CENTOS_MANTISBT_PROJECT="CentOS-7"
CENTOS_MANTISBT_PROJECT_VERSION="7"
REDHAT_SUPPORT_PRODUCT="centos"
REDHAT_SUPPORT_PRODUCT_VERSION="7"
```

## 解压文件

```sh
# 解压zip文件
unzip file_name.zip
# 解压到指定文件夹并覆盖
unzip -o filen_name.zip -d output_path
```

## 防火墙

```sh
# 启动
systemctl start firewalld
# 查看
systemctl status firewalld
# 关闭
systemctl stop firewalld
# 设置开机自启
systemctl enable firewalld
# 关闭开机自启
systemctl disable firewalld
```

## 开放/关闭端口

```sh
# 查看所有打开的端口
firewall-cmd --zone=public --list-ports

# 开放端口，重载生效
firewall-cmd --zone=public firewall-cmd --reload--add-port=3306/tcp --permanent
firewall-cmd --reload

# 关闭端口
firewall-cmd --zone=public --remove-port=3306/tcp --permanent
```

## 查看端口是否被监听

```sh
# netstat
netstat -anlp | grep 3306
# 用lsof也可以
lsof -i:3306
```

## 查看CPU参数

这两种方式都可以：

- lscpu
- cat /proc/cpuinfo

## 查看内存、磁盘

- free -h
- df -h