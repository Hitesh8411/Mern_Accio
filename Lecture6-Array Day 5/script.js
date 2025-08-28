//26-08-25

//Function to print thse sum of all subarray

// const arr1 = [1,2,3,4];
// function subarraySum(arr){
//     let sum = 0;
//     let n = arr.length;

//     //loop for subarrys starting from diffrent index
//     for(let i = 0; i < n; i++){
//         let currentSum = 0;

//         // for each j, it will represnt a subarray starting from i and ending at j
//         //eg: i = 0, j =0 -> [1]
//         for(let j = i; j < n; j++){
//             currentSum += arr[j];
//             sum += currentSum;
//         }
//     }
//     return sum;

// }
// console.log(subarraySum(arr1));

// | Feature           | **slice()**                 | **splice()**                         |
// | ----------------- | --------------------------- | ------------------------------------ |
// | Changes original? | ❌ No                        | ✅ Yes                                |
// | Return value      | New array (copied elements) | Removed elements (if any)            |
// | Purpose           | Extract part of array       | Add/Remove/Replace elements in array |
 

//delete 9 from array

// let arr = [1,4,3,7,9];
// arr.pop();
// console.log(arr);

//delete 9 from array method 2
// let arr2=[1,2,3,4,5,6];
// let ans=arr2.slice(3,5);
// console.log(ans);

//delete 9 from array method 3
// arr.splice(4,1);
// console.log(arr);

//delete ellement from start

// let arr3 = [1,2,3,4,5];
// let removed= arr3.shift();  // shift doest support any parameter ( if still we give , he ignores)
// console.log(arr3);
// console.log(removed);
// arr3.unshift(6);
// console.log(arr3);



//using loops 
// just shift all the elements left by one index , and decrease the length property by 1
// let arr = [1,2,3,4,];
// for(let i =0; i<arr.length; i++){
//     arr[i]=arr[i+1];
//     arr.length = arr.length -1;
// }
// console.log(arr);

// rotate array in right (clockwise) direction by 1 using staright loop 

//using invert loop

// let last = arr4[arr4.length -1];    
// for(let i = arr4.length -1; i>0; i--){
//     arr4[i] = arr4[i-1];
// }
// arr4[0] = last;
// console.log(arr4);  

// Roatate array in left (anti-clockwise) direction by 1





/* HOMEWORK */
/* Do each deletion question, and instead of deletion, do insertion 







/* ===================== ROTATIONS in Array  ========================*/
/* Q: Rotate array right (clockwise) by 1 element */ 
let arr4=[1,2,3,4,5];
let ans = "";
for(let i =0; i<arr4.length; i++){  
    ans += arr4[(i - 1 + arr4.length) % arr4.length] + " ";
}
console.log(ans);   

/* Q: Rotate array left (anti - clockwise) by 1 element */ 
console.log("Left Rotation by 1");
let arr5=[1,2,3,4,5];   
let first = arr5[0];
for(let i =0; i<arr5.length -1; i++){
    arr5[i] = arr5[i+1];
}   
arr5[arr5.length -1] = first;
console.log(arr5);





/* HOMEWORK */
/* Q: Write a function to Rotate array right (clockwise) by k element */

/* Q: Write a function to Rotate array left (anti - clockwise) by k element */ 

