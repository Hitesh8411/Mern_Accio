/* -insertion sort */
let arr = [2, 7, 5, 1, 4];
function insertionSort(arr) {
  let ind = 0;

  for (let i = 1; i < arr.length; i++) {
    let firstelem = arr[i];
    let indextoadd = 0;
    for (let j = ind; j >= 0; j--) {
      if (arr[j] > firstelem) {
        arr[j + 1] = arr[j];
      } else {
        indextoadd = j + 1;
        break;
      }
    }
    arr[indextoadd] = firstelem;
    ind++;
  }
  return arr;
}
console.log(insertionSort([3, 1, 6, 2, 8, 7, 4]));

/* place last element at correct position in an array */

arr = [2, 7, 5, 1, 4];

function placeLastElem(arr) {
  let lastele = arr[arr.length - 1];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= lastele) {
      [arr[k], arr[i]] = [arr[k], arr[i]];
      k++;
    }
  }
  return arr;
}

console.log(placeLastElem(arr));

/* ---------------------quicksort--------- */
arr = [5, 2, 9, 1, 5, 6];
function quicksort(arr, low, high) {
  if (low >= high) {
    return arr;
  }

  let pivot = arr[high];
  let k = low;

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      [arr[k], arr[i]] = [arr[i], arr[k]];
      k++;
    }
  }

  [arr[k], arr[high]] = [arr[high], arr[k]];
  quicksort(arr, low, k - 1);
  quicksort(arr, k + 1, high);
  return arr;
}
console.log(quicksort(arr,0,arr.length-1));


/* sort  */

arr=[3,1,6,2,8,7,4];
console.log(arr.sort());  //ascending
console.log(arr.reverse())//descending

/* if a-b result is
  -ve then a before b
  +ve then b before a
  0  then keep currrent order 
 */
arr.sort((a,b)=>a-b);  //ascending

arr=["apple","watermelon","kiwi"];
console.log(arr.sort()); //ascending

/* localCompare():   string1.localeCompare(string2) */
let names = ["Zoe", "alex", "Ana"];
names.sort((a,b)=>a.localeCompare(b));
console.log(names); //['alex', 'Ana', 'Zoe']

let items = ["banana", "Apple", "apple", "Banana"];
items.sort((a,b)=>b.localeCompare(a));
console.log(items); //['Banana', 'banana', 'Apple', 'apple']


let students=[
    {name:"Kiran",age:20,rollNo:12},
    {name:"raj",age:15,rollNo:32},
    {name:"rahul",age:2,rollNo:21},
]

console.log(students.sort((a,b)=>a.name-b.name)); //wrong for comparing strings NaN
console.log(students.sort((a,b)=>a.name.localeCompare(b.name))); 
console.log(students.sort((a,b)=>a.name.localeCompare(b.name))); 


/* sort the above array according to first value and then 
according to second value */
const nestedarr=[
    [1,3],
    [2,1],
    [1,2],
    [2,4],
];

console.log(nestedarr.sort((a,b)=>{
    if(a[0]===b[0]){
        return a[1]-b[1];
    }
    return a[0]-b[0];
})); 