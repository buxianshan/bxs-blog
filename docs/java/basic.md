---
title: Java基础
sidebarDepth: 0
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

## 方法引用

方法引用是 Lambda 表达式的简写方式。当一个 Lambda 表达式只是调用已有的方法其它什么也不做时，使用方法引用的写法通常更清晰。

> [ORACLE文档描述](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html)：You use [lambda expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html) to create anonymous methods. Sometimes, however, a lambda expression does nothing but call an existing method. In those cases, it's often clearer to refer to the existing method by name. Method references enable you to do this; they are compact, easy-to-read lambda expressions for methods that already have a name.

方法引用的格式是双冒号`::`

四种方法的写法：

- 静态方法引用: `Person::compareByAge`
- 对象的实例方法引用: `myApp::appendStrings`
- 对特定类型任意对象的实例方法的引用: `String::toUpperCase`、`String::compareToIgnoreCase`
- 构造函数方法引用: `HashSet::new`

样例：

```java
List<String> names = Arrays.asList("tom", "peter", "Tim", "tony");

// 把每个名字转换成大写
List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(upperNames.toString());
// output: [TOM, PETER, TIM, TONY]
```

## Stream API

**什么是`Stream`？**

JDK的文档描述：A sequence of elements supporting sequential and parallel aggregate operations.  (支持顺序和并行聚合操作的元素序列。)

`Stream`使用一种类似用 SQL 语句从数据库查询数据的直观方式来提供一种对 Java 集合运算和表达的高阶抽象。

**什么是聚合操作？**

> 聚合在信息科学中是指对有关的数据进行内容挑选、分析、归类，最后分析得到人们想要的结果，主要是指任何能够从数组产生标量值的数据转换过程。

**流有哪些聚合操作？**

类似SQL语句一样的操作， 比如filter, map, reduce, find, match, sorted等。

- forEach: 迭代流中的每个数据
- map: 映射每个元素到对应的结果
- filter: 过滤出符合条件的元素
- limit: 获取指定数量的流
- sorted: 对流中的元素排序
- collect: Collectors 类实现了很多归约操作，例如将流转换成集合和聚合元素。
- distinct、count、max、min……

**如何生成`Stream`？**

`Collection`接口有两个方法生成`Stream`：

- 为集合创建串行流：stream()
- 为集合创建并行流：parallelStream()

**样例：**

```java
List<Integer> numbers = Arrays.asList(4, 3, 9, 6, 7, 7, 7);

// 过滤出大于5的数字，并且每个元素都计算平方
List<Double> filteredNumbers = numbers.stream()
    .filter(n -> n > 5)
    .map(n -> Math.pow(n, 2))
    .collect(Collectors.toList());

System.out.println(filteredNumbers.toString());
// output: [81.0, 36.0, 49.0, 49.0, 49.0]
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

匿名内部类应该是最常用的内部类了。可以用于实现接口或抽象类的方法。

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

## 泛型

泛型提供了编译时类型安全检测机制，该机制可以在编译时检测到非法的类型。泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。泛型，即“参数化类型”。

类型参数用尖括号包围`< >`，java中这种尖括号就是指泛型。注意类型参数只能代表引用型类型，不能是原始类型（像 **int、double、char** 等）。

**java 中泛型常用的标识符：**其实使用任何标识符都可以，只是下面这些是比较常用的方便理解的写法。

- **E** - Element（在集合中使用，表示是元素）
- **T** - Type（Java 类）
- **K** - Key（键）
- **V** - Value（值）
- **N** - Number（数值类型）
- **？** - 表示不确定的类型

### 泛型类

泛型类型用于类的定义中，被称为泛型类。通过泛型可以完成对一组类的操作对外开放相同的接口。最典型的就是各种容器类，如：List、Set、Map。

```java
public class Generic<T>{ 
    private T key;

    public Generic(T key) {
        this.key = key;
    }

    public T getKey(){
        return key;
    }
}
```

使用泛型类

```java
// Integer类型
Generic<Integer> genericInteger = new Generic<Integer>(123456);
System.out.println(genericInteger.getKey());

// String类型
Generic<String> genericString = new Generic<String>("vlaue");
System.out.println(genericString.getKey());
```

### 泛型接口

泛型接口与泛型类的定义及使用基本相同。

```java
// 定义一个泛型接口
public interface Generator<T> {
    public T next();
}
```

实现泛型接口，可以不传入类型实参：

```java
class FruitGenerator<T> implements Generator<T>{
    @Override
    public T next() {
        return null;
    }
}
```

实现泛型接口，也可以传入类型实参：

```java
public class FruitGenerator implements Generator<String> {

