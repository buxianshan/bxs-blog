---
title: Java基础
sidebar: auto
---

<h1 align='center'>Java基础</h1>

## 函数式接口

只有一个接口函数需要被实现的接口类型，我们叫它”函数式接口“。为了避免后来的人在这个接口中增加接口函数导致其有多个接口函数需要被实现，变成"非函数式接口”，我们可以在这个上面加上一个声明`@FunctionalInterface`，这样别人就无法在里面添加新的接口函数了。

简言之：函数式接口只能有一个抽象方法。

```java
@FunctionalInterface
interface MathOperation {
    // 只能有一个抽象方法
    int operation(int a, int b);
    // 可以有多个default方法
    default int add(int a, int b) { return 0;};
}
```

## Lambda 表达式

什么是Lambda表达式？

> Lambda 表达式（lambda expression）是一个[匿名函数](https://baike.baidu.com/item/匿名函数/4337265)，Lambda表达式基于数学中的[λ演算](https://baike.baidu.com/item/λ演算)得名，直接对应于其中的lambda抽象（lambda abstraction），是一个匿名函数，即没有函数名的函数。Lambda表达式可以表示[闭包](https://baike.baidu.com/item/闭包/10908873)（注意和数学传统意义上的不同）。

什么是闭包？

> 闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

Java Lambda表达式的格式：

```java
(parameters) -> expression
// or
(parameters) ->{ statements; }
```

什么时候可以写Lambda表达式？

- 必须是实现一个接口（不能是抽象类），并且该接口内只有一个需要实现的函数。作用是返回一个实现了接口的对象（实例）。

应用场景：

- 实现函数式接口
- 替代部分匿名内部类
- 结合Stream API，使代码变的更加简洁

样例：为什么创建线程可以这样写`new Thread(() -> {})`，就是因为 Lambda 表达式实现了`Runnable`接口返回了一个对象。等价于下面这种匿名内部类的写法

```java
new Thread(new Runnable() {
    @Override
    public void run() {
        doSomething();
    }
});
```

## Java 内部类

