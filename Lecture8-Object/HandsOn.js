// creating an object
// student object
const stu = {
  name: "Ravi",
  age: 18,
  grade: "12th",
  city: "Pune"
};
console.log(stu);

// 2. Access Properties
console.log(stu.name);
console.log(stu["age"]);

//Add / Update Properties
stu.school ="RCPIT";
stu.age =19;
console.log(stu);
// delete property 
delete stu.city;
console.log(stu);

// object inside object
const bike ={
  brand:"R15",
  model:"Model A5",
  owner:{
    name:"Hitesh",
    age:25
  }
};
console.log(bike.owner.name);

// Array of objects 
const books = [
  {
    title:"JS handbook" , price:500
  },
  {
    title:"PY handbook" , price:600
  },
  {
    title:"CSS handbook" , price:200
  }
];
console.log(books[1].title);

// Loop through objects 
for (let key in stu) {
  console.log(key + ": " + stu[key]);
}
// const library = {
//   books: [
//     { title: "Atomic Habits", author: "James Clear", year: 2018 },
//     { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997 }
//   ],
  
//   addBook: function(title, author, year) {
//     this.books.push({ title, author, year });
//   },

//   listBooks: function() {
//     for (let book of this.books) {
//       console.log(`${book.title} by ${book.author}, Published in ${book.year}`);
//     }
//   }
// };

// library.listBooks();
// library.addBook("Deep Work", "Cal Newport", 2016);
// console.log("\nAfter adding new book:");
// library.listBooks();

// console.log("--------------------------------------------------------")


// const student = {
//   name: "Aarav",
//   marks: [85, 90, 78],

//   getAverage: function() {
//     let sum = 0;
//     for (let m of this.marks) sum += m;
//     return sum / this.marks.length;
//   },

//   addMark: function(mark) {
//     this.marks.push(mark);
//   }
// };

// console.log("Initial Average:", student.getAverage());
// student.addMark(95);
// console.log("Updated Average:", student.getAverage());

