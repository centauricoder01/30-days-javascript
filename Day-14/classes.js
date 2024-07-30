// Activity - 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetingMessage() {
    return `Hi ${this.name}, You are ${this.age} year old...`;
  }

  updateAge(newAge) {
    this.age = newAge;
    this.logAge();
  }

  logAge() {
    console.log(`${this.age}, This is the newAge.`);
  }
}

const message = new Person("Rajendra", 22);

// console.log(message.greetingMessage()); // Print the Getting Message

message.updateAge(30); // This will print the udpated Age...

// Activity - 2 class inheritence

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }

  greet() {
    const newGreet = super.greetingMessage();
    return `${newGreet}, This is my studentId. ${this.studentId}`;
  }
}

const newStudent = new Student("Rajendra", 22, "PE10164");
console.log(newStudent.getStudentId()); // this will printing the studentID.
console.log(newStudent.greet());