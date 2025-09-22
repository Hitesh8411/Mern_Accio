/* H.W. 
Implement code of sorting in TC - O(N), SC - O(N) 
for both positive and negative numbers as invented by Pratik Patil in Class
*/

/* Bubble sort */
/* 
TC -> O(N^2)
  Best case TC -> O(N)
  Worst case TC -> O(N^2)
  Average TC -> H.W
SC -> O(1) -> constant
*/
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    //for single pass
    let swaps = false;
    for (let j = 0; j + 1 < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swaps) break;
  }
  return arr;
}

console.log(bubbleSort([4, 5, 3, 1, 2]));