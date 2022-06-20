---
title: JavaScript笔记
sidebar: auto
---

<h1 align='center'>
    JavaScript笔记
</h1>
JavaScript是世界上最流行的脚本语言。

ECMA Script可以理解为js的一个标准，最新版是ES6。

## html引入js

- 可以直接写在script标签里

- 外部引入

  ```html
  <script src="hello.js"></script>
  ```

注释和java一样，双斜杠//

## 基本语法

js严格区分大小写

```html
<script>
    // 定义变量
    var num = 1;
    // 条件控制
    if (2>1) {
        alert("true")
    } else {
        alert("false")
    }
    // 浏览器控制台打印
    console.log(num);

</script>
```

## 变量

都使用var声明，到了ES6建议使用let或const声明：'var' is used instead of 'let' or 'const' 

不加var也可以声明，但是变量就是全局变量了，容易冲突。

局部变量一般用let定义，安全。

## 基本数据类型

### 数值

number，js不区分小数和整数，都是number

NaN：not a number

Infinity：无穷大

### 字符串

用单引号或双引号包围

### 布尔值

true fasle

## 逻辑运算符

- && 与

- || 或
- ! 非

## 比较运算符

- = 赋值
- == 等于（类型不一样，但是值一样，也会返回true）
- === 绝对等于（类型一样并且值一样，才会返回true）

注意：

- 一般使用三等号，不使用双等号。
- 特殊的 NaN===NaN 返回false，使用方法isNaN(NaN)返回true

- 浮点数问题：精度损失，尽量避免浮点数运算。

  需要比较时使用精度判断：Math.abs(a-b)<0.0000001再认为相等。

- null和undefined
  - null是定义为空
  - undifined是值未定义

## 严格检查模式

'use strict';

代表严格检查模式，建议js都加上这行。必须写到js的第一行。

加了之后会用更安全的格式。

## 数组

中括号表示

可以存储不同类型的元素

var arr = [1, 2, 'a', 'b']

new Array(1, 2, 'a', 'b')也可以，但尽量使用上面的写法

下标从0开始，越界则返回undefined

类似python中的列表

- length 长度可变
- indexOf()
- slice() 截取数组的一部分，类似python中的切边
- push() 添加元素 尾部
- pop() 弹出元素 尾部
- shift() 弹出元素 头部
- unshift() 添加元素 头部
- sort() 排序
- reverse() 反转
- join() 使用字符拼接，类似python

## 字符串

- 单引号或双引号
- 转义字符也是反斜杠
- 多行字符串可以直接用反引号包裹
- 模板字符串：字符串里拼接变量

```js
// unicode编码的汉字中国
console.log("\u4e2d\u56fd");

// 多行字符串可以直接用反引号包裹
console.log(`abc
def`)

// 模板字符串：字符串里拼接变量
let name = "Peter";
let hello = `你好，${name}`;
console.log(hello)
```

字符串有哪些属性和方法？

- length 长度
- [下标] 访问字符串中的单个字符
- 字符串和java的字符串同样是不可变的（都是常量）
- toUpperCase()、toLowerCase() 转换大小写
- indexOf() 或者某个字符在字符串中的下标
- substring(1,3) 截取字符串 [,)左闭右开

## 对象

若干个键值对，类似python中的字典。获取对象类型：typeof 变量名。

大括号表示，很像python的字典，但是取值用点就行了，person.name。（实测使用中括号加key的方式也能取到值）

键只能是字符串

```html
    <script>
        var person = {
            name: "Huijie",
            age: 23,
            hobby: ['code', 'movie', 'music']
        };
    </script>
```

- 属性不存在时返回undefined，不会报错
- 动态删除属性 delete person.name
- 动态添加属性 person.haha = "haha"
- 判断属性是否在对象中 'age' in person，注意所有的对象都有'toString'属性，是继承来的
- 判断一个属性是否是这个对象本身拥有的：hasOwnproperty()

## if语句

```js
// 流程控制
let age = 23;
if (age>=18) {
    console.log("成年了")
} else {
    console.log("未成年")
}
```

## while循环

```js
let i = 0;
while (i<10) {
    console.log(i);
    i++;
}
```

## for循环

常用的不是for in，而是for of

