import 'core-js/features/math/sign'
// import './styles/extra.css'
// import './styles/index.less'
import defineClassCat from './Cat'
// import imageLogo from './images/logo.png'
// import imageKoala from './images/koala.jpg'

const Cat = defineClassCat()
let cat = new Cat()


let button = document.createElement('button')
button.innerHTML = 'click'
document.body.appendChild(button)

let para = document.createElement('p')
para.innerHTML = cat.meow()
para.className = 'para'
document.body.appendChild(para)

// let image1 = new Image()
// image1.src = imageLogo
// document.body.appendChild(image1)
// let image2 = new Image()
// image2.src = imageKoala
// document.body.appendChild(image2)

let div1 = document.createElement('div')
div1.classList.add('image')
div1.classList.add('logo')
document.body.appendChild(div1)
let div2 = document.createElement('div')
div2.classList.add('image')
div2.classList.add('koala')
document.body.appendChild(div2)

let div3 = document.createElement('div')
div3.classList.add('extra')
document.body.appendChild(div3)