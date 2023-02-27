// Comparing two values in JavaScript:
const first = 2;
const second = 2;
if (first === second) {
  // console.log('condition is same');
} else {
  // console.log('condition is different');
}

/* -------------------------------------------------------------- */

// Compare objects:
const one = { a: 2, b: 2, c: 5 };
const two = { a: 2, c: 5, b: 2 };
const three = two;
// if we compare two and three then it will be true because they share same memory address.
if (one === two) {
  // console.log('condition is same');
} else {
  // console.log('condition is false');
}

/* ----------------------------------------------------------------- */

// do not use this method to compare object or array:
const firstString = JSON.stringify(one);
const secondString = JSON.stringify(two);
// console.log(firstString, secondString);

if (firstString === secondString) {
  // console.log('condition is same');
} else {
  // console.log('condition is different');
}

/* ----------------------------------------------------------------- */
const oneKeys = { a: 2, b: 2, d: 5, e:1};
const twoKeys = { a: 2, c: 5, b: 2 };

function compareObjects(oneKeys, twoKeys) {
  const firstKeys = Object.keys(oneKeys);
  const secondKeys = Object.keys(twoKeys);

  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
        if (oneKeys[key] !== twoKeys[key]) {
            return false;
        }
    }
    return true;
  } else {
    return false;
  }
}
const isSame = compareObjects(oneKeys, twoKeys);
console.log(isSame);
