<template>
  <div id="time">{{time}}</div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      time: "",
    }
  },
  methods: {
    refreshTime() {
      let date = new Date();
      let month = date.getMonth() + 1;
      month = month > 9 ? month : `0${month}`;
      let day = date.getDay() + 1;
      day = day > 9 ? day : `0${day}`;
      this.time = date.getFullYear() + "-" + month + "-" + day + " " + date.toLocaleTimeString();
      // let element = document.getElementById("time");
      // element.innerHTML = time;
    }
  },
  mounted() {
    setInterval(this.refreshTime, 1000);
  }
}
</script>

<style scoped>
#time {
  font-size: 60px;
  font-family: Arial, sans-serif;
  text-align: center;
  height: 600px;
  line-height: 600px;
}
</style>