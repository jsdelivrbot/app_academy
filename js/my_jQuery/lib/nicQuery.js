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

	(function(global, document) {
	  const DOMNodeCollection = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(HTMLelementsArr){
	    this.HTMLelementsArr = HTMLelementsArr;
	  }

	  each(callback){
	    this.HTMLelementsArr.forEach( node => {
	      callback(node);
	    });
	  }

	  html(text){
	    this.each( node => {
	      node.innerHTML = text || "";
	    });
	  }

	}

	// html
	//
	// Let's write the method html first. It can optionally receive a string as a parameter.
	// If it receives an argument, this will become the innerHTML (hint hint) of the each of the nodes. If it does not receive an argument, it should return the innerHTML of the first node in the array.
	// empty
	//
	// This method clears out the content of all nodes in the internal array. I set the html of all nodes to an empty string.
	// append
	//
	// Take a look here. This method should accept either a jQuery-lite wrapped collection, an HTML element, or a string. Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection. Don't worry about converting strings into HTML elements; just pass them straight through to the elements' innerHTML.
	// other methods
	//
	// I will leave it up to you to figure out ways to implement attr, addClass, and removeClass. All the information for how to change nodes is available in this resource.
	// traversal
	//
	// children
	//
	// children is a method that should return a DOMNodeCollection of ALL children of all nodes in the array.
	// Each node in the array will natively have a children attribute. Look here for more information.
	// Make sure the return value of this method is an instance of DOMNodeCollection.
	// parent
	//
	// Return a DOMNodeCollection of the parents of each of the nodes
	// find
	//
	// Returns a DOMNodeCollection of all the nodes matching the selector passed in as an argument that are descendants of the nodes. This might come in handy.
	// remove
	//
	// This should remove the html of all the nodes in the array from the DOM
	// It should also remove all nodes from the array.

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);