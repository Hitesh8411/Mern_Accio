/*  
String Conversion Questions

A.Camel Case Conversion
  Given a variable name separated by spaces, write a function to convert it into camelCase.

  Example:
  Input: "student first name"
  Output: "studentFirstName"

B.Snake Case Conversion
  Given a variable name separated by spaces, write a function to convert it into snake_case.

  Example:
  Input: "student first name"
  Output: "student_first_name"
*/

const caseObject = {
  //camelCase - studentFirstName
  camelCase: function (str) {
    let ccase = "";
    str.trim();
    for(let i = 0; i < str.length; i++){
      if(str[i] === ' '){
        ccase += str[i+1].toUpperCase();
        i++;
      } else ccase += str[i];
    }

    return ccase;
  },
  //snake_case: student_first_name
  snakeCase: function (str) {
    return str.trim().replaceAll(" ", '_');
  }
}




const str = "student first name";
console.log("camelCase of '" + str + "' is: ", caseObject.camelCase(str));
console.log("snake_case of '" + str + "' is: ", caseObject.snakeCase(str));

function reverseString (str) {
  let revString = "";

  // for(let i = str.length - 1; i >= 0; i--)
  //   revString += str[i];

  for(let i = 0; i < str.length; i++)
    revString += str[str.length - i - 1];
  
  return revString;
}

function isPalindrome (str) {
  /* const revString = reverseString(str);
  return revString === str; */

  let n = str.length;

  for(let i = 0; i < Math.floor(n/2); i++){
    if(str[i] != str[n-i-1])
      return false;
  }

  return true;
}

function numberOfWords (str) {
  return str.trim().split(" ").length;
}

function largestWordInString (str) {
  str = str.trim();
  str = str.split(" ");

  let largestWord = str[0];
  for(let word of str){
    if(word.length > largestWord.length){
      largestWord = word;
    }
  }

  return largestWord;
}

function firstNonRepeatingCharacter (str) {
  str = str.trim();

  let n = str.length;

  for(let character of str){
    if(str.indexOf(character) === str.lastIndexOf(character))
      return character;
  }

  return "No repeating character";
}