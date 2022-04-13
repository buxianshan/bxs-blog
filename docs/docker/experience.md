## 容器内没有ps命令

通常是因为容器内的系统比较精简，没有安装这些工具，需要自己安装。

```bash
# 以基于Debian的系统为例，在容器内执行以下命令安装procps工具集
apt-get update && apt-get install procps
```

安装完成后即可使用procps工具集的命令：

- ps
- top
- free
- uptime
- w



