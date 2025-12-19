// function Car(name, model,speed) {
//     this.name = name;
//     this.model = model;
//     this.speed = 0;}

//     this.isRunning = function () {
//         changeSpeed(0);
//         console.log(`${this.name} is running at speed ${this.speed} km/h`);

//     }
// }
// function changeSpeed(delta) {
//     this.speed += delta;
// }   
// const car1 = new carInfo("BMW", "X5", 0);
// const car2 =new carInfo("Creata","TOp",45);
// car1.isRunning();   
// car2.isRunning();
// ============================================================================================================================================
// ============================================================================================================================================
// function Car(name, model,speed) {
//     this.name = name;
//     this.model = model;
//     this.speed = 0;}

// Car.prototype.isRunning =function() {
//     this.speed > 0 ? console.log("Running") : console.log("Not Running");
// }
// Car.prototype.changeSpeed =function (newSpeed) {
//     this.speed =newSpeed;
// };

// const creta = new Car("creta","cr-25");
// creta.isRunning();
// creta.changeSpeed(30);
// creta.isRunning();

// Car.prototype.printCarDetails =function() {
//     console.log(this.name, this.model, this.speed);
// };

// ============================================================================================================================================
// ============================================================================================================================================

//A class is needed to create multiple objects with the same structure and behavior without repeating code.

// classes are used to grps constructor and prototyupe methods together
//claases are nt hoisted unlike function 
class Car {
    
    constructor(name, model) {
    this.name = name;
    this.model = model;
    this.speed = 0;}
    

    changeSpeed(newSpeed) {
        this.speed=newSpeed;
    }

    isRunning() {
         this.speed > 0 ? console.log("Running") : console.log("Not Running");
    }
}
const creta =new Car ("creta","cr-22")
console.log({creta});


// attendence caluclator : marked preset , absent methode , ccalulate attendance using class


// Attendance calculator using class

class AttendanceCalculator {
    constructor(totalDays) {
        this.totalDays = totalDays;
        this.presentDays = 0;
        this.absentDays = 0;
    }

    markPresent() {
        this.presentDays ++;
    }

    markAbsent() {
        this.absentDays ++;
    }

}

const attendance = new AttendanceCalculator(100);

attendance.markPresent();
attendance.markAbsent();
attendance.markPresent();   
attendance.markPresent();
attendance.markPresent();   
attendance.markPresent();
attendance.markPresent();   
attendance.markPresent();attendance.markPresent();   
attendance.markPresent();
attendance.markAbsent();
attendance.markPresent();   

console.log(`TotalDays: ${attendance.totalDays}`);
console.log(`PresentDays: ${attendance.presentDays}`);
console.log(`Absent Dys: ${attendance.absentDays}`);
console.log(`Attendance Percentage: ${(attendance.presentDays / attendance.totalDays) * 100}%`)



// getters and setters in class 
//getters and setters are special methods that provide controlled access to the properties of an object. They allow you to define how properties are accessed and modified, enabling encapsulation and validation of data.




//getters : to get the value of a property (read only) , why we use _ before property name in getter and setter
// why : to differentiate between the property and the getter/setter method
// how : define a method with the get keyword

//setters : to set the value of a property (write only)
//setters : why , how to use them   
// why: to control how a property is set
// how: define a method with the set keyword
// example: 
console.log("=====================================");


class Student {
    constructor({id,name,dob,grade}) {
        this.id=id;
        this.name=name;
        this._dob=dob;
        this.grade=grade;
        this._marks=0;      // this are data properties

    }

    //getter for dob
    get dob() {
    return this._dob;
}   

    //setter for dob
    set marks(newMarks)    // this are accessor properties
{   
    this._marks=newMarks;
}  
    get marks() {
        return this._marks;
    }
}
const Hitesh =new Student({
    id:"101",
    name:"Hitesh",  
    dob:"2000-01-01",
    grade:"A"     
});

Hitesh.marks=95; //using setter to set marks
Hitesh.dob="2000-02-02"; // trying to set dob will not work as there is no setter for dob
Hitesh.marks=98; //using setter to set marks again
Hitesh.name="Hitesh Suryavanshi"; // directly setting name as there is no setter for name



console.log(`Student Name: ${Hitesh.name}`);
console.log(`Student DOB: ${Hitesh.dob}`); //using getter to get dob
console.log(`Student Marks: ${Hitesh.marks}`); //using getter to get marks


// static method : static methods are called on the class itself, not on instances of the class. They are often used for utility functions that are related to the class but do not require access to instance-specific data.
// how to define static method : use the static keyword before the method name
//when to use static method : when you need a method that is related to the class but does not need to access instance properties
// what are utility functions : functions that perform common tasks that can be reused across different parts of the application
//how: define a method with the static keyword
//why: to create methods that belong to the class itself rather than any instance

// example :

// private properties and methods in class
// private properties and methods are accessible only within the class they are defined in. They cannot be accessed or modified from outside the class, ensuring encapsulation and data hiding.
// how to define private properties and methods : use the # symbol before the property or method name
// why to use private properties and methods : to protect sensitive data and implementation details from being accessed or modified externally
// when to use private properties and methods : when you want to restrict access to certain parts of a class to maintain
 

class Bank{
    #pin=1234; //private property
    constructor(firstPin){
        this.#pin=firstPin;
        this.balance=0;
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`Deposited: ${amount}. Current Balance: ${this.balance}`);
    }
    withdraw(amount,pin){
        if(pin===this.#pin){
            if(amount>this.balance){
                console.log("Insufficient Balance");
            }else{
                this.balance-=amount;
                console.log(`Withdrawn: ${amount}. Current Balance: ${this.balance}`);
            }
        }else{
            console.log("Invalid PIN");
        }
    }
    checkBalance(pin){
        if(pin===this.#pin){
            console.log(`Current Balance: ${this.balance}`);
        }else{
            console.log("Invalid PIN");
        }
}
}
const myBank=new Bank(4321);
myBank.deposit(1000);
myBank.checkBalance(4321);  
myBank.withdraw(500,1234);
//console.log(myBank.pin); //undefined as pin is private property not possible to access outside the class
//console.log(myBank.#pin); //syntax error as #pin is private property not possible to access outside the class   
console.log(myBank);

//when to use destructuring : when you want to extract multiple properties from an object or array in a concise way
//how to use destructuring : use curly braces {} for objects and square brackets [] for arrays