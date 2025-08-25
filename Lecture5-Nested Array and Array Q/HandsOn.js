
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


// -Subarray Problem 3
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






















/* H.W
Question: Write a function to find the sum of all subarrays
*/
// function sumOfAllSubarrays(arr) {
//   let n = arr.length;
//   let totalSum = 0;

//   for (let i = 0; i < n; i++) {
//     totalSum += arr[i] * (i + 1) * (n - i);
//   }
//   return totalSum;
// }


// console.log(sumOfAllSubarrays([1, 2, 3]));
