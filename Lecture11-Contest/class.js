/* Question: 
Given an array A of size N. Value of an element Ai is defined as the sum of absolute difference of all elements of the array with Ai. More formally, the value of an element at index i is sum of |Ai - Aj| over all j (1 <= j <= N). Find the maximum such value over all i (1 <= i <= N) in the array.

Note: Given array is 1-based index

Input Format
First line of the input contains a single integer N. The second line of the input contains N space seperated integers.

Output Format
Print the maximum such value over all i (1 <= i <= N) in the array.
*/

const arr = [1, 2, 5, 6, 7, 8, 9, 10];

let n = arr.length;
let maxSum = 0;
let maxNum = arr[0];
for(let i = 0; i < n; i++){
  let sum = 0;
  for(let j = 0; j < n; j++){
    if(i == j) continue;
    sum += Math.abs(arr[i] - arr[j]);
  }
  if(sum > maxSum){
    maxNum = arr[i];
  }
  maxSum = Math.max (maxSum, sum);
}

console.log({maxSum, maxNum});

/* Optimized function to check if a number is prime or not */
/* 
T.C -> O(sqrt(N)) 
S.C -> O(1) or constant
*/
function isPrime (N) {
  if(N == 1)
    return false;

  /* for(let i = 2; i <= Math.floor(Math.pow(N, 0.5)); i++){
    if(N % i == 0){
      return false;
    }
  } */

  for(let i = 2; i * i <= N; i++){
    if(N % i == 0){
      return false;
    }
  }

  return true;
}
let N = 17;
console.log(N, isPrime(N));


/* Question

*/

function printPattern (N) {

  console.log("1");
  for (let i = 1; i < N; i++){
    let outputStr = "";
    for(let j = i; j < i + i + 1; j++){
      outputStr += j;
    }
    console.log(outputStr);
  }
}

N = 5;
printPattern(N);