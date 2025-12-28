class Employee {
  constructor({ name, gender, id, designation, joiningDate, salary }) {
    this.name = name;
    this.gender = gender;
    this.id = id;
    this.designation = designation;
    this.joiningDate = joiningDate;
    this.salary = salary;
  }

  checkIn(time) {
    this.checkInTime = time.toLocaleTimeString();
  }

  checkOut(time) {
    this.checkOutTime = time.toLocaleTimeString();
  }

  /*   Fix this function: totalTimeToday() {
      if (!this.checkInTime || !this.checkOutTime) {
        console.log("Check in or Check out missing!!");
        return;
      }

    } */
}

const employee = new Employee({
  name: "Prasant",
  gender: "male",
  id: "EMP-1234",
  designation: "Junior Software Engineer",
  joiningDate: new Date(),
  salary: 600000,
});

console.log({ employee });

document.querySelector("button:first-of-type").addEventListener("click", () => {
  employee.checkIn(new Date());
});

document
  .querySelector("button:nth-of-type(2)")
  .addEventListener("click", () => {
    employee.checkOut(new Date());
    console.log(
      `Check in: ${employee.checkInTime} \nCheck out: ${employee.checkOutTime}`
    );
  });

class Manager extends Employee {
  constructor({ employeeDetails, subordinates }) {
    super(employeeDetails);
    this.subordinates = subordinates;
  }
}

const employeeDetails = {
  name: "Riya",
  gender: "female",
  id: "EMP-1235",
  designation: "Software Engineer",
  joiningDate: new Date(),
  salary: 600000,
};

const manager = new Manager({ employeeDetails, subordinates: ["e1", "e2"] });
console.log(manager);

document
  .querySelector("button:nth-of-type(3)")
  .addEventListener("click", () => {
    manager.checkIn(new Date());
  });

document
  .querySelector("button:nth-of-type(4)")
  .addEventListener("click", () => {
    manager.checkOut(new Date());
    console.log(
      `Check in: ${manager.checkInTime} \nCheck out: ${manager.checkOutTime}`
    );
  });

/* create an Animal class, and then create a Dog class & Cat class, 
inherit the property from Animal for both Dog & Cat class  */

class Animal {
  constructor({ name, age, color }) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  speak() {
    console.log("Speak method inside Animal class");
  }
}

const dogBasicDetails = {
  name: "Dogesh",
  age: 10,
  color: "brown",
};

const catBasicDetails = {
  name: "Billa",
  age: 3,
  color: "white",
};

class Dog extends Animal {
  constructor(dogBasicDetails) {
    super(dogBasicDetails);
  }
}

class Cat extends Animal {
  constructor(catBasicDetails) {
    super(catBasicDetails);
  }

  speak() {
    console.log("meow meow meow meow!!");
  }
}

const catInstance = new Cat(catBasicDetails);
const dogInstance = new Dog(dogBasicDetails);

console.log({ catInstance, dogInstance });

catInstance.speak();
dogInstance.speak();
