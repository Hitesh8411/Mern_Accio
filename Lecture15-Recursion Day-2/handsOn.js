/* Factorial using recursion */
function factorial(n){
    if(n<=1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5)); 

/* Factorial using loop */
function factorialWhile(n){
    let res=1;
    while(n>1){
        res*=n;
        n--;
    }
    return res;
}
console.log(factorialWhile(5)); 

/* Sum of digits using recursion */
function sumOfDigits(n){
    if(n==0) return 0;
    return (n%10)+sumOfDigits(Math.floor(n/10));
}
console.log(sumOfDigits(1234)); 

/* Reverse a number using recursion */
function reverseNumber(n,res=0){
    if(n==0) return res;
    return reverseNumber(Math.floor(n/10),res*10+(n%10));
}
console.log(reverseNumber(1234)); 

/* Check palindrome number using recursion */
function isPalindrome(n,res=0,temp=n){
    if(n==0) return res==temp;
    return isPalindrome(Math.floor(n/10),res*10+(n%10),temp);
}
console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 