```js
for (let j = 0; j < 10; j++) {
    console.log(j)
}

for (let i in hobby) {
    // 注意这里的i是下标，不是元素，和python不一样
    console.log(hobby[i])
}

for (let i of hobby) {
    // 注意这里的i是元素了。。。
    console.log(i)
}
```

## 遍历数组

注意forEach的参数要是个方法

```js
let hobby = ['code', 'movie', 'music'];
hobby.forEach(function (value) {
    console.log(value)
})
```

## map

键值对

```js
let map = new Map([
    ["jim", 100],
    ["peter", 80]
]);
map.set("tim", 30);
console.log(map.get("jim"));
console.log(map.get("tim"));
```

## set

无序不重复集合

```js
let set = new Set(["a", "b", 1]);
set.add("a");
console.log(set)
```

## iterator迭代器

in和of的区别😂，迭代map set也都用of就行了

```js
let hobby = ['code', 'movie', 'music'];
for (let i of hobby) {
    // 注意这里的i是元素了。。。
    console.log(i)
}
```

## 函数

function声明

方式一：后端程序员喜欢

```js
function abs(x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs(-9));

```

方式二：前端程序员喜欢（把匿名函数赋值给一个变量abs）

```js
let abs = function (x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs(-9));
```

参数问题：js非常不严谨，参数可以不传也可以任意多个，都不会报错，大不了返回undefined

没有传参如何规避？

```js
let abs = function (x) {
    // 规避未穿参数的情况，抛出异常
    if (typeof x !== "number") {
        throw 'Not a Number!'
    }
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs());
```

arguments

是函数默认拥有的一个局部变量，是一个包含所有传进来的参数的数组：

```js
function test(a, b, c) {
    for (let a of arguments){
        console.log(`传进来的参数有：${a}`)
    }
}
```

rest

ES6新增的特性，获取除了已定义参数外的其它参数，rest只能写在最后面

```js
function testRest(a, b, ...rest) {
    for (let a of arguments){
        console.log(`传进来的参数有：${a}`)
    }
    console.log(rest)
}
```

## 变量作用域

函数体内定义的变量是局部变量

一般把所有变量的声明都写在最前面，防止后面使用了未定义的变量。

### 全局对象window

默认所有定义在函数外的全局变量都会绑定到 全局对象 window 的属性（window就代表浏览器）

```JS
let x = 1;
console.log(window.x);
window.alert(x);
```

js实际上只有一个全局作用域window，任何变量（包括函数）。



（尽量避免全局命名冲突的）规范：

- 由于所有全局变量都会绑定到window对象，不同的js文件如果定义了同名的变量会有冲突，所以出现了一种解决方式：自己定义一个全局对象，把所有变量都绑定到这个对象中：尽量避免全局命名冲突

  ```js
  // 当前文件的唯一全局变量
  let myApp = {};
  // 以后所有变量都绑定到myApp里，就不会和别的文件冲突
  myApp.name = "Huijie";
  myApp.add = function (a, b) {
      return a + b;
  }
  console.log(myApp.name)
  console.log(myApp.add(3,3))
  ```

### 解决局部作用域的问题

背景：使用var定义的局部变量在外边也能用，就可能会和别的地方冲突

```js
for (var i = 0; i < 10; i++) {
    console.log(i)
}
// 会打印出10
console.log(i)
```

ES6中新增了let方式定义变量，解决了这个问题：所以建议使用let声明变量

```js
for (let i = 0; i < 10; i++) {
    console.log(i)
}
// 这里会报错：Uncaught ReferenceError: i is not defined
console.log(i)
```

## 常量

ES6之前没有常量这个定义，只是一般用大写字母表示常量（实际还是可变的）

然后ES6有了const关键字来定义常量

```js
const PI = 3.14;
// 报错：Uncaught TypeError: Assignment to constant variable.
PI = 3.2;
```

## 方法

对象里的函数，调用自己的属性用this

```js
let Dog = {
    name: "dog",
    bark: function () {
        console.log(this.name + " wang~ wang~");
    }
}
Dog.bark();
```

## apply

js中可以指定this的指向，可以把方法写在对象外

```js
function bark() {
    console.log(this.name + " wang~ wang~");
}

let dog = {
    name: "dog",
    bark: bark
}
// 让this指向Dog，传一个空的数组参数（不传也可以）
bark.apply(dog, []);
```

