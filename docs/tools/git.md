---
sidebar: auto
title: Git
---

<h1 align='center'>Git</h1>

## git commit 代码提交规范

提交代码或创建pull request时，建议使用规范的格式描述改动信息。

事实上并没有统一的标准要求必须怎么做，规范提交格式可以便于对提交历史进行追溯，使代码改动的历史更加清晰。

推荐格式如下（注意英文冒号后有一个空格）：

```
<type>: <subject>
```

`type`是改动类别，例如以下这些：

- feature: 新功能（或者feat）
- fix: 修复bug
- docs: 文档改动
- style: 格式（不影响代码运行的变动）
- refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
- test: 增加测试
- merge: 代码合并
- revert: 回滚到某次提交
- build: 用于更新构建配置、开发工具等
- chore: 杂项，其它与功能无关的更改

`subject`就是commit的简短描述，建议不超过50个字符。

个人感觉`subject`使用中文还是英文要看情况。例如都是公司的同事，那建议还是中文方便大家看。如果是GitHub上的开源仓库，维护者大多是国外的，那就使用英文更方便交流。

样例：

```
fix: 用户查询缺少username属性
docs: 补充***的文档
feature: 新增***功能
```

## 克隆 GitHub 上的项目报错

大概率是网络问题，即使本地开启了科学上网的代理，没有配置好的话也会报错。

遇到过以下报错：

- OpenSSL SSL_connect: Connection was reset in connection to github.com:443
- Proxy CONNECT aborted

**解决方法：**

查看本地科学上网代理的端口，例如：

```bash
HTTP 127.0.0.1:10809
SOCKS5 127.0.0.1:10808
```

给git设置全局代理：

```bash
git config --global http.proxy 127.0.0.1:10809
git config --global https.proxy 127.0.0.1:10808
```

此时应该已经可以正常使用`git clone`了。

**还原git代理设置：**

如果需想要还原设置，只需要使用下面的命令：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

上面是设置全局代码，如果只想在当前仓库设置，使用下面的命令：

```bash
# 查看当前仓库的配置
 git config --local -l

# 给当前仓库设置代理
git config --local http.proxy 127.0.0.1:10809
git config --local https.proxy 127.0.0.1:10808

# 取消代理设置
git config --local --unset http.proxy
git config --local --unset https.proxy
```

如果使用了git的GUI工具，例如Sourcetree，修改了代理还是遇到报错，可以尝试重启Sourcetree😂。



## 丢弃本地修改，强制拉取最新

丢弃本地修改，强制拉取远程仓库最新代码。

如果本地只修改了文件，但没有commit，可以使用下面这个命令：

```bash
git checkout .
```

如果本地仓库也有提交（没有推送到远程仓库），使用下面的命令：

```bash
# 获取远程仓库代码（不是合并）
git fetch --all
# 把HEAD强制指向某分支，例如master分支
git reset --hard origin/master
```



## 代码仓库太大，git clone 拉不下来

代码仓库太大（例如超过2GB），git clone 时容易中断或者报错。

代码仓库大可能有两个原因：

- 存储的文件本身就大，例如存储了jar包、静态资源等文件
- 代码仓库分支多，提交历史记录多



经过多次实践，记录一下自己体验较好的方式。

::: tip 注意
强烈建议先使用SSH克隆试试，如果还是不行再尝试下面的方法。
:::

**第一步：只克隆代码仓库中某一个分支，并且是浅克隆（例如只获取最近一次的提交记录）**

```bash
git clone --depth 1 -b 分支名 代码仓库链接
```

**第二步：修改仓库配置**

修改.git/config 文件中的配置.

因为克隆的时候指定了一个具体分支，`git fetch`也只会获取一个分支的内容。

修改前：

```
[remote "origin"]
	url = 代码仓库链接
	fetch = +refs/heads/分支名:refs/remotes/origin/分支名
```

修改后（就是把分支名改成了`*`）：

```
[remote "origin"]
	url = 代码仓库链接
	fetch = +refs/heads/*:refs/remotes/origin/*
```

**第三步：获取所有分支代码**

执行`git fetch`，等待拉取结束即可。

（因为仓库较大，等待时间还是可能长一点，但已经比直接完整克隆要稳定很多了。）