/* function Car(name, model) {
  this.name = name;
  this.model = model;
  this.speed = 0;
}

Car.prototype.isRunning = function () {
  this.speed > 0 ? console.log("Running!") : console.log("Not running!");
};

Car.prototype.changeSpeed = function (newSpeed) {
  this.speed = newSpeed;
};

const creta = new Car("creta", "CR-234");
creta.isRunning();
creta.changeSpeed(30);
creta.isRunning();

Car.prototype.printCarDetails = function () {
  console.log(this.name, this.model, this.speed);
}; */

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
    this.speed = 0;
  }

  changeSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  isRunning() {
    this.speed > 0 ? console.log("Running!") : console.log("Not running!");
  }
}

const creta = new Car("Creta", "CR-1223");
console.log({ creta });

class AttendanceLogger {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.present = 0;
    this.totalDays = 0;
    // this = {name, grade, present: 0, totalDays: 0};
  }

  markPresent() {
    this.present++;
    this.totalDays++;
  }

  markAbsent() {
    this.totalDays++;
  }

  printAttendance() {
    const { name, present, totalDays } = this;
    console.log(
      "Attendance percentage of " +
        name +
        " is " +
        ((present / totalDays) * 100).toFixed(2)
    );
  }
}

const att = new AttendanceLogger("Raju", 10);
att.markPresent();
att.markAbsent();
att.markPresent();
att.markPresent();
att.markAbsent();
att.printAttendance();

//getters and setters in class
class Student {
  constructor({
    id = "0000",
    name = "Guest",
    dob = "20-Aug-1000",
    grade = 1,
  } = {}) {
    this.id = id;
    this.name = name;
    this._dob = dob;
    this.grade = grade;
    this._marks = 0;
  }

  get dob() {
    return this._dob;
  }

  set marks(newMarks) {
    this._marks = newMarks;
  }

  get marks() {
    return this._marks;
  }
}

const mukesh = new Student({
  id: "ST-1234",
  name: "Mukesh",
  dob: "24-12-2000",
  grade: 10,
});
console.log(mukesh.dob);
mukesh.marks = 30;
console.log(mukesh.marks);

//static methods
class User {
  constructor(username, role) {
    this.username = username;
    this.role = role;
  }

  static guest() {
    return new User("guest", "guest");
  }
}

const guestUser = User.guest();

//private properties
class Bank {
  #pin = 1234;
  constructor(firstPin) {
    this.#pin = firstPin;
    this.balance = 0;
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(userPin, money) {
    return userPin === this.#pin && this.balance >= money
      ? (this.balance -= money)
      : null;
  }

  checkBalance(userPin) {
    return userPin === this.#pin ? this.balance : null;
  }
}

const sbi = new Bank(4321);
sbi.deposit(150);
console.log(sbi.checkBalance(4321));
sbi.withdraw(431, 10);
// console.log(sbi.#pin); //throws error
console.log(sbi["#pin"]); //unable to access the value of PIN -> prints undefined
console.log(sbi.pin); //unable to access the value of PIN -> prints undefined
console.log(sbi.checkBalance(4321));
