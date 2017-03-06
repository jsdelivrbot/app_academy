//Monkey patch the Array class and add a my_inject method. If my_inject receives
//no argument, then use the first element of the array as the default accumulator.

Array.prototype.myInject = function(callback, acc = null){
  let i = 0;

  if(acc === null){
    acc = this[0];
    i += 1;
  }

  for (var j = i; j < this.length; j++) {
    acc = callback(acc, this[j]);
  }

  return acc;
};

console.log([1,2,3,4].myInject(
  function(accumulator, el){
    return accumulator * el;
  }
));
console.log([1,2,3,4].myInject(
  function(accumulator, el){
    return accumulator + el;
  }
));

//primes(num) returns an array of the first "num" primes.
//You may wish to use an is_prime? helper method.

const isPrime = function(number) {
  if(number < 2){
    return false;
  }

  for (var i = 2; i < number; i++) {
    if(number % i === 0){
      return false;
    }
  }
  return true;
};

Array.prototype.primeNums = function(){
  let result = [];

  for (var i = 1; i < (this.length + 1); i++) {
    if(isPrime(i)){
      result.push(i);
    }
  }

  return result;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].primeNums());

console.log(isPrime(13));
console.log(isPrime(12));
console.log(isPrime(2));

//Write a recursive method that returns the first "num" factorial numbers.
//Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
//is 1!, the 3rd factorial is 2!, etc.

const factorialsRec = function(num) {
  if(num === 1){
    return [1];
  } else {
    let prevResult = factorialsRec(num - 1);
    return prevResult.concat(prevResult[prevResult.length - 1] * (num - 1));
  }
};

console.log(factorialsRec(1));
console.log(factorialsRec(2));
console.log(factorialsRec(6));

//Write an Array#dups method that will return a hash containing the indices of all
//duplicate elements. The keys are the duplicate elements; the values are
//arrays of their indices in ascending order, e.g.
//[1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

Array.prototype.dups = function() {
  let resultHash = {};
  for (var i = 0; i < this.length; i++) {
    for (var j = 1; j < this.length; j++) {
      if((this[i] === this[j]) && (i < j)){
        if(!resultHash[this[i]]){
          resultHash[this[i]] = [];
        }
        if(!resultHash[this[i]].includes(i)) {
          resultHash[this[i]] = resultHash[this[i]].concat(i);
        }
        if(!resultHash[this[j]].includes(j)) {
          resultHash[this[j]] = resultHash[this[j]].concat(j);
        }
      }
    }
  }
  return resultHash;
};

console.log([1, 3, 4, 3, 0, 3, 0].dups());

//Write a String#symmetric_substrings method that returns an array of substrings
//that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
//Only include substrings of length > 1.

const symmetricSubstrings = function(superstring) {
  let result = [];
  allSubstrings(superstring).forEach(
    function(sub){
      if(isPal(sub) && sub.length > 1){
        result.push(sub);
      }
    });

  return result;
};

const allSubstrings = function(string) {
  let arr = [];

  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      let substring = string.slice(i, j);
      if(!arr.includes(substring))arr.push(substring);
    }
  }

  return arr;
};

const isPal = function(el) {
  return el.split("").reverse().join("") === el;
};

console.log(symmetricSubstrings("cool"));
console.log(allSubstrings("cool"));
console.log(isPal("cool"));
console.log(isPal("coolooc"));
