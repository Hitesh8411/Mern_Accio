// function to calulate the maximum sum among all subarrays


// let arr = [-1,5,-3,2,-1,3];
// function maxSubarraySum(arr){
//     let sum = 0;
//     for (let i = 0 ; i < arr.length ; i++){
        
//         for(let j =i ; j< arr.length; j++){
//             sum += arr[j];
//             console.log(sum);


           
//         }
//     }
//     return sum;
// }
// console.log(maxSubarraySum([-1,5,-3,2,-1,3]));

// print all subarray sums 

// let arr = [1,2,3,4];
// function allSubarraySum(arr){
//     let sum = 0;
//     for (let i = 0 ; i < arr.length ; i++){
        
//         for(let j =i ; j< arr.length; j++){
//             sum += arr[j];
//             console.log(sum);
//         }
//     }
//     return sum;
// }
// console.log(allSubarraySum(arr));


// // question 2
// function maxSubarraySum(arr){


// print sum of each subarray

// function printSubarraySum (arr){
//     let n= arr.length;

//     for(let i =0; i< n ; i++){
//         let subarraySum =0;
//         for (let j=i;j<n;j++){
//             subarraySum +=arr[j];
//             console.log(subarraySum);
//         }
//     }
// }
// const arr =[1,2,3,4];
// printSubarraySum(arr);

// function to calculate  the maximum sum among all subarrays 
// function maxSubarraySum (arr){
//     let maxSum =arr[0]; // can be infinity also
//     let n = arr.length;

//     for(let i =0; i< n ; i++){
//         let subarraySum =0;
//         for (let j=i;j<n;j++){
//             subarraySum +=arr[j];
//             if (maxSum <subarraySum){
//                 maxSum =subarraySum;
//             }
            
//         }
//     }
//     return maxSum;
// }
// const arr =[1,2,3,4];
// const arr1 =[-1,5,-3,2,-1,3]
// console.log(maxSubarraySum(arr));
// console.log(maxSubarraySum(arr1));

// Count the number of subarrays  whose sum is  K 

// const arr2 = [1,2,-3,0,1,-1,1]; // k =0 and o/p =6
// function countSubarraySum(arr,k){
//     let n =arr.length;
//     let count = 0;
    
//     for (let i = 0 ; i< n ; i++ ){
//         let subarraySum = 0;
//         for (let j = i ; j< n ; j++) {
//             subarraySum += arr[j];
//             if (subarraySum === k) {
//                 count++;
//             }

//         }
//     }
//    return count;
// }
// let k =0;
// console.log(countSubarraySum(arr2, k));
// // time complexity : O(n^2)

// given a sum k , find the longesr subarray whose sum is equal to k (retuur the length of this subarray)

// function longsubarraySum(arr,k){
//     let n =arr.length;
//     let maxSum =0 ;

//     for (let i =0 ; i<n ; i++) {
//         let subarray =0;
//         for (let j =i ; j< n ; j++) {
//             subarray += arr[j] 
//             if ( subarray === k) {
//                 let length = j - i + 1 ;
//                 if (length > maxSum) {
//                     maxSum =length;
//                 }
//             }
//         }
//     }
//      return maxSum;

// }
// const arr2 = [1,2,-3,0,1,-1,1]
// let k = 0; 
// console.log(longsubarraySum(arr2,k))

//time complexity : O(n^2)

// write a function to print all subarrays of size k 
// current n = 5 and k = 3 how many subarrays are there of size k?



// function printsubarrayksizee(arr,k){
//     let n = arr.length;
//     for (let i = 0; i <= n-k; i++){
//         let subarray = [];
//         for (let j =i ; j < i+k; j++) {
            
//            subarray.push(arr[j]);


//         } console.log(subarray);

//     }
      
//     }



// const arr =[1,2,-3,0,1,-1,1];
// let k =3;
// console.log(printsubarrayksizee(arr,k))
// above is remainning


// function to print all subarrays of size k 

