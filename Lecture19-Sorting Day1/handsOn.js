//1,3,4,5,7
let ans = [];
function increaseSort(arr) {
  let posArr = [];
  let negativeArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posArr[arr[i]] = 1;
    } else {
      negativeArr[Math.abs(arr[i])] = 1;
    }
  }

  for (let i = negativeArr.length - 1; i > 0; i--) {
    if (negativeArr[i] == 1) {
      ans.push(-i);
    }
  }
  for (let i = 0; i < posArr.length; i++) {
    if (posArr[i] == 1) {
      ans.push(i);
    }
  }
}

increaseSort(A);
console.log(ans)

/* Bubble Sort */
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j + 1 < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([4, 5, 1, 3, 2])); 
/* Selection Sort */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (smallest != i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([4, 7, 1, 6, 1, 7, 8, 10])); 

/* Sort with positive and negative numbers */
function increaseSort(arr) {
  let ans = [];
  let posArr = [];
  let negArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) posArr[arr[i]] = 1;
    else negArr[Math.abs(arr[i])] = 1;
  }

  for (let i = negArr.length - 1; i > 0; i--) {
    if (negArr[i] == 1) ans.push(-i);
  }
  for (let i = 0; i < posArr.length; i++) {
    if (posArr[i] == 1) ans.push(i);
  }
  return ans;
}
console.log(increaseSort([4, 1, 3, 7, 5, -4, -2, -1]));


//HW===
let A = [4, 1, 3, 7, 5, -4, -2, -1];

