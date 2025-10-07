/* 
given an array, place its last element at a position 
such that all smaller or equal elements are in left and all greater elements are in right 
input: [2, 7, 1, 5, 4]

output: [1, 2, 4, 7, 5] (if there are multiple answers, print any of them)

NOTE: try to implement this in O(N) time
NOTE: then try to implement this in O(1) space also
*/

/* Try brute force first */

/* Optimized approach using O(N) time and O(1) space */
/* function placeLastElem(arr) {
  let n = arr.length;
  let lastElem = arr[n - 1];
  let ind = 0; //index that's available to place elements <= lastElem

  for (let i = 0; i < n; i++) {
    if (arr[i] <= lastElem) {
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      ind++;
    }
  }

  return arr;
} */
/* 
let arr = [2, 7, 6, 5, 4, 4];
console.log(placeLastElem(arr)); */

/* =============== Quick sort =============== */

/* function quickSort(arr, low, high) {}

arr = [3, 1, 6, 2, 8, 7, 4];
console.log(
  "Sorted using quick sort: " + quickSort(arr, 0, arr.length - 1).join(" ")
);
 */
/* sort() method in JS */

/* arr = [3, 1, 6, 2, 8, 7, 4];
// arr.sort(); //sorts in ascending order
// arr.sort().reverse(); // sorts in descending order

//also sorts in ascending order
arr.sort((a, b) => a - b);
// console.log({ arr });

//also sorts in descending order
arr.sort((a, b) => b - a);
console.log({ arr });

arr = ["apple", "watermelon", "kiwi"];
arr.sort();
console.log(arr);

//H.W. explore localeCompare() method for strings comparison

let students = [
  { name: "Kiran", age: 20, rollNum: 10 },
  {
    name: "Ramesh",
    age: 20,
    rollNum: 7,
  },
  { name: "Suresh", age: 24, rollNum: 12 },
];

students.sort((a, b) => {
  if (a.age == b.age) return b.rollNum - a.rollNum;
  return a.age - b.age;
});
console.log(students);

const nestedArr = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

nestedArr.sort((a, b) => a[0] - b[0]);
console.log({ nestedArr }); */

/* H.w: sort the above array according to first value and then according to second value 
output should be: 
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
*/