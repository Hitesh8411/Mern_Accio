//Code For Binary Search

// Question find Square root of a number in O(log n) 

// let N = 16;
// function squareRoot(N) {
//     let low = 0;
//     let high = N;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);
//         if (mid * mid == N) {
//             return mid;
//         }
//         else if (mid * mid > N) {
//             high = mid - 1
//         }
//         else {       //mid * mid < N
//             low = mid + 1
//         }
//  }
//     return -1;
// }
// let sqrtValue = squareRoot(N)
// if (sqrtValue != -1) {
//     console.log(`Square root of ${N} is: ${sqrtValue}`)
// }
// else {
//     console.log(`${N} is not a Perfect Square`)
// }

// find a longest elemt in a sorted array and print its index 
// let arr = [1,2,3,6,7,9,11,15];
// let key =11;

// let low = 0;
// let high = arr.length - 1;
// let index =-1;
// while (low <= high) {
//     let mid = Math.floor ((low + high) /2);
//     if (arr[mid] === key) {
//         index = mid;
//         break;
//     }
//     else if (arr[mid] < key) {
//         low = mid + 1;
//     }
//     else {
//         high = mid - 1;
//     }
    
// }

// console.log(`${key} index is ${index}`);

// TC iS O(log n)

// find the first occurance of target Element using binary search (write a function)
// let arr = [1,2,6,6,11,11,11,15];
// let key = 6;

// function firstOccurance(arr, key) {
// let low  =0 ;
// let high = arr.length -1 ;
// let index =-1;
// while (low <= high) {
//     let mid =Math.floor((low +high)/2);
//     if (arr[mid] === key) {
//         index = mid;
//         high = mid -1;  
//     }
//     else if (arr[mid] < key) {
//         low = mid +1;
//     }
//     else {
//         high = mid -1;
//     }
// }
// return index;
// }
// let elementfound = firstOccurance(arr, key);
// if (elementfound != -1) {
//     console.log(`First occurance of ${key} is at index ${elementfound}`);
// } else {
//     console.log(`${key} is not present in the array`);
// }

// find the last occurance of target Element using binary search (write a function)
// let arr = [1,2,6,6,11,11,11,15];
// let key = 11;

// function lastOccurance(arr, key) {
// let low  =0 ;
// let high = arr.length -1 ;
// let index =-1;
// while (low <= high) {
//     let mid =Math.floor((low +high)/2);
//     if (arr[mid] === key) {
//         index = mid;
//         low = mid + 1;  
//     }
//     else if (arr[mid] < key) {
//         low = mid +1;
//     }
//     else {
//         high = mid -1;
//     }
// }
// return index;
// }
// let lastelementfound = lastOccurance(arr, key);
// if (lastelementfound != -1) {
//     console.log(`last occurance of ${key} is at index ${lastelementfound}`);
// } else {
//     console.log(`${key} is not present in the array`);
// }

// lowerbound -> first index of  element greater than or equal to target element
// upperbound -> first index of element that just greater than the target element

//lowerbound

// function lowerbound (arr, length) {
//     let low =0 ;
//     let high = arr.length -1;
//     let index = arr.length;

//     while (low <= high) {
//         let mid =Math.floor(low + (high -low )/2 );

//         if(arr[mid]==  target){
//             index =mid;
//             high = mid -1;
//         }
//         else {
//             low =mid +1;
//         }

//     }
//     return index;
// }
// let arr = [1,2,6,6,11,11,11,15]
// let target =11;
// console.log(`Lowerbound = ${lowerbound(arr,target)}`)

// HW  implement upperbound function



///============Data Structure ===============////
// set only unique data 
// set in JS :

// let set =  new Set ([1,2,3,4,5,6]);

// // method to add element in set
// set.add(200);
// set.add(2);
// set.add(3);

// console.log(set);
// //method to check if anumber is i  set or not
// console.log("checking if 30 is in list",set.has(30));

// console.log(set);
// console.log(set.delete(30), set); // check if number is persent then delete

/* Remove duplicates from the array */
// let arr1 =[ 2,3,4,1,0,1,2,3,4,5,10]
// let set1 = new Set(arr1);
// console.log(set1);  

let array =[ 2,3,4,1,0,1,2,3,4,5,10];
let set1 = new Set(array);
let arr1 = [...set1];
let arr11 =Array.from(set1);
let set2 =new Set([...array]);
let arr2 =[...set2];
console.log({array,arr1,arr11,arr2});


// map in js 
let map = new Map ();
map.set("name1","Shriram");
map.set("name2","krsna");

// checking if a key present or not 
console.log("Checking if `name` is present or not ?", map.has("name1"))

// getting the value of a specfic key 
console.log("value of `name2` ", map.get ("name"));

console.log("Printing keys");
for (let i of map.keys()) {
    console.log(i);
}

// map.set("name1","Sargar");
const mapArr =[...map]
console.log("Map converted into Array", {mapArr});


let arr4 =[1,2,3,5,6], arr5 =[2,5,6,3,1,3];

const unionSet =new Set([...arr4]) // remaining 