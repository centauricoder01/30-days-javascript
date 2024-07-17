// ACTIVITY - 1

function checkOddOrEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkOddOrEven(9));

// ***************************************************

function findSquare(num) {
  return num * num;
}

console.log(findSquare(2));

// ****************************************************

// ACTIVITY - 2

const findGreaterNumber = function (num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater than ${num2} `;
  } else {
    return `${num2} is greater than ${num1} `;
  }
};

console.log(findGreaterNumber(2, 10));

// **************************************************

const concatinateTwoString = function (str1, str2) {
  return str1 + " " + str2;
};

console.log(concatinateTwoString("Rajendra", "Patel"));

// **************************************************

// ACTIVITY - 3

const firstArrowFunction = (num1, num2) => {
  return num1 + num2;
};

console.log(firstArrowFunction(10, 20));

// **************************************************

const containChar = (str, s) => {
  return str.includes(s);
};

console.log(containChar("rajendrapatel", "ra"));

// **********************************************

// ACTIVITY - 4

function productReturn(num1, num2 = 20) {
  return num1 * num2;
}

console.log(productReturn(10));

// ************************************************

const takeNameAndAge = (name, age = 22) => {
  return `Welcome ${name}, Your age is ${age}.`;
};

console.log(takeNameAndAge("Rajendra"));

// ***********************************************

// ACTIVITY - 5

function higherOrderFunction(func, num) {
  return function () {
    for (let i = 0; i < num; i++) {
      func();
    }
  };
}

function func() {
  console.log("I am being called again and again...");
}

const callingAgain = higherOrderFunction(func, 3);
callingAgain();

// ************************************************

function applyFunctions(func1, func2, value) {
  const firstResult = func1(value);
  const finalResult = func2(firstResult);
  return finalResult;
}

// Example usage:
function add2(x) {
  return x + 2;
}

function multiply3(x) {
  return x * 3;
}

const result = applyFunctions(add2, multiply3, 5); 

console.log(result); 
