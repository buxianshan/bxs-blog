<h1 align='center'>Docker</h1>

## 简介

关于什么是Docker这里不做赘述，下面是我的学习过程：

- Bilibili视频：[Docker通俗易懂教程](https://www.bilibili.com/video/BV1og4y1q7M4)
- [Docker官方文档](https://docs.docker.com/ )
- 动手实践

## 安装Docker

```bash
# 1、卸载旧版本
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# 2、安装需要的工具
sudo yum install -y yum-utils

# 3、设置镜像的仓库(换成阿里云的)
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 4、安装docker(ce社区版、ee企业版)
# 先更新一下yum的索引
yum makecache fast
sudo yum install docker-ce docker-ce-cli containerd.io

# 5、启动docker服务
sudo systemctl start docker
# docker version 可以看到docker server和client版本

# 6、测试运行hello-world
docker run hello-world

# 7、查看一下刚下载的hello-world镜像
docker images
```

## 卸载Docker

```bash
# 1、卸载docker依赖
sudo yum remove docker-ce docker-ce-cli containerd.io
# 2、删除目录
sudo rm -rf /var/lib/docker
```

## 配置阿里云镜像

[阿里云的解释](https://help.aliyun.com/document_detail/60750.html)：使用Docker时需要首先下载一个官方镜像，例如`mysql`、`wordpress`。然而由于网络原因，下载一个Docker官方镜像可能会需要很长的时间，甚至下载失败。为此，阿里云容器镜像服务ACR提供了官方的镜像站点，从而加速官方镜像的下载。

```bash
sudo mkdir -p /etc/docker
# 下方的地址是我在阿里云免费申请的，当然你也可以自己申请一个
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://r9g24uys.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 查看版本、系统信息、帮助文档

帮助文档：https://docs.docker.com/reference/

```bash
docker version
# 显示docker系统信息，镜像、容器数量、运行状态等
docker info
docker [command] --help
```

## 镜像的基本命令

### docke images

```bash
# 显示本地所有镜像信息
docker images
    -a, --all    # 列出所有镜像
    -q, --quiet  # 只显示镜像的id
```

### docker search

```bash
# 搜索镜像（等于从docker hub上搜索）
docker search mysql
	--filter=STARS=3000 # 过滤出收藏超过3000的镜像
```

### docker pull

```bash
# 拉取镜像
# docker pull mysql[:tag]

[root@localhost ~]# docker pull mysql
Using default tag: latest # 如果不写tag，默认是latest
latest: Pulling from library/mysql
d121f8d1c412: Pull complete # 分层下载
f3cebc0b4691: Pull complete 
1862755a0b37: Pull complete 
489b44f3dbb4: Pull complete 
690874f836db: Pull complete 
baa8be383ffb: Pull complete 
55356608b4ac: Pull complete 
dd35ceccb6eb: Pull complete 
429b35712b19: Pull complete 
162d8291095c: Pull complete 
5e500ef7181b: Pull complete 
af7528e958b6: Pull complete 
Digest: sha256:e1bfe11693ed2052cb3b4e5fa356c65381129e87e38551c6cd6ec532ebe0e808 # 签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest	# 真实地址

# 等价于下面
docker pull docker.io/library/mysql:latest

# 指定镜像版本
docker pull mysql:5.7
```

### docker rmi

```bash
# 删除镜像
docker rmi -f image_id1 image_id2 # 可以多个id

# 删除所有镜像
docker rmi -f $(docker images -aq)
```

## 容器的基本命令

有了镜像才能创建容器，如果本地没有镜像，docker会先尝试在Docker Hub上下载镜像。

```bash
# 下载一个centos的镜像
docker pull centos
```

### docker run

```bash
# 创建容器并运行
docker run [可选参数] image
# 常用参数
	--name="Name"	# 容器名字(命名)
	-d              # 以后台方式运行
	-it             # 使用交互方式运行，进入容器查看内容
	-p 8080:8080    # 指定容器的端口(可以映射主机端口)
		-p ip:主机端口：容器端口
		-p 主机端口:容器端口 (常用)
		-p 容器端口
		容器端口
	-P              # 随机指定端口

# 新建并启动容器
docker run -it centos /bin/bash
# 直接停止容器并退出(因为没有-d设置以后台方式运行)
exit
# 退出容器(不停止容器)
Ctrl + P + Q
```

### docker ps

```bash
# 查看运行中的容器
docker ps
	-a	            # 查看所有运行过的容器
	-q              # 只显示容器的编号
	-n=number       # 显示最近创建的n个容器
```

### docker rm

```bash
docker rm 容器id                     # 删除容器(运行中的容器要-f才能删除)
docker rm -f $(docker ps -aq)       # 删除所有容器
docker ps -a -f -q|xargs docker rm  # 删除所有容器
```

### 启动/停止容器

```bash
docker start 容器id
docker stop 容器id
docker restart 容器id
docker kill 容器id      # 强制停止运行容器
```

### docker stats

显示容器使用的系统资源

```bash
# 默认情况下，stats 命令会每隔1秒刷新一次输出的内容直到你按下 ctrl + c
docker stats
```

## 常用命令

### 后台启动容器

```bash
# docker run -d 镜像名
docker run -d centos
# 这样运行centos后发现这个容器停止了，因为容器内没有正在运行的进程就会自动停止
```

### 进入正在运行的容器

```bash
# 方法1：进入容器开启一个新的终端(容器内需要有/bin/bash这个解释器，或者改成其它解释器)
docker exec -it 容器id /bin/bash
# 退出容器
exit

# 方法2：进入容器正在运行的终端
docker attach 容器id
# 注意attach进入的容器，如果Ctrl+C退出会直接把容器给停止了
```

### 设置容器开机自启

```bash
docker update --restart=always 容器名
```

### 查看某个容器的日志

```bash
docker logs -tf --tail 10 容器名	# 实时刷新，显示最后10行
```

### 查看容器中的进程信息

```bash
docker top 容器名
```

### 查看镜像/容器元数据

```bash
docker inspect 镜像名或容器名
```

### 容器内外复制文件

只要容器存在就可以进行文件复制，不需要容器正在运行中。

```bash
# 容器内复制到容器外
docker cp 容器id:容器内路径 宿主机路径

# 容器外复制到容器内
docker cp 宿主机路径 容器id:容器内路径 
```

### 修改容器名

```bash
docke rename old_name new_name
```

## 容器数据卷

将容器内的目录挂载到主机（或者叫映射），容器间也可以数据共享。

### 指定路径挂载

```bash
# 创建容器时使用参数-v挂载
docker run -it -v 主机目录:容器目录 镜像
# 可以在容器元数据看到挂载的具体信息
docker inspect 容器名
```

### 具名和匿名挂载

简单地说具名挂载就是指定数据卷名，匿名挂载就是不指定数据卷名（自动生成一串名字）。建议用具名挂载。

```bash
# 创建一个nginx容器，匿名挂载/etc/nginx目录。-P是随机映射端口
docker run -d -P --name nginx001 -v /etc/nginx nginx

# 创建一个nginx容器，具名挂载/etc/nginx到数据卷名为nginx001_volume
docker run -d -P --name nginx002 -v nginx002_volume:/etc/nginx nginx

# 查看所有数据卷
[root@shanghai_0 ~]# docker volume ls
DRIVER              VOLUME NAME
local               9bdd94a6384879da13f6051c3e79327d3d3d7a2e04587efd37691db9d1bbc57b
local               nginx002_volume
```

使用docker inspect 容器id 可以查看到具体挂载的信息

![image-20201009224819467](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20201009224819467.png)

docker数据卷默认都在/var/lib/docker/volumes/下

::: warning 注意

注意具名和匿名挂载都是不指定容器外路径的，指定路径的叫指定路径挂载。

:::

挂载时在容器内路径后可以加`:rw`或`:ro`

```bash
# 通过-v 容器内路径:ro或rw 设置读写权限。如果是ro，则在容器内就不能修改该路径下的文件（只能在容器外修改）
docker run -d -P --name nginx002 -v nginx002_volume:/etc/nginx:ro nginx
```

## Dockerfile

用来构建docker镜像的文件。通过这个脚本生成镜像，镜像是一层一层的，脚本的一个个命令，每个命令都是一层。

构建步骤：

1. 编写docker file 文件
2. docker build 构建为一个镜像
3. docker run 运行镜像
4. docker push 发布镜像（DockerHub、阿里云镜仓库）

一般官方发布的镜像都有链接到github的dockerfile，官方镜像一般都是最精简的。

### DockerFile基础命令

- 每个关键字（命令）都必须大写
- 从上到下顺序执行
- #表示注释
- 每一个指令都会提交一个新的镜像层，并提交

![image-20201022002708416](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20201022002708416.png)

```dockerfile
FROM					# 基础镜像
MAINTAINER				# 作者（维护者），姓名+邮箱
RUN						# 构建镜像时需要运行的命令
ADD						# 添加文件（比如tomcat压缩包）
WORKDIR					# 镜像的工作目录
VOLUME					# 设置卷，挂载目录
EXPOSE					# 指定开放的端口
RUN						# 构建镜像时需要运行的命令
CMD						# 指定容器启动时要运行的命令，只有最后一个会生效，可被替代
ENTRYPOINT				# 指定容器启动时要运行的命令，可以追加命令
ONBUILD					# 当构建一个被继承 DockerFile ，就会触发这个指令
COPY					# 类似ADD，把文件复制到镜像中
ENV						# 构建时设置环境遍历
```

### 构建一个自己的centos镜像

只是安装了vim和net-tools。

dockerfile：

```dockerfile
FROM centos
MAINTAINER buxianshan<buxianshan@gmail.com>

ENV MYPATH /usr/local
WORKDIR $MYPATH

RUN yum install -y vim
RUN yum install -y net-tools

EXPOSE 80

CMD echo $MYPATH
CMD echo "------END------"
CMD /bin/bash
```

build：

```bash
# .代表当前目录
docker build -f dockerfile-centos -t mycentos:0.1 .
```

### docker history 

```bash
# 可以用这个命令研究某个镜像是怎么做的
docker history 镜像
```

