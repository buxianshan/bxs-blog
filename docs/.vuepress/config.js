module.exports = {
    head: [
        ['link', {rel: 'icon', href: 'https://buxianshan.xyz/favicon.ico'}]
    ],
    title: 'bxs.ink',
    description: 'todo',
    markdown: {
        lineNumbers: true
    },
    dest: "./dest",
    themeConfig: {
        // logo: '/favicon.ico',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Python', link: '/python/'},
            {text: 'Linux', link: '/linux/'},
            {text: 'Blog', link: '/blog/'},
            {text: '关于', link: '/about/'}
        ],
        sidebar: {
            // 不同的页面组来显示不同的侧边栏,确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
            '/python/': [
                ['', 'Top'],
                ['Introduction', '简介'],
                // {
                //     title: 'python是什么？',
                //     // 可选的, 标题的跳转链接
                //     // path: 'python',
                //     collapsable: true,
                //     sidebarDepth: 2,
                //     children: [
                //         ['Introduction', '']
                //     ]
                // },
            ],
            '/linux/': [
                // todo
            ],
            // blog页面单独配置是否显示侧边栏
            // '/blog/': [
            //     // todo
            //     ['', '目录'],
            //     ['csdn-img', '使用csdn作为免费图床'],
            // ],
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
        smoothScroll: true,
        // 在github上编辑此页
        repo: 'https://github.com/buxianshan/bxs-blog',
        repoLabel: 'GitHub',
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
        // 这个插件会在每个代码块后加一个空行，先不用了
        // ['vuepress-plugin-code-copy', {
        //     align: 'bottom',
        //     color: '#0FA1F3',
        //     successText: '已复制'
        // }],
        '@vuepress/medium-zoom'
    ],
}