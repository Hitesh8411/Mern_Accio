const user1 = {
  name: "Vaibhav",
  age: 23,
  city: "Pune",
  printDetails: function () {
    console.log(`${this.name} is living in ${this.city}`);
  },
};

const user2 = {
  name: "Prajwal",
  age: 20,
  city: "Pune",
  printDetails: function () {
    console.log(`${this.name} is living in ${this.city}`);
  },
};

const user3 = {
  name: "Devanshi",
  age: 21,
  city: "Mumbai",
  printDetails: function () {
    console.log(`${this.name} is living in ${this.city}`);
  },
};

//constructor
function User(name, age, city) {
  console.log(this);

  this.name = name;
  this.age = age;
  this.city = city;
  this.printDetails = function () {
    console.log(`${this.name} is living in ${this.city}`);
  };
}

const user4 = new User("Neha", 20, "Nashik");
const user5 = new User("Ajay", 25, "Nashik");

//conventional / traditional way of using objects
console.log(user1.printDetails());
console.log(user1.name);

// using objects created from constructor -> it is same as user1
console.log(user4.name);
console.log(user4.printDetails());

console.log(user1.name.__proto__);

function normalFunction() {
  console.log(this); //by default functions has global object stored in `this`
}

console.log(normalFunction());

//creating an array of objects using constructor
const names = ["Raj", "Shivam", "Pratik", "Priya"];
const age = [12, 32, 10, 13];
const city = ["Mumbai", "Delhi", "Pune", "Bangalore"];

const objArray = [];

for (let i = 0; i < names.length; i++) {
  objArray.push(new User(names[i], age[i], city[i]));
}
console.log({ objArray });

function Product(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.total = price * qty;
}

const product1 = new Product("Bottle", 10, 50);
const product2 = new Product("Bowl", 20, 10);

console.log({ product1, product2 });

//Prototypes
const boolean = true;
const string = "true";
const number = 2322;
const arr = [4, 44, 4];

console.log(boolean.__proto__);
console.log(string.__proto__);
console.log(number.__proto__);
console.log(arr.__proto__);

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

Student.prototype.greetMe = function (name) {
  console.log("Hi " + this.name);
};

const student1 = new Student("Rajesh", 20, 10);
student1.greetMe(student1.name);

//Find the output
function Test() {
  this.value = 10;
}
Test.prototype.value = 100;

const test = new Test();

console.log(test.value); // 10 -> first it will search value inside its own "test" object, so it prints 10 as it's found in "test"
delete test.value; //deleting the value property from test object
console.log(test.value); // 100 --> since the "test" object does not have any "value" property, it'll now look in prototype of Test, it's found there, so it prints its value i.e., 100

//mixing up constructor and prototypes
// creating a task queue, that will add, remove and display all tasks
function TaskQueue() {
  this.tasks = [];
}

//adding the new task to end of the queue
TaskQueue.prototype.add = function (taskName) {
  this.tasks.push(taskName);
};

//removing the first task
TaskQueue.prototype.remove = function () {
  this.tasks.shift();
};

//displaying all tasks
TaskQueue.prototype.display = function () {
  console.log(this.tasks.join(", "));
};

const task1 = new TaskQueue();
task1.add("Task1");
task1.add("Task2");
task1.remove();
task1.add("Task3");
task1.add("Task4");
task1.display();
task1.remove();
task1.display();
