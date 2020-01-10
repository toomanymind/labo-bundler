
function defineClassCat() {

  let Cat = function() {

  }

  Cat.prototype = {
    constructor: Cat,
    meow: function() {
      console.log('meow~~~~~')
    }
  }

  return Cat
}

export default defineClassCat