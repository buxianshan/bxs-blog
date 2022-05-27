---
title: with 语句
sidebar: false
---

<h1 align='center'>with 语句</h1>

参考：

- [with 语句](https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#the-with-statement)
- [with 语句上下文管理器](https://docs.python.org/zh-cn/3.9/reference/datamodel.html#with-statement-context-managers)

## 什么是with语句

官方文档的描述：

> [`with`](https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#with) 语句用于包装带有使用上下文管理器 (参见 [with 语句上下文管理器](https://docs.python.org/zh-cn/3.9/reference/datamodel.html#context-managers) 一节) 定义的方法的代码块的执行。 这允许对普通的 [`try`](https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#try)...[`except`](https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#except)...[`finally`](https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#finally) 使用模式进行封装以方便地重用。
>
> 上下文管理器处理进入和退出所需运行时上下文以执行代码块。

简单理解：进入和退出某个代码块时执行一些操作。最常用的场景就是处理异常兜底，其实就是对`try...except...finally`的封装。

例如文件流的操作`f = open("demo.txt")`，我们要考虑异常情况，保证最后要关闭文件流`f.close()`。而使用了with语句`with open("demo.txt") as f`，代码块结束（或异常）后会自动化关闭文件流。

## 自定义上下文管理器

上下文管理器就是一个对象，with语句其实就是执行对象的两个方法：

- `__enter__()`方法：进入上下文时执行（如果这一步没有异常，则不管后面是否有异常，with语句保证会执行`__exit__()`方法）
- `__exit__()`方法：退出关联到此对象的上下文时执行。

所以很好理解`with open("demo.txt") as f`为什么不需要手动`f.close()`了吧，其实就是`self.close()`已经写到`__exit__()`里了。

下面是一个自定义上下文管理器的例子：

```python
class MyContextManager:

    def __enter__(self):
        print("进入上下文...")
        # 一般返回其自身，以允许在with代码块中使用
        return self

    def __exit__(self, *exc_info):
        # exc_info：如果上下文中有异常，会有参数传进来
        del exc_info
        print("退出上下文...")

    def hi(self):
        print("I'm a context manager")


if __name__ == '__main__':
    with MyContextManager() as m:
        m.hi()
        print("代码块...")
        # 验证即使这里有异常也会执行__exit__方法
        a = 1/0

    print("with语句外部")
```

输出：

```
Traceback (most recent call last):
  File "demo.py", line 22, in <module>
    a = 1/0
ZeroDivisionError: division by zero
进入上下文...
I'm a context manager
代码块...
退出上下文...
```

总结：

- 只要看到类中有`__enter__()`和`__exit__()`方法，就能使用with语句
- 不管代码块中是否有异常，with语句都保证会执行`__exit__()`方法。但是并不代表我们不需要处理异常了，如果有异常，程序也会中断。
- 虽然with语句并不能真正处理异常，但是对于文件流、数据库连接、类似这些场景，`__exit__()`方法里帮我们执行了`close()`确实方便了不少（避免自己忘了关😂）。

顺便记录一下关键字`as`的用法，目前只遇到两种使用场景：

- 导入模块时可以用as起个别名
- with语句也可以使用as给上下文管理器起个别名

