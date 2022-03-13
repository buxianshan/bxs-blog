---
sidebar: false
---

<h1 align='center'>Python批量修改文件名</h1>
<div align='center'>post date: 2020-03-03</div>

最近下载了电视剧《琅琊榜》，总共54集。但是某平台给所有视频的文件名都加了他们的前缀。如果放到电视里播放很难选择集数，因为文件名前缀太长了，把关键信息都挤到后面了。

![](https://img-blog.csdnimg.cn/20200303204432145.png#shadow)

不拉长名称完全不知道到底是哪一集。

![](https://img-blog.csdnimg.cn/20200303204545794.png#shadow)

所以想把文件名都改得简洁一点，查了点资料发现用python的os.rename()方法很方便。
最终想要的格式为：琅琊榜_ (集数).mp4
代码如下：

```python
import os
import re


# 文件夹路径，注意把路径分隔符都改成双反斜杠
path = "D:\\迅雷下载\\琅琊榜\\"
# 返回该文件夹下所有文件名的列表
fileList = os.listdir(path)
for filename in fileList:
    oldname = filename
    # 用正则表达式匹配文件名，此处格式为“琅琊榜_(2个数字)”,再加上后缀名.mp4
    newname = re.search("琅琊榜_\d\d", filename).group() + ".mp4"
    # 用os模块中的rename方法重命名
    os.rename(path + oldname, path + newname)
    print(oldname,'======>',newname)


print("已完成！")
```
运行结果：

![](https://img-blog.csdnimg.cn/20200303210539739.png#shadow)

修改完看着就舒服多了。

![](https://img-blog.csdnimg.cn/20200303210628759.png#shadow)

如果只是想去掉文件名里的一部分，比如去掉[电影天堂www.dy2018.com]，直接用replace()方法把它替换成空就行了：

```python
newname = oldname.replace("[电影天堂www.dy2018.com]", "")
```