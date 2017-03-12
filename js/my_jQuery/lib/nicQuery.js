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
	    if(typeof arg === "string"){
	      let HTMLelementsNodeList = document.querySelectorAll(arg);
	      let HTMLelementsArr = Array.from(HTMLelementsNodeList);
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
	    if (typeof text === "string") {
	      this.each( node => {
	        node.innerHTML = text;
	      });
	    } else {
	      return this.HTMLelementsArr[0].innerHTML;
	    }
	  }

	  empty(){
	    this.html("");
	  }

	  append(child){
	    if (child instanceof DOMNodeCollection) {
	      this.append(child.HTMLelementsArr[0].outerHTML);
	    } else if (typeof child === "object") {
	      this.each( node => {
	        let childClone = child.cloneNode(true);
	        node.appendChild(childClone);
	      });
	    } else if (typeof child === "string") {
	      this.each( node => {
	        node.insertAdjacentHTML('beforeend', child);
	      });
	    }
	  }

	  attr(attributeName, value = null) {
	    if (value) {
	      this.each( node => node.setAttribute(attributeName, value));
	      return this.HTMLelementsArr;
	    } else {
	      return this.HTMLelementsArr[0].getAttribute(attributeName);
	    }
	  }

	  addClass(newClass){
	    this.each( node => {
	      node.className = node.className
	        ? node.className + " " + newClass
	        : newClass;
	    });
	  }

	  removeClass(oldClass){
	    this.each( node => {
	      let allClasses = node.className.split(" ");

	      if (allClasses.includes(oldClass)) {
	        if (allClasses.length === 1 ) {
	          node.removeAttribute("class");
	        } else if (allClasses.length > 1) {
	          let index = allClasses.indexOf(oldClass);
	          node.className = allClasses.splice(oldClass, 1).join(" ");
	        }
	      }

	    });
	  }

	  children(){
	    let childrenList = [];

	    this.each( node => {
	      let childrenNodes = node.children;
	      childrenList = childrenList.concat(Array.from(childrenNodes));
	    });

	    return new DOMNodeCollection(childrenList);
	  }

	  parent(){
	    let parentsList = [];

	    this.each( node => {
	      if(!parentsList.includes(node.parentNode)){
	        parentsList = parentsList.concat(node.parentNode);
	      }
	    });

	    return new DOMNodeCollection(parentsList);
	  }

	  on(eventName, callback){
	    this.each( node => {
	      node.addEventListener(eventName, callback);
	    });
	  }

	}

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);