## Date

```js
let now = new Date();
console.log(now);
console.log(now.getFullYear())
// 注意老外认为Day是星期几
console.log(now.getDay())
```

- getMonth 0-11，从0开始

## Json

js中也是一切都是对象，任何类型都可以用json无缝转换

- 对象{}
- 数组[]
- 键值对 key:value

JSON也是一个内置类

```js
let man = {
    name: "Peter",
    age: 30,
    id: "08163442"
}
// 对象转换成json字符串
console.log(JSON.stringify(man));
// 字符串转对象
let new_man = JSON.parse('{"name":"Peter","age":30,"id":"08163442"}');
```

json是字符串，js中对象是对象类型。

## 面向对象

原型对象（原型链，是个环）

js里的原型类似java里的类继承

（不建议下面这种写法）

```js
"use strict";
let Student = {
    id: 1,
    name: "student",
    age: 18,
    study: function () {
        console.log(this.name + " is studying!")
    }
}

let peter = {
    name: "peter"
}
// 让peter的原型指向Student（类似继承父类）
peter.__proto__ = Student;
peter.study();
```

class继承

ES6引入的

```js
class Student {
    constructor(name) {
        this.name = name;
    }
    study() {
        console.log(this.name + " is studying!")
    }
}

let peter = new Student("peter");
peter.study();

class BoyStudent extends Student {
    constructor(name) {
        super(name);
        this.gender = "man";
    }
}
let jim = new BoyStudent("jim");
jim.study();
console.log(jim.gender)
```

## 操作BOM对象

Browser Object Model（浏览器对象模型）

window对象代表浏览器窗口

- navigator代表浏览器

![image-20211124091056756](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20211124091056756.png)

- screen 代表屏幕（尺寸）

![image-20211124093629622](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20211124093629622.png)

- location 代表当前页面的URL信息（重要）

![image-20211124093759198](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20211124093759198.png)

​		location.reload()

- document 代表当前页面，HTML DOM文档树。

- history 页面历史记录。

## 操作DOM对象

Document Object Model 文档对象模型

就是操作文档树（整个浏览器页面，增删改查）

- 更新
- 遍历
- 删除
- 添加



获取Dom节点（对应CSS选择器）注意只有根据id获取时不带s，其它的都返回列表

- document.getElementsByTagName()
- document.getElementByTagId()
- document.getElementsByTagClass()



节点的属性

- children 所有子节点
- innerText 内容
- innerHTML 内部嵌入html代码
- style 节点的css属性



更新Dom节点

- e1.innerText = "hello"
- e1.innerHTML = "<em>hello</em>"
- e1.style.color = "red"



删除节点

先获取父节点，再通过父节点删掉字子节点

```js
let e1 = document.getElementById("e1");
let father = e1.parentElement;
father.remove(e1);

```



插入节点

- 可以用innerHTML嵌套，但是会覆盖原来的内容
- 追加：e1.appendChild()
- 插入：e1.insertBefore(old,new)
- 也可以createElement()
- e1.setAttribute()



操作表单

```js
let inputUsername = document.getElementById("username");
```

- inputUsername.value = "111"

## JQuery

是js的一个库，有大量的已经定义好的方法。

$就代表jquery，selector就是css选择器，再加个事件行为。

就一个公式：$(selector).action()

### jquery选择器

原生js选择器少。

去查这个文档：[JQuery API](https://jquery.cuishifeng.cn/)

### 事件（action）

鼠标（按下、进入、离开、移动、点击结束）

![image-20211124200300433](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20211124200300433.png)

![image-20211124202117477](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20211124202117477.png)

### 操作Dom

操作节点内容：$('#list1').text()  有参数就设置值，没有参数就返回值

```js
// 获取标签内容text()无参
let row2 = $('#list1 li[name=row2]').text();
console.log(row2);
// 设置值text()有参,返回的不是文本，是个对象
row2 = $('#list1 li[name=row2]').text('CSS');
console.log(row2.text());
```

### 操作CSS

```js
$('#list1 li[name=row2]').css('color', 'red');
// 显示和隐藏（效果类似display none）
$('#list1 li[name=row2]').show();
$('#list1 li[name=row2]').hide();
```
