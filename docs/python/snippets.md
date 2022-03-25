---
sidebar: auto
---

<h1 align='center'>Python常用代码片段</h1>

## 读写json文件

特别注意编码：

- 读写文件时建议使用utf8编码，不然中文会乱码

- json.dump序列化时默认使用ASCII码，想要在json文件中显示中文，需要指定ensure_ascii=False

```python
import json


# 读取json文件
with open(json_file, "r", encoding="utf-8") as f:
    data = json.load(f)

# 写入json文件
with open(json_file, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False)
```

## 读写csv文件

demo.csv

```
id,name
1,张三
2,Tom
3,Peter
```

读取csv文件内容：

```python
import csv

with open('demo.csv', 'r', encoding='utf-8')as f:
    csv_reader = csv.reader(f)
    for row in csv_reader:
        print(row)

# output
'''
['id', 'name']
['1', '张三']
['2', 'Tom']
['3', 'Peter']
'''
```

生成csv文件：

- 注意编码encoding='utf-8-sig'
- 如果不写newline=''，生成的csv文件中可能会出现很多空行

```python
import csv


data = [
    ['id', 'name'],
    ['1', '张三'],
    ['2', 'Tom'],
    ['3', 'Peter']
]
# 注意这里编码是utf-8-sig
with open('demo.csv', 'w', encoding='utf-8-sig', newline='') as f:
    csv_writer = csv.writer(f)
    for row in data:
        csv_writer.writerow(row)
```

## 获取某个文件夹中的所有文件

- os.listdir获取指定目录下第一层的所有文件名列表，包括文件夹和文件
- 生成指定文件的路径用os.path.join，可以避免操作系统路径分隔符不同的问题

```python
import os


folder_path = "./"
# 获取某个文件夹中所有文件列表
file_list = os.listdir(folder_path)
# 区分文件和文件夹
folders = []
files = []
for file in file_list:
    file_path = os.path.join(folder_path, file)
    if os.path.isdir(file_path):
        folders.append(file)
    else:
        files.append(file)
```

## logging模块的使用

[logging模块](https://docs.python.org/zh-cn/3/library/logging.html)是Python官方的日志记录工具。

格式化可用的属性：[LogRecord 属性](https://docs.python.org/zh-cn/3/library/logging.html#logrecord-attributes)

记录一下我常用的格式，已封装成一个模块：fine_logger.py

```python
from logging import *


class FineLogger(Logger):

    def __init__(self, name, level=NOTSET):
        Logger.__init__(self, name=name, level=level)

    def set_log_file(self, log_path="debug.log"):
        """
        如果要同时把日志记录到文件中，需要通过此方法设置路径
        :param log_path: 日志文件路径
        """
        # 使用FileHandler把日志输出到文件
        file_handler = FileHandler(log_path, encoding='utf-8')
        file_handler.setFormatter(formatter)
        self.addHandler(file_handler)


fine_logger = FineLogger("root")
# log级别
fine_logger.setLevel(INFO)
# 设置格式
formatter = Formatter('%(asctime)s thread-%(threadName)s %(module)s [%(levelname)s] %(message)s',
                      datefmt='%Y-%m-%d %H:%M:%S')
# 使用StreamHandler把日志输出到控制台
stream_handler = StreamHandler()
stream_handler.setFormatter(formatter)
fine_logger.addHandler(stream_handler)

```

使用时只需要导入fine_logger模块：app.py

```python
from fine_logger import fine_logger


# 如果要同时把日志记录到文件中，需要先设置日志路径，默认是./debug.log
fine_logger.set_log_file()
fine_logger.info("Hello")
```

输出格式如下：

```
2022-03-22 22:40:56 thread-MainThread app [INFO] Hello
```

## 使用traceback打印异常信息

捕获异常时如果直接打印`str(e)`得到的信息很少，而使用traceback可以打印出堆栈信息。

官方文档：[traceback --- 打印或检索堆栈回溯](https://docs.python.org/zh-cn/3.7/library/traceback.html)

demo.py

```python
import traceback


try:
    a = 1/0
except Exception as e:
    print(traceback.format_exc())
```

output：

> 注意这里是打印出了异常的堆栈信息，程序并没有异常中断

```
Traceback (most recent call last):
  File "**/demo.py", line 5, in <module>
    a = 1/0
ZeroDivisionError: division by zero
```

