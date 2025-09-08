//Pattern Question
// 1
// 1 2
// 2 3 4
// 3 4 5 6
// 4 5 6 7 8
// write a function to print above pattern




// Subjective Question
// function scopeExample() {
//     console.log(x);
//     var x = 5 
//     if (true) {
//         var x =10;
//         let y =20 ;
//         console.log(x)
//         console.log(y);

//     }
//     console.log(x);
//     console.log(y);
// }
// scopeExample();

// undefined
// 10
// 20
//10
// Reference error
/*
Reason: The correct output of the function is explained as follows:
 1. The first `console.log(x)` will log `undefined` because the variable `x` is hoisted but not yet assigned a value. 
 2. Inside the if block, `var x = 10;` reassigns the value of x to 10 and then logs it (`console.log(x);`) which outputs `10`. 
 3. The statement `let y = 20;` declares a block-scoped variable y, so `console.log(y);` inside the block outputs `20`.
 4. After exiting the if block, since var declarations are function-scoped, logging x again outside will still be affected by its last assignment within the function scope (`var x = 10;`). Thus, it logs another '10'. 
 5. Finally, attempting to log y outside its block scope causes a ReferenceError because let variables are not accessible outside their block context. 
 
 */
/// Question 2
//  function test() {
//     if (true) {
//         var a=10;
//         let b = 20;
//         const c =30 ;

//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);

//  }

//  test();
/* In the provided code snippet, the variable 'a' is declared using 'var', which means it has function scope and is accessible outside the if block. Hence, `console.log(a)` will print 10. However, variables 'b' and 'c' are declared using 'let' and 'const', respectively,
 which have block scope. This means they are not accessible outside the if block, leading to ReferenceError when attempting to access them with `console.log(b)` and `console.log(c)`. 
 Therefore, the correct output of running this code would be: 10 ReferenceError ReferenceError.
*/

/*Problem: Delete All Odd Numbers from an Array
Problem Statement
You are given an array of integers. Your task is to delete all odd numbers from the array and print the remaining elements.

Input
First line contains a single integer n (1 ≤ n ≤ 1000) - the size of the array.
Second line contains n space-separated integers (each in the range -10^5 to 10^5).
Output
Print all even numbers in the array, separated by a space.
If there are no even numbers, print -1.
Examples
Example 1:

Input:
5
1 2 3 4 5

Output:
2 4
Example 2:

Input:
4
1 3 5 7

Output:
-1 */

// let arr = [1,2,3,4,5];
// let str ="";
// let n = arr.length;

//    for(let i = 0;i < n; i++ ) {
//     if(arr[i] % 2 == 0) {
//         str= str + arr[i] + " ";
//     }
    
//    }
//    if(str.length > 0){
//     console.log(str)}
//     else {
//         console.log("-1")
//     }
 
// function removeOdd(arr) {
//         let input =[];
//         let n = arr.length;
//         for (let i =0 ; i < n; i++) {
//             if (arr[i] % 2 === 0) {
//                 input.push(arr[i]);
//             }
//         }
//         if (input.length > 0) 
//             console.log(input.join(" "));
//         else{
//             console.log("-1")
//         }
        
// }


// let arr = [1,3,5]
// let arr1 =[22,27,26,28,30,29]
// removeOdd(arr);
// removeOdd(arr1);
// removeOdd([1,3,5,6,7,8,8,9]);


// Total book price
function totalPrice(arr) {
  let sum =0;
  for ( let i = 0; i< arr.length ; i++){

    sum = sum + arr[i].price ;
    
  }
  return sum;
}
let arr3 = [
  { title: "Book A", price: 15 },
  { title: "Book B", price: 25 },
  { title: "Book C", price: 35 }
]
console.log(totalPrice(arr3));