---
title: 设计模式
---

:::tip 注意
本文参考[《白话设计模式 28 讲》](https://gitbook.cn/gitchat/column/5b26040ac81ac568fcf64ea3)，感谢作者！
:::

## 本文简介

这是我在学习设计模式的过程中做的一些记录，每一种设计模式尽量使用 Java 和 Python 分别实现样例。

## 什么是设计模式

**设计模式**最初是被 GoF 于 1995 年提出的，GoF（Gang of Four，四人帮）即 Erich Gamma、Richard Helm、Ralph Johnson和John Vlissides。他们四人于 1995 年出版了一本书《Design Patterns：Elements of Reusable Object-Oriented Software》（翻译成中文是《设计模式 可复用面向对象软件的基础》），第一次将设计模式提升到理论高度，并将之规范化，该书提出了 23 种经典的设计模式。

设计模式（Design Pattern）是一套被反复使用、多数人知晓的、无数工程师实践的代码设计经验的总结，它是面向对象思想的高度提炼和模板化，使用设计模式是为了让代码具有更高的可重用性，更好的灵活性和可拓展性，更易被人阅读和理解。GoF 提到的模式有四个基本要素：

- 模式名称：助记名，方便讨论、交流、传播；
- 问题：该模式是用来解决哪类实际问题，即它的应用场景；
- 解决方案：设计的组成部分，它们之间的相互关系及各自的职责和协作方式；
- 效果：使用模式能达到的效果，即对使用条件的权衡取舍。

## 设计模式的分类

参考：[设计模式的类型](https://www.runoob.com/design-pattern/design-pattern-intro.html)

### 创建型模式（Creational Patterns）

这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。

- 工厂模式（Factory Pattern）
- 抽象工厂模式（Abstract Factory Pattern）
- 单例模式（Singleton Pattern）
- 建造者模式（Builder Pattern）
- 原型模式（Prototype Pattern）

### 结构型模式（Structural Patterns）

这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。

- 适配器模式（Adapter Pattern）
- 桥接模式（Bridge Pattern）
- 过滤器模式（Filter、Criteria Pattern）
- 组合模式（Composite Pattern）
- 装饰器模式（Decorator Pattern）
- 外观模式（Facade Pattern）
- 享元模式（Flyweight Pattern）
- 代理模式（Proxy Pattern）

### 行为型模式（Behavioral Patterns）

这些设计模式特别关注对象之间的通信。

- 责任链模式（Chain of Responsibility Pattern）
- 命令模式（Command Pattern）
- 解释器模式（Interpreter Pattern）
- 迭代器模式（Iterator Pattern）
- 中介者模式（Mediator Pattern）
- 备忘录模式（Memento Pattern）
- 观察者模式（Observer Pattern）
- 状态模式（State Pattern）
- 空对象模式（Null Object Pattern）
- 策略模式（Strategy Pattern）
- 模板模式（Template Pattern）
- 访问者模式（Visitor Pattern）

## 六大原则

**1、开闭原则（Open Close Principle）**

开闭原则的意思是：**对扩展开放，对修改关闭**。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类，后面的具体设计中我们会提到这点。

**2、里氏代换原则（Liskov Substitution Principle）**

继承必须确保超类所拥有的性质在子类中仍然成立。

**3、依赖倒转原则（Dependence Inversion Principle）**

要面向接口编程，不要面向具体实现编程。

**4、接口隔离原则（Interface Segregation Principle）**

这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

**5、迪米特法则，又称最少知道原则（Demeter Principle）**

只与你的直接朋友交谈，不跟"陌生人"说话。一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

**6、合成复用原则（Composite Reuse Principle）**

合成复用原则是指：尽量使用合成/聚合的方式，其次才考虑使用继承关系来实现。