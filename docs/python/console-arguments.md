---
title: Python 命令行传参
---

<h1 align='center'>Python 命令行传参</h1>

## 1、通过sys.argv获取

sys_argv_demo.py

```python
import sys


def main():
    print(sys.argv)


if __name__ == '__main__':
    main()

# python sys_argv_demo.py Peter 18           
# ['sys_argv_demo.py', 'Peter', '18']
```

## 2、使用argparse模块

argparser_demo.py

```python
import argparse


def main(args):
    print(args)
    print(args.name, args.age)


if __name__ == '__main__':
    args_parser = argparse.ArgumentParser('My argument parser')
    args_parser.add_argument('--name', '-n', type=str, help='Your name')
    args_parser.add_argument('--age', '-a', default=18, type=int, help='Your age')
    args = args_parser.parse_args()
    main(args)
```

`-h`输出帮助信息：

```bash
# python argparser_demo.py -h

usage: My argument parser [-h] [--name NAME] [--age AGE]

optional arguments:
  -h, --help            show this help message and exit
  --name NAME, -n NAME  Your name
  --age AGE, -a AGE     Your age
```

传参：

```bash
# python argparser_demo.py -n Peter --age 18 
Namespace(age=18, name='Peter')
Peter 18
```

## 3、使用click模块

click_demo.py

```python
import click


@click.command()
@click.option('--name', type=str, help='Your name')
@click.option('--age', default=18, type=int, help='Your age')
def main(name, age):
    print(name, age)


if __name__ == '__main__':
    main()
```

`--help`输出帮助信息：

```bash
(base) D:\code\python\analysis-temp\python-console-arguments>python click_demo.py --help
Usage: click_demo.py [OPTIONS]

Options:
  --name TEXT    Your name
  --age INTEGER  Your age
  --help         Show this message and exit.
```

传参：

```bash
# python click_demo.py --name Peter --age 18
Peter 18
```

## 总结

- `sys.argv`是python最基础的获取命令行参数的方法，它返回一个列表，其中第一个元素是脚本的文件名。这种方式的缺点很明显，无法指定参数的名称，必须按照固定顺序传参，没有帮助信息。
- 其实argparse和click模块都是对`sys.argv`的封装，都可以指定参数名，不需要按顺序，还可以输出帮助信息。