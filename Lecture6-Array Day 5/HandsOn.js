// /* Q: Rotate array right (clockwise) by 1 element */ 
// console.log("Right array");
// let arr1 = [1, 2, 3, 4, 5];

// let last = arr1[arr1.length - 1];   
// for (let i = arr1.length - 1; i > 0; i--) {
//   arr1[i] = arr1[i - 1];           
// }
// arr1[0] = last;                    

// console.log(arr1);

//time complexity: O(n)
//space complexity: O(1)

// //using unshift
// let arr2 = [1, 2, 3, 4, 5];

// arr2.unshift(arr2.pop());

// console.log( arr2);



// /* Q: Rotate array left (anti - clockwise) by 1 element */

// // Rotate array to the left by 1

// console.log("Left array");
// let arr3 = [1, 2, 3, 4, 5];

// let first = arr3[0];              
// for (let i = 0; i < arr3.length - 1; i++) {
//   arr3[i] = arr3[i + 1];          
// }
// arr3[arr3.length - 1] = first;    

// console.log(arr3);

//time complexity: O(n)
//space complexity: O(1)

// //using push and shift

// let arr4 = [1, 2, 3, 4, 5];


// arr4.push(arr4.shift());

// console.log(arr4);

/* for k element */

/* Q: Write a function to Rotate array right (clockwise) by k element */

function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n; 

  for (let r = 0; r < k; r++) {
    let last = arr[n - 1]; 
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1]; 
    }
    arr[0] = last; 
  }

  return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));

//time complexity: O(n * k)
//space complexity: O(1)


/* Q: Write a function to Rotate array left (anti - clockwise) by k element */ 

function rotateLeft(arr, k) {
  let n = arr.length;
  k = k % n;

  for (let r = 0; r < k; r++) {
    let first = arr[0]; 
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1]; 
    }
    arr[n - 1] = first; 
  }

  return arr;
}


console.log(rotateLeft([1, 2, 3, 4, 5], 2));
//time complexity: O(n * k)
//space complexity: O(1)




