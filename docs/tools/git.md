---
sidebar: auto
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

```sh
HTTP 127.0.0.1:10809
SOCKS5 127.0.0.1:10808
```

给git设置全局代理：

```sh
git config --global http.proxy 127.0.0.1:10809
git config --global https.proxy 127.0.0.1:10808
```

此时应该已经可以正常使用`git clone`了。

**还原git代理设置：**

如果需想要还原设置，只需要使用下面的命令：

```sh
git config --global --unset http.proxy
git config --global --unset https.proxy
```

