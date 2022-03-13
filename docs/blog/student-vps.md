---
sidebar: auto
---

<h1 align='center'>对比阿里云和腾讯云的学生优惠服务器</h1>
<div align='center'>post date: 2020-02-26</div>

之前用过国外的VPS，带宽大，主要是用来科学上网。但是当我想建站或者学习的时候，不得不考虑国外VPS的缺点：

 - 延迟高
 - 有被墙的风险
 - 商家甚至可能“跑路”

而且我也没有很好的随时备份的方法，一旦出了问题就都没了。所以还是考虑用国内大厂的服务器吧，毕竟稳定，而且容易和客服沟通。
阿里云、腾讯云等都有学生优惠的服务器，比较划算，我最近试了两个。
## 阿里云学生优惠
[链接](https://www.aliyun.com/activity/promotion/campus2018)
24岁以下自动获得学生身份。目前有这两种配置，都是1核2G，9.5元/月。因为第二种有5M带宽，所以我买了第二种轻量应用服务器。现在我的网站就部署在这台VPS上。
![阿里云学生优惠](https://img-blog.csdnimg.cn/2020022621521759.png#shadow)

## 腾讯云学生优惠
[链接](https://cloud.tencent.com/act/campus?fromSource=gwzcw.2432500.2432500.2432500&utm_medium=cpc&utm_id=gwzcw.2432500.2432500.2432500)
25岁及以下免学生认证。1核2G1M，10元/月。我也买了一台。
![腾讯云学生优惠](https://img-blog.csdnimg.cn/20200226220214799.png#shadow)
## 两台VPS对比
两台VPS都在上海的机房，国内延迟肯定很低。
![阿里云ping检测](https://img-blog.csdnimg.cn/20200226221834992.png#shadow)
![腾讯云ping检测](https://img-blog.csdnimg.cn/20200226221947503.png#shadow)
**下面用宝塔面板的跑分测试简单对比一下。**

**阿里云轻量应用服务器：**

![阿里云](https://img-blog.csdnimg.cn/20200226220950214.png#shadow)

**腾讯云：**

![腾讯云](https://img-blog.csdnimg.cn/20200226221042241.png#shadow)

可以看到跑分其实差不多的，毕竟配置都是1核2G。

## 实际使用体验
在两台VPS上都部署了一个网站，浏览体验上都很流畅。但有时会感觉阿里云的加载更快，毕竟峰值5M带宽。
为了测试带宽差距，我在两个站点都上传了同一个8.18MB的附件，通过迅雷下载对比速度。

**阿里云轻量应用服务器：**

![下载阿里云上的文件](https://img-blog.csdnimg.cn/20200226223338743.png#shadow)

![下载阿里云上的文件](https://img-blog.csdnimg.cn/2020022622341032.png#shadow)

耗时17秒，平均速度500KB/s左右，也就是4Mbps左右。

**腾讯云：**

![下载腾讯云上的文件](https://img-blog.csdnimg.cn/20200226223626824.png#shadow)

![下载腾讯云上的文件](https://img-blog.csdnimg.cn/20200226223648967.png#shadow)

耗时103秒，平均速度80KB/s左右，也就是0.64Mbps左右。

带宽大的优势很明显。

## 总结
学生用来建站和学习，个人建议首选阿里云这款5M带宽的轻量应用服务器。大厂服务和售后都有保证，而且也不贵。学生优惠一般都是限购一台，所以目前阿里和腾讯的这两台我都在用。一台用来建站，另一台瞎折腾。