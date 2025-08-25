/*
array quesyins
frequency of array
prefix sum
all pairs with f-difrrence =k
time and space complexity
plus minus 
*/
// 22-08-25
// scopes
// global : gloval vaiable acesses avery where
// x= 10;
// let y =5;
// const z = 12;
// var w = 15;

// {
//     var y1 =6;
//     const y2 =17;
//     console.log.log("Var inside block scope:",y1);
// }


/* let variable : scope -> block scope 
// if the variable it declared globally i.e not define in any block 
it will behave like */


// nested scopes 
// function nestedScopes () {
//     let value = 145;
//     for (let i = 0 ; i < 5 ; i ++) {
//      if ( i % 2 == 0){
//         let value2 =35;

//         console.log(value, value2);
//      }
//     }
// }
// nestedScopes();


// arrays

// nested array 
// const arr = [1, [1,2,3],4,5,[6,95,71],80]
// console.log(arr[4][2]);
// console.log(arr[0]);
// print nested array

// const arr = [1, [1, 2, 3], 4, 5, [6, 95, 71], 80];
// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   } else {
//     console.log(arr[i]);
//   }
// }

// Method 2 using tyeof keyword
// console.log("Method 2")
// for ( let i = 0; i<arr.length; i++) {
//     if(typeof arr[i] == "number")
//         console.log(arr[i]);
//     else{
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
    
//     }
// }

// method 3 - using isArray() method 
// isArray(arr) -> returns boolean value detrmining if a variable "arr" is an arrya or not
// console.log("Array method 3")
// for (let i =0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i]))
//         console.log(arr[i]);
//     else{
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }

// }

// let a = 4;
// for ( let i =1 ; i< a; i++) {
//     let star ="*".repeat(i);
//     console.log(star);
// }

// How to identify a matrix

/*
 * Checks if a given variable is a matrix.
 * A matrix is an array of arrays where all inner arrays have the same length.

*/

// function isMatrix(arr1) {
//  let rowLength = arr1[0].length;
//     for (let i = 1; i < arr1.length; i++) {
//         if (arr1[i].length !== rowLength) return false;
//     }

//     return true;
// }
// let arr1 = [[1, 2, 3], [4, 5, 6]];
// console.log(isMatrix(arr1));

//  function to cjeck i f a nested arry is amatrix or not 
// function isMatrix(arr) {
//     if(!Array.isArray(arr))
//         return false;
//     if(!Array.isArray(arr[0]))
//         return false;
//     let colSize = arr[0].length;

//     for (let array of arr)
//         if(array.length !== colSize)
//             return false;
//         return true;


// }
// let arr= [[1, 2, 3,4], [4, 5, 6]];
// console.log(isMatrix(arr));


// function isMatrix(arr) {
//     if (!Array.isArray(arr)) return false;   // must be an array
//     if (arr.length === 0) return true;       // empty array = valid matrix

//     // check if all elements are arrays
//     for (let i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr[i])) return false;
//     }

//     // ensure uniform row length
//     let rowLength = arr[0].length;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length !== rowLength) return false;
//     }

//     return true;
// }

// // Test cases
// console.log("Single Dimensional Array:", isMatrix([2, 3, 4])); // false

// const arr1 = [ [1, 2, 3], [4, 5, 6] ];
// console.log("Mixed array:", isMatrix(arr1)); // true

// console.log("A matrix of 3×3:", 
//     isMatrix([
//         [1, 2, 3],
//         [2, 3, 4],
//         [1, 4, 5]
//     ])
// ); // true

// const arr3 = [
//     [1, 2, 3],
//     [2, 3]
// ];
// console.log("Nested array with different number of columns in rows:", isMatrix(arr3)); // false


// Q. write a function to claulate product of sum of each rows

// function productOfRowSums(matrix) {
//     if (!Array.isArray(matrix) || matrix.length === 0) {
//         return 0; // no rows → product is 0 by definition
//     }

//     let product = 1;

//     for (let i = 0; i < matrix.length; i++) {
//         if (!Array.isArray(matrix[i])) {
//             return 0; // invalid row
//         }

//         // calculate sum of current row
//         let rowSum = 0;
//         for (let j = 0; j < matrix[i].length; j++) {
//             rowSum += matrix[i][j];
//         }

//         // multiply to product
//         product *= rowSum;
//     }

//     return product;
// }

// // Example usage:
// const arr = [
//     [1, 2, 3], // sum = 6
//     [4, 5, 6], // sum = 15
//     [7, 8, 9]  // sum = 24
// ];
// console.log("Product of sums of rows:", productOfRowSums(arr));
// // 6 * 15 * 24 = 2160

// function calRowSumProduct(arr) {
//     let ans = 1;

//     for (let i =0 ; i < arr.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j];
//         }
//         ans *= sum; 

//     }
//     return ans;
// }
// console.log(calRowSumProduct([[1, 2, 3], [2,3], [1, 4, 5]])); 

// // write a function to calculate the sum of nested arrays
// function sumNestedArray(arr) { 
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             sum += sumNestedArray(arr[i]); // recursive call for nested arrays
//         } else {
//             sum += arr[i]; // add the number directly
//         }
//     }

//     return sum;
// }
// console.log("Sum of nested array:", sumNestedArray([[1, 2, 3], [2,3], [1, 4, 5]])); 


// print all subarray
// print sum of all sub array
// 1 aug all problems


// let arr = [1, 2, 3, 4, 5];
// // Print sum of all subarrays
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         sum += arr.slice(i, j + 1).reduce((a, b) => a + b, 0);
//     }
// }
// console.log(sum);

// //Print all subarrays
// let subarrays = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         subarrays.push(arr.slice(i, j + 1));
//     }
// }
// console.log(subarrays);



let arr = [1, 2, 3, 4, 5];
let subarrays = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        subarrays.push(arr.slice(i, j + 1));
    }
}

console.log("All subarrays:", subarrays);

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     sum += arr[i] * (i + 1) * (n - i);
// }

// console.log("Sum of all subarrays:", sum);