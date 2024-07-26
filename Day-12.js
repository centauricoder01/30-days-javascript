// ERROR HANDING

// ACTIVITY - 1

// * TASK - 1
async function getError() {
  try {
    const response = await fetch("https://reres.in/api/users");
    const value = await response.json();
    return value;
  } catch (error) {
    console.log(`we got this error : ${error}`);
    throw error;
  }
}

getError()
  .then((res) => {
    console.log(res, "This is res data ");
  })
  .catch((err) => {
    console.log("This is error data of Task 1.");
  });

// TASK - 2.

function divideTwoNumber(numOne, numTwo) {
  try {
    if (numTwo === 0) {
      throw new Error("Demonnator is Zero");
    }
    const result = numOne / numTwo;
    return result;
  } catch (error) {
    console.log(`Caught an error: ${error.message}`);
    return null;
  }
}

console.log(divideTwoNumber(2, 0));

// ACTVITY - 2

function checkTryCatchFinally(valOne, valTwo, valThree) {
  try {
    if (valOne === 0 || valTwo === 0 || valThree === 0) {
      throw new Error("Some value is Zero, please provide correct value");
    }
    console.log(valOne + valTwo + valThree);
  } catch (error) {
    console.log(`Error : ${error.message}`);
  } finally {
    console.log("Finally this code is Executed...");
  }
}

checkTryCatchFinally(1, 2, 0);

// ACTIVITY - 3

console.log("********** This is Third Assignment ************");

class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new DivisionByZeroError("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  const result1 = divide(10, 2);
  console.log(`Result1: ${result1}`); // Should print: Result1: 5

  const result2 = divide(10, 0);
  console.log(`Result2: ${result2}`); // This line will not execute
} catch (error) {
  if (error instanceof DivisionByZeroError) {
    console.log(`Caught a DivisionByZeroError: ${error.message}`);
  } else {
    console.log(`Caught an unexpected error: ${error.message}`);
  }
}

// TASK - 2

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("What is your name? ", (name) => {
//   try {
//     if (name === "") {
//       throw new Error("Name cannot be Empty...");
//     }
//     console.log(`Hello, ${name}!`);
//   } catch (error) {
//     console.log("We Got an Error" + error);
//   }
//   readline.close();
// });

// ACTIVITY - 4

console.log(`Activity - 4`);

const newPromise = () => {
  return new Promise((resolve, reject) => {
    const getRandomValue = Math.floor(Math.random() * 10) + 1;
    try {
      if (getRandomValue % 2 !== 0) {
        throw new Error(
          "No we cannot process this request. You are Odd Number"
        );
      }
      resolve("Yooo, we got an Even Number");
      console.log("*************************************");
    } catch (error) {
      reject(error);
    }
  });
};

const handePromise = async () => {
  try {
    const result = await newPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// ACTIVITY - 5.

// SOLVED THE QUESTION OF ACTIVITY FIVE IN PREVIOUS QUESTION
