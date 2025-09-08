// let single ='Hello using single string'
// let double ="Hello using double"
// let backtick=`hello using backtick`
// console.log(typeof single);
// console.log(typeof double);
// console.log(typeof backtick);

// let str ="Hello,JavaScript World!  ";

// console.log(str.includes("JavaScript"));
// console.log(str.replace("World","Language"));
// console.log(str.replaceAll("o",0));
// console.log(str.trim()) // remove spaces
// console.log(str.substring(1,4));
// console.log(str.slice(-6));
// console.log(str.split(" ")); // split into words
// console.log("hello".toUpperCase());
// console.log(str);

// // Wrapper Objects 
// console.log(typeof null);  // object (weird JS bug)
// console.log(typeof []);    // object
// console.log([].__proto__); // Array prototype


/* ==========  Rest Operator ========== */
//Rest operator -> ... -> combines all the arguments and transforms them into an array
// // function -> that add any number of any argument

// function sumAll(...nums){
//   let sum = 0;
//   for (let n of nums) 
//   sum += n;
//   return sum;
// }
// console.log(sumAll(2,3,4,5)); 

// /* Spread Operator */
// let obj1 = {a:1, b:2};
// let obj2 = {c:3, d:4};
// let merged = {...obj1, ...obj2};
// console.log(merged);



/* ========== Spread Operator ========== */

// The spread operator (...) is used to expand (spread out) elements of an array or properties of an object into another array/object.

// Copy an object
const student ={ name: "Hitesh", age:22};
const studentCopy ={...student};
console.log(studentCopy);

// merge two object
const obj1 ={a:1,b:2};
const obj2 ={c:3, d:4};
const merged ={...obj1, ...obj2};
console.log(merged);

// Add new properties
const person = {name: "Hitesh"};
const updatedPerson={...person, age:25,city:"Pune"};

console.log(updatedPerson)

// Override properties

const settings ={ theme:"light", font:"small"};
const newSettings={...settings,theme:"dark"}
console.log(newSettings);

// task using spread add email and overide name
const user = { id : 101, name:"sunny"};
const newUser ={...user ,email:"hitesh@gmail.com", name:"Dip"};
console.log(newUser);







// // Reverse string
// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("hello")); 


// // Count vowels
// function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let ch of str) {
//     if (vowels.includes(ch)) count++;
//   }
//   return count;
// }
// console.log(countVowels("JavaScript")); 

// // Palindrome check
// function isPalindrome(str) {
//   let reversed = reverseString(str);
//   return str === reversed;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello")); 

// // Most frequent character
// function mostFrequentChar(str) {
//   let freq = {};
//   for (let ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }
//   let maxChar = null, maxCount = 0;
//   for (let ch in freq) {
//     if (freq[ch] > maxCount) {
//       maxChar = ch;
//       maxCount = freq[ch];
//     }
//   }
//   return maxChar;
// }
// console.log(mostFrequentChar("banana")); 