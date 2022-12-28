---
title: 端口被占用
sidebar: false
---

<h1 align='center'>
    端口被占用
</h1>


## windows

查看是哪个进程占用的端口：

```powershell
netstat -aon | findstr "8080"
# log中最后的数字就是PID
```

查看PID对应的进程：

```powershell
tasklist | findstr "PID"
```

也可以直接到任务管理器中查看PID对应的进程，决定是否结束进程。

## linux

查看占用端口的进程：

```bash
lsof -i:8080
```

杀掉进程：

```bash
kill -9 PID
```



