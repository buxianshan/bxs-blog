---
title: Python 类
---


## 没有真正意义的私有变量

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