/* Write a recursive function to find the sum of first N natural numbers */
/* naturalSum(5) -> should return 15 */
/* naturalSum(-5) -> should return 0 */
/* naturalSum(0) -> should return 0 */

function naturalSum(N) {
  if (N <= 0) return 0;
  return N + naturalSum(N - 1);
}

console.log(naturalSum(5));
console.log(naturalSum(-5));
console.log(naturalSum(0));
console.log(naturalSum(10));

/* Recursive function to print the GCD of two numbers */
/* 
GCD(8, 32) = 8
GCD(9, 15) = 3
GCD(10, 25) = 5
GCD(7, 15) = 1
GCD(0, 20) = 20 ---> GCD(0, x) = x
GCD(1, 20) = 1
*/

/* Iterative gcd */
function gcd(a, b) {
  while (a != 0) {
    let temp = a;
    a = b % a;
    b = temp;
  }

  return Math.abs(b); //used abs to cover negative numbers also
}

/* Recursive GCD */
function rGcd(a, b) {
  //base condition
  if (a == 0) return b;
  //recursion call
  return Math.abs(rGcd(b % a, a)); //used abs to cover negative numbers also
}

rGcd(25, 15);

/* GCD of more than 2 numbers 

gcd(a,b,c) = gcd(gcd(a,b), c) = gcd(a, gcd(b,c)) = gcd(b, gcd(a,c))
*/

/* GCD of an Array */
let arr = [27, 12, 18, 24, 30];
let gcdArr = 0;

for (let i = 0; i < arr.length; i++) {
  gcdArr = rGcd(gcdArr, arr[i]);
}

/* H.W : Nth Fibonacci number using recursion */

/* Write a function to find  A raised to power B */
/* Ex: 2^10 = 1024 */

//TC - O(N)
function power(a, n) {
  let result = 1;
  while (n--) result *= a;

  return result;
}

console.log(power(2, 10));

function binaryExponentiation(a, n) {
  if(n == 0) return 1;
  if(n == 1) return a;
  let temp = binaryExponentiation(a, Math.floor(n / 2));
  return temp * temp * a ** (n % 2);
}

console.log(binaryExponentiation(2, 10));
console.log(binaryExponentiation(5, 15));