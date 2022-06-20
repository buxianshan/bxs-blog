---
title: CSS笔记
sidebar: auto
---

<h1 align='center'>
    CSS笔记
</h1>

层叠样式表 (Cascading Style Sheets)

## 语法

每个声明分号结尾

```CSS
选择器 {
    声明1;
    声明2;
    ……
}
```

## CSS导入方式

建议从外部引入css

- 内部样式：style标签内写css的代码

  ```html
  <style>
      h1{
          color: red;
      }
  </style>
  ```

- 外部样式

  - 链接式（常用）

    ```html
    <link rel="stylesheet" href="css/style.css">
    ```

  - 导入式（CSS2.1特有的，现在不常用，了解就行，不建议使用）

    ```html
    <style>
        @import "css/style.css";
    </style>
    ```

    

- 行内样式 标签的style属性

优先级：就近原则，行内最近，其它的看位置

## 选择器

选中页面中的某个或某类元素

### 基本选择器

优先级是id选择器 > 类选择器 > 标签选择器

- 标签选择器：直接用标签名就可选到所有这种标签

  ```html
  <style>
      h1 {
          color: red;
      }
  </style>
  ```

- 类选择器 calss：点加类名

  ```html
  <style>
      .class_name {
          color: red;
      }
  </style>
  ```

  

- id 选择器：井号加id（id必须唯一）

  ```html
  <style>
      #id_name {
          color: red;
      }
  </style>
  
  ```

总结一下：点加类名，#加id

### 层次选择器

- 后代选择器：某个元素的所有子孙节点，例如body中的所有p标签

  ```html
  <style>
      body p {
          background: green;
      }
  </style>
  ```

- 子选择器：某个元素的直接子节点

  ```html
  <style>
      body > p {
          background: green;
      }
  </style>
  ```

- 兄弟选择器：某个元素相邻的元素，例如class1下面相邻的p元素

  ```html
  <style>
      .class1 + p {
          background: green;
      }
  </style>
  ```

- 通用选择器：某元素相邻的下面的所有元素

  ```html
  <style>
      .class1 ~ p {
          background: green;
      }
  </style>
  
  ```


### 结构伪类选择器

冒号后加条件

ul标签下的第一个li标签

```html
<style>
    ul li:first-child {
        background: green;
    }
</style>
```

选择当前元素的父元素的第一个子元素，并且是当前元素才生效

```html
<style>
    p:nth-child(1) {
        background: green;
    }
</style>
```

### 属性选择器（重要）

相当于id和calss结合了

带有class属性的a标签

```html
<style>
    a[class] {
        background: green;
    }
</style>
```

可以指定属性名和属性值，而且属性值支持正则表达式

- =是绝对等于
- *=是包含
- ^=开头是
- $=结尾是

```html
<style>
    a[class*="links"] {
        background: green;
    }
</style>
```

## 样式和属性

重点要突出的文字使用span标签包起来

### 字体样式

- 可以直接用一个font属性写，font: 风格 粗细 大小 字体
- font-family 字体
- font-size 字体大小
- font-weight 字体粗细
- color 字体颜色

### 文本样式

- 颜色 color
- 对齐方式 text-align center
- 首行缩进 text-indent：2em
- 行高 line-height
- 下划线 text-decoration: underline、中划线 text-decoration: through、上划线 text-decoration: overline

### 超链接伪类

例如hover：鼠标悬浮在a标签改变颜色

```html
a:hover{
    color: red;
}
```

### 阴影

text- shadow：阴影颜色 水平偏移 垂直偏移 阴影半径

### 列表样式

- list-style：none 去掉列表前的圆点

### 背景

- 颜色 background-color
- 图片 background-img
- 边框 border

- 渐变色，建议使用这个网站：https://www.grabient.com/



一个背景渐变和文字居中的demo:

- 注意要让背景铺满屏幕background-attachment: fixed;不然加了文字就变成一条一条的背景了。
- 要让div处于屏幕中央，使用绝对布局，position: absolute;

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            background-color: #0093E9;
            background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
            background-attachment: fixed;
        }

        div {
            font-family: Courier;
            font-size: x-large;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
    <div>
        Hello, This is BXS.
    </div>

</body>
</html>
```

## 盒子模型

- margin 外边距
- border 边框
- padding 内边距

都是分上下左右的

### 边框

border: red solid 10px;

- 颜色 红色
- 样式 solid实线 dashed 虚线 
- 粗细 10个像素

### 外边距

body总有一个margin默认是是8px，不是0

常用外边距来使元素水平居中，margin: auto;

## 圆角边框

```
border-radius: 50px;
```

正方形当圆角边框和边长相等时就是圆

## 阴影

可以做边框发光的效果

```
box-shadow: 10px 10px 1px yellow;
```

## 浮动

标准文档流：块级元素从上到下顺序排列

display属性

- none 不显示
- block 块级显示
- inline 行内显示
- inline-block 既是行内也是块元素：是块元素，但是可以显示在一行



float属性

- left 往左浮动
- right 

clear：例如如果向右浮动，右边已经有了别的元素，则它会清理一下，自己往移动一点，还是保证自己贴着右边

## 父级边框塌陷的问题

块元素float浮动之后，父元素高度变了

- 解决方式1：直接设置父元素的高度为**px

- 解决方式2：增加一个空的div标签，清除浮动clear：both

- 解决方式3：overflow：hidden

- 解决方式4（推荐）：在父元素添加伪类,添加一个空内容的block，清除浮动

  ```css
  #father:after {
    content: "";
    display: block;
    clear:both;
  }
  ```


overflow属性

- hidden 超过宽高的部分隐藏
- scroll 超过的时候会出现滚动条

## 定位

### 相对定位

position：relative

相对于自己原来的位置进行偏移

使用了相对定位的元素仍然处于标准文档流中，原来的位置会被保留

### 绝对定位

position：absolute

没有父元素时，根据浏览器边框定位

### 固定定位

position：fixed

固定在屏幕的某个位置

### Z-index

图层

zindex：0 表示放到第0层,默认是0，最高不限

## 透明度

opacity:0.5

## 动画

了解一下就行：[CSS3 动画](https://www.runoob.com/css3/css3-animations.html)

