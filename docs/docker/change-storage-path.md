## 修改Docker存储路径

Docker的默认存储位置是/var/lib/docker，这个路径位于根文件系统下。因此，它属于/dev/mapper/centos-root挂载点，这个挂载点是根文件系统(/)的位置。

系统 / 路径一般容量比较小，例如50G，存储太多容器后很容易就把系统盘撑满，所以最好改到/home下面，这里容量会大点。

1、首先停止Docker服务

```bash
sudo systemctl stop docker
```

2、创建 Docker 的守护进程配置文件

```bash
sudo mkdir -p /etc/docker
sudo touch /etc/docker/daemon.json
```

3、编辑守护进程配置文件

编辑 /etc/docker/daemon.json，添加以下内容

```json
{
  "data-root": "/home/docker"
}
```

4、移动现有的 Docker 数据（可选）

```bash
sudo mv /var/lib/docker /home/docker
```

5、重新启动 Docker 服务

```bash
sudo systemctl start docker
```

6、检查 Docker 是否正确运行

```bash
docker info | grep 'Docker Root Dir'
```

这条命令应该显示出新的存储路径 `/home/docker`。
