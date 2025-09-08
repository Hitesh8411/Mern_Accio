// //Objects 

// // create variables to store a name , age ,class,address of student
// const name = "Piyush";
// const age = 24;
// const address = "pune";
// const clas = "12th";


const studentObj = {
    name:"Piyush",
    age:24,
    address:"pune",
    class:"12th"
};
// console.log(studentObj);


// //create variable to store a name ,age address of parent 
// const parentName= "Riya";
// const parentAge = 45;
// const parentAddress = "pune"

// const parentObj = {
//     name:"Riya",
//     age:45,
//     address:"pune"
// };
// console.log(parentObj);

// //Access properties in object
// console.log("Student name is " + studentObj.name);
// console.log(studentObj.age);

// //another way to access
// console.log(studentObj["name"]);
// console.log(studentObj["age"]);

// // method 2
// const studentNameproperty = "name";
// console.log(studentObj[studentNameproperty]);

// //updating a value in object
// studentObj.age = 25;
// console.log(studentObj.age);

// // add a value in object
// parentObj.gender = "Female"
// console.log(parentObj);

// parentObj.standard =12;
// console.log(parentObj);

// // deleting a  value in object
// delete parentObj.standard;
// console.log(parentObj);

// /* Taskkkkk */

// //create a person object -> name ,age , city and later add hooby and upadte city

// const personObj ={
//     name:"Hitesh",
//     age:24,
//     city:"Pune"
// };
// console.log(personObj);

// personObj.city = "Nagpur"
// personObj.hobby = "Cricket"

// console.log(personObj);

// console.log(personObj["age"]);
// console.log(personObj["city"])

// const personHobbyProperty = "hobby";
// console.log(personObj[personHobbyProperty]);

// if (personObj && personObj.address && personObj.address.firstline)  // all properties on left of dot(.) must not be defined
// console.log(personObj.address.firstline);  // no error

// // if  (personObj && personObj.address.firstline && personObj.address )
// // console.log(personObj.address.firstline);   // // undefined (error cannot read properties of undefined)

//nested object :

// const emloyeeObj = {
//     name:"Hitesh",
//     company:"Acciojob",
//     payment: "10LPA",
//     address :{
//         addressLine1 :"VirbhadraNagar",
//         addressLine2 : "Baner",
//         houseNumber :303,
//         city :"Pune"
//     },
// };
// console.log(`City of ${emloyeeObj.name} is ${emloyeeObj.address.city}`);

//Array of object 
const studentObjArr =[
    studentObj,{
        name:"sunny",
        age :17,
        address:"Nashik",
        std:"10th",

    },
];



// const studentObj2 ={
//     name: "Girish",
//     age :27,
//     address:"Mumbai",
//     std:"12th",


// };

// const studentObjArr2 = [studentObj,studentObj2];
// console.log(studentObjArr2);

// for (let i in studentObj) {
//     console.log(i, ":",studentObj[i]);
// }

// console.log("Using Object.keys() method to get array of keys");
// for (let i of Object.keys(studentObj)) {
//     console.log(i, ":",studentObj[i]);
// }
// console.log("Keys:",Object.keys(studentObj));
// console.log("Values:",Object.values(studentObj));

// arr ="Hitesh"
// for (let i of arr) {
//     console.log(i);
// }  

// create a classroom array of 4 students
//  print the name ,age and there no.of all studnets reseding in pune city


const classRoom = [ 
    studentObj1 ={
        name:"Piyush",
        age:24,
        gender : "male",
        address: {
            addressLine1:"VirbhadraNagar",
            addressLine2:"Baner",
            houseNumber:303,
            city:"Pune",
            houseNumber:303,
        
        
        }
    },
      studentObj2 ={
        name:"Hitesh",
        age:24,
        gender : "male",
        address: {
            addressLine1:"FC Road",
            addressLine2:"Baner",
            houseNumber:303,
            city:"Pune",
            houseNumber:303,
        
        
        }
    },
      studentObj3 ={
        name:"Mitanshu",
        age:24,
        gender : "male",
        address: {
            addressLine1:"Tulshi Baag",
            addressLine2:"Baner",
            houseNumber:303,
            city:"Pune",
            houseNumber:303,
        
        
        }
    },
      studentObj4 ={
        name:"Sachin",
        age:24,
        gender : "male",
        address: {
            addressLine1:"VirbhadraNagar",
            addressLine2:"Baner",
            houseNumber:303,
            city:"Mumbai",
            houseNumber:303,
        
        
        }
    }
    
];

 
for (let student of classRoom){

    if (student && student.address && student.address.city)
    if (student.address.city === "Pune"){
        console.log(`student naame is ${student.name } and age is ${student.age} Who lives in pune`);
    }
}  


/*function inside objects */

const carObj = {
      

}

// Object - > name  -> Hitesh
// Skills -> array -> ["C++", "javascript","MERN"]
// Showskills -> show each skill in one line comma separated
// addSkill (skillname -> add a skill to skill array)

// const portFolioObj ={
//     name:"Hitesh",
//     skills:["c++","javascript","MERN"],
//     addSkill:function addSkill(Skill){
//         this.skills.push(Skill);
//     },

//     showskills:function showskills(){
//         for (let skill of this.skills){
//             console.log(skill);
//         }
//     },
// };
// portFolioObj.addSkill("Python");
// portFolioObj.showskills();

// const portFolioObj = {
//     name:"Hitesh",
//     skills:["c++","javascript","MERN"],

// }




//aesa padho ki tum bata pao - vaibhav sir (2025)