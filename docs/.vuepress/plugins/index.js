const yaml = require('js-yaml')
const iconUtils = require('./iconUtils')

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
        [
            'container',
            {
                type: 'card-list',
                render: renderCardList,
            },
        ],
    ]
}


function renderCardList(tokens, idx) {
    if (tokens[idx].nesting === 1) {
        let yamlString = ''
        for (let i = idx; i < tokens.length; i++) {
            // console.log('@type', tokens[i].type)
            if (tokens[i].type === 'fence' && tokens[i].info.trim() === 'yaml') {
                yamlString = tokens[i].content
            }
            if (tokens[i].type === 'container_card-list_close') {
                break
            }
        }
        // console.log(yamlString)
        if (yamlString) {
            const cardData = yaml.load(yamlString)
            let stringCardList = ''
            for (let card of cardData) {
                // todo 注意这里有问题，如果缓存中没找到就使用了异步操作发请求去解析了，导致第一次编译返回的iconUrl是undefined。
                //  未解决，暂时方案：等第一次编译结束后就有缓存了，然后再编译一次就可以了。
                let iconUrl = iconUtils.getUrlIcon(card.url)
                let stringCard =
                    `<a href="${card.url}" class="card" target="_blank">
                        <img src="${iconUrl}" alt="">
                        <div>
                            <p class="title">${card.title}</p>
                            <p class="info">${card.info}</p>
                        </div>
                    </a>`
                stringCardList += stringCard
            }
            return `<div class="card-list-container">
                        <div class="card-list">
                            ${stringCardList}
                        </div>`
        }
    } else {
        // closing tag
        return '</div>\n';
    }
}