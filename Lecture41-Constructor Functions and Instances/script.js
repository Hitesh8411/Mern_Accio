// construtor
//  when make construtor function first letter of function should be capitalized    (not necessary but good practice)
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("John", 30);
const user2 = new User("Jane", 25);

console.log(user1);
console.log(user2);

function normalFunction() {
  console.log(this);
}

console.log(normalFunction());

// this new keyword

// In a normal function this refers to the window object in the browser.

// The window object is the global object that gives access to things like

// console, alert, toUpperCase,toLowerCase.

// When a function is called using the new keyword, this points to a

// new empty object, and properties are added to that object.

// when we use new it creates the new object

// initially this points to window obj(global object) but when we use new then

// this keyword get binds to the empty object that we created using new

// i.e this->{}

// and this.name="Hitesh" means addind name prop in object with value devanshu

// same as object {name:Hitesh}

// creating an array of objects using construuctor

//create an array of objects using constructor

const names = ["rahul", "tanmay", "tejas", "kunal"];

const age = [12, 32, 10, 13];

const city = ["Pune", "delhi", "mumbai", "goa"];

const objArr = [];

for (let i = 0; i < names.length; i++) {
  objArr.push(new User(names[i], age[i], city[i]));
}

console.log(objArr);

function Test() {
  this.value = 10;
}

Test.prototype.value = 100;

const test = new Test();
console.log(test.value);

delete test.value;
console.log(test.value);

// mixing up construtor and prtoptypes

// Concept ->	Meaning
// constructor	initializes object values
// this	refers to the current object
// new	creates an object & triggers constructor

// this refers to the current execution context — meaning it points to the object that is accessing the method or property at that moment.

// what is instances?
// A real object created from a class using the new keyword.

// A constructor is needed to initialize object properties automatically at the time of object creation, ensuring each object has its own independent data.
