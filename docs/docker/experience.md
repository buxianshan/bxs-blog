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

## 不知道容器内的root用户密码

有的容器默认进入时是普通用户，当需要用超管权限执行命令时却又不知道超管密码。

最终发现可以在进入容器时指定用户，不需要知道密码：

```bash
# 进入容器使用root用户
docker exec -it --user root  container_name /bin/bash
```



## 设置容器开机自启

有一些放在容器里的服务希望能开机自启，只需要设置参数`--restart=always`：

```bash
docker update --restart=always container_name
```

## 查看容器的ip

```bash
# 查看某个容器的ip
docker inspect --format '{{.NetworkSettings.IPAddress}}' 容器名

# 查看所有正在运行的容器
docker inspect --format='{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker ps -q)

# 所有容器(包括已停止的)
docker inspect --format='{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker ps -aq)
```

## docker ps 格式化

有时`docker ps`显示的内容过多或者过少，可以自己设置输出哪些字段。

参考文档：https://docs.docker.com/engine/reference/commandline/ps/#formatting

```bash
# 显示容器名和状态（使用制表符\t隔开）
docker ps --format "{{.Names}}\t{{.Status}}"

# 显示容器名、启动命令、状态、镜像名
docker ps --format "{{.Names}}\t{{.Command}}\t{{.Status}}\t{{.Image}}"
```

| Placeholder   | Description                                                  |
| :------------ | :----------------------------------------------------------- |
| `.ID`         | Container ID                                                 |
| `.Image`      | Image ID                                                     |
| `.Command`    | Quoted command                                               |
| `.CreatedAt`  | Time when the container was created.                         |
| `.RunningFor` | Elapsed time since the container was started.                |
| `.Ports`      | Exposed ports.                                               |
| `.State`      | Container status (for example; “created”, “running”, “exited”). |
| `.Status`     | Container status with details about duration and health-status. |
| `.Size`       | Container disk size.                                         |
| `.Names`      | Container names.                                             |
| `.Labels`     | All labels assigned to the container.                        |
| `.Label`      | Value of a specific label for this container. For example `'{{.Label "com.docker.swarm.cpu"}}'` |
| `.Mounts`     | Names of the volumes mounted in this container.              |
| `.Networks`   | Names of the networks attached to this container.            |

