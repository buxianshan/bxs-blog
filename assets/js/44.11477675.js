(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{458:function(s,a,t){"use strict";t.r(a);var e=t(36),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{align:"center"}},[s._v("\n    ESXi 笔记\n")]),s._v(" "),t("h2",{attrs:{id:"安装esxi-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装esxi-8-0"}},[s._v("#")]),s._v(" 安装ESXi 8.0")]),s._v(" "),t("ol",[t("li",[s._v("下载iso镜像：https://pan.baidu.com/s/1091fZq-TgOxAqw-gpGkr1w?pwd=dud1")]),s._v(" "),t("li",[s._v("写入U盘：使用"),t("a",{attrs:{href:"https://rufus.ie/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rufus"),t("OutboundLink")],1),s._v("很方便")]),s._v(" "),t("li",[s._v("U盘插入主机，进bois设置从U盘启动，根据提示安装即可")])]),s._v(" "),t("p",[s._v("esxi 8.0 激活码：MV4YN-0L38Q-2ZK60-XUA7K-AAZ18")]),s._v(" "),t("h2",{attrs:{id:"开启ssh密码登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启ssh密码登录"}},[s._v("#")]),s._v(" 开启SSH密码登录")]),s._v(" "),t("p",[s._v("首先开启SSH服务：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20221107113409330.png",alt:"image-20221107113409330"}})]),s._v(" "),t("p",[s._v("设置允许密码登录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 PasswordAuthentication no 改为 yes，保存退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ssh/sshd_config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启ssh服务")]),s._v("\n/etc/init.d/SSH restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"ssh显示dcui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh显示dcui"}},[s._v("#")]),s._v(" SSH显示DCUI")]),s._v(" "),t("p",[s._v("Direct Console User Interface（直连用户界面）：直接控制台用户界面(DCUI)允许您使用基于文本的菜单与主机进行本地交互。")]),s._v(" "),t("p",[s._v("当没有直连显示器时，使用DCUI可以很方便的界面控制服务器。")]),s._v(" "),t("p",[s._v("SSH连接后，只需要输入"),t("code",[s._v("dcui")]),s._v("回车即可，"),t("code",[s._v("ctrl + c")]),s._v("退出。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://buxianshan.oss-cn-beijing.aliyuncs.com/Typora_images/image-20221107135251949.png",alt:"image-20221107135251949"}})]),s._v(" "),t("h2",{attrs:{id:"配置ssl证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置ssl证书"}},[s._v("#")]),s._v(" 配置SSL证书")]),s._v(" "),t("p",[s._v("例如使用阿里云可以免费申请SSL证书（有效期一年）。")]),s._v(" "),t("p",[s._v("下载Nginx服务器类型的证书，把"),t("code",[s._v("*.key")]),s._v("改名为"),t("code",[s._v("rui.key")]),s._v("，把"),t("code",[s._v("*.pem")]),s._v("改名为"),t("code",[s._v("rui.crt")]),s._v("。")]),s._v(" "),t("p",[s._v("（最好先备份一下）把这两个文件上传覆盖到/etc/vmware/ssl/")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启hostd服务")]),s._v("\n/etc/init.d/hostd restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启vpxa服务")]),s._v("\n/etc/init.d/vpxa restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"修改主机名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改主机名"}},[s._v("#")]),s._v(" 修改主机名")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("esxcli system "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" --host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("new_hostname\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看版本号"}},[s._v("#")]),s._v(" 查看版本号")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vmware -vl")]),s._v("\nVMware ESXi "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v(" GA\nVMware ESXi "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v(".0 build-20513097\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);