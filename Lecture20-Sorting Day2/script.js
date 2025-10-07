/* Merge two sorted arrays */
function mergeSortedArrays(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let i = 0; //pointer of current element from arr1
  let j = 0; //pointer of current element from arr2
  let k = 0; //pointer that tells where to insert an element in `ans` array

  let ans = new Array(n + m);

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      ans[k] = arr1[i];
      i++;
    } else {
      ans[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < n) {
    ans[k] = arr1[i];
    i++;
    k++;
  }

  while (j < m) {
    ans[k] = arr2[j];
    j++;
    k++;
  }
  return ans;
}

let arr1 = [1, 3, 4, 7, 10];
let arr2 = [2, 9, 12, 14, 20];
console.log(
  "Merging two arrays: " + arr1.join(", ") + " AND " + arr2.join(", ")
);
console.log(mergeSortedArrays(arr1, arr2).join(" "));

/* MERGE Sort */

function mergeSort(arr, low, high) {
  //base case
  if (low == high) {
    return [arr[low]];
  }

  //recursive calls
  let mid = Math.floor((low + high) / 2);
  let leftSortedArr = mergeSort(arr, low, mid);
  let rightSortedArr = mergeSort(arr, mid + 1, high);

  //merging of returned arrays
  let mergedArr = mergeSortedArrays(leftSortedArr, rightSortedArr);
  return mergedArr;
}

let arr = [3, 9, 5, 2, 19, 4, 7];
console.log(mergeSort(arr, 0, arr.length - 1));


/* Given a sorted array, whole array is sorted, except the last element, 
place the last element at its correct position such that whole arr is sorted

Example: 

I/p = [1,2,7,9,6]
O/p = [1,2,6,7,9]

*/