/* Function to print the sum of all subarrays */
const arr = [1, 2, 3, 4];

function subarraySum (arr) {
  let sum = 0;
  let n = arr.length;

  //loop for subarrays starting from different index
  for(let i = 0; i < n; i++) {

    // for each j, it will represent a subarray starting from i and ending at j
    let subSum = 0;
    for(let j = i; j< n; j++){
      subSum += arr[j];
      sum += subSum;
    }
  }

  return sum;
}

console.log("Sum of all subarrays of ", arr, "is", subarraySum(arr));

/* ================== DELETIONS IN ARRAY */
/* Ques: delete the last element of the array */

//Using slice() -> doesn't change the array, until assigned to array itself
let arr1 = [1,2,3,4,5,6];
arr1 = arr1.slice(0, arr1.length - 1);
console.log({ arr1 });

//Using splice() -> changes the original array
//syntax -> splice(start, count);
arr1.splice(arr1.length - 1, 1);
console.log(arr1);

//using pop()

//By changing the length of the array
arr1.length = arr1.length - 1;
console.log("Array after decreasing the value of length property", arr1);

/* Question: Delete element from begining */
const arr2 = [10, 20, 30, 40];
console.log("Array before deletion of first element", arr2);
let z = arr2.shift();
console.log("Array after deletion of first element", arr2);
console.log({z});

//Using loops
/* just shift all the elements left by one index, and decrease the length property value by 1 */
const arr3 = [1,2,3,4,5];
console.log("Array before deletion of first element", arr3);
for(let i = 0; i < arr3.length - 1; i++){
  arr3[i] = arr3[i+1];
}
arr3.length = arr3.length - 1;

console.log("Array after deletion of first element", arr3);

/* HOMEWORK */
/* Do each deletion question, and instead of deletion, do insertion */

/* ===================== ROTATIONS in Array  ========================*/
/* Q: Rotate array right (clockwise) by 1 element */ 
/* Q: Rotate array left (anti - clockwise) by 1 element */ 

/* HOMEWORK */
/* Q: Write a function to Rotate array right (clockwise) by k element */ 
/* Q: Write a function to Rotate array left (anti - clockwise) by k element */ 