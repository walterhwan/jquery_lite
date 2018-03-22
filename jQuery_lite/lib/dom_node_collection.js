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
