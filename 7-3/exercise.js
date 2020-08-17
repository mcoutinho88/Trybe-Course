const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// assert.strictEqual(sum(4,5), 9);
// assert.strictEqual(sum(0,0), 0);
// assert.strictEqual(sum(4,"5"), 0);

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const testArray = [21, 12, 11, 22];
myRemove(testArray, 11);
assert.deepStrictEqual(testArray, [21, 12, 11, 22]);