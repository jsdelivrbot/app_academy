const DOMNodeCollection = require("./dom_node_collection.js");

const getNodes = CSSselector => {
  const nodesList = document.querySelectorAll(CSSselector);
  const nodesArray = Array.from(nodesList);
  return new DOMNodeCollection(nodesArray);
};

window.$l = arg => {
  if( typeof arg === "string"){ //CSS selector
    return getNodes(arg);
  } else if(arg instanceof HTMLElement){ //HTML el
    return new DOMNodeCollection(arg);
  }
};
