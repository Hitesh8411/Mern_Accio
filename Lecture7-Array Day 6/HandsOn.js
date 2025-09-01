// 1. Print all subarrays

// function printAllSubarrays(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let subArr = [];
//     for (let j = i; j < n; j++) {
//       subArr.push(arr[j]);
//       console.log("Subarray:", subArr);
//     }
//   }
// }

// const arr = [1, 2, 3];
// printAllSubarrays(arr);


// Count subarrays 

// Count subarrays with even sum
// function countEvenSumSubarrays(arr) {
//   let n = arr.length;
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       if (sum % 2 === 0) count++;
//     }
//   }
//   return count;
// }

// console.log(countEvenSumSubarrays([1, 2, 3])); // Output: 4

// Longest subarray with sum ≤ K

//  Problem: Find the longest subarray whose sum is less than or equal to K.

// function longestSubarrayWithSumLEK(arr, k) {
//   let n = arr.length;
//   let maxLen = 0;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       if (sum <= k) {
//         maxLen = Math.max(maxLen, j - i + 1);
//       }
//     }
//   }
//   return maxLen;
// }

// console.log(longestSubarrayWithSumLEK([2, 1, -1, 4, 2], 4));

// Print subarrays with sum exactly K

// Problem: Print all subarrays whose sum equals K.

// function printSubarraysWithSumK(arr, k) {
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     let subArr = [];
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       subArr.push(arr[j]);
//       if (sum === k) {
//         console.log("Subarray:", subArr.slice());
//       }
//     }
//   }
// }

// printSubarraysWithSumK([1, 2, -1, 3, -2, 2], 3);



