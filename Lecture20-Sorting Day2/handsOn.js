/* Merge Two Sorted Arrays */
function mergeSortedArrs(arr1, arr2) {
  let i = 0, j = 0, res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) res.push(arr1[i++]);
    else res.push(arr2[j++]);
  }
  while (i < arr1.length) res.push(arr1[i++]);
  while (j < arr2.length) res.push(arr2[j++]);
  return res;
}
console.log(mergeSortedArrs([1, 3, 4, 7, 10], [2, 9, 12])); 


/* Merge Sort using slice */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSortedArrs(left, right);
}
console.log(mergeSort([3, 7, 1, 5, 8, 2, 4])); 


/* Merge Sort without slice */
function mergeSortRange(arr, low, high) {
  if (low === high) return [arr[low]];
  let mid = Math.floor((low + high) / 2);
  let left = mergeSortRange(arr, low, mid);
  let right = mergeSortRange(arr, mid + 1, high);
  return mergeSortedArrs(left, right);
}
console.log(mergeSortRange([3, 7, 1, 5, 8, 2, 4], 0, 6)); 


/* Insert element into a sorted array */
function insertIntoSorted(arr, elem) {
  arr.push(0);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > elem) arr[i + 1] = arr[i];
    else {
      arr[i + 1] = elem;
      return arr;
    }
  }
  arr[0] = elem;
  return arr;
}
console.log(insertIntoSorted([1, 2, 7, 9], 6)); 

