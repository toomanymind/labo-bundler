
function defineClassCat() {

  let Cat = function() {

  }

  Cat.prototype = {
    constructor: Cat,
    meow() {
      console.log('meow~~~~~')
      let f = n => {
        console.log(this)
      }
    }
  }

  return Cat
}

export default defineClassCat