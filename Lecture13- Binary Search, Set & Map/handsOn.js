///========Set and Map================////

// let set = new Set([1, 2, 4, 4, 5, 6]);
// console.log("OG Set:", set);

// add elements

// set.add(200);
// set.add(2); // if element is already present this 2 will be ignored
// set.add(3);
// console.log("After adding elements :", set);

// elements checking exist or not

// console.log("cjeking 44 is present?", set.has(44));   
// console.log("checking 3 is presrnt 200?", set.has(3)); 

// Size of set (how many unique values are stored inside the set.)
// console.log("Size of set:", set.size);
// let numbers = new Set();

// numbers.add(10);
// numbers.add(20);
// numbers.add(10); // duplicate not added
// numbers.add(30);

// console.log(numbers);     
// console.log(numbers.size); 

// Delete element
// console.log("Deleting 4:", set.delete(4)); // true
// console.log("after delete:", set);


// Iterate through a Set
// console.log("Iterating set:");
// for (let val of set) {
//   console.log(val);
// }

// Convert Set to Array (removes duplicates from an array)
// let array = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
// let uniqueArr = [...new Set(array)];
// console.log("Original Array:", array);
// console.log("Unique Array:", uniqueArr);


////===============MAP========================/////

// let map = new Map([
//   ["name3", ["Hitesh", "Girish"]],
//   ["name4", "Jay"]
// ]);
// console.log(map)

// // Add key-value pairs
// map.set("name1", "Hitesh");
// map.set("name2", "Girish");
// console.log("key value pairs:", map);

// // Check if a key exists
// console.log("Has key `name1`?", map.has("name1")); 
// console.log("Has key `abc`?", map.has("abc"));   

// // Get value of a key
// console.log("Value of `name2`:", map.get("name2"));

// // Delete a key
// console.log("Deleting `name4`:", map.delete("name4")); 
// console.log("Map after delete:", map);

// // Iterate over Map
// console.log("Iterating map:");
// for (let [key, value] of map) {
//   console.log("Key:", key, ", Value:", value);
// }

// // Print only keys
// console.log("Printing only keys:");
// for (let key of map.keys()) {
//   console.log(key);
// }

// // Print only values
// console.log("Printing only values:");
// for (let val of map.values()) {
//   console.log(val);
// }

// // Convert Map to Array
// const mapArr = [...map];
// console.log("Map converted into Array:", mapArr);


/// Questions : 

// Q1: Remove duplicates from an array

let arr1 = [10, 20, 10, 30, 20, 40];
let unique1 = [...new Set(arr1)];
console.log("Unique", unique1);
// Output: [10, 20, 30, 40]

//Q.store the stuednts marks in a Mao
let studentMarks = new Map();
studentMarks.set("Hitesh", 85);
studentMarks.set("jayesh", 92);
studentMarks.set("mayuresh", 76);
console.log("Student Marks ", studentMarks);

// update value in map

studentMarks.set("mayuresh", 80);
console.log("mayuresh upadated  marks ", studentMarks);


// Grouping by grades

let students = [
  {name : "Hitesh" , grade :"A"},
  {name: "mayuresh", grade:"B"},
  {name: "jayesh", grade:"A"},
  {name: "Sachin", grade: "C"}
];
let gradeMap =new Map();
for (let student of students) {
  if (gradeMap.has(student.grade)){
    gradeMap.get(student.grade).push(student.name);
  }else {
    gradeMap.set(student.grade,[student.name]);
  }
}
console.log("Group by grade,",gradeMap);



//////////=============================================//////
/* H.W: Implement Upperbound Function */

// function upperBound(arr, target) {
//     let low = 0;
//     let high = arr.length;

//     while (low < high) {
//         const mid = Math.floor((low + high) / 2);
//         if (arr[mid] > target) {
//             high = mid;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return low;
// }
// let arr= [1,3,6,6,6,11,11,12]
// let target =6;
// console.log(upperBound(arr, target));



///========Set and Map================////

/* Question find the frequency of each element in the arr */
// let arr3 = [2,3,4,1,0,1,2,3,4,5,10];

// let target = 2; 
// let count = 0;

// for (let num of arr3) {
//   if (num === target) {
//     count++; 
//   }
// }

// console.log(target, "occurs", count, "times");

//=======Intersection and union ==========//

/* Question: Find intersection & Union */
// let arr4 = [1,2,4,5,6,3], arr5 = [2,5,6,3,1,3];

// let union = [...new Set([...arr4, ...arr5])];

// console.log({ union});

// let intersectionSet = new Set();
// for (let num of arr4) {
//   if (arr5.includes(num)) {
//     intersectionSet.add(num); 
//   }
// }
// let intersection = [...intersectionSet];
// console.log({intersection});