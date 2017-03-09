// ----------
// ~ 7 kyu ~
// ----------

// Write function replaceAll that will replace all occuriencies of
// an item with another. Should work and both string and array inputs
//
// Ex: replaceAll([1,2,2], 1, 2) => [2,2,2]

const replaceAll = (input, num, sub) => {
  return Array.isArray(input)
    ? input.map( el => el === num ? sub : el )
    : input.replace(RegExp(num, 'g'), sub);
}; 

// ----------
// ~ 6 kyu ~
// ----------

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

console.log(sqInRect(5, 5));
console.log(sqInRect(5, 3));
console.log(sqInRect(16, 31));
console.log(sqInRect(4, 16));
// console.log([ 3, [ 2, [ 1, 1 ] ] ].flatten());
