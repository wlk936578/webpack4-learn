// const avatar = require('./avatar.gif') // 加载图片


export default function Content (dom) {
    let content = document.createElement('div')
    content.innerHTML = `<div><p>内容</p></div>`
    dom.append(content)
}

// module.exports = function Content (dom,imgUrl) {
//     let content = document.createElement('div')
//     content.innerHTML = `<div><p>内容</p><img src='./avatar.gif' /></div>`
//     dom.append(content)
// }