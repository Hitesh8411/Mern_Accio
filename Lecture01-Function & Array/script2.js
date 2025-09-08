// function greetUser() {
//     console.log("Hello world");
    
// }
// function greetUser1(){
//     console.log("Bye World")
// }
// greetUser();
// greetUser();
// greetUser1();
// greetUser();
// greetUser1();
// greetUser();
// greetUser();
// greetUser1();
// greetUser();
// greetUser1();

// function greetUser1(userName){
//     console.log("Hello " + userName + " Welcome to our Website");
// }
// function greetUser2(userName){
//     console.log("Hello " + userName + " Welcome to our App");
// }
// greetUser1("Rahul");
// greetUser2("Rani")

// function WelcomeUser(username ,place ="App") {  //parameter
//     console.log("Hello "+ username + " welcome to our "+ place)
// }
// WelcomeUser("Rahul", "Website");
// WelcomeUser("Rani","App");
// WelcomeUser("Prateek", "Office");
// WelcomeUser("Sargar");  // argument

// function sum(a=0,b=0){
//     console.log(a+b);
//     return a + b;
// }
// sum(3,4);
// sum(3);

// function personalDetails (name, birthYear) {
//     console.log("Name: " + name);
//     console.log("Age: ",calculateAge(birthYear));
// }
// function calculateAge (birthYear) {
//     return 2025 - birthYear

// }
// personalDetails("Jayesh",2004);

//function to calulate square of number 

// function Square(num){
//     return num * num;

// }
// console.log(Square(20));
// console.log(Square(21));

// console.log("Hello", 2 + 2);
// // console.log("Hello" + num);
// console.log("Hello "+ 2 + 2);


const students=["hit","sun","jay"]

// console.log(students[0]);
// console.log(4 ,students[2]);

// for (let i in students) {   // i is string here i datatype is string
//     // console.log(i+1,students[i]);
//     console.log(Number(i) + 1,students[i]);
// }
//  console.log(students['2']);

//task print all students with ecen roll number

// for (let i =0 ; i <students.length;i++) {
//     if( i % 2 !== 0) {
//         console.log(i+1,students[i]);
//     }
// }

// console.log("Stuents with even roll number");

// for (let i in students){
//     (Number(i) + 1) % 2 == 0 ? console.log(students[i]) : null;
// }

// for .. of loop only gives values and not indices 
// for (let student of students) {
//     console.log(student);
// }


// declaration - creating a new variable
// defination- defining the variable or functions

// other type of array declaration

// const arr1 = [1,2,4,5,6];
// const arr2 =new Array(1,2,3,4,5);
// arr2[2] = 10;
// console.log(arr1);

// read about primitive datatypes
// homogenous property in array
// hetrogenous 

// some fun in array 
const iplTeams =["csk","mi","rcb","srh"];

// add some elements  at end
iplTeams.push("GT");
// add some elements  at start
iplTeams.unshift("kkr");

//remove elements at end
iplTeams.pop();
//remove elements at start
iplTeams.shift();

console.log(iplTeams.slice(1));  // when put positive integer slice exclude them print further number   
console.log(iplTeams.slice(-2));  // when put negative integer slic exclude first numbers and print from last 
console.log(iplTeams);


