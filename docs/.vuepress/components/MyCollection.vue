<template>
  <div class="card-container">
    <a v-for="i in data.python" :href="i.url" class="card" target="_blank">
      <img :src="i.icon" alt="">
      <div class="card-content">
        <p class="title">{{i.title}}</p>
        <p class="info">{{i.info}}</p>
      </div>
    </a>
  </div>
</template>

<script>
let data = {
  "python": [
    {
      "title": "Python3 官方文档",
      "url": "https://docs.python.org/zh-cn/3.9/",
      "info": "[官方文档] 可以查到知识点更准确的描述",
      "icon": "https://docs.python.org/_static/py.svg",
    },
    {
      "title": "零基础入门 Python",
      "url": "https://www.bilibili.com/video/BV1c4411e77t",
      "info": "[视频教程] 梦开始的地方，小甲鱼老师的教程",
      "icon": "https://www.bilibili.com/favicon.ico?v=1",
    },
    {
      "title": "Java 基础学习",
      "url": "https://www.bilibili.com/video/BV12J41137hu",
      "info": "[视频教程] 狂神老师的教程，通俗易懂",
      "icon": "https://www.bilibili.com/favicon.ico?v=1",
    },
    {
      "title": "技术文章摘抄",
      "url": "https://www.bilibili.com/video/BV1c4411e77t",
      "info": "[博客] 宝藏网站：java、mysql、k8s等各种专栏",
      "icon": "https://learn.lianglianglee.com/static/favicon.png",
    },
    {
      "title": "开源项目风格指南",
      "url": "https://zh-google-styleguide.readthedocs.io/en/latest/",
      "info": "[文档] Google 开源项目风格指南——中文版",
      "icon": "https://zh-google-styleguide.readthedocs.io/favicon.ico",
    },
  ],

}
export default {
  name: "MyCollection",
  data() {
    return {
      data: data,
    }
  },
  mounted() {
    // 修改页面内容宽度
    let page = document.getElementsByClassName("theme-default-content")[0]
    page.setAttribute("style", "max-width: 80%; margin: 2em auto; padding: 2em 2.5em;")
    page.classList.add("custom")
  },
}
</script>

<style lang="stylus" scoped>
.card-container
  margin-top 1em
  display flex
  flex-flow row wrap

  a
    text-decoration none
    color inherit

  .card
    //width calc(100% / 3 - 1rem)
    max-width 15em
    height 100px
    //background-color #c7c4c4
    border 1px solid rgba(0, 0, 0, .1)
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
    border-radius 4px
    margin 0.5rem
    transition all 0.3s
    display flex
    flex 0 0 15em

    &:hover
      box-shadow 0 0.5rem 2rem #ccc
      transform translate(0, -3px)
      text-decoration none !important

    img
      width 32px
      height 32px
      // border-radius 50%
      margin auto 0 auto 1rem

    .card-content
      width 100%
      padding 0.5rem
      flex-direction: column;

      .title
        //font-size 1.2rem
        margin 0.2rem 0 0.1rem 0
        text-align center

      .info
        font-size 0.8rem
        color #757575
        margin 0 0 0.2rem 0.2rem
        //text-overflow ellipsis
        overflow: hidden
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical

</style>