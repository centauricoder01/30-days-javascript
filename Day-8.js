// ACTIVITY - 1  TEMPLATE LITERALS

const name = "Rajendra Patel";
const age = 22;

console.log(`My Name is ${name} and i am ${age} years old.`);

const thisIsMultiLineString = `This is first line
This is Second Line.
This is Third Line.
`;

console.log(thisIsMultiLineString);

// ACTIVITY - 2  ARRAY AND OBJECT DESTRUCTURING

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second] = arrayOne;

console.log(first, second); // 1,2

const bookObject = {
  bookName: "Zero to One",
  author: "Peter Theil",
  price: 200,
  releaseDate: 2011,
};

const { bookName, author } = bookObject;

console.log(bookName, author); // Zero to One, Peter Theil

// ACTIVITY - 3 SPREAD AND REST OPERATOR

const previousArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = [...previousArray, 11, 12, 13, 14, 15];

console.log(newArray); // print both array's value;

function acceptValue(...sum) {
  return sum.reduce((a, b) => {
    return a + b;
  });
}

console.log(acceptValue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ACTIVITY - 4; DEFAULT PARAMETER

function defaultValue(first, second = 1) {
  return first * second;
}

console.log(defaultValue(2)); // without value will print - 2
console.log(defaultValue(2, 5)); // with value will print - 10

// ACTIVITY - 5 ENHANCE OBJECT LITERALS

const newName = "Raj";

const enhanceObjectLiterals = {
  newName,
  greet() {
    return console.log(`My name is ${this.newName}`);
  },
};

console.log(enhanceObjectLiterals); // print the main object
enhanceObjectLiterals.greet(); // print the method object

const organization = "Company";

const computedPropertyNames = {
  [organization]: "PlanEdu",
};

console.log(computedPropertyNames); // computed property names
