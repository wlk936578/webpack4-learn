/**
 * 打包字体文件
 * 
 */
import style from  './index.scss'

let dom = document.getElementById('root')
console.log('hello world!!!a11')

// root.append('<div class="test">123456</div>')
// root.innerHTML = '<div class="test">123456</div>'
root.innerHTML = `<div class="${style.iconfont} ${style.iconjiantou}">123456</div>`