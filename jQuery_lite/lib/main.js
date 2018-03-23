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

window.$l = $l;
// window.addEventListener("load", ()=> console.log("Hi HI"));
// let a = $l(() => console.log("Hi there"));
