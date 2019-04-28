/**
 * 打包字体文件
 * 
 */
import style from  './index.scss'

let dom = document.getElementById('root')

// root.append('<div class="test">123456</div>')
// root.innerHTML = '<div class="test">123456</div>'
root.innerHTML = `<div class="${style.iconfont} ${style.iconjiantou}">123456</div>`