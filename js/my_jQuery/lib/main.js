(function(global, document) {
  const DOMNodeCollection = require('./dom_node_collection.js');

  global.nic$ = arg => {
    if(typeof arg === "string"){
      let HTMLelementsNodeList = document.querySelectorAll(arg);
      let HTMLelementsArr = Array.from(HTMLelementsNodeList);
      return new DOMNodeCollection(HTMLelementsArr);
    } else if (arg instanceof HTMLElement) {
      return new DOMNodeCollection([arg]);
    }
  };

}(window, document));
