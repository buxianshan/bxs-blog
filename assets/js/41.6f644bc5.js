(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{450:function(t,s,n){"use strict";n.r(s);var e=n(36),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{align:"center"}},[t._v("with 语句")]),t._v(" "),n("p",[t._v("参考：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#the-with-statement",target:"_blank",rel:"noopener noreferrer"}},[t._v("with 语句"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.9/reference/datamodel.html#with-statement-context-managers",target:"_blank",rel:"noopener noreferrer"}},[t._v("with 语句上下文管理器"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"什么是with语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是with语句"}},[t._v("#")]),t._v(" 什么是with语句")]),t._v(" "),n("p",[t._v("官方文档的描述：")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#with",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("with")]),n("OutboundLink")],1),t._v(" 语句用于包装带有使用上下文管理器 (参见 "),n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.9/reference/datamodel.html#context-managers",target:"_blank",rel:"noopener noreferrer"}},[t._v("with 语句上下文管理器"),n("OutboundLink")],1),t._v(" 一节) 定义的方法的代码块的执行。 这允许对普通的 "),n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#try",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("try")]),n("OutboundLink")],1),t._v("..."),n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#except",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("except")]),n("OutboundLink")],1),t._v("..."),n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.9/reference/compound_stmts.html#finally",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("finally")]),n("OutboundLink")],1),t._v(" 使用模式进行封装以方便地重用。")]),t._v(" "),n("p",[t._v("上下文管理器处理进入和退出所需运行时上下文以执行代码块。")])]),t._v(" "),n("p",[t._v("简单理解：进入和退出某个代码块时执行一些操作。最常用的场景就是处理异常兜底，其实就是对"),n("code",[t._v("try...except...finally")]),t._v("的封装。")]),t._v(" "),n("p",[t._v("例如文件流的操作"),n("code",[t._v('f = open("demo.txt")')]),t._v("，我们要考虑异常情况，保证最后要关闭文件流"),n("code",[t._v("f.close()")]),t._v("。而使用了with语句"),n("code",[t._v('with open("demo.txt") as f')]),t._v("，代码块结束（或异常）后会自动化关闭文件流。")]),t._v(" "),n("h2",{attrs:{id:"自定义上下文管理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义上下文管理器"}},[t._v("#")]),t._v(" 自定义上下文管理器")]),t._v(" "),n("p",[t._v("上下文管理器就是一个对象，with语句其实就是执行对象的两个方法：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("__enter__()")]),t._v("方法：进入上下文时执行（如果这一步没有异常，则不管后面是否有异常，with语句保证会执行"),n("code",[t._v("__exit__()")]),t._v("方法）")]),t._v(" "),n("li",[n("code",[t._v("__exit__()")]),t._v("方法：退出关联到此对象的上下文时执行。")])]),t._v(" "),n("p",[t._v("所以很好理解"),n("code",[t._v('with open("demo.txt") as f')]),t._v("为什么不需要手动"),n("code",[t._v("f.close()")]),t._v("了吧，其实就是"),n("code",[t._v("self.close()")]),t._v("已经写到"),n("code",[t._v("__exit__()")]),t._v("里了。")]),t._v(" "),n("p",[t._v("下面是一个自定义上下文管理器的例子：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyContextManager")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__enter__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"进入上下文..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一般返回其自身，以允许在with代码块中使用")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__exit__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("exc_info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exc_info：如果上下文中有异常，会有参数传进来")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("del")]),t._v(" exc_info\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"退出上下文..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m a context manager"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" MyContextManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"代码块..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证即使这里有异常也会执行__exit__方法")]),t._v("\n        a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"with语句外部"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("输出：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Traceback (most recent call last):\n  File "demo.py", line 22, in <module>\n    a = 1/0\nZeroDivisionError: division by zero\n进入上下文...\nI\'m a context manager\n代码块...\n退出上下文...\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("总结：")]),t._v(" "),n("ul",[n("li",[t._v("只要看到类中有"),n("code",[t._v("__enter__()")]),t._v("和"),n("code",[t._v("__exit__()")]),t._v("方法，就能使用with语句")]),t._v(" "),n("li",[t._v("不管代码块中是否有异常，with语句都保证会执行"),n("code",[t._v("__exit__()")]),t._v("方法。但是并不代表我们不需要处理异常了，如果有异常，程序也会中断。")]),t._v(" "),n("li",[t._v("虽然with语句并不能真正处理异常，但是对于文件流、数据库连接、类似这些场景，"),n("code",[t._v("__exit__()")]),t._v("方法里帮我们执行了"),n("code",[t._v("close()")]),t._v("确实方便了不少（避免自己忘了关😂）。")])]),t._v(" "),n("p",[t._v("顺便记录一下关键字"),n("code",[t._v("as")]),t._v("的用法，目前只遇到两种使用场景：")]),t._v(" "),n("ul",[n("li",[t._v("导入模块时可以用as起个别名")]),t._v(" "),n("li",[t._v("with语句也可以使用as给上下文管理器起个别名")])])])}),[],!1,null,null,null);s.default=a.exports}}]);