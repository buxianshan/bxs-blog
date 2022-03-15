---
sidebar: false
---

<h1 align='center'>Python命名风格建议</h1>

## 1.项目名称

首字母大写，大写驼峰式

- ProjectName

## 2.模块名、包名

全部小写，下划线分隔

- module_name
- package_name

## 3.类名、异常名

首字母大写，大写驼峰式

- ClassName
- ExceptionName

## 4.全局变量名、常量名

全部使用大写字母，下划线分隔

- GLOBAL_VAR_NAME
- CONSTANT_NAME

## 5.方法名、函数名、局部变量名、参数名、实例名

全部小写，下划线分隔

- method_name
- function_name
- instance_var_name
- function_parameter_name
- local_var_name

## 6.除了计数器，不使用单字母命名

```python
names = ["a", "b", "c"]
for i in range(len(names)):
    print(i)
```

