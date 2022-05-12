<h1 align='center'>Linux命令记录</h1>

::: tip 提示
本文大部分是基于CentOS 7的实践记录。
:::

## 查看当前系统版本

```bash
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

```bash
# 解压zip文件
unzip file_name.zip
# 解压到指定文件夹并覆盖
unzip -o filen_name.zip -d output_path
```

## 防火墙

```bash
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

```bash
# 查看所有打开的端口
firewall-cmd --zone=public --list-ports

# 开放端口，重载生效
firewall-cmd --zone=public firewall-cmd --reload--add-port=3306/tcp --permanent
firewall-cmd --reload

# 关闭端口
firewall-cmd --zone=public --remove-port=3306/tcp --permanent
```

## 查看端口是否被监听

```bash
# netstat
netstat -anlp | grep 3306
# 用lsof也可以
lsof -i:3306
```

## 查看CPU参数

这两种方式都可以：

- lscpu
- cat /proc/cpuinfo

## 查看内存使用情况

- free -h

## 磁盘满了排查思路

清理磁盘空间

1. 用`df -h`看看哪些挂载点磁盘空间已用率高
2. 进入某个挂载点路径，使用`du -h --max-depth=1`查看哪个文件夹占用空间大（--max-depth指深度，只看当前层级就可以了）
3. 进入占用空间大的文件夹，重复步骤2，直到找到某些可以删除的大文件（一定要确认文件是没用的）

## crontab定时任务管理

`crond`是负责定时调度的系统服务，用`crontab`管理定时任务。

```bash
# 查看定时任务
crontab -l

# 查看执行记录
tail -f /var/log/cron

# 编辑定时任务(进入编辑界面，可以添加定时任务)
crontab -e

# 直接编辑/etc/crontab文件添加定时任务
vim /etc/crontab
```

`/etc/crontab`文件内容样例：

```bash
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed

# 每两个小时以root身份执行 /opt/test.sh 脚本
0 */2 * * * root /opt/test.sh
```

## 命令日志重定向到文件

```bash
# 命令日志重定向到文件(包括异常日志)
command > file_name 2>&1
```

