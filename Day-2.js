let firstNumber = 2;
let secondNumber = 2;
const sum = firstNumber + secondNumber;
console.log(`Sum of two Value ${sum}`); // 4

let subFirstNumber = 5;
let subSecondNumber = 3;
const sub = subFirstNumber - subSecondNumber;
console.log(`Subtract of Two Value ${sub}`); // 2;

let multiFirstNumber = 5;
let multiSecondNumber = 3;
const multi = multiFirstNumber * multiSecondNumber;
console.log(`Multiply of Two Value ${multi}`); // 15;

let divideFirstNumber = 5;
let divideSecondNumber = 3;
const divide = divideFirstNumber / divideSecondNumber;
console.log(`Divide of Two Value ${divide}`); // 1.66667;

let reminderFirstNumber = 5;
let reminderSecondNumber = 3;
const reminder = reminderFirstNumber % reminderSecondNumber;
console.log(`Reminder of Two Value ${reminder}`); // 1.66667;

// ACTIVITY 2

let incrementNumber = 5;
incrementNumber += 5;
console.log(`Increment Number - ${incrementNumber}`);

let decrementNumber = 10;
decrementNumber -= 5;
console.log(`Decrement Number ${decrementNumber}`);

// ACTIVITY 3

let compareFirstNumber = 10;
let compareSecondNubmer = 20;
const greaterNumber = compareFirstNumber > compareSecondNubmer;
const smallerNumber = compareFirstNumber < compareSecondNubmer;
const greaterOrEqual = compareFirstNumber >= compareSecondNubmer;
const smallerOrEqual = compareFirstNumber <= compareSecondNubmer;
const doubleEqualCheck = compareFirstNumber == compareSecondNubmer;
const tripleEqualCheck = compareFirstNumber === compareSecondNubmer;
console.log(`First Number is greater than second -  ${greaterNumber}`);

// ACTIVITY 4

let firstStatement = true;
let secondStatement = false;
const checkDoubleampersand = firstStatement && secondStatement; // false
const checkDoubleVerticalLine = firstStatement || secondStatement; // true
const checkExclamationMark = !firstStatement; // false;

// ACTIVITY 5;

let checkPositiveOrNot = 6;
const ternaryNumber =
  checkPositiveOrNot > 0 ? console.log("Positive") : console.log("Negative"); // Positive
