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