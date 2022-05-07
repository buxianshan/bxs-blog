---
title: 单例模式
---


<h1 align='center'>单例模式</h1>

为了节省内存资源、保证数据内容的一致性，对某些类要求只能创建一个实例，这就是所谓的单例模式。

适用场景：

- 全局共享一个配置文件，例如都通过AppConfig类读取
- 全局管理类（Manager）
- 日志记录工具，一般也是单例，方便同步、追加
- 全局的计数器
- 数据库连接池、多线程的线程池
- ……

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

## Python 单例模式

参考：[Python中的单例模式的几种实现方式的及优化](https://www.cnblogs.com/huchong/p/8244279.html)

### 重写`__new()__`方法

在Python中当我们实例化一个对象时，是先执行了类的`__new__`方法（我们没写时，默认调用`object.__new__`）实例化对象。然后再执行类的`__init__`方法，对这个对象进行初始化。所以我们可以基于这个，实现单例模式，并且支持多线程：

```python
import threading


class Singleton(object):
    _instance_lock = threading.Lock()

    def __init__(self):
        pass

    def __new__(cls, *args, **kwargs):
        if not hasattr(Singleton, "_instance"):
            with Singleton._instance_lock:
                if not hasattr(Singleton, "_instance"):
                    Singleton._instance = object.__new__(cls)
        return Singleton._instance


if __name__ == '__main__':
    # test
    obj1 = Singleton()
    obj2 = Singleton()
    print(id(obj1), id(obj2))

    # test multithreading
    def task(args):
        obj = Singleton()
        print(id(obj))


    for i in range(10):
        t = threading.Thread(target=task, args=[i, ])
        t.start()
```

注意和 Java 中的单例不同，Java 构造器私有禁止在外部new对象，而python无法做到构造器私有，创建单例仍然使用普通的声明对象格式`singleton = Singleton()`，只是在实例化时返回的是同一个对象。

### 使用模块实现天然单例

由于模块的import机制，在程序运行期间，同一个模块只会加载一次，所以从模块中导入的对象只有一个，无论import多少次，得到的都是同一个对象。Python的模块不仅是单例模式，还是线程安全的单例模式，即使多线程并发导入同一个模块，也不会重复装载模块。

mysingleton.py

```python
class Singleton(object):
    def foo(self):
        pass


singleton = Singleton()
```

使用：

```python
from mysingleton import singleton


if __name__ == '__main__':
    print(id(singleton))
```

### 使用装饰器

待补充……

### 基于metaclass方式实现

待补充……