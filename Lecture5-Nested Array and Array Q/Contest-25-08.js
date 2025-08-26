/* A social media company, "ConnectMe", has an array of user IDs where each ID is a unique number. They want to know how many of these IDs are prime numbers. You are required to write a JavaScript function that takes this array as input and prints the count of prime numbers in the array.

For example, if the array is [2, 3, 5, 7, 11, 13, 15, 17, 20], the function should print 7 because there are 7 prime numbers in the array.

You can use the following code stub to write your function:

function countPrimeNumbers(arr) {
  // your code here
  console.log(primeCount);
}
Note: As of now we are not concerned with time or space complexity, we are just concerned with working solution. */

// FUNCTION countPrimeNumbers(arr):
//     DEFINE FUNCTION isPrime(num):
//         IF num <= 1:
//             RETURN false
//         IF num == 2:
//             RETURN true
//         IF num is divisible by 2:
//             RETURN false
//         FOR i FROM 3 TO sqrt(num) STEP 2:
//             IF num is divisible by i:
//                 RETURN false
//         RETURN true

//     SET primeCount = 0

//     FOR each element in arr:
//         IF isPrime(element):
//             INCREMENT primeCount by 1

//     PRINT primeCount
// END FUNCTION

// function countPrimeNumbers(arr) {
//   // Function to check if a number is prime
//   function isPrime(num) {
//     if (num <= 1) return false;      // 0 and 1 are not prime
//     if (num === 2) return true;      // 2 is prime
//     if (num % 2 === 0) return false; // even numbers greater than 2 are not prime

//     // check divisibility up to square root
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   let primeCount = 0;

//   // loop through array and count primes
//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//       primeCount++;
//     }
//   }

//   console.log(primeCount);
// }


// countPrimeNumbers([2, 3, 5, 7, 11, 13, 15, 17, 20]); 


/*===============Problem 2============== */

/* You are a software developer working for a financial institution that provides investment services to its clients. One of the features of the platform is to calculate the sum of a series, which is used to estimate the returns on investment. The series is defined as: S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+3...n).

Create a JavaScript function that takes an integer n as input and returns the sum of the series up to n terms. For example, if n is 3, the function should return the sum of the series up to 3 terms, which is 1 + 2/(1+2) + 3/(1+2+3).

Note: As of now, we are not concerned with time or space complexity, we are just concerned with a working solution. */

/* FUNCTION seriesSum(n):
    SET sum = 0
    SET runningDenominator = 0   // keeps cumulative sum of denominators
    
    FOR i FROM 1 TO n:
        runningDenominator = runningDenominator + i
        term = i / runningDenominator
        sum = sum + term
    
    RETURN sum
END FUNCTION
 */

// function seriesSum(n) {
//   let sum = 0;
//   let runningDenominator = 0;

//   for (let i = 1; i <= n; i++) {
//     runningDenominator += i;        // denominator is sum of 1 to i
//     let term = i / runningDenominator; 
//     sum += term;                    // add term to total sum
//   }

//   return sum;
// }

// // Example usage:
// console.log(seriesSum(3)); // Output: 2.5 (1 + 2/3 + 3/6)


/*===============Problem 3============== */

/*As a software developer for an e-commerce company, you are tasked with creating a function that combines two arrays of product IDs. The first array contains IDs of products that are currently in stock, and the second array contains IDs of new products that need to be added to the inventory. However, to avoid duplicates, you need to ensure that only new product IDs that are not already present in the first array are added to the combined array.

Write a JavaScript function that takes two arrays as parameters and returns a new array that combines both arrays, making sure to add only those elements from the second array that are not already present in the first array.

For example, if the input arrays are [1, 2, 3, 4, 5] and [4, 5, 6, 7, 8], the output array should be [1, 2, 3, 4, 5, 6, 7, 8].

You can use the following code stub as a starting point:

function combineArrays(arr1, arr2) {
  // Your code here
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let result = combineArrays(arr1, arr2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8] */

/*FUNCTION combineArrays(arr1, arr2):
    SET result = copy of arr1
    
    FOR each element item in arr2:
        IF item is NOT present in arr1:
            ADD item to result
    
    RETURN result
END FUNCTION
 */

// function combineArrays(arr1, arr2) {
//   // Copy arr1 into result
//   let result = [...arr1];  

//   // Add only elements from arr2 that are not already in arr1
//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       result.push(arr2[i]);
//     }
//   }

//   return result;
// }

// // Example usage:
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];
// let result = combineArrays(arr1, arr2);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// function combineArrays(arr1, arr2) {
// 	return [...new Set([...arr1, ...arr2])];  // ... arr1 and ... arr2 use forn combine both arrays
//       // new set is use for remove duplicate 
// 	  //[... converts the set back to array]
// }

// console.log(combineArrays(arr1,arr2))


/*===============Problem 4============== */


