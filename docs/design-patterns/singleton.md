---
title: 单例模式
---


<h1 align='center'>单例模式</h1>

为了节省内存资源、保证数据内容的一致性，对某些类要求只能创建一个实例，这就是所谓的单例模式。

## Java 单例模式

推荐看看这个[视频教程](https://www.bilibili.com/video/BV1K54y197iS)。

核心是造器私有，别人就不能在外部创建对象了。

### 饿汉式

程序一开始就创建了这个对象，所以叫饿汉式。

```java
/**
 * 单例模式-饿汉式
 */
public class Hungry {
    private Hungry() {

    }
    private final static Hungry INSTANCE = new Hungry();

    public static Hungry getInstance() {
        return INSTANCE;
    }

}
```

### 懒汉式

饿汉式可能会浪费内存空间，于是出现了懒汉式，在第一次需要用到的时候再创建对象。

```java
/**
 * 单例模式-懒汉式
 */
public class Lazy {
    private Lazy() {

    }
    // 必须要加volatile，使new的时候是个原子操作，避免在new还没结束的时候，别的线程访问了该地址返回了一个虚空的对象(发生未知异常)
    private volatile static Lazy INSTANCE;

    public Lazy getInstance() {
        if (INSTANCE == null) {
            // 双重检测锁模式的懒汉模式(DCL)：为了确保多线程安全，这里加锁
            synchronized (Lazy.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Lazy();
                }
            }
        }
        return INSTANCE;
    }

}
```

### 静态内部类实现单例

```java
/**
 * 静态内部类实现单例模式
 */
public class InnerStatic {
    private InnerStatic()  {

    }

    public static InnerStatic getInstance() {
        return InnerClass.INSTANCE;
    }

    public static class InnerClass{
        private static final InnerStatic INSTANCE = new InnerStatic();
    }
}
```

### 枚举实现单例模式

这是实现单例模式的最佳方法，多线程安全。前面几种方式其实都能被反射破坏安全性，而使用枚举的方式不会被反射破坏。

```java
/**
 * 枚举实现单例模式，最安全，反射也不能破坏！
 */
public enum EnumSingle {
    INSTANCE;

    public EnumSingle getInstance() {
        return INSTANCE;
    }
}
```

为什么反射不能创建枚举的实例呢？在 java.lang.reflect.Constructor#newInstance 中有这么一段：

![image-20220506100432365](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220506100432365.png)

可以看到如果是枚举类型直接抛出异常了，JDK反射机制内部完全禁止了用反射创建枚举实例的可能性。