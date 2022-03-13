---
sidebar: auto
---

<h1 align='center'>python使用虚拟环境</h1>
<div align='center'>post date: 2020-09-08</div>

介绍两种python虚拟环境的使用方法。

##  1 使用virtualenv
### 1.1 安装virtualenv

```python
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ virtualenv
```
### 1.2 创建虚拟环境

```python
virtualenv test_evn --python=python3
```
### 1.3 激活虚拟环境

在虚拟环境目录下的Scripts文件夹里有个activate.bat，在命令行运行该脚本

```python
activate.bat
```
### 1.4 退出虚拟环境

```python
deactivate
```
### 1.5 在vscode中使用该虚拟环境

使用vscode打开一个项目文件夹，Ctrl+Shift+p 搜索 Select Interpreter，点击 Enter interpreter path，选择上面创建的虚拟环境里Scripts下的python.exe，然后就可以使用该虚拟环境运行python文件了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020090821434189.png)

## 2 使用Anaconda Navigator图形界面

### 2.1 安装Anaconda

前提是已安装Anaconda。
Anaconda指的是一个开源的Python发行版本，其包含了conda、Python等180多个科学包及其依赖项。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200908214901197.png#pic_center)

### 2.2 打开Anaconda Navigator

打开Anaconda Navigator后，选择Environments，点击Create就可以创建虚拟环境了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200908215210576.png#pic_center)

输入名称，选择python版本，点击Create

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200908215343383.png#pic_center)

### 2.3 使用虚拟环境

在vscode中同样选择该虚拟环境就可以使用了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200908220253670.png#pic_center)