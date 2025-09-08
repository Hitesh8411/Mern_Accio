// // String Continue
// //1. given a varibale name, seprae by space write two functions 1) covert this varibakle name to camel case  2) convert this varibale name to snake case

// let str = "student first name";
// function camelCase(str){
//    const words =str.split(' ');

//    let camelCaseStr = words[0].toLowerCase();

//    for (let i = 1; i<words.length; i++) {
//     let word =words[i];
//     let fLetter =word.charAt(0).toUpperCase();
//     let remainLetter =word.slice(1).toLowerCase();
//     camelCaseStr += fLetter + remainLetter;
//    }
//    return camelCaseStr
// }
// console.log(camelCase(str));

// function snakeCase(str) {
//     let underScore =str.split(' ').join('_')
//     lowerCaseStr = underScore.toLowerCase();
//      return lowerCaseStr;
// }  

// console.log(snakeCase(str));

// push inside a object





// 2 Reverse  a string

// function reverseString(str) {
//     let reverseStr = "";
//     for(let i= str.length - 1; i >= 0; i--){
//         reverseStr +=str[i];
//     }
//     return reverseStr;
    
// }

function reverseString(str) {
// const str ="Hitesh"
// console.log(reverseString(str));

//  reversed string using straight loop
    let reverseStr = "";
    for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
    }
    return reverseStr;
}
const str ="Hitesh"
console.log(reverseString(str));


// check if a string is palindrome


function isPalindrome(str) {
    let reverseStr = reverseString(str);
    return str === reverseStr;
}

console.log(isPalindrome("madam"));

// find the number of words in a string
function countWords(str) {
    let words =str.split(' ');
    return words.length;
}
console.log(countWords("Mayuresh is a good buy"));

// find the longest word in a string
function longestWord(str) {
    let words =str.split(' ');
     let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if(words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(longestWord("Mayuresh is a good buy"));


// function to find first non -repeating character
// function fNonRepeatingChar(str) {
//     let charCount = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];  

//     }
    
// }
// console.log(fNonRepeatingChar("Hitesh"));



//Hw : reverse each word of string 
// str = "Hi i'm vaibhav"
// o/p = "iH m'i vahbiav"

function reverseWord(word) {
  let revWord = "";

  for (let i = 0; i < word.length; i++) {
    revWord += word[word.length - i - 1];
  }

  return revWord;
}

function reverseEachWord(str) {
  
  let words = str.split(" ");

  
  let reversedWords = [];

  
  for (let i = 0; i < words.length; i++) {
    let reversed = reverseWord(words[i]);
    reversedWords.push(reversed);
  }

  
  return reversedWords.join(" ");
}


let input = "Hi i'm vaibhav";
let output = reverseEachWord(input);

console.log(output); 
