// note : time and space complexity are approximation  based only.
//  and not exact ampunt of time or space taken by the program .

/*
k -> constant not dependent on N
O(1) constant time complexity
O(N)- lineat
O(n2) -quadratic
O(log n) - logarathmic
*/

// while (n > 0) {
//     n--;
// }
// time complexity is O(n) as loop runs n times
// while(n > 0) {
//     n *= 2;

// }
//time complexity is O(log n) as loop runs log n times

// Space complexity

// function sum (a,b,c) {
//     let arr= [a,b,c];
//     sum3 =arr[0] +arr[i] + arr[2];
// }

// for (let i =0 ; i < n; i++){
//     let x =i ;
//     console.log(x);
// }




// condition check 
// false value in js :
/*n JavaScript, certain values are considered “falsy”, meaning they are treated as false in boolean contexts (like if, while, or logical operations). Everything else is considered “truthy”.

Falsy values in JS:

false → the boolean false itself

0 → the number zero

-0 → negative zero

0n → BigInt zero

"" → empty string ('' or "")

null → absence of any value

undefined → variable that hasn’t been assigned a value

NaN → Not-a-Number */

// if (!false) console.log("false is falsy"); // prints
// if (!0) console.log("0 is falsy");       // prints
// if (!"") console.log("empty string is falsy"); // prints
// if (!null) console.log("null is falsy"); // prints
// if (!undefined) console.log("undefined is falsy"); // prints
// if (!NaN) console.log("NaN is falsy");   // prints


// // tyecasting
// console.log(Number("123"));
// console.log(String(123));
// console.log(+String(123)); // if we put + at beggining of string it will convert to number 
// console.log(Boolean(NaN));



/*Note :
  for logical AND (&&) -> in short circiting
  first falsy value or the last truthy value will be the output



  for logical OR(||) -> first truthy oR last falsy value be the output 



*/

// efficiant binary search 
// search algorithm



/*====================================SEARCHING ALGORITHM */

// create an array that contain 1 to 100 number and search 57 and print its index
// let arr = [];
// for (let i =0 ; i< 1000 ; i++) {
//     arr.push(i+1);

// }
// for (let i = 0; i< arr.length; i++) {
//     if (arr[i] === 57) {
//         console.log(i);
//         break;
//     }
// }

/* arr = [1,2,4,4,6,6,6,8] 

a) first last index of 6
b) find first index of 6
without inbuilt function*/

function firstLastIndex(arr,target) {
    let first =-1;
    let last =-1;
    for (let i =0; i< arr.length; i++){
        if (arr[i]=== target){
            if (first === -1 ) {
                first = i;
                last = i;
            }
        }
    }
    return [first,last];
}
let arr =[1,2,4,4,6,6,6,8];
console.log(firstLastIndex(arr,6));

// find square root of anumber using binary search 
// n - > perfect square
// binary search 
/*Binary Search is a searching technique that works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity */

// natural sum 

// function natural(n) {
//     let sum = 0;
//     for (let i = 1 ; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum ;
// }
// console.log(natural(10));

function sumofarray(arr,N){
    let add = 0;
    for (let i =0; i<= N ; i++) {
        add = add + arr[i];
    }
    return add;
}
let arr2 = [1,2,3];
console.log(sumofarray(arr2,arr.length));