---
sidebar: auto
---

<h1 align='center'>打包项目到PyPI</h1>

## 简介

记录一下自己学习把包发布到PyPI的过程，写了一个demo。

demo源文件：[python-packaging-demo](https://github.com/buxianshan/python-packaging-demo)

TestPyPI页面：[bxs-TestPyPI](https://test.pypi.org/project/bxs/)

备注：

## PyPI是什么

PyPI 是 Python Package Index 的首字母简写，表示的是 Python 的 Packag 索引，也是 Python 的官方索引。

我们平时使用pip下载的包就是PyPI中的，使用国内的镜像下载也是会同步PyPI的。例如清华的镜像站：

![image-20220318103407734](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220318103407734.png)

## 如何发布自己的 python 包到PyPI

参考官方文档：[Packaging Python Projects](https://packaging.python.org/en/latest/tutorials/packaging-projects/)

### 项目结构

```
packaging_tutorial/
├── LICENSE
├── pyproject.toml
├── README.md
├── setup.cfg
├── src/
│   └── example_package/
│       ├── __init__.py
│       └── example.py
└── tests/
```

官方文档里有每个文件的详细说明，这里就不赘述了。

### 打包

确保使用build工具最新版：

```sh
python -m pip install --upgrade build
```

在`pyproject.toml`所在的目录下执行：

```sh]
python -m build
```

会在当前目录下生成dist文件夹，包含两个文件：

- package-name-0.0.1-py3-none-any.whl
- package-name-0.0.1.tar.gz



顺便提一下，这个whl文件已经可以本地直接安装了：

```sh
pip install package-name-0.0.1-py3-none-any.whl
```

### 上传到PyPI

注意区分[PyPI](https://pypi.org/)和[TestPyPI](https://test.pypi.org/)。TestPyPI也是官方推荐的平台，其实就是让你可以在正式发布到PyPI前，可以使用TestPyPI来测试发布。这两个网站都要注册账号。

我这里使用的是TestPyPI，因为这个demo只是用来学习，没必要发布到PyPI。

首先安装[twine](https://packaging.python.org/en/latest/key_projects/#twine)，也是官方文档建议的工具：

```sh
python -m pip install --upgrade twine
```

使用twine把包上传到TestPyPI：

```sh
python -m twine upload --repository testpypi dist/*
```

这个过程中将会提示输入TestPyPI的用户名和密码：

```
PS D:\code\bxs_package> python -m twine upload --repository testpypi dist/*
Uploading distributions to https://test.pypi.org/legacy/
Enter your username: buxianshan
Enter your password:
Uploading bxs-0.0.2-py3-none-any.whl
100%|█████████████████████████████████████████████████████████████████████████████| 5.80k/5.80k [00:02<00:00, 2.08kB/s]
Uploading bxs-0.0.2.tar.gz
100%|█████████████████████████████████████████████████████████████████████████████| 5.73k/5.73k [00:01<00:00, 3.85kB/s]

View at:
https://test.pypi.org/project/bxs/0.0.2/
```

上传完成后会给一个链接，就可以在TestPyPI上看到自己的包了：

![image-20220318111411250](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220318111411250.png)

### 安装自己的包

安装我的这个demo：

```sh
pip install -i https://test.pypi.org/simple/ bxs

# pip list看一下
[root@localhost ~]# pip list
Package            Version
------------------ ---------
bxs                0.0.2
```

正常使用：

```sh
[root@localhost ~]# python3
Python 3.7.2 (default, Jan 11 2022, 11:20:27) 
[GCC 4.8.5 20150623 (Red Hat 4.8.5-44)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from bxs import this
Hello! This is bxs.
Welcome to my blog: https://bxs.ink/
>>> 
```

### 特别注意

在PyPI不能上传相同的文件名，例如第一次上传了v1，以后都不能再上传v1了，即使把v1删掉了也不能重新上传！

会报错：

```sh
Error during upload. Retry with the --verbose option for more details.
HTTPError: 400 Bad Request from https://test.pypi.org/legacy/
File already exists. See https://test.pypi.org/help/#file-name-reuse for more information.
```

有人解释的原因是：旧文件名将被标记为无限期缓存，因此即使您可以上传具有相同名称的文件名，如果他们已经获取旧版本，他们将永远不会获得新版本。

参考：[In pypi, it is impossible to reupload a removed file.](https://github.com/pypa/packaging-problems/issues/74)