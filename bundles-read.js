(function(module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
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
  __webpack_exports__["default"] = (defineClassCat);
  

})

(function(module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var _Cat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat.js */ "./src/Cat.js");
  const Cat = Object(_Cat_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
  let cat = new Cat()
  cat.meow()
  
  

})