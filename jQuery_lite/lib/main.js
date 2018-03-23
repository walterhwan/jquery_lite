const DOMNodeCollection = require('./dom_node_collection.js');
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
