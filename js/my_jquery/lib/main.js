const DOMNodeCollection = require("./dom_node_collection.js");

const getNodes = CSSselector => {
  const nodesList = document.querySelectorAll(CSSselector);
  const nodesArray = Array.from(nodesList);
  return new DOMNodeCollection(nodesArray);
};

window.$l = arg => {
  switch( typeof(arg) ){
    case "string":
      return getNodes(arg);
  }
};
