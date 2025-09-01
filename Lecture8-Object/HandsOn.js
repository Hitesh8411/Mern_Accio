const library = {
  books: [
    { title: "Atomic Habits", author: "James Clear", year: 2018 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997 }
  ],
  
  addBook: function(title, author, year) {
    this.books.push({ title, author, year });
  },

  listBooks: function() {
    for (let book of this.books) {
      console.log(`${book.title} by ${book.author}, Published in ${book.year}`);
    }
  }
};

library.listBooks();
library.addBook("Deep Work", "Cal Newport", 2016);
console.log("\nAfter adding new book:");
library.listBooks();

console.log("--------------------------------------------------------")


const student = {
  name: "Aarav",
  marks: [85, 90, 78],

  getAverage: function() {
    let sum = 0;
    for (let m of this.marks) sum += m;
    return sum / this.marks.length;
  },

  addMark: function(mark) {
    this.marks.push(mark);
  }
};

console.log("Initial Average:", student.getAverage());
student.addMark(95);
console.log("Updated Average:", student.getAverage());

