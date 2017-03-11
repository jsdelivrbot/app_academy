(function(global, document) {
  const DOMNodeCollection = require('./dom_node_collection.js');

  global.nic$ = arg => {
    //if the arg is a string, treat as a CSS selector and return matching nodes on the page
    if(typeof arg === "string"){
      let HTMLelementsArr = Array.from(document.querySelectorAll(arg));
      return new DOMNodeCollection(HTMLelementsArr);
    } else if (arg instanceof HTMLElement) {
      return new DOMNodeCollection([arg]);
    }
  };

}(window, document));
