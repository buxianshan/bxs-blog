---
sidebar: auto
---

<h1 align='center'>使用csdn作为免费图床</h1>
<div align='center'>post date: 2020-02-14</div>

## 个人网站如何存储图片

我的博客需要额外存储的主要是图片，所以一直在寻找方便存储图片的方法。

使用过七牛云和阿里云的OSS，要存储和使用一张图片的流程都是：上传本地图片到OSS，然后再复制外链使用。

如果是截图的话，还要先把截图保存到本地才能上传。所以当需要频繁使用截图的时候就感觉这些操作太繁琐。

## 尝试csdn图片外链

有人说csdn博客里的图片可以外链使用， 试了一下真的可以，看来csdn的图片没有防盗链。

于是有了大胆的想法，在csdn上写好文章（包含图片），直接复制到我现在的博客系统（都是markdwon格式），然后图文都可以正常显示。

::: tip
重要的是：csdn支持直接ctrl + v 粘贴截图，会自动保存到csdn的服务器。而且在csdn上的写的文章只保存为草稿，不用发布，也可以外链使用文章里的图片。
:::

## 去水印的方法

有的图片会加上csdn的水印，但是可以去掉。

下图是我直接截图粘贴到csdn的结果，右下方有csdn的水印
![去水印前](https://img-blog.csdnimg.cn/20200224173427860.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDc5NjIy,size_16,color_FFFFFF,t_70)
图片的链接如下：

```
https://img-blog.csdnimg.cn/20200224173427860.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDc5NjIy,size_16,color_FFFFFF,t_70
```

只要从问号?开始后面的参数都去掉就可以了。 去掉后链接为：

```
https://img-blog.csdnimg.cn/20200224173427860.png
```

效果：
![去水印后](https://img-blog.csdnimg.cn/20200224173427860.png)

## 总结
csdn号称“全球最大的中文IT技术社区”，所以一时半会也不会倒闭吧。访问速度理论上和访问csdn的博客一样的。本站大部分图片都存储在csdn的服务器，目前使用体验还不错。