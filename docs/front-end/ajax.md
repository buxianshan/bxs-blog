---
title: AJAX笔记
sidebar: auto
---

<h1 align='center'>
    AJAX笔记
</h1>


## 什么是AJAX

Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）

AJAX 不是新的编程语言，而是一种使用现有标准的新方法。

AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。

AJAX 不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行。

## 优点

- 最大的优点就是页面无需刷新，在页面内与服务器通信，非常好的用户体验。 
- 使用异步的方式与服务器通信，不需要中断操作。 
- 可以把以前服务器负担的工作转嫁给客户端，减轻服务器和带宽，可以最大程度减少冗余请求。 
- 基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。

## 缺点

- 没有撤退可言：AJAX干掉了Back和History功能，即对浏览器机制的破坏。

  在动态更新页面的情况下，用户无法回到前一个页面状态，因为浏览器仅能记忆历史记录中的静态页面。一个被完整读入的页面与一个已经被动态修改过的页面之间的差别非常微妙；用户通常会希望单击后退按钮能够取消他们的前一次操作，但是在Ajax应用程序中，这将无法实现。 

- 存在跨域问题

- SEO不友好

## XHR

所谓的**XHR**（浏览器内置对象”XMLHttpRequest ”），也就是Ajax功能实现所依赖的对象，AJAX就是通过浏览器的内置对象XHMHttpResquest来发送异步请求的，异步请求不会妨碍客户端的任何操作。 

## 原生js

原生js发送ajax请求的demo

::: code-details
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX 请求</title>
    <style>
        .red-block{
            width: 300px;
            height: 200px;
            border: solid 1px red;
        }
    </style>
</head>
<body>
    <button>点击发送get请求</button>
    <div id="get-result" class="red-block"></div>
    <p>鼠标移入下框中发送post请求</p>
    <div id="post-result" class="red-block"></div>
    <p>按下键盘返回json数据</p>
    <div id="json-result" class="red-block"></div>
    <script>
        const btn = document.getElementsByTagName("button")[0];
        btn.onclick = function(){
            // 创建XHR对象
            let xhr = new XMLHttpRequest();
            // 设置请求类型和url
            xhr.open('GET', "http://localhost:8000/server?name=Peter&age=23&t=" + Date.now())
            // 发送请求
            xhr.send();
            // 事件绑定，获取请求响应结果
            // redayState属性有5个值，表示状态：0 1 2 3 4
            // 所以这个change事件会触发4次(我log了一下只看到三次)
            xhr.onreadystatechange = function(){
                // 当redayState为4时代表请求响应已结束
                if(xhr.readyState === 4) {
                    // 2开头的状态码都代表响应成功
                    if(xhr.status >= 200 && xhr.status < 300) {
                        document.getElementById("get-result").innerHTML = xhr.response;
                    } else {

                    }
                } else {
                    console.log("readyState: " + xhr.readyState)
                }
            };

        };
        const post_result = document.getElementById("post-result");
        post_result.addEventListener("mouseover", function(){
            console.log("鼠标移入")
            // 创建XHR对象
            let xhr = new XMLHttpRequest();
            // 设置请求类型和url
            xhr.open('POST', "http://localhost:8000/server")
            // 设置请求头
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // 发送请求
            xhr.send("name=Peter&age=23");
            xhr.onreadystatechange = function(){
                // 当redayState为4时代表请求响应已结束
                if(xhr.readyState === 4) {
                    // 2开头的状态码都代表响应成功
                    if(xhr.status >= 200 && xhr.status < 300) {
                        post_result.innerHTML = xhr.response;
                    } else {

                    }
                } else {
                    console.log("readyState: " + xhr.readyState)
                }
            };
        });
        const json_result = document.getElementById("json-result");
        window.onkeydown = function(event){
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:8000/json")
            // 设置请求头
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({
                key: event.keyCode,
                format_key: String.fromCharCode(event.keyCode)
            }));
            xhr.onreadystatechange = function(){
                // 当redayState为4时代表请求响应已结束
                if(xhr.readyState === 4) {
                    // 2开头的状态码都代表响应成功
                    if(xhr.status >= 200 && xhr.status < 300) {
                        json_result.innerHTML = xhr.response;
                    } else {

                    }
                } else {
                    console.log("readyState: " + xhr.readyState)
                }
            };
        };
    </script>
</body>
</html>
```
:::

## jQuery

jQuery发送ajax请求的demo

::: code-details
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
    <div class="container">
        <h2>jQuery发送AJAX请求</h2>
        <hr>
        <button class="btn btn-primary">GET</button>
        <button class="btn btn-danger">POST</button>
        <button class="btn btn-info">通用型方法ajax</button>
    </div>
    <script>
        $('button').eq(0).click(function(){
            $.get("http://localhost:8000/server", {id:1,name:"Peter"},function(data){
                console.log(data)
            }, "json")
        })

        $('button').eq(1).click(function(){
            $.post("http://localhost:8000/server", {id:1,name:"Peter"},function(data){
                console.log(data)
            })
        })

        
        $('button').eq(2).click(function(){
            $.ajax({
                url: "http://localhost:8000/server",
                data: {id:1,name:"Peter"},
                type: "GET",
                success: function(data){console.log(data)},
                dataType: "json"
            })
        })
    </script>
</body>
</html>
```
:::

附server.js

::: code-details

```js
// 引入express
const express = require("express");
const { json } = require("express/lib/response");

// 创建应用对象
const app = express()

// 创建路由规则
app.get("/server", (request, response) => {
    // 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    const data = {name:"Peter"}
    // 设置响应
    response.send(JSON.stringify(data));
});

app.post("/server", (request, response) => {
    // 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应
    response.send("Hello jQuery! This is a post request.");
});
// all可以接受任意类型的请求
app.all("/json", (request, response) => {
        // 设置允许跨域
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "*");
        // 返回的json数据
        let data = {
            name: "Peter",
            age: 23
        }
        // 设置响应
        response.send(JSON.stringify(data));
});


// 监听端口
app.listen(8000, () => {
    console.log("服务已启动: http://localhost:8000/")
});
```

:::
