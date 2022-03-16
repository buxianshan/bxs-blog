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

