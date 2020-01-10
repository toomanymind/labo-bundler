import defineClassCat from './Cat'
import './style.css'
import imageLogo from './assets/logo.png'
import printMe from './print'

const Cat = defineClassCat()

let cat = new Cat()
cat.meow()
console.log(imageLogo)

var image = new Image()
image.src = imageLogo
image.onclick = function() {
  alert(3)
}


document.body.appendChild(image)


