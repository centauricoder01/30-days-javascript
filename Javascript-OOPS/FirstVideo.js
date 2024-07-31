// # JAVASCRIPT IS A PROTOTYPE BASED LANGUAGE NOT A CLASS BASED LANGUAGE...

// # what actually happen when we use NEW keyword while createing an object

function newKeywordPratice(name, age, salary) {
  (this.name = name), (this.age = age), (this.salary = salary);

  return this; // this is not required, this is by default returned
}

const firstUser = new newKeywordPratice("Rajendra", 22, "2CR");
const secondUser = new newKeywordPratice("Amit", 20, "1CR");

// # Step - 1 : It create a new empty object {};

// # Step - 2 : Constructor function is being called because of new Keyword.

// # Step - 3 : Because of this keyword all the argument that we are passing in the function get bundled in the object.

// # Step - 4 : We get all the argument in the object format...

// # In JavaScript, instanceof is an operator used to check if an object is an instance of a particular class or constructor function. It returns a boolean value (true or false).

class Person {
  constructor(name) {
    this.name = name;
  }
}

const john = new Person("John");

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true (since all objects inherit from Object)
console.log(john instanceof Array); // false
