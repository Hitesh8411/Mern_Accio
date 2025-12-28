class Vehicle {
  start() {
    console.log("Car is starting");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car is starting");
  }
}

class ElectricCar extends Car {
  start() {
    console.log("ElectricCar is starting");
  }
}

console.log(new Vehicle().start());
console.log(new Vehicle().start("Lambo"));

/* DIY

class Employee{
    yearsOfExp = 2; //set in constructor
    salary(){
        return 500000*yearsOfExp
    }
}
   
class SalesEmployee{
    override salary() -> 300000*yearsOfExp
}

class LeadEmployee {
    override salary() -> 1000000*yearsOfExp
}

*/

class Employee {
  constructor(yrsOfExp) {
    this.yrsOfExp = yrsOfExp;
  }
  salary() {
    return 3000 * this.yrsOfExp;
  }
}

class SalesEmployee extends Employee {
  constructor(yrsOfExp) {
    super(yrsOfExp);
  }
  salary() {
    return 5000 * this.yrsOfExp;
  }
}

class LeadEmployee extends Employee {
  constructor(yrsOfExp) {
    super(yrsOfExp);
  }

  salary() {
    return 10000 * this.yrsOfExp;
  }
}

console.log(new SalesEmployee(3).salary()); //15000
console.log(new LeadEmployee(10).salary()); //100000

class Student {
  constructor(marks) {
    this._marks = marks;
  }

  #calculateMarks() {
    const totalSubjects = Object.keys(this._marks).length;
    let totalMarks = 0;
    for (let marks in this._marks) {
      totalMarks += this._marks[marks];
    }

    return totalMarks / totalSubjects;
  }

  get marks() {
    return this.#calculateMarks();
  }
}

const marks = {
  math: 90,
  science: 80,
  english: 100,
};
const rahul = new Student(marks);
console.log(rahul.marks);

class PersonalDetails {
  constructor({ name, age, dob }) {
    this.name = name;
    this.age = age;
    this.dob = dob;
  }
  print() {
    console.log("Personal Details: ", this.name, this.age, this.dob);
  }
}

class EducationalDetails {
  constructor({ college, gradYear, cgpa }) {
    this.college = college;
    this.gradYear = gradYear;
    this.cgpa = cgpa;
  }

  print() {
    console.log(
      "Educational Details: ",
      this.college,
      this.gradYear,
      this.cgpa
    );
  }
}

const personalDetails = {
  name: "Vaibhav",
  age: 23,
  dob: "11dec2035",
};

const educationalDetails = {
  college: "AIT",
  gradYear: 2023,
  cgpa: 8,
};

class Person {
  constructor(aadharNumber, personalDetails, educationalDetails) {
    this.aadharNumber = aadharNumber;
    this.personalDetails = new PersonalDetails(personalDetails);
    this.educationalDetails = new EducationalDetails(educationalDetails);
  }

  print() {
    console.log("Aadhar Number: " + this.aadharNumber);
    console.log("Personal Details: " + JSON.stringify(this.personalDetails));
    this.educationalDetails.print();
  }
}

const vaibhav = new Person(212122, personalDetails, educationalDetails);
vaibhav.print();


