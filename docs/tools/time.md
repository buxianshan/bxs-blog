---
sidebar: false
---
<style>
#time {
    font-size: 60px;
    font-family: Arial, sans-serif;
    text-align: center;
    height: 600px;
    line-height: 600px;
}
</style>


<div id="time"></div>


<script>
    function refreshTime() {
        let date = new Date();
        let month = date.getMonth() + 1;
        month = month > 9 ? month : `0${month}`;
        let day = date.getDay() + 1;
        day = day > 9 ? day : `0${day}`;
        let time = date.getFullYear() + "-" + month + "-" + day + " " + date.toLocaleTimeString();
        let element = document.getElementById("time");
        element.innerHTML = time;
    }
    setInterval(refreshTime, 1000);
</script>