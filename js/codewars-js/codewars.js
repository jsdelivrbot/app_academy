// ----------
// ~ 7 kyu ~
// ----------

// Write function replaceAll that will replace all occuriencies of
// an item with another.
//
// Ex: replaceAll([1,2,2], 1, 2) => [2,2,2]

const replaceAll = (arr, num, sub) => {
  let result = [];
  arr.forEach( el => {
    result.push(el === num ? sub : el);
  });
  return result;
};
