const bottle = {color: 'black', price:50, isCleaned: true, capacity: 500};

// get keys / properties from the object:
const keys = Object.keys(bottle);
console.log(keys);
// output: [ 'color', 'price', 'isCleaned', 'capacity' ]

// get values from the object:
const values = Object.values(bottle);
console.log(values);
// output: [ 'black', 50, true, 500 ]

// get entries from the object:
const pairs = Object.entries(bottle);
console.log(pairs);
// output: [ [ 'color', 'black' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 500 ] ]

// get specific value from the object:
const specific = Object.entries(bottle)[2];
console.log(specific);
// output: [ 'isCleaned', true ]

// delete specific value from the object
delete bottle.isCleaned;
console.log(bottle);
// output: { color: 'black', price: 50, capacity: 500 }

// seal the object: (can't add new property, can't delete property, can update property)
Object.seal(bottle);
bottle.price = 100;
bottle.height = 16;
delete bottle.price;
console.log(bottle);
// output: { color: 'black', price: 100, capacity: 500 }

// freeze the object: (can't add new property, can't delete property, can't update property)
Object.freeze(bottle);
bottle.price = 200;
bottle.height = 30;
delete bottle.price;
console.log(bottle);
// output: { color: 'black', price: 100, capacity: 500 }