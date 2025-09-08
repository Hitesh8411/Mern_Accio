
// //last class
// const value = 4 + "34" * " " /17;
// console.log({value});

// const space = " ";
// console.log(space * 1);

// //Given a N*N grid, find the primary diagonal sum i ==j
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];


// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i][i];
// }
// console.log({sum});
// //time complexity -> O(N) 
// //space complexity -> O(1)

// // find the secondary diagonal sum (i + j = n -1)
// let sum2 = 0;   
// for (let i = 0; i<arr.length; i++){
//     sum2 = sum2 + arr[i][arr.length -1 -i];

// }
// console.log(sum2);
// //time complexity -> O(N)

// sum3 =0;
// for (let i =0; i<arr.length; i++){
//     for (let j =0; j<arr.length; j++){
//         if (i + j == arr.length -1){
//             sum3 = sum3 + arr[i][j];
//         }
//     }
// }   
// console.log({sum3});
// //time complexity -> O(N^2)

// write a function to print the odd-numbered column elements of a matrix 

const arr = [
    [1,2,3,4,5,6],
    [2,6,12,43,3],
    [8,10,34,23,12,8],
];
// output : 2 6 10 4 43 23 6 5 8

// function colSum(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         if (!Array.isArray(matrix[i])) {
//             continue; 
//         }

//         for (let j = 1; j < matrix[i].length; j += 2) {
//             console.log(matrix[i][j]);
//         }
//     }
// }
// colSum(arr);
//constanr bahar (i and j)
//jo change hote hai woh inside

// function printOddColumn(arr) {
//     let rows=arr.length;
//     let cols=arr[0].length;
    
//     for (let j=0; j<cols; j++){
//         if(j % 2 == 0){
//     for (let i=0; i<rows; i++){
//     console.log(arr[i][j]);
//         }
//         }
//     }

//     }
// console.log(printOddColumn(arr));

/*
// Question : given a 2d matrix , reverse each odd columns and print it 
// input ===>
[1,2,3,4,5,6],
[2,6,12,43,3,5], 


*/

        
function reverseOddColumns(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  
  for (let j = 0; j < cols; j++) {
    if (j % 2 === 1) {  
      let top = 0;
      let bottom = rows - 1;

      
      while (top < bottom) {
        let temp = matrix[top][j];
        matrix[top][j] = matrix[bottom][j];
        matrix[bottom][j] = temp;
        top++;
        bottom--;
      }
    }
  }
  return matrix;
}

let arr5 = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];

console.log(reverseOddColumns(arr));