    private String[] fruits = new String[]{"Apple", "Banana", "Pear"};

    @Override
    public String next() {
        Random rand = new Random();
        return fruits[rand.nextInt(3)];
    }
}
```

### 泛型方法

泛型类是在实例化类的时候指明泛型的具体类型。而泛型方法是在调用方法的时候指明泛型的具体类型 。

泛型方法比较复杂，这只是一个简单的例子：

```java
public class GenericsDemo {
    // 泛型方法 printArray
    public static <E> void printArray(E[] inputArray) {
        // 输出数组元素
        for (E element : inputArray) {
            System.out.printf("%s ", element);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // 创建不同类型数组： Integer, Double 和 Character
        Integer[] intArray = {1, 2, 3, 4, 5};
        Double[] doubleArray = {1.1, 2.2, 3.3, 4.4};
        Character[] charArray = {'H', 'E', 'L', 'L', 'O'};

        System.out.println("整型数组元素为:");
        // 传递一个整型数组
        printArray(intArray);

        System.out.println("\n双精度型数组元素为:");
        // 传递一个双精度型数组
        printArray(doubleArray);

        System.out.println("\n字符型数组元素为:");
        // 传递一个字符型数组
        printArray(charArray);
    }
}
```

### 泛型通配符

使用`?`代替具体的类型参数。例如 `List<?>` 在逻辑上是 `List<String>`、`List<Integer>` 等所有 `List<具体类型实参>` 的父类。

```java
public class GenericTest {

    public static void main(String[] args) {
        List<String> name = new ArrayList<>();
        List<Integer> age = new ArrayList<>();
        List<Number> number = new ArrayList<>();

        name.add("icon");
        age.add(18);
        number.add(314);

        // 下面这行编译报错: 不兼容的类型: java.util.List<java.lang.String>无法转换为java.util.List<? extends java.lang.Number>
        //getFirstNumber(name);
        getFirstNumber(age);
        getFirstNumber(number);

    }

    public static void getFirstNumber(List<? extends Number> data) {
        System.out.println("data :" + data.get(0));
    }
}
```

## 序列化

序列化通常是指将对象写入字符串（例如：xml / json）或原始二进制文件（byte[]等）。

参考：

- [Java 序列化](https://www.runoob.com/java/java-serialization.html)
- [java序列化不同方案对比](https://juejin.cn/post/6844904007173931016)

Student类：

::: code-details

```java
class Student implements Serializable {
    public int id;
    public String name;
    public int age;

    public Student() {
    }

    public void study(String course) {
        System.out.println("study" + course);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

:::

### java原生序列化（字节序列）

要实现一个特殊的`java.io.Serializable`接口。

::: code-details

```java
package com.bxs.serialize;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class SerializeDemo {
    public static void main(String[] args) {
        Student student = new Student();
        student.setId(1);
        student.setName("Tom");
        student.setAge(18);

        // 序列化对象为字节序列到文件
        try {
            FileOutputStream fileOut =
                    new FileOutputStream("student.ser");
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(student);
            out.close();
            fileOut.close();
            System.out.println("Serialized data is saved in student.ser");
        } catch (IOException i) {
            i.printStackTrace();
        }

        // 反序列化为对象
        Student newStudent = null;
        try {
            FileInputStream fileIn = new FileInputStream("student.ser");
            ObjectInputStream in = new ObjectInputStream(fileIn);
            newStudent = (Student) in.readObject();
            System.out.println(newStudent.toString());
            in.close();
            fileIn.close();
        } catch (IOException i) {
            i.printStackTrace();
        } catch (ClassNotFoundException c) {
            System.out.println("Student class not found");
            c.printStackTrace();
        }
    }
}
```

:::

缺点：

- 不支持跨语言操作，由于 Java 序列化技术是 java原生序列化的内部协议，导致其他语言无法对接和识别
- 性能差

### 序列化为json字符串

常用的Json类库有fastjson、jackson。

#### fastjson

maven引入依赖：

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.76</version>
</dependency>
```

demo：

```java
package com.bxs.serialize;

import com.alibaba.fastjson.JSON;

public class FastjsonDemo {
    public static void main(String[] args) {
        Student student = new Student();
        student.setId(1);
        student.setName("Tom");
        student.setAge(18);

        // 对象序列化为json字符串
        String jsonString = JSON.toJSONString(student);
        System.out.println(jsonString);

        // 把json字符串反序列化为对象
        String json = "{\"age\":18,\"id\":1,\"name\":\"Tom\"}";
        Student newStudent = JSON.parseObject(json, Student.class);
        System.out.println(newStudent.toString());
    }
}
```



