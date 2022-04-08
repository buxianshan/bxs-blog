## 基于VuePress的个人知识库

![workflow: build and deploy](https://github.com/buxianshan/bxs-blog/actions/workflows/build.yml/badge.svg)

主页：[https://bxs.ink](https://bxs.ink/)

只需要编写markdown文件就可以生成简洁的网页。

### 开发环境

首先需要安装Node.js，然后在当前目录下安装依赖：

```bash
npm install
```

### 开始写作

在本地启动服务器

```bash
npm docs:dev
```

VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。

### 构建静态文件

```bash
npm docs:build
```

会在当前路径下的dist文件夹中生成静态文件，可以把它部署到任何web服务器中。
