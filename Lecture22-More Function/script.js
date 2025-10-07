/* functions 
Types of functions


arrow functions are not hoisted but the variable is hoisted
 */

const arrow = (a, b) => {
  return a - b;
};

console.log(arrow(6, 2));

/* check if number is divisible by 3 */
const divBythree = (a) => {
  if (a % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

const divcheck = (a) => (a % 3 === 0 ? "true" : "false");
const divCheckByThree = (a) => !(a % 3);

console.log(divCheckByThree(7));
console.log(divBythree(7));
console.log(divcheck(7));

/* note: arrow functions do not have their own this keyword they uses parent's this keyword */

const student = {
  fullname: "prajwal Janbandhu",
  age: 22,
  result1: function (resultStatus) {
    console.log(this.fullname + " has " + resultStatus + " the exam.");
    console.log(this); //shows the object properties
  },
  result2: (resultStatus) => {
    console.log(this.fullname + " has " + resultStatus + " the exam.");
    console.log(this); //window object return krta hai
  },
};

student.result1("passed");
student.result2("passed");

/*--------------------------- anonymous functions ---------------------------*/
/* 
-a func with no name 
*/

/* ---------------------------Higher Order Function - HOF--------------------------- */
/*
- these functions are either functions that takes functions as arguments or return a function 
*/

/* types of HOF's */
/* 
1.forEach()
 -> applies on every element of array
 -> doesn't stop (even if we use break)
 -> doesn't change the original array
 -> doesn't return anything
*/
let arr = [2, 1, 6, 3, 9];
arr.forEach((value, index, array) => console.log(value * value));

let users = [
  { name: "ramesh", age: 20 },
  { name: "rahul", age: 32 },
  { name: "kunal", age: 12 },
];

users.forEach((value, index, array) =>
  console.log(value.name + " " + value.age)
);

/* 
2.map()
 -> transform the array 
 -> return an array
 -> map((value,index,array))
*/

console.log(
  arr.map((i) => {
    return i * i;
  })
);

/* transform the name of each user to uppercase */
users = [
  { name: "ramesh", age: 20 },
  { name: "rahul", age: 32 },
  { name: "kunal", age: 12 },
];

const ans = users.map((item, value, array) => {
  return {
    item: item.name.toUpperCase(),
    age: item.age,
  };
});
console.log(ans);
console.log(users);

/* 
3.filter()
 -> keeps the elements that passes the condition
 -> return an array
 -> doesnot change the original array
*/

let nums = [2, 12, 9, 18, 27];
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);
const oddNums = nums.filter((num) => (num % 2));
console.log(oddNums);


let names=["Pranjal","bhavesh","Uday","siddharth","neha"];
const filteredname=names.filter((item)=>{
    return item[0]!=item[0].toUpperCase();
})
console.log(filteredname);