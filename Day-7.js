// ACTIVITY - 1

const bookObject = {
  title: "Zero to One",
  author: "Peter Thiel",
  year: 2011,
};

console.log(bookObject);
console.log(`This is Title of the Book - ${bookObject.title}`);
console.log(`This is author of the Book - ${bookObject.author}`);

// ACTIVITY - 2

bookObject.newMethod = function () {
  return `Book title is ${this.title} and Author is ${this.author}`;
}; // Arrow function don't have the access of this Keyword...

console.log(bookObject.newMethod());

bookObject.yearMethod = function (year) {
  this.year = year;
};

bookObject.yearMethod(2024);

console.log(bookObject); // this will print the year b7869175557ut not the method...

// ACTIVITY - 3

const bookLiberary = {
  first_Liberary: "first Liberary",
  books_In_First_Liberary: [
    {
      title: "Rich dad and poor dad",
      author: "Robert Keosaki",
      year: 2018,
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      year: 2011,
    },
  ],
  second_Liberary: "second Liberary",
  books_In_Second_Liberary: [
    {
      title: "Elon Musk - The Rising Stars",
      author: "Elon Musk",
      year: 2010,
    },
  ],
};

console.log(bookLiberary.books_In_First_Liberary[0].title);
