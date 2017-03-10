// ------------------------------
//            ~ 6 kyu ~
// ------------------------------

// Given two array of integers(arr1,arr2). Your task is going to find a
// pair of numbers(an element in arr1, and another element in arr2), their
// difference is as big as possible(absolute value); Again, you should to
// find a pair of numbers, their difference is as small as possible.
// Return the maximum and minimum difference values by an array:
// [ max difference, min difference ]
//
// For example:
//
// Given arr1 = [3,10,5], arr2 = [20,7,15,8]
// should return [17,2] because 20 - 3 = 17, 10 - 8 = 2


const maxAndMin = function(arr1, arr2) {
  let allDiffs = [];

  for (var i1 = 0; i1 < arr1.length; i1++) {
    for (var i2 = 0; i2 < arr2.length; i2++) {
      allDiffs.push(Math.abs(arr1[i1] - arr2[i2]));
    }
  }

  return [Math.max(...allDiffs), Math.min(...allDiffs)];
};

// console.log(maxAndMin([1,2,3,4,5],[6,7,8,9,10])); //[9,1]
// console.log(maxAndMin([3,10,5],[3,10,5])); // [7,0]
// console.log(maxAndMin([3],[20])); //  [17,17]

// Kontti language is a finnish word play game, you add -kontti to the
// end of a word and then switch their first letters until the first
// vowel (as in "aeiouy"); if no vowel is present, the word stays the
// same.
//
// For example the word lamppu becomes komppu-lantti; aeiou becomes
// koeiou-antti and so on.
//
// Write a string method that turns a sentence into a kontti sentence!

String.prototype.kontti = function(){

};

// https://www.codewars.com/kata/kontti-language/train/javascript

const sqInRect = (w, h, firstRound = true) => {
  if (w > h) {
    let oldW = w;
    w = h;
    h = oldW;
  }

  let result = [];

  if ( w === 1 ){
    for (var i = 0; i < h; i++) {
      result.push(w);
    }
  } else if ( w > 1 ) {
    result.push(w);
    result.push(sqInRect((h - w), w, false));
  }

  return ((w === h) && firstRound) ? null : result.flatten();

};

Array.prototype.flatten = function () {
  let result = [];
  this.forEach( el => {
    if(el){
      if( typeof el === "number") {
        result.push(el);
      } else {
        result = result.concat(el.flatten());
      }
    }
  });
  return result;
};

// console.log(sqInRect(5, 5));
// console.log(sqInRect(5, 3));
// console.log(sqInRect(16, 31));
// console.log(sqInRect(4, 16));

// ------------------------------
//            ~ 7 kyu ~
// ------------------------------

// Write function replaceAll that will replace all occuriencies of
// an item with another. Should work and both string and array inputs
//
// Ex: replaceAll([1,2,2], 1, 2) => [2,2,2]

const replaceAll = (input, find, replace) => {
  return Array.isArray(input)
    ? input.map( el => el === find ? replace : el )
    : input.replace(RegExp(find, 'g'), replace);
};
