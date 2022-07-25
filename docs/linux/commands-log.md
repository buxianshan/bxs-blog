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
# 使用netstat查看所有正在被监听的端口
netstat -tlnp

# 3306是否被监听
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

## 生成当前时间戳字符串

常用于给log、文件等命名时增加时间戳。

```bash
time=$(date "+%Y%m%d-%H%M%S")
echo ${time}
# 20220518-114230
touch ${time}.log
```

## 软链接和硬链接

参考：[Linux 硬链接与软链接](https://www.runoob.com/note/29134)、[ln 命令](https://www.runoob.com/linux/linux-comm-ln.html)

- 软链接（Symbolic Link）：类似于Windows操作系统中的快捷方式，是一个指向源文件路径的特殊文件。
- 硬链接（Hard Link）：通过索引节点（Inode Index）来进行连接，即多个文件名指向同一索引节点，删除其中任何一个都不会影响另外一个的访问。只删除一个连接并不影响索引节点本身和其它的连接，只有当最后一个连接被删除后，文件的数据块及目录的连接才会被释放。不允许给目录创建硬链接。

```bash
# 创建1.txt
touch 1.txt

# 创建1.txt的硬链接:2.txt
ln 1.txt 2.txt

# 创建1.txt的软链接:3.txt
ln -s 1.txt 3.txt

# 查看文件信息
ls -li
```

输出：

```
[root@localhost link_test]# ls -li
总用量 0
570451165 -rw-r--r--. 2 root root 0 5月  22 10:46 1.txt
570451165 -rw-r--r--. 2 root root 0 5月  22 10:46 2.txt
570451166 lrwxrwxrwx. 1 root root 5 5月  22 10:47 3.txt -> 1.txt
```

可以看出：

- 硬链接2.txt和1.txt的Inode索引是相同的
- 软链接是指向源文件`3.txt -> 1.txt`
