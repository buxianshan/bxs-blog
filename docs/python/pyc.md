---
sidebar: false
---

<h1 align='center'>Python pyc文件</h1>

<TOC />

## 什么是pyc文件

pyc文件是py文件编译后生成的字节码文件(byte code)。

pyc文件经过python解释器最终会生成机器码运行。所以pyc文件是可以跨平台运行的，类似Java的.class文件。

## 特点

- .pyc文件是由.py文件经过编译后生成的字节码文件，它的加载速度比.py文件更快。
- .pyc文件可以隐藏源码，在一定程度上防止反编译。
- .pyo文件是对.pyc文件的优化，相比于.pyc文件更小，也可以提高加载速度。适合用于嵌入式系统，占用磁盘空间更小。

## 如何生成

demo.py

```python
print("hi")
```

### 方式1

```bash
# 执行命令
python -m demo.py
# 输出的pyc文件在当前文件夹中的__pycache__里面：demo.cpython-38.pyc

# 使用python运行pyc文件
python .\demo.cpython-38.pyc
hi
```

### 方式2

通过脚本编译，例如compile_demo.py内容如下：

```python
import py_compile


# 指定要编译的文件
py_compile.compile('./demo.py')
```

运行compile_demo.py同样会编译生成demo.py的pyc文件。