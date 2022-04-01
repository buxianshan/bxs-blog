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
        ],
        [
            'container',
            {
                type: 'code-details',
                before: info => {
                    let summary = info !== "CODE-DETAILS" ? info : '查看代码'
                    return `<details class="code-details-block details"><summary>${summary}</summary>\n`
                },
                after: () => '</details>\n'
            }
        ],
    ]
}