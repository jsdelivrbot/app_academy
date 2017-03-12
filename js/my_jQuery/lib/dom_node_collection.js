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
