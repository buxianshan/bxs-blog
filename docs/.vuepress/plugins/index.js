module.exports = {
    name: 'bxs-custom',
    plugins: [
        // 一些自定义markdown容器
        [
            'vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: '',
            },
        ],
        [
            'container',
            {
                type: 'theorem',
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ]
    ]
}