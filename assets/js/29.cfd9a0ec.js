(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{443:function(s,a,t){"use strict";t.r(a);var e=t(36),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{align:"center"}},[s._v("\n    端口被占用\n")]),s._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" windows")]),s._v(" "),t("p",[s._v("查看是哪个进程占用的端口：")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("netstat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aon "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" findstr "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# log中最后的数字就是PID")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("查看PID对应的进程：")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("tasklist "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" findstr "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PID"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("也可以直接到任务管理器中查看PID对应的进程，决定是否结束进程。")]),s._v(" "),t("h2",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" linux")]),s._v(" "),t("p",[s._v("查看占用端口的进程：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:8080\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("杀掉进程：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 PID\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);