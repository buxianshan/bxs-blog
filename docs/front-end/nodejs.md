---
title: Node.js
sidebar: auto
---

<h1 align='center'>Node.js</h1>

## Node.js 简介

[Node.js](https://nodejs.org/zh-cn/) 是一个基于 Chrome V8 引擎的 JavaScript 运行时。

简单的讲 Node.js 就是脱离了浏览器的 JavaScript 运行环境，也可以说是运行在服务端的 JavaScript。

[Node.js API文档](https://nodejs.org/api/documentation.html)

## npm: 包管理器

> Node.js 完全是基于模块化构建的，因此需要一个高质量的包管理器；有鉴于此 npm 诞生了。

类似Python的包管理器pip，npm是Node.js默认的包管理器。

[npm官方文档](https://docs.npmjs.com/)

## 包和模块

参考文档：[About packages and modules](https://docs.npmjs.com/about-packages-and-modules)

### 什么是模块

npm文档中的描述：要由 Node.js 的`require()`函数加载，模块必须是以下之一

- 一个有`package.json`文件的文件夹，并且`package.json`中有`"main"`字段。
- 一个 JavaScript 文件。

参考[Node.js中文网](http://nodejs.cn/api/modules.html)对模块的介绍再补充一点：如果目录中不存在 [`package.json`](http://nodejs.cn/api/packages.html#nodejs-packagejson-field-definitions) 文件，或者 [`"main"`](http://nodejs.cn/api/packages.html#main) 条目丢失或无法解析，则 Node.js 将尝试从该目录中加载 `index.js` 或 `index.node` 文件。 例如，如果前面的示例中没有 [`package.json`](http://nodejs.cn/api/packages.html#nodejs-packagejson-field-definitions) 文件，则 `require('./some-library')` 将尝试加载：

- `./some-library/index.js`
- `./some-library/index.node`

如果这些尝试失败，Node.js 将报告整个模块丢失，并显示默认错误：

``` bash
Error: Cannot find module 'some-library'
```

### 什么是包

简单的讲，有`package.json`文件的模块就是一个包。

npm 文档中详细描述了包的格式：

- a) 一个包含由文件描述的程序的`package.json`文件夹。
- b) 一个包含 (a) 的gz压缩文件。
- c)一个 解析为 (b) 的 URL。
- d)一个在npm仓库中发布的 (c)，格式为`<name>@<version>`。
- e)一个指向(d)的标签，格式为`<name>@<tag>`。
- f)一个`<name>`有`latest`标签的 (e) 。
- g) 一个`git`url，在克隆时会得到 (a)。



## npm常用命令

参考文档：[CLI Commands](https://docs.npmjs.com/cli/v8/commands)

- `npm init`：创建一个`package.json`文件，可用于设置新的或现有的 npm 包。

- `npm install`：安装一个包。此命令安装一个包和它所依赖的任何包。未指定包名时将安装以下文件中的包（有优先级顺序）：

  - `npm-shrinkwrap.json`
  - `package-lock.json`
  - `yarn.lock`

  可选参数：

  - `-g, --global`: 使用该参数则全局安装，默认是只在当前目录安装。

  - `-P, --save-prod`: 包名将出现在你的 `dependencies` 里。 这是默认的，除非使用了 `-D` 或 `-O` 参数。
  - `-D, --save-dev`: 包名 将出现在你的 `devDependencies`。
  - `-O, --save-optional`: 包名将出现在你的 `optionalDependencies`。
  - `--no-save`: 阻止包名出现在 `dependencies`。

- `npm uninstall`: 删除包。

- `npm run <command>`: 运行任意包脚本。简单的讲就是运行写在`scripts`下的`<command>`对应的命令。如果没有指定`<command>`，将列出所有可用脚本命令。

## CommonJS

**CommonJS**是一个项目，其目标是为[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)在[网页浏览器](https://zh.wikipedia.org/wiki/网页浏览器)之外创建[模块](https://zh.wikipedia.org/wiki/子程序)约定。创建这个项目的主要原因是当时缺乏普遍可接受形式的JavaScript脚本模块单元，模块在与运行JavaScript脚本的常规网页浏览器所提供的不同的环境下可以重复使用。Node.js中require这个函数、这种导入模块的写法就是借鉴了CommonJS的规范。

特别注意它不是js官方的规范，浏览器并不支持require这种写法。

虽然2013年5月，[Node.js](https://zh.wikipedia.org/wiki/Node.js)包管理器[npm](https://zh.wikipedia.org/wiki/Npm)的作者Isaac Z. Schlueter，宣布Node.js已经废弃了CommonJS。但其实意思是Node.js以后不完全遵守CommonJS规范了，不代表借鉴的require写法也弃用了。现在仍然是使用这种写法。

目前大多数浏览器都是支持ES6。例如`import`写法，浏览器是支持的，但是Node.js原生js不支持这种写法。