const got = require('got')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const iconCachePath = path.join(__dirname, './cache/icon-cache.json')


exports.getUrlIcon = function (url) {
    // 检查本地缓存中是否已有记录
    const iconCacheData = getIconDataInCache()
    const shortUrl = getShortUrl(url)
    if (iconCacheData[shortUrl]) {
        return iconCacheData[shortUrl]
    }
    let iconUrl
    (async () => {
        try {
            const response = await got(url)
            const $ = cheerio.load(response.body)
            let iconUrl = $('head > link[rel*="icon"]').attr('href')
            if (iconUrl) {
                if (iconUrl.startsWith('http')) {
                    // pass
                } else {
                    // 如果时相对路径则拼接成完整路径
                    if (iconUrl.startsWith('/') !== true) {
                        iconUrl = '/' + iconUrl
                    }
                    iconUrl = getShortUrl(url) + iconUrl
                }
                console.log(`add a icon cache: ${url}`)
                console.log(`@${url}\n`, iconUrl)
                iconCacheData[shortUrl] = iconUrl
                setIconDataInCache(iconCacheData)
                return iconUrl
            } else {
                console.log('@not found icon in : ', url)
                return null
            }
            //=> '<!doctype html> ...'
        } catch (error) {
            console.log(`@${url}`, error);
            //=> 'Internal server error ...'
        }
    })().then((result) => {
        iconUrl = result
    })
    return iconUrl
}


function getIconDataInCache() {
    const data = fs.readFileSync(iconCachePath)
    return JSON.parse(data)
}

function setIconDataInCache(data) {
    const dataString = JSON.stringify(data, null, 4)
    fs.writeFileSync(iconCachePath, dataString, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
}

function getShortUrl(url) {
    // 去掉url中域名以后的字符
    let t = url.split('/')
    return `${t[0]}//${t[2]}`
}

// const urlList = [
//     // 'https://github.com/cheeriojs/cheerio/wiki/Chinese-README',
//     'https://bxs.ink',
//     'https://www.baidu.com',
//     'https://blog.csdn.net/lilongsy/article/details/83652266',
//     'https://stackoverflow.com/questions/33007878/nodejs-typeerror-require-is-not-a-function',
// ]
