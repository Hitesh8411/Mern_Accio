/* Time Complexity Checklist
 Question to always ask: “How many times will this line of code run as input size N grows?”

 Step 1: Look at Sequential Statements

Each line runs once → O(1).

let a = 5, b = 10;
let sum = a + b;   // O(1)

 Step 2: Look at Simple Loops

for (let i = 0; i < N; i++) → runs N times → O(N).

for (let i = 0; i < N*N; i++) → runs N² times → O(N²).

while (N > 0) { N /= 2 } → halves N each time → O(log N).

 Step 3: Look at Nested Loops

Multiply iterations of each loop.

for (let i = 0; i < N; i++) {        // O(N)
    for (let j = 0; j < N; j++) {    // O(N)
        // loop body
    }
}


→ Total = O(N × N) = O(N²).

 Step 4: Look at Conditional Statements

if / else → only one branch executes → take the worst-case branch.

if (x > 0) {         // O(N)
   for (let i = 0; i < N; i++) {}
} else {             // O(N²)
   for (let i = 0; i < N*N; i++) {}
}


→ Worst case = O(N²).

 Step 5: Look at Recursion

Recursion time = (number of calls) × (work per call).

Example:

function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
}


Each call = O(1)

Calls = N

Total = O(N)

Divide & conquer recursion (like mergesort):

T(N) = 2T(N/2) + O(N)


→ O(N log N) (by Master Theorem).

Step 6: Combine Pieces

Add the complexities of sequential parts.

Keep the dominant term (Big-O ignores smaller terms).

Example:

for (let i = 0; i < N; i++) {}       // O(N)
for (let j = 0; j < N*N; j++) {}     // O(N²)


Total = O(N + N²) = O(N²).

 Quick Examples
Example 1
for (let i = 0; i < N; i++) {
    console.log(i);
}


Loop runs N times

 O(N)

Example 2
for (let i = 1; i < N; i *= 2) {
    console.log(i);
}


i doubles each time → log₂(N) steps

 O(log N)

Example 3
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        console.log(i, j);
    }
}


Outer loop = N

Inner loop = N

Total = N²

O(N²)

Shortcut Rule to Remember for Time Complexity:

Sequential → Add

Nested → Multiply

Divide by k each time → O(log N)

Recursion → Use recurrence relation (Master Theorem if divide & conquer).

*/

/* Space Complexity Checklist
 Step 1: Check Variables

Count how many simple variables (let x, int y) are used.

If only a fixed number → O(1).
Example:

let a = 5, b = 10;  // O(1)

Step 2: Check Data Structures

Arrays, objects, strings, hashmaps, sets?

Memory grows with elements stored:

new Array(N) → O(N)

new Array(N).map(() => new Array(N)) → O(N²)

k-dimensional structure → O(Nᵏ)

 Step 3: Check Recursion

How deep can recursion go?

Each recursive call adds memory to the call stack.

Example:

function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
}


→ stack depth = N → O(N).

Binary search recursion → depth = log₂N → O(log N).

Step 4: Check Loops

Loops don’t directly increase space (they reuse variables).

BUT: If loop stores values in a structure (like an array), count them.

let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(i);   // storing N elements
}


→ O(N).

 Step 5: Combine

Add contributions from:

Variables

Data structures

Recursion stack

Then keep the dominant term (Big-O ignores constants and smaller terms).

 Quick Examples
Example 1
let a = 5, b = 10;
for (let i = 0; i < N; i++) {
    console.log(i);
}


Variables = O(1)

No arrays, no recursion

O(1)

Example 2
let arr = new Array(N);


Array stores N elements

O(N)

Example 3
function binarySearch(arr, left, right, key) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) return mid;
    else if (arr[mid] > key) return binarySearch(arr, left, mid - 1, key);
    else return binarySearch(arr, mid + 1, right, key);
}


No extra array

Recursion depth = log₂N

O(log N)

 Shortcut Rule to Remember:

Variables only → O(1)

Array/DS → size determines it

Recursion → depth determines it
n
Both → add them up → keep the largest
 */



// find square root of anumber using binary search 
// n - > perfect square
// binary search 
/*Binary Search is a searching technique that works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity */

const a = [1, 4, 6, 7, 10, 15, 21, 30];
const target = 10;

let low = 0;
let high = a.length - 1;
let index = -1; // default if not found

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] === target) {
        index = mid;
        break; 
    } else if (a[mid] < target) {
        low = mid + 1; 
    } else {
        high = mid - 1;
    }
}


console.log(`${target} index is ${index}`); 
  
// key - > max -> right  and do low = mid +1
// key - > min - > left  and do high  = mid -1 