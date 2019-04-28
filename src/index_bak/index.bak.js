import Header from './header'
import Footer from './footer'
import Content from './content'
import createAvatar from './createAvatar'
// import './index.scss' // 全局样式
import style from  './index.scss' // 模块化打包(局部样式)
import avatar from './avatar.gif'

// const Header = require('./header.js')
// const Footer = require('./footer.js')
// const Content = require('./content.js')

createAvatar()
let img = new Image()
img.src = avatar
// img.classList.add('avatar')
img.classList.add(style.avatar)



let dom = document.getElementById('root')
dom.append(img)
new Header(dom)
new Content(dom)
new Footer(dom)
