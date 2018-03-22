const DOMNodeCollection = require('./dom_node_collection.js');
console.log('script is loaded');

function $l(arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else {
    let nodes = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodes));
  }
}

window.$l = $l;
