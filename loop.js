const numbers = [12, 54, 65, 3, 58];

// get all numbers from an arry using the for of loop:
for (const number of numbers) {
    console.log(number);
}

/* ----------------------------------------------------------------- */

// Note: for of loop cannot be used for objects, but for in loop can be used for objects.
const bottle = {color: 'black', price:50, isCleaned: true, capacity: 1};

//  first option:
const keys = Object.keys(bottle);
for (const key of keys) {
    console.log(key, bottle[key]);
}

// second option:
// get all the keys and values from an object using the for in loop:
for (const property in bottle) {
    console.log(property, bottle[property]);
}