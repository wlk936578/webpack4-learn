import avatar from './avatar.gif'
import style from './index.scss'
export default function createAvatar () {
    let img = new Image()
    img.src = avatar
    img.classList.add(style.avatar)

    let dom = document.getElementById('root')
    dom.append(img)
}