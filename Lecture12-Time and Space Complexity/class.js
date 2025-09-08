/* H.W: Write a function to print all the palindromic substrings of a string */

/* Time & Space Complexities - Refer Onenote */

var obj = {
  a: {
    c: 1,
    d: 2
  },
  b: 2
}

if(obj && obj.aa && obj.aa.c == 1) {
  console.log("hi");
} else 
  console.log("Invalid property");

const x = true && 45 && 32 && NaN;
const y = (x == NaN) && 34; //need to see why it's giving false

console.log({x, y});


console.log(Number("123"));
console.log(String(123));
console.log(Boolean(NaN));

/* ================== Searching ================== */

/* Given an array with elements from 1 to 100 */
let arr = [];
let N = 100;

for(let i = 0; i < N; i++){
  arr.push(i+1);
}

//TC - O(N)
for(let i = 0; i < N; i++)
  if(arr[i] == 57){
    console.log(i);
    break;
  }

arr = [1, 2, 4, 4, 6, 6, 6, 8];
N = arr.length;

let firstIndexOf6 = -1;
let lastIndexOf6 = -1;

//TC - O(N)
for(let i = 0; i < N; i++){
  
  if(arr[i] === 6){
  
    if(firstIndexOf6 == -1){
      firstIndexOf6 = i;
    }

    lastIndexOf6 = i;
  }
}


if(firstIndexOf6 !== -1)
  console.log({firstIndexOf6, lastIndexOf6});
else 
  console.log("6 doesn't exist in this array");