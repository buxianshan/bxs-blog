---
title: Python 面向对象
---

<h1 align='center'>Python 面向对象</h1>

::: warning 注意

Python中有大量语法糖，特性和C++、Java也不同，个人认为不需要全都了解，用到什么学什么就好了。

:::

## 数据模型

参考Python官方文档：[数据模型](https://docs.python.org/zh-cn/3.9/reference/datamodel.html)

*对象* 是 Python 中对数据的抽象。 Python 程序中的所有数据都是由对象或对象间关系来表示的。 （从某种意义上说，按照冯·诺依曼的“存储程序计算机”模型，代码本身也是由对象来表示的。）

每个对象都有各自的编号、类型和值。一个对象被创建后，它的 *编号* 就绝不会改变；你可以将其理解为该对象在内存中的地址。 '[`is`](https://docs.python.org/zh-cn/3.9/reference/expressions.html#is)' 运算符可以比较两个对象的编号是否相同；[`id()`](https://docs.python.org/zh-cn/3.9/library/functions.html#id) 函数能返回一个代表其编号的整型数。

## 特殊方法名称

### `object.__init__(self[, ...])`





### `object.__new__(cls[, ...])`





## 私有变量

经常听说在 Python 类中以一个下划线开头的变量是保护类型（protected ）的变量，以双下划线开头的变量是私有类型（private）的变量。

但其实这种写法只是Python的一个约定，无论怎么写，最终都不能实现真正意义的私有变量，也就是实际上还是可以被直接访问。

Python只是会把例如 `__spam` 这种标识符替换为 `_classname__spam` ，所以只要使用 `objecname._classname__spam` 还是可以直接访问私有变量的。

demo：

```python
class Person:

    def __init__(self, name, age):
        self.__name = name
        self._age = age


if __name__ == '__main__':
    peter = Person("Peter", 18)
    # print(peter.__name), 直接访问__name会报错：AttributeError: 'Person' object has no attribute '__name'
    print(peter._Person__name)
    print(peter._age)
```

用PyCharm调试也能看到，实际上只是双下划线开头的变量名被替换成了 `_classname__spam` 这种格式：

![image-20220505114706436](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220505114706436.png)

参考：[Python官方文档](https://docs.python.org/zh-cn/3.9/tutorial/classes.html?highlight=private#private-variables)