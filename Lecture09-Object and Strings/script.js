// const obj = {
//     property1: "PropertyOne",
//     1: "one"      //by default it will take key ie 1 as string
// }
// console.log(obj.property2);    //undefined because no key present as property2;
// console.log(obj["property2"]); //undefined because no key present as property2;
// console.log(obj[1]);    //it will print the value of key 1\

// obj.property2 = "Property2"

//console.log(obj);

//Object keys can have array as values also
// obj.arrProperty = [1, 2, 3, 4, 5]
// for (let i of obj.arrProperty) {
//     console.log(i)
// }

// Another Way TO CREATING OBJECT
// const newObj = new Object();
// newObj.a = "a";
// newObj.b = "b";
// newObj.c = "c";
//  console.log({newObj});



// Strings Start here 


// //strings using single quotes
// let str = 'a'    //type 1 of defining strings
// console.log(typeof (str));

// str = ['a', 'b', 'c'];
// console.log(typeof (str));

// str = 'abc';
// console.log(typeof (str));

// //Strings using double quotes
// str = "ABC"        //type 2 of defining strings 
// console.log(typeof (str));

// //strings using backticks
// str = `abc`;         //type 3 of defining strings
// console.log(typeof (str));

// //case when we must use double inverted comma
// str = "Hi I'm Mayuresh"
// console.log({ str });

// //case when we must use single inverted comma
// str = 'Hi this is "Java" classes';
// console.log({ str })

// //case when we must use backticks 
// str = `Hi I'm Hitesh, I have joined "Mern classes" `;
// console.log({ str });

// // some  more feature  of abck tics - we can insert any varibale insode backtics
// let name = "Hitesh"
// str = `Hello, I'm ${name}`;
// console.log(str)

// /* ========================some methods in strig */

// str = "we' re going to see some methods of strings w";

// // includes fucntion  -> return if the given string is present in str or not

// console.log(str.includes('goingg'));
// // replace function - > replaces only the first occurance of "w "and "x"
// console.log(str.replace('w', 'x'));

// // replaceAll function - > replace all "w" with "X"
// console.log(str.replaceAll('w', 'X'));  // doest change in og string

// // trim () -> removes all leadding and trailing spaces

// console.log(str);
// console.log(str.trim());
// console.log(str);

// substring() - > gives substring 
// str = "we' re going to see some methods of strings w";
// console.log(str.substring(3,9));  // gives substring starting from index = 3 and ending at index = 8(9-1)
// console.log(str.substring(3));  // gives substring starting from index = 3 and ending at last
// console.log(str.substring("3")); // gives substring starting from index = 3 and ending at last
// console.log(str.substring(-3,-9)); // gives empty string because -3 is greater than -9
// console.log(str.substring(-3));      // gives whole string because -3 is less than 0
// console.log(str.substring(-3,1000)); // gives whole string because -3 is less than 0 and 1000 is greater than string length 
// // try like above more cases
// console.log(str.substring(1000)); // gives empty string because 1000 is greater than string length 
// // play with more cases


// slice() - > gives substring ( almost same as substring but few differences)
str = "we' re going to see some methods of strings w";
console.log(str.slice(3,9));  // gives substring starting from index = 3 and ending at index = 8(9-1)
console.log(str.slice(3));  // gives substring starting from index = 3 and ending at last
console.log(str.slice("3")); // gives substring starting from index = 3 and ending at last
console.log(str.slice(-3,-9)); // gives empty string because -3 is greater than -9  
console.log(str.slice(-3));      // gives substring starting from index = length-3 and ending at last // give last 3 characters
console.log(str.slice(-3,1000)); // gives substring starting from index = length-3 and ending at last // give last 3 characters
console.log(str.slice(-100)); // gives whole string because -100 is less than -string length
console.log(str.slice(1000)); // gives empty string because 1000 is greater than string length 
console.log(str.slice(-9,-3)); // gives substring starting from index = length-9 and ending at index = length-4
console.log(str.slice(3,-3)); // gives substring starting from index = 3 and ending at index = length-4
console.log(str.slice(-3,0)); // gives empty string as end is smaller than start 

//split() -> splits the string based on given character
console.log(str.split(","));
const line = "Hello welcome to MERN stack course  ";
console.log(line.split(" "));

//toUpperCase()
console.log("hello".toUpperCase());

/* ======= Wrapper objects ======= */
const string = "Vaibhav";
const number = 67;
const bool = true;
const object = {
  name: "Vaibhav"
};

console.log(string.__proto__);
console.log(number.__proto__);
console.log(bool.__proto__);
console.log(object.__proto__);

console.log(Number("123"));

/* ================= Spread & Rest operator ================= */

//Rest operator -> ... -> combines all the arguments and transforms them into an array
function addStudent (students, ...studentNames){
  console.log(studentNames); //prints the array
  for(let student of studentNames)
    students.push(student);

  console.log({students});
}

const students = ["Rahul", "Riya", "Prem"];
addStudent(students, "Abhishek", "Prateek", "Surbhi");

// destructuring 
const [hi, ...bye] = ["Hi", "Bye", "Byee", "Byeeee"];
console.log({hi,bye});

//spread operator
const arr1 = [1, 3, 5, 6];
console.log({arr1});
console.log("spreaded array: ", [0, ...arr1, 67, 678, 68]);

/* HW: use spread operators with OBJECTS */
// (solved in Handson file)




