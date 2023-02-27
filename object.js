// 1.create object using object literals:
const player = {};

// add properties to the object:
player.name = "Thomas";
player.score = 10000;
player.rank = 1;

// add methods to the object:
player.increment = function() {
    this.score++;
    };

// call the method:
console.log(player);

// 2.create object using object constructor:
const student = {
    name: 'Aziz',
    score: 10000, 
    rank: 1,
    increment: function() {
        this.score++;
    }
};
console.log(student);

// 2.1 create object using object constructor:
const person = new Object();
console.log(person);

// 3. object create method:
const item = Object.create(null);
console.log(item);

// 3.1. object create method:
const item1 = Object.create(player);
console.log(item1.name);

// 4. class create method:
class Person {
    name = 'John';
    address = 'USA';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(20);
console.log(person1);

// 5. function constructor:
function Car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new Car('Tesla', 580000);
console.log(tesla);