/*As a software developer at a healthcare company, you are tasked with analyzing the daily medication intake of patients. The company uses a proprietary system to track the medication intake, and the data is stored in an array. The array represents the daily medication intake, where each element is the number of pills taken by a patient on a particular day. You need to find and print all the subarrays whose sum is equal to a given target value k.

For example, if the array is [1, 2, 3, 4, 5] and k is 7, the subarrays whose sum is 7 are [2, 5], [3, 4], and [1, 2, 4]. You need to write a function that takes an array and an integer k as input and prints all the subarrays whose sum is equal to k.

Write a JavaScript function to solve this problem. You can use the following code stub as a starting point:

function findSubarrays(arr, k) {
  // Your code here
} */

/*FUNCTION findSubarrays(arr, k):
    result = empty list
    
    DEFINE helper(index, currentSubset, currentSum):
        IF currentSum == k:
            ADD currentSubset to result
        IF index >= length of arr:
            RETURN

        // include current element
        helper(index+1, currentSubset + arr[index], currentSum + arr[index])
        
        // exclude current element
        helper(index+1, currentSubset, currentSum)

    CALL helper(0, empty list, 0)
    
    PRINT result
END FUNCTION
 */
// let arr = [1,2,3,4,5];
// let k = 7;

// function findSubarrays(arr , k) {
//   for (let start = 0 ; start < arr.length; start++) {
//     let sum = 0;
//     let subarray = [];

//     for (let end = start ; end < arr.length ; end++) {
//       sum += arr[end];               // add current element
//       subarray.push(arr[end]);       // expand the subarray

//       if (sum === k) {
//         console.log({subarray});     // print the subarray
//       }
//     }
//   }
// }

// findSubarrays(arr, k);

// function findSubsets(arr, k) {
//   let result = [];

//   function backtrack(index, current, sum) {
//     if (sum === k) {
//       result.push([...current]); // store a copy
//       // don't stop, maybe later elements are zero or give other valid sets
//     }
//     if (index >= arr.length) return;

//     // Include arr[index]
//     current.push(arr[index]);
//     backtrack(index + 1, current, sum + arr[index]);
//     current.pop();

//     // Exclude arr[index]
//     backtrack(index + 1, current, sum);
//   }

//   backtrack(0, [], 0);
//   console.log(result);
// }

// // Example usage:
// findSubsets([1, 2, 3, 4, 5], 7);
// // Output: [ [ 2, 5 ], [ 3, 4 ], [ 1, 2, 4 ] ]

/*===============Problem 5============== */

/* A social media company, "ConnectMe", wants to develop a feature that allows users to share their favorite songs with their friends. The feature requires accessing the user's favorite songs from their profile and displaying them in a separate section on their profile page. The development team is working on implementing this feature using JavaScript.

In the given code snippet below, the developer is trying to access and display the favorite song of a user. However, there seems to be an issue with the code.

let favoriteSong = 'Song1';

function displayFavoriteSong() {
  console.log(favoriteSong); // Line A
  let favoriteSong = 'Song2';
  console.log(favoriteSong); // Line B
}

displayFavoriteSong();
What would be the output of the code and why?*/

// let favoriteSong = 'Song1';

// function displayFavoriteSong() {
//   console.log(favoriteSong); // Line A
//   let favoriteSong = 'Song2';
//   console.log(favoriteSong); // Line B
// }

// displayFavoriteSong();


/*Step-by-step Execution

Global scope

favoriteSong = 'Song1' is defined.

Inside displayFavoriteSong function

At Line A, you try to access favoriteSong.

But inside this function, you also have a let favoriteSong = 'Song2'; defined later.

Important: In JavaScript, variables declared with let or const are hoisted but remain in a "temporal dead zone" (TDZ) until their declaration is reached.

That means:

JavaScript knows a variable called favoriteSong exists in this scope.

But you cannot use it before the actual let favoriteSong = 'Song2'; line executes.

So at Line A, accessing it throws a ReferenceError (not undefined!).

Because the error happens at Line A, the function never reaches Line B.

🔹 Output
ReferenceError: Cannot access 'favoriteSong' before initialization

🔹 Why?

let and const are block-scoped and hoisted but not initialized until their declaration is executed.

This creates the temporal dead zone (TDZ), where accessing the variable before declaration throws a ReferenceError.

✅ If you had used var instead of let, then Line A would print undefined, and Line B would print Song2. */



/*===============Problem 6============== */

/*As a software developer at a leading e-commerce company, you are tasked with developing a feature that allows customers to remove all elements from their shopping cart. The cart is represented as an array of products. Your goal is to write a function that deletes all elements from the array.

For example, if the cart contains ["Product A", "Product B", "Product C"], after running the function, the cart should be empty.

You are provided with an empty JavaScript function to implement this feature.

function deleteAllElements(cart) {
  // Write your code here
}*/ 


/*FUNCTION deleteAllElements(cart):
    SET cart.length = 0
END FUNCTION
 */

// function deleteAllElements(cart) {
//   cart.length = 0; // Clears all elements
// }

// // Example usage:
// let cart = ["Product A", "Product B", "Product C"];
// deleteAllElements(cart);
// console.log(cart); // Output: []



/*===============Problem 7============== */

