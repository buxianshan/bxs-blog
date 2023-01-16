<template>
  <div class="reset-content-width"></div>
</template>

<script>
export default {
  name: "ContentMaxWidth",
  props: {
    maxWidth: String,
  },
  mounted() {
    // 修改页面内容宽度
    let page = document.getElementsByClassName("theme-default-content")[0]
    page.setAttribute("style", `max-width: ${this.maxWidth}; margin: 0 auto; padding: 2em 2.5em;`)
    page.classList.add("custom")
  },
}
</script>

<style scoped>

</style>