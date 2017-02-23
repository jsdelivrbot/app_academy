Array.prototype.myUnique = function() {
  const uniqueArray = [];

  this.forEach(
    function(el){
      if(!(uniqueArray.includes(el))){
        uniqueArray.push(el);
      }
    }
  );

  return uniqueArray;
};
console.log([1,4,6,8,0,2,4,5,6,6,6,6].myUnique());

Array.prototype.twoSum = function() {
  const array = [];

  for (i = 0; i < this.length; i++) {
    for (j = 1; j < this.length; j++) {
      if (j > i && (this[i] + this[j] === 0)) {
        array.push([i, j]);
      }
    }
  }
  return array;
};

console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.myTranspose = function(){
  const array = [];

  for(i = 0; (i < this[0].length); i++){
    const subArray = [];
    for(j = 0; (j < this.length); j++){
      subArray.push(this[j][i])
    }
    array.push(subArray);
  }
  return array;
};


console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]].myTranspose());

Array.prototype.myEach = function(c){
  for(i = 0; i < this.length; i++){
    c(this[i]);
  }
  return this;
};

const thing = obj => console.log(`This is a callback ${obj}!`);
[1,2,3,4].myEach(thing);

Array.prototype.myMap = function(c){
  const array = [];
  this.myEach(el => array.push(c(el)));
  return array;
};

const thing2 = obj => obj * 2;
console.log([1,2,3,4].myMap(thing2));

Array.prototype.myInject = function(callback) {
  let acc = this[0];
  let bool = false;

  this.myEach(
    function(el) {
      if (!bool) {
        bool = true;
      } else {
        acc = callback(acc, el);
      }
    });
  return acc;
};

const thing3 = (acc, num) => {return acc + num;};
console.log([1,2,3,4].myInject(thing3));

function factors(num){
  const array = [];
  for(i = 1; i < num; i++){
    if(num % i === 0){
      array.push(i);
    }
  }
  return array;
}

Array.prototype.factors = function(num){
  const array = [];
  for(i = 1; i < num; i++){
    if(num % i === 0){
      array.push(i);
    }
  }
  return array;
};

console.log(factors(20));

Array.prototype.bubbleSort = function(){
  let sorted = false;

  while(!sorted){
    sorted = true;

    for( i = 0; i < (this.length - 1); i++){
      if( this[i] > this[i + 1] ){
        let x = this[i];
        this[i] = this[i + 1];
        this[i + 1] = x;
        sorted = false;
      }
    }
  }
  return this;
};

console.log([1,8,3,9,5].bubbleSort());

function substrings(string) {
  let arr = [];

  for(i = 0; i < string.length; i++){
    for(j = i + 1; j <= string.length; j++) {
      let sub = string.slice(i,j);
      if (!arr.includes(sub)) {
        arr.push(sub);
      }
    }
  }
  return arr;
}

console.log(substrings("catlady"));


function range(startNum, endNum) {
  if (endNum - startNum < 2) {
    return [];
  }
  let prevRange = range(startNum, endNum - 1);
  prevRange.push(endNum - 1);

  return prevRange;
}

console.log(range(10, 13));

Array.prototype.iterSum = function() {
  let acc = 0;
  this.myEach(el => acc += el);
  return acc;
};

console.log([1,2,3,4].iterSum());

Array.prototype.recSum = function() {
  if (this.length < 1) {
    return null;
  } else {
    return (this.slice(0, (this.length - 1 ))).recSum() +
      this[this.length - 1];
  }
};

console.log([1,2,3,4].recSum());
