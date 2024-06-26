const debugPage = require('./custom/debugPage')

module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://buxianshan.oss-cn-beijing.aliyuncs.com/favicon.ico'
        }],
        ['script', {}, `var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?40291c62c61f1ce49b021bc0f36df71e";
            if (window.location.hostname !== "localhost") {
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        })();`],
        ['script', {src: "https://www.googletagmanager.com/gtag/js?id=G-F12EYNDHWH", async: true}],
        ['script', {}, `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F12EYNDHWH');`],
    ],
    title: 'bxs.ink',
    description: '一些个人理解、笔记和分享',
    markdown: {
        lineNumbers: true
    },
    dest: "./dist",
    base: "/",
    themeConfig: {
        // logo: '/favicon.ico',
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Python',
                ariaLabel: 'Python Menu',
                items: [
                    {text: '简介', link: '/python/introduction'},
                    {text: '常用代码片段', link: '/python/snippets'},
                    {text: 'Python 面向对象', link: '/python/class'},
                    {text: 'Python 多线程', link: '/python/multithread'},
                    {text: 'Python 命令行传参', link: '/python/console-arguments'},
                    {text: 'Python 装饰器', link: '/python/decorator'},
                    {text: 'with 语句', link: '/python/with'},
                    {text: '打包项目到PyPI', link: '/python/build-package'},
                    {text: 'pyc文件', link: '/python/pyc'},
                    {text: '命名风格建议', link: '/python/name-style'},
                    {text: 'Pycharm 生成文档字符串', link: '/python/pycharm-generate-doc-string'},
                    {text: 'The Zen of Python', link: '/python/zen'},
                ]
            },
            {
                text: 'Java',
                ariaLabel: 'Java Menu',
                items: [
                    {text: 'Java基础', link: '/java/basic'},
                    {text: 'JVM', link: '/java/jvm'},
                ]
            },
            {
                text: '设计模式',
                ariaLabel: 'Design Patterns Menu',
                items: [
                    {text: '简介', link: '/design-patterns/introduction'},
                    {text: '单例模式', link: '/design-patterns/singleton'},
                    {text: '访问者模式', link: '/design-patterns/visitor'},
                ]
            },
            {
                text: 'Linux',
                ariaLabel: 'Linux Menu',
                items: [
                    {text: '常用命令记录', link: '/linux/commands-log'},
                    {text: '防火墙', link: '/linux/firewall'},
                    {text: '无密码执行sudo', link: '/linux/sudo-without-password'},
                    {text: '重写/自定义命令', link: '/linux/custom-commands'},
                    {text: 'Shell类型', link: '/linux/shell'},
                    {text: 'ESXi', link: '/linux/esxi'},
                ]
            },
            // {text: 'Docker', link: '/docker/'},
            {
                text: '前端',
                ariaLabel: 'Front-end Menu',
                items: [
                    {text: 'HTML', link: '/front-end/html'},
                    {text: 'CSS', link: '/front-end/css'},
                    {text: 'JavaScript', link: '/front-end/js'},
                    {text: 'Node.js', link: '/front-end/nodejs'},
                    {text: 'AJAX', link: '/front-end/ajax'},
                    {text: 'Vue', link: '/front-end/vue'},
                    {text: '问题记录', link: '/front-end/experience'},
                ]
            },
            {
                text: 'Docker',
                items: [
                    {text: '基础笔记', link: '/docker/notes'},
                    {text: '问题记录', link: '/docker/experience'},
                    {text: '修改存储路径', link: '/docker/change-storage-path'},
                    {text: 'docker-compose', link: '/docker/docker-compose'},
                    {text: 'k8s', link: '/docker/k8s'},
                ]
            },
            {
                text: 'Debug',
                items: debugPage.nav
            },
            {
                text: '工具',
                ariaLabel: 'Tools Menu',
                items: [
                    {text: '常用工具', link: '/tools/tools-i-use'},
                    {text: 'Git', link: '/tools/git'},
                    {text: 'Sourcetree', link: '/tools/sourcetree'},
                    {text: 'Typora', link: '/tools/typora'},
                    {text: '微软RDP优化', link: '/tools/microsoft-rdp'},
                    {text: 'Get Website Icon', link: 'https://icon.bxs.ink/'},
                    {text: 'Chrome插件-Vimium', link: '/tools/vimium'},
                    {text: '时间', link: '/tools/time'},
                ]
            },
            {text: 'Blog', link: '/blog/'},
            {text: '收藏', link: '/collections/'},
            {text: '关于', link: '/about/'}
        ],
        sidebar: {
            // 不同的页面组来显示不同的侧边栏,确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
            '/python/': 'auto',
            '/linux/': [
                ['commands-log', '常用命令记录'],
                ['firewall', '防火墙'],
                ['sudo-without-password', '无密码执行sudo'],
                ['custom-commands', '重写/自定义命令'],
                ['shell', 'Shell类型'],
            ],
            '/java/': 'auto',
            '/design-patterns/': 'auto',
            '/docker/': [
                ['notes', '基础笔记'],
                ['experience', '问题记录'],
                ['change-storage-path', '修改存储路径'],
                ['docker-compose', 'docker-compose'],
                ['k8s', 'k8s'],
            ],
            // fallback
            '/': ['']
        },
        sidebarDepth: 2,
        // 显示所有页面的标题链接
        // displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: false,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false,
        // smoothScroll: true,
        // 在github上编辑此页
        repo: 'https://github.com/buxianshan/bxs-blog',
        repoLabel: '查看源码',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页'
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/last-updated',
        // 切换页面时顶部显示进度条
        '@vuepress/nprogress',
        // 注册了一个<TOC />组件显示md文件的目录
        'vuepress-plugin-table-of-contents',
        // 'reading-progress',
        'smooth-scroll',
        [
            'one-click-copy',
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
                copyMessage: 'Copied successfully!',
                toolTipMessage: 'Copy to clipboard',
                duration: 1000
            }
        ],
        '@vuepress/medium-zoom',
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require('dayjs')
                    return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
                },
            },
        ],
        // 自定义的插件
        require("./plugins"),
    ],
}
