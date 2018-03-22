const DOMNodeCollection = require('./dom_node_collection.js');
console.log('script is loaded');

function $l(selector) {
  console.log("we are in core");
  let nodes = document.querySelectorAll(selector);
  return Array.from(nodes);
}

window.$l = $l;
