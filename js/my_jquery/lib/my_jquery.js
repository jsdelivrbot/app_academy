/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor( nodes ){
	    this.nodes = nodes;
	  }

	  each(callback){
	    this.nodes.forEach(callback);
	  }
	}

	// html
	//
	// Let's write the method html first. It can optionally receive a string as a parameter.

	DOMNodeCollection.prototype.html = (string) => {
	  if(string){ // If it receives an argument, this will become the innerHTML (hint hint) of the each of the nodes.
	    this.each( node => {
	      node.innerHTML = string;
	    });
	  } else { //If it does not receive an argument, it should return the innerHTML of the first node in the array.
	    return this.nodes[0].innerHTML;
	  }
	  debugger;
	};
	// empty
	//
	// This method clears out the content of all nodes in the internal array. I set the html of all nodes to an empty string.

	DOMNodeCollection.prototype.empty = () => {

	};
	// append
	//
	// Take a look here. This method should accept either a jQuery-lite wrapped collection, an HTML element, or a string. Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection. Don't worry about converting strings into HTML elements; just pass them straight through to the elements' innerHTML.
	// other methods
	//

	DOMNodeCollection.prototype.append = () => {

	};
	// I will leave it up to you to figure out ways to implement attr, addClass, and removeClass. All the information for how to change nodes is available in this resource.
	// traversal
	//

	DOMNodeCollection.prototype.children = () => {

	};
	// children
	//
	// children is a method that should return a DOMNodeCollection of ALL children of all nodes in the array.
	// Each node in the array will natively have a children attribute. Look here for more information.
	// Make sure the return value of this method is an instance of DOMNodeCollection.

	DOMNodeCollection.prototype.parent = () => {

	};
	// parent
	//
	// Return a DOMNodeCollection of the parents of each of the nodes

	DOMNodeCollection.prototype.find = () => {

	};
	// find
	//
	// Returns a DOMNodeCollection of all the nodes matching the selector passed in as an argument that are descendants of the nodes. This might come in handy.

	DOMNodeCollection.prototype.remove = () => {

	};
	// remove
	//
	// This should remove the html of all the nodes in the array from the DOM
	// It should also remove all nodes from the array.

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);