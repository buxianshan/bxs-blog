---
title: 问题记录
sidebar: auto
---

<h1 align='center'>
    问题记录
</h1>

## header固定置顶

例如实现导航栏一直固定在最上方的效果。

关键点：

- 固定定位：`position: fixed;` 可以设置位置 `top: 0;`
- 置顶：`z-index`设置一个比较大的值即可，例如`z-index: 999;`
- 阴影：可以在下方设置点阴影有层次感 `box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);`

```css
.header {
  position: fixed;
  top: 0;
  z-index: 999;
  /* x轴偏移 | y轴偏移 | 模糊半径 | 扩散半径 | 颜色 */
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
  background-color: white;
  width: 100%;
}
```

参考：

- [CSS position定位（5种方式）](http://c.biancheng.net/css3/position.html)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)


## 卡片悬浮层次感


最初以为加个边框和阴影就像卡片了，实际效果很差。

关键点：

- 设置边框颜色透明度
- 设置阴影透明度
- (可选)鼠标悬浮时卡片上浮动画：注意设置过渡时间（否则动画很僵硬），例如`transition: all 0.3s;`

<style>
    .card {
        width: 180px;
        height: 100px;
        border-radius: 4px;
        transition: all 0.3s;
        cursor: pointer;
    }
    .card:hover {
        transform: translate(0, -3px);
        text-decoration: none !important;
    }
    .demo0 {
        border: 1px solid black;
        box-shadow: 0 2px 12px 0 black;
    }
    .demo1 {
        border: 1px solid rgba(0, 0, 0, .1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }
</style>

例如下面样式的效果：因为颜色太深显得很突兀

```css
border: 1px solid black;
box-shadow: 0 2px 12px 0 black;
```

<div class="card demo0"></div>

而加上边框和阴影颜色透明度的效果：看着就舒服点了

```css
border: 1px solid rgba(0, 0, 0, .1);
box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
```
<div class="card demo1"></div>

