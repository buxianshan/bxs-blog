module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://buxianshan.oss-cn-beijing.aliyuncs.com/favicon.ico?versionId=CAEQMhiBgID7jPeK_BciIGUwMGYzZWJmMzM3NTQ4NDI5N2FhZDk3NDRiZjYzNjFl'
        }],
        ['script', {}, `var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?40291c62c61f1ce49b021bc0f36df71e";
            if (window.location.hostname !== "localhost") {
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        })();`]
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
                    {text: 'Python 类', link: '/python/class'},
                    {text: '打包项目到PyPI', link: '/python/build-package'},
                    {text: 'pyc文件', link: '/python/pyc'},
                    {text: '命名风格建议', link: '/python/name-style'},
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
                ]
            },
            {text: 'Linux', link: '/linux/commands-log'},
            // {text: 'Docker', link: '/docker/'},
            {
                text: '前端',
                ariaLabel: 'Front-end Menu',
                items: [
                    {text: 'Node.js', link: '/front-end/nodejs'},
                ]
            },
            {
                text: 'Docker',
                items: [
                    {text: '基础笔记', link: '/docker/notes'},
                    {text: '问题记录', link: '/docker/experience'},
                ]
            },
            {
                text: '工具',
                ariaLabel: 'Tools Menu',
                items: [
                    {text: 'Git', link: '/tools/git'},
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
                ['shell', '关于shell'],
            ],
            '/java/': 'auto',
            '/design-patterns/': 'auto',
            '/docker/': [
                ['notes', '基础笔记'],
                ['experience', '问题记录']
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
