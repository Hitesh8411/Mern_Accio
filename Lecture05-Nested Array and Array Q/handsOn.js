
/* ====== Nested Array Problems ======= */
/*  -31 July
    -Subarray Problem 3

*/

// function largestAltitude(gain) {
//   let altitude = 0;        
//   let maxAltitude = 0;      

//   for (let i = 0; i < gain.length; i++) {
//     altitude += gain[i];    
//     if (altitude > maxAltitude) {
//       maxAltitude = altitude; 
//     }
//   }

//   return maxAltitude;
// }


// // let arr = [-5 ,1, 5, 0, -7];
// let arr =[-5, 1, 5, 0, 8];
// console.log(largestAltitude(arr));


    /* ======-Subarray Problem 2=========*/ 
// let arr =[8,6,3,4,5,9,12,7,20,22,31,38];
// function solve(arr,n) {
//     let count = 0;
//     for(let i = 0 ; i<=n-4;i++){
//         if (arr[i]< arr[i+1] && arr[i+1] < arr [i + 2] && arr[i + 2] < arr[i + 3]){
//             count++;
//         }
//     }
//     console.log(count);
// }
// solve(arr,arr.length);

//calculate

 /* ======-Subarray Sum zero =========*/ 

// function zeroSubarray(arr) {
//   let found = false;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum === 0) {
//         console.log(`Subarray found from Index ${i} to ${j}`);
//         found = true;
//       }
//     }
//   }

//   if (!found) {
//     console.log(-1);
//   }
// }

// let arr1 = [3 ,4 -7, 3 ,1, 3,1, -4, -2 ,-2];
// let arr2 =[0,0,0];
// zeroSubarray(arr1);
// console.log("new");
// zeroSubarray(arr2);

/* ======-Subarray Problem 1 =========
Given an array arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} of size 10. Find whether there exists a sub-array of size n and sum s, where n and s both are user input values.

Print YES if there exists a subarray of size n and sum s in the array arr else print NO*/ 

// function solve(arr, n, s) {
//     let currentSum=0;

//     for(let i = 0; i< n ; i++){
//         currentSum += arr[i];
//     }
//     if (currentSum === s) {
//         console.log("YES");
//         return;
//     }
//     for(let i =n ; i< arr.length; i++) {
//         currentSum += arr[i] - arr[i-n];
//         //adding next element , remove first of previous window
//         if(currentSum === s) {
//             console.log("YES");
//             return;
//         }

//     }
//     console.log("NO");
// }
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let n = 3;
// let s = 6;
// solve(arr,n,s);


/* ======-Find Split Point ========= 

*/

// function findSplit(arr) {
//     let n = arr.length;
//     let totalSum = arr.reduce((a, b) => a + b, 0);

//     // If total sum is odd → not possible
//     if (totalSum % 2 !== 0) {
//         console.log("Not Possible");
//         return;
//     }

//     let leftSum = 0;
//     for (let i = 0; i < n; i++) {
//         leftSum += arr[i];

//         if (leftSum === totalSum / 2) {
//             console.log(arr.slice(0, i + 1).join(" "));
//             console.log(arr.slice(i + 1).join(" "));
//             return;
//         }
//     }

//     console.log("Not Possible");
// }


// let arr1 = [6, -4, 3, 2, -3];
// findSplit(arr1);

// let arr2 = [4, 3, 2, 1];
// findSplit(arr2);


/*  ========Find Geometric Triplets 
Write a program to print all the triplets that form a geometric progression. All the elements of the array are in increasing order of their value.

Input Format
Input consists of two lines.

First line contains an integer N denoting size of array

Second line contains N integers denoting the array elements separated by single space
 */
// function findGeometricTriplets(arr, n) {
//   let found = false;

//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (arr[j] * arr[j] === arr[i] * arr[k]) {
//           console.log(`${arr[i]} ${arr[j]} ${arr[k]}`);
//           found = true;
//         }
//       }
//     }
//   }

//   if (!found) {

//   }
// }
// let arr = [1, 2, 6, 18, 54];
// findGeometricTriplets(arr, arr.length);


/*============Subarray sum divisible by k
Subarray sum divisible by k
Given an integer array nums and an integer k, print the number of non-empty subarrays that have a sum divisible by k.

A subarray is a contiguous part of an array.

Input Format
Input consists of two lines.

The first line contains two integers n (size of the array) and k.

The second line contains n spaced integers.

Output Format
Print count of subarrays divisible by k */

// function subarraysDivByK(nums, k) {
//     let count = 0;
//     let prefix = 0;
//     let remainderCount = new Map();

//     // initially remainder 0 has frequency 1
//     remainderCount.set(0, 1);

//     for (let num of nums) {
//         prefix += num;

//         // normalize remainder into [0, k-1]
//         let remainder = ((prefix % k) + k) % k;

//         if (remainderCount.has(remainder)) {
//             count += remainderCount.get(remainder);
//             remainderCount.set(remainder, remainderCount.get(remainder) + 1);
//         } else {
//             remainderCount.set(remainder, 1);
//         }
//     }

//     return count;
// }

// // 🔹 Hardcoded test cases
// let arr1 = [4, 5, 0, -2, -3, 1];
// let k1 = 5;
// console.log("Output for arr1:", subarraysDivByK(arr1, k1)); // Expected: 7

// let arr2 = [4, 5, 0, -2];
// let k2 = 2;
// console.log("Output for arr2:", subarraysDivByK(arr2, k2)); 



/* =========== NESTED ARRAY Day 2 =========== */
// /Alternate Manner Matrix Traversal//

// function printElementsAlternately(mat, m, n) {
//   let result = [];

//   for (let i = 0; i < m; i++) {
//     if (i % 2 === 0) {
//       // Odd row index (1st, 3rd, etc → left to right)
//       for (let j = 0; j < n; j++) {
//         result.push(mat[i][j]);
//       }
//     } else {
//       // Even row index (2nd, 4th, etc → right to left)
//       for (let j = n - 1; j >= 0; j--) {
//         result.push(mat[i][j]);
//       }
//     }
//   }
//   console.log(result.join(" "));
// }
// let arr2 = [
// [1, 2],
// [2, 3]];
// let m = arr2.length;
// let n = arr2[0].length; 
// printElementsAlternately(arr2, m, n);


















/* H.W
Question: Write a function to find the sum of all subarrays
*/
function sumOfAllSubarrays(arr) {
  let totalSum = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += arr[j];   
      totalSum += currentSum;
    }
  }
  return totalSum;
}


console.log(sumOfAllSubarrays([1, 2, 3])); 

//time complexity -> O(N)
//Space complexity -> O(1)

/*
// Question : given a 2d matrix , reverse each odd columns and print it 
// input ===>
[1,2,3,4,5,6],
[2,6,12,43,3,5], 


*/

        
function reverseOddColumns(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  
  for (let j = 0; j < cols; j++) {
    if (j % 2 === 1) {  
      let top = 0;
      let bottom = rows - 1;

      
      while (top < bottom) {
        let temp = matrix[top][j];
        matrix[top][j] = matrix[bottom][j];
        matrix[bottom][j] = temp;
        top++;
        bottom--;
      }
    }
  }
  return matrix;
}

let arr = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];

console.log(reverseOddColumns(arr));
//time complexity -> O(N*N)
//Space complexity -> O(1)
