---
title: 重写/自定义命令
---

<h1 align='center'>
    重写/自定义命令
</h1>

## 背景

内网服务器经常有很多同学登录，执行某些命令时可能会影响其它服务。所以希望给一些比较危险的命令添加提示或者二次确认。

## 例-给crontab命令添加提示

> crontab命令用来 提交和管理周期性执行的任务，一不小心可能删掉原来的任务。

在/etc/profile文件最后添加自定义方法：

```bash
# 自定义crontab命令
custom_crontab(){
    echo -e "\033[31m Warning: 此命令会影响一些定时任务，请确认影响范围后再修改！ \033[0m"
    local arg=`echo $*`
    /usr/bin/crontab ${arg}
}
alias crontab='custom_crontab'
```

修改之后要执行`source /etc/profile`使其生效。

效果：使用crontab命令会先打印出提示信息，然后再执行原命令。

![image-20220719171421420](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220719171421420.png)

## 注意点

- echo打印设置颜色，可以参考：[linux 终端输出有颜色字体](https://www.cnblogs.com/xuyaowen/p/linux-output-color.html)
- $* 是指“以一个字符串显示所有传递的参数”，通过它再把所有参数传到原来的命令
- /etc/profile 中 执行原命令不能再直接用命令名了，要写完整路径，否则死循环。可以使用`which crontab`查看原来crontab这个命令的完整路径。
- `source /etc/profile`使修改生效