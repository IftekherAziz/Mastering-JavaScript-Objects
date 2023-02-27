// Multiple wasys to create object:
1. Object literal syntax - (Important)
2. Object constructor
3. Constructor Function
4. ES6 class - (Important)
5. Object.create()

--> What is object and what are the types of object?
--> What is method and constructor?
--> What is keys, values, entries , pair, delete, seal and freeze ?
--> What is obbject immutability? What is different between seal and freeze ?
--> When we use for of loop , for in loop ? Difference between them.
--> What are the 3 ways to read object properties?
--> What is distructaring of the object properties ?
--> Comapring objects, referential integrity, give example.
--> What is borrow method of the object properties?
--> Describe call, apply and bind methods.
--> What is the useage of this keyword in javascript?
--> What is window in javascript?

<!-- Quiz -->

1. Which one is not a way to create an object?
- using JSON.stringify()

2. Call methods accepts _____
- this value and parameter separated by commas

3. What are the purposes of Object.seal()?
- Preventing new properties from being added

4. How will you obtain the key-value pair from the nayok object?
const nayok = {name: ‘hero’, age:’28’, isMarried: false};

- Object.entries(nayok)

5. Why do we use the bind method?
- To borrow method from another object

6. How will you loop through all the properties of an object?
- Using for in loop

7. const obj ={a:1, b:7, c:3, length:2};
   console.log(Object.keys(obj).length);

What will be the output?
- 4

8. const obj1= {module: 35, video:2}; 
   const obj2= {module: 35, video:2};
   console.log(obj1 === obj2);

- false

9. What would be the output of?:

const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 

- name

10. What is a window in JavaScript? Google and read carefully.
- A global variable, window, representing the window in which the script is running .


