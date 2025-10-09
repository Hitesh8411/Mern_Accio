
// 1️ reduce() - returns a single value


let arr = [2, 5, 3, 10, 34];

// Find the sum using reduce()
let sum = arr.reduce((accumulator, val, index, array) => {
  accumulator += val;
  return accumulator;
}, 0);

console.log("Sum of array elements:", sum);


//  Count even numbers using reduce()

let count = arr.reduce((accumulator, val) => {
  accumulator += val % 2 === 0; 
  return accumulator;
}, 0);

console.log("Count of even numbers:", count);

//  Find frequency of elements


let fruits = ["apple", "guava", "Kiwi", "guava", "kiwi", "Apple", "Guava"];


function frequency(fruits) {
  let obj = {};
  for (let i in fruits) {
    obj[fruits[i].toLowerCase()] = (obj[fruits[i].toLowerCase()] || 0) + 1;
  }
  return obj;
}
console.log("Frequency using loop:", frequency(fruits));

// Using reduce()
let freq = fruits.reduce((frequency, fruit) => {
  frequency[fruit.toLowerCase()] = (frequency[fruit.toLowerCase()] || 0) + 1;
  return frequency;
}, {});

console.log("Frequency using reduce():", freq);


// 4️⃣ find() - returns first matching element

let findKiwi = fruits.find((val) => val.toLowerCase() === "kiwi");
console.log("First fruit that matches 'kiwi':", findKiwi);

//problem
const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 30, isActive: false },
  { name: "Charlie", age: 22, isActive: true },
  { name: "Diana", age: 28, isActive: false },
  { name: "Ethan", age: 35, isActive: true },
];


// First user aged above 30

let firstAbove30 = users.find((user) => user.age > 30);
console.log("First user aged above 30:", firstAbove30?.name);


//  Print the name & age of each user
users.forEach((user) => console.log(`Name: ${user.name}, Age: ${user.age}`));


// Sum of ages for users below 30

let sumAgeBelow30 = users
  .filter((user) => user.age < 30)
  .reduce((sum, user) => sum + user.age, 0);

console.log("Sum of ages (users < 30):", sumAgeBelow30);
