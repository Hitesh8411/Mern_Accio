
// 1. Print numbers from 1 to N
function printNumbers(n) {
  if (n === 0) return;
  printNumbers(n - 1);
  process.stdout.write(n + " ");
}
printNumbers(5);


// 2. Factorial of N
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial(5):", factorial(5));


// 3. Sum of digits
function sumDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
console.log("Sum of digits(1234):", sumDigits(1234));


// 4. Reverse a string
function reverseStr(s) {
  if (s.length === 0) return "";
  return s[s.length - 1] + reverseStr(s.slice(0, -1));
}
console.log("Reverse('hello'):", reverseStr("hello"));

// 5. Fibonacci number
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log("Fibonacci(6):", fib(6));

// 6. Minimum in array
function findMin(arr, n) {
  if (n === 1) return arr[0];
  return Math.min(arr[n - 1], findMin(arr, n - 1));
}
console.log("Min in [5,2,8,1,9]:", findMin([5, 2, 8, 1, 9], 5));


// 7. Power a^b
function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}
console.log("2^5:", power(2, 5));


// 8. Palindrome check
function isPalindrome(s, l = 0, r = s.length - 1) {
  if (l >= r) return true;
  if (s[l] !== s[r]) return false;
  return isPalindrome(s, l + 1, r - 1);
}
console.log("Is 'madam' Palindrome?:", isPalindrome("madam"));
console.log("   Is 'hello' Palindrome?:", isPalindrome("hello"));


