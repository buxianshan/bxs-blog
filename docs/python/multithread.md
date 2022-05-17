---
title: Python 多线程
---

<h1 align='center'>Python 多线程</h1>

参考：

- [Global Interpreter Lock](https://docs.python.org/zh-cn/3/glossary.html#term-global-interpreter-lock)：全局解释器锁
- [threading](https://docs.python.org/zh-cn/3.9/library/threading.html#module-threading)：Python 内置多线程模块
- [queue](https://docs.python.org/zh-cn/3.9/library/queue.html#module-queue)：A multi-producer, multi-consumer queue
- [queue — 线程安全的 FIFO 队列](https://learnku.com/docs/pymotw/queue-thread-safe-fifo-queue/3370)
- [threading — 管理单个进程里的并行操作](https://learnku.com/docs/pymotw/threading-manage-concurrent-operations-within-a-process/3421)
- [列表与队列—谈谈线程安全](https://juejin.cn/post/6844903615824396295)

## threading 模块

使用线程的两种方式：

- 创建`threading.Thread`的对象执行某个函数
- 创建`threading.Thread`的子类，重写run方法

例子：

```python
import threading


def task(task_id, task_name):
    """
    多线程要执行的任务
    :param task_id:
    :param task_name:
    :return:
    """
    print(f"task(id: {task_id}, name: {task_name}) done!")


if __name__ == '__main__':
    for i in range(5):
        # 以args元组的形式传参
        t = threading.Thread(target=task, args=(i, f"t{i}"))
        # 以kwargs字典的形式传参
        # t = threading.Thread(target=task, kwargs={"task_id": i, "task_name": f"t{i}"})
        t.start()
```

这里顺便记录一下我自己之前一直不理解的地方，创建线程的时候如何给要执行的函数传参呢（多个参数）？

其实看一下Thread源码就很清楚了，如图：

![image-20220516201800404](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220516201800404.png)

`Thread`的init方法提供了两种形式的参数，args默认值是一个空元组，kwargs默认值是None但是希望传的是字典。

再看一下`run()`方法是如何把参数传给我们要执行的target方法的：

![image-20220516202123632](https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20220516202123632.png)

这就很清楚了，一个星号解包元组（或列表等），两个星号解包字典，所以不管是以元组的形式写到args里的参数，还是以字典形式写到kwargs里的参数，都会被解包后传到target方法。

## 多线程同步

不可避免的要考虑线程同步，这是一个例子：使用count进行全局任务计数，修改count值时需要保证线程同步，避免冲突。

```python
import threading
import time
import random


total = 100
count = 0
lock = threading.Lock()


def task():
    """
    执行一次任务，给count计数加1
    :return:
    """
    global total
    global count
    # 随机 sleep 0到1秒，模拟不同任务耗时不同
    time.sleep(random.random())
    # 这里线程同步锁
    with lock:
        count += 1
        print(f"process: {count}/{total}")


if __name__ == '__main__':
    thread_list = []
    for i in range(100):
        t = threading.Thread(target=task)
        thread_list.append(t)

    for t in thread_list:
        t.start()
```

你可以尝试把同步锁的代码注释掉，看看会发生什么。

加锁的地方也可以用下面这种写法：

```python
# 获取锁
lock.acquire()

try:
    # do something...
    count += 1
    print(f"process: {count}/{total}")
finally:
    # 释放锁
    lock.release()
```

