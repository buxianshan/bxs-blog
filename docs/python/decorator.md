---
title: Python 装饰器
sidebar: false
---

<h1 align='center'>Python 装饰器</h1>

简单的说装饰器就是一种特殊的函数，它可以修改其他函数的功能。装饰器的核心思想是在不修改原始函数代码的情况下，给这个函数添加额外的功能。

特点是

- 至少有一个参数，且这个参数是个函数
- 返回值也是个函数



个人理解：被装饰器修饰的函数已经不是原来的函数了，即看起来它还叫那个名字，但是本质上调用的时候已经是装饰器返回的新的方法了。所以分析代码的时候，不要固化原来的函数，要看新的函数。

![image2023-8-26_14-23-19](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image2023-8-26_14-23-19.png)

常见装饰器是写在函数定义的上面，因为装饰器本质也是个函数，所以其实可以直接调用装饰器方法，例如下面的`app.route('/')(home)`写法：

```python
from flask import Flask

app = Flask(__name__)


def home():
    return 'Hello, Flask!'


if __name__ == '__main__':
    app.route('/')(home)
    app.run(debug=True)

```

