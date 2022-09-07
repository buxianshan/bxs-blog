参考文档：

- https://docs.docker.com/compose/
- https://www.runoob.com/docker/docker-compose.html
- https://www.jianshu.com/p/2217cfed29d7

## 安装

建议使用pip安装比较方便：`pip install docker-compose`

查看版本：`docker-compose`

## 使用docker-compose部署gitea

配置文件 gitea.yml 内容如下：就是启动两个容器 gitea 和 mysql。

```yaml
version: "3"

networks:
  gitea:
    external: false

services:
  server:
    image: gitea/gitea:1.17.1
    container_name: gitea-server
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - GITEA__database__DB_TYPE=mysql
      - GITEA__database__HOST=db:3306
      - GITEA__database__NAME=gitea
      - GITEA__database__USER=gitea
      - GITEA__database__PASSWD=gitea
    restart: always
    networks:
      - gitea
    volumes:
      - ./gitea:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
    depends_on:
      - db

  db:
    image: mysql:5.7
    container_name: gitea-mysql
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=gitea
      - MYSQL_USER=gitea
      - MYSQL_PASSWORD=gitea
      - MYSQL_DATABASE=gitea
    networks:
      - gitea
    volumes:
      - ./mysql:/var/lib/mysql
```

- 创建：docker-compose -f gitea.yml up -d
- 停止：docker-compose -f gitea.yml stop
- 启动：docker-compose -f gitea.yml start
- 重启：docker-compose -f gitea.yml restart
- 删除：docker-compose -f gitea.yml down

