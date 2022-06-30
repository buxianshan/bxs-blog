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

