/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(htmlEls) {
    this.htmlEls = htmlEls;
    console.log("Are we here");
  }

  html(str) {
    if (str === undefined) {
      return this.htmlEls[0].innerHTML;
    } else {
      this.htmlEls.forEach(el => {
        el.innerHTML = str;
      });
      return this;
    }
  }

  empty() {
    return this.html('');
  }

  append(arg) {
    if(arg.constructor.name === "DOMNodeCollection") {
      arg.htmlEls.forEach(el => {
        this.append(el);
      });
    } else if (arg.constructor.name.includes('HTML')) {
      this.htmlEls.forEach(el => {
        el.innerHTML += arg.outerHTML;
      });
    } else if (arg.constructor.name === 'String') {
      this.htmlEls.forEach(el => {
        el.innerHTML += arg;
      });
    }
  }

  children() {
    let childrenArr = [];
    this.htmlEls.forEach(el => {
      for (let i = 0; i < el.children.length; i++) {
        childrenArr.push(el.children[i]);
      }
      // childrenArr = childrenArr.concat(el.children);
    });
    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    let parentArr = [];
    // debugger
    this.htmlEls.forEach(el => {
      if (!parentArr.includes(el.parentElement)) {
        parentArr = parentArr.concat(el.parentElement);
      }
    });
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {

    let arr = [];
    this.htmlEls.forEach(el => {
      // let fcn = this;
      let els = el.querySelectorAll(selector);

      for (const el2 of els) {
        arr.push(el2);
      }
    });

    return new DOMNodeCollection(arr);
  }

  remove() {
    this.htmlEls.forEach(el => {
      el.remove();
    });
  }

  on(type, callback) {
    this.htmlEls.forEach(el => {
      el.addEventListener(type, callback);
    });
  }

  off(type, callback) {
    this.htmlEls.forEach(el => {
      el.removeEventListener(type, callback);
    });
  }

  toString() {
    return "DOMNodeCollection";
  }

  // attr, addClass, and removeClass
}

module.exports = DOMNodeCollection;


/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ "./lib/dom_node_collection.js");
console.log('script is loaded');

function $l(arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if (typeof arg === "function") {
    document.addEventListener("DOMContentLoaded", arg);
  } else {
    let nodes = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodes));
  }
}

Function.prototype.extend = function(...args) {
  let obj = args[0];
  for(const arg of args) {
    Object.keys(arg).forEach(key => {
      obj[key] = arg[key];
    });
  }

  return obj;
};

Function.prototype.ajax = function (obj) {
  let {url, type} = obj;
  
};

window.$l = $l;
// window.addEventListener("load", ()=> console.log("Hi HI"));
// let a = $l(() => console.log("Hi there"));


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./lib/main.js ./lib/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib/main.js */"./lib/main.js");
module.exports = __webpack_require__(/*! /Users/appacademy/Desktop/W6D4/jQuery_lite/lib/main.js */"./lib/main.js");


/***/ })

/******/ });
//# sourceMappingURL=jquery_lite.js.map