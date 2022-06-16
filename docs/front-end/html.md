---
title: HTML笔记
sidebar: auto
---

<h1 align='center'>
    HTML笔记
</h1>


## 标签

成对出现的分为开发标签和闭合标签，单独出现的叫自闭合标签。

> IDEA 快捷键：标签名+Tab 快速生成标签
>
> 在HTML5标准中，自闭合标签中的"/"，加与不加都可以。IDEA默认生成的自闭合标签是不带"/"的。

## 注释

```html
<!-- 这里是注释 -->
```

## 基本标签

- 标题：h1-6
- 段落：p
- 换行：br
- 水平线：hr
- 粗体：strong
- 斜体：em

## 特殊符号

`&`开头，分号结尾。

- 空格：`&nbsp;`
- 大于号：`&gt`
- 小于号：`&lt`
- ……

参考：https://www.runoob.com/tags/html-symbols.html

## 图像标签 img 

属性：

- src：图片路径
- alt：图片加载不出来时显示的提示文字，一般用图片名即可
- title：鼠标悬停时的提示文字

## 链接标签 a

- href：要跳转到的页面
- target：`_blank`在浏览器新Tab打开页面；`_self`在当前页面打开
- 锚链接：上面有个a标签name是top（name相当于是一个锚标记），最下面可以加个a标签跳转到顶部，href写`#top`
- 可以在a标签里嵌套img标签，实现点击图片跳转
- 邮件链接：`<a href="mailto:buxianshan@gmail.com">联系我</a>`

## 行内元素和块元素

- 块元素：无论内容多少都占一行，p、h1-6

- 行内元素：多个行内元素可以排在一行，a、strong、em

## 列表标签

- 无序列表

  ```html
  <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
  </ul>
  ```

- 有序列表

  ```html
  <ol>
      <li>a</li>
      <li>b</li>
      <li>c</li>
  </ol>
  ```

- 自定义列表

  ```html
  <dl>
      <dt>这是列表名</dt>
  
      <dd>a</dd>
      <dd>b</dd>
      <dd>c</dd>
  </dl>
  ```


## 表格标签

```html
<table border="1px">
    <tr>
        <td colspan="4">跨4列</td>
    </tr>
    <tr>
        <td rowspan="2">跨2行</td>
        <td>f</td>
        <td>g</td>
        <td>h</td>
    </tr>
    <tr>
        <td>i</td>
        <td>j</td>
        <td>k</td>
    </tr>
</table>
```

## 媒体元素

视频标签 video、音频标签 audio 属性注意：

- src 视频路径
- controls 显示进度条
- autoplay 自动播放

## 语义标签

顾名思义：看名字知道其意义的标签。

- header：网页头部 （注意不是head标签）
- footer：页脚
- section：一块独立区域
- article：独立的文章区域
- aside：相关内容（常用与侧边栏）
- nav：导航栏

## iframe内联框架

在一个页面里嵌套别的页面

- src：引用页面的地址
- name：框架标识名

```
<iframe name="bili" src="//player.bilibili.com/player.html?aid=55631961&bvid=BV1x4411V75C&cid=97257967&page=11" scrolling="yes" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

# 可以通过a标签在iframe里打开链接
<a href="https://www.baidu.com" target="bili">点我iframe跳转到百度</a>
```

## 表单post和get提交

form的属性：

- method：post/get
- action：向何处发送表单

```html
<form action="https://www.baidu.com" method="get">
    <p>姓名: <input type="text" name="username"></p>
    <p>密码: <input type="password" name="password"></p>
    <input type="submit">
    <input type="reset">
</form>
```

## input标签属性

- type最重要，决定它是什么：文本、密码、单选、多选、按钮、提交、重置……
  - text 文本框
  - password 密码框
  - submit 提交
  - reset 重置表单
  - radio 单选框
  - checkbox 多选框
  - file 可以上传文件
  - range 滑块
  - email、number 可以对输入框进行简单的格式验证，但是不推荐使用，太简陋了
  - search 搜索框
  - button 按钮
  - image 图片
- value：默认初始值
- 单选按钮注意分组，name为同一组不可多选，否则可以多选

## 表单的应用

- 隐藏域：hidden
- 只读属性：readonly
- 禁用：disabled

## 表单的验证

- placeholder：占位、提示信息
- required：表示此项必能为空
- pattern：正则表达式验证
