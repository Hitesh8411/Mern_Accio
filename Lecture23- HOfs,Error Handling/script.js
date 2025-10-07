/* 4. reduce() -> HOFs 
 - returns a single value
 - intialAccumulatorValue is the value to accumulator to initialize


let sum = arr.reduce((accumulator, val, index, array) => {
  accumulator += val;
  return accumulator;
}, intialAccumulatorValue);
 */

let arr = [2, 5, 3, 10, 34];
let sum = arr.reduce((accumulator, val, index, array) => {
  accumulator += val;
  return accumulator;
}, 0);

console.log({ sum });

// find the count of even numbers
let count = arr.reduce((accumulator, val, index, array) => {
  accumulator += val % 2 == 0;
  return accumulator;
}, 0);

console.log({ count });

/* find the frequency of each element */
let fruits = ["apple", "guava", "Kiwi", "guava", "kiwi", "Apple", "Guava"];

// using function
function frequency(fruits) {
  let obj = {};

  for (let i in fruits) {
    obj[fruits[i].toLowerCase()] = (obj[fruits[i].toLowerCase()] || 0) + 1;
  }

  return obj;
}
console.log(frequency(fruits));

//using reduce()
let freq = fruits.reduce((frequency, fruit, index, array) => {
  frequency[fruit.toLowerCase()] = (frequency[fruit.toLowerCase()] || 0) + 1;
  return frequency;
}, {});

console.log({ freq });

/* find() 
  - returns a value
  - returns the first element that matches the condition
*/

let findKiwi = fruits.find((val, index, arr) => val.toLowerCase() === "kiwi");
console.log(findKiwi);

/* =============== Practice problems ================ */
/* Print the most suitable HOFs for below problems, and also write why you chose that HOF */

const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 30, isActive: false },
  { name: "Charlie", age: 22, isActive: true },
  { name: "Diana", age: 28, isActive: false },
  { name: "Ethan", age: 35, isActive: true },
];

/* Q1: given an array of object, containing details of users, console the name of first user aged above 30 */

/* Q2: Print the name & age of each user */

/* Q3: function to create an array of names from above users 
o/p: ["Alice", "Bob", "Charlie", "Diana", "Ethan"]
*/

/* Q4: function to display all the active users from above users array */

/* Q5: function to find the sum of age for all users below 30 */

/* Q6: function to get the names of all active users  */

/* ======== passing a function as an arguement & returning a function */
function calculator(a, b, operation) {
  return operation(a, b);
}

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum34 = calculator(3, 4, add);
console.log({ sum34 });

/* =================== Error Handling =================== */

try {
  // console.log(studentName);
  let studentName = "Pratik";
  console.log(studentName);
  if (studentName === "Pratik") throw new Error("Pratik found!!");
} catch (error) {
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack);
} finally {
  console.log("In finally block");
}

console.log("after try catch block");


/* 
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored
*/