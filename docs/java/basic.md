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

在 Java 中，可以将一个类定义在另一个类里面或者一个方法里面，这样的类称为内部类。一般来说包括四种。

### 成员内部类

成员内部类是最普通的内部类，它的定义为位于另一个类的内部，可以无条件访问外部类的所有成员属性和成员方法（包括private成员和静态成员）。

```java
class Circle {
    private double radius = 0;
    public static int count =1;
    public Circle(double radius) {
        this.radius = radius;
    }
    
    // 内部类
    class Draw {
        public void drawSahpe() {
            // 访问外部类的private成员
            System.out.println(radius);
            // 访问外部类的静态成员
            System.out.println(count);
        }
    }
}
```

### 局部内部类

局部内部类是定义在一个方法或者一个作用域里面的类，它和成员内部类的区别在于局部内部类的访问仅限于方法内或者该作用域内。

```java
class People {
    public People() {
         
    }
}
 
class Man{
    public Man(){
         
    }
     
    public People getWoman() {
        // 局部内部类
        class Woman extends People {
            int age =0;
        }
        return new Woman();
    }
}
```

### 匿名内部类

匿名内部类应该最常用的内部类。可以用于实现接口或抽象类的方法。

```java
abstract class Person {
    public abstract void eat();
}
 
public class Demo {
    public static void main(String[] args) {
        Person p = new Person() {
            @Override
            public void eat() {
                System.out.println("eat something");
            }
        };
        p.eat();
    }
}
```

匿名内部类是唯一一种没有构造器的类。正因为其没有构造器，所以匿名内部类的使用范围非常有限，大部分匿名内部类用于接口回调。匿名内部类在编译的时候由系统自动起名为 Outter$1.class。一般来说，匿名内部类用于继承其他类或是实现接口，并不需要增加额外的方法，只是对继承方法的实现或是重写。

### 静态内部类

静态内部类也是定义在另一个类里面的类，只不过在类的前面多了一个关键字static。静态内只能使用外部类的static成员变量或者方法。

```java
public class Test {
    public static void main(String[] args)  {
        Outter.Inner inner = new Outter.Inner();
    }
}
 
class Outter {
    public Outter() {
         
    }
     
    static class Inner {
        public Inner() {
             
        }
    }
}
```

