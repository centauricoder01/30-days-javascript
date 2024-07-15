// ACTIVITY - 1

const value = 30;

if (value > 0) {
  console.log("It's a Negative Nubmer");
} else if (value == 0) {
  console.log("It's Zero...");
} else {
  console.log("It's a positive Value");
}

const Age = 10;

if (Age >= 18) {
  console.log("You are Eligible to Vote");
} else {
  console.log("You are not Eligible");
}

// ACTIVITY - 2 Switch case

dayNumber = 1;

switch (dayNumber) {
  case dayNumber === 1:
    console.log("Sunday");
  case dayNumber === 2:
    console.log("Monday");
  case dayNumber === 3:
    console.log("Tuesday");
  case dayNumber === 4:
    console.log("Wednesday");
  case dayNumber === 5:
    console.log("Thursday");
  case dayNumber === 6:
    console.log("Friday");
  case dayNumber === 7:
    console.log("Saturday");
}

// ACTIVITY - 3

const grade = 66;

switch (true) {
  case grade >= 90 && grade <= 100:
    console.log("A");
    break;
  case grade >= 80 && grade <= 89:
    console.log("B");
    break;
  case grade >= 70 && grade <= 79:
    console.log("C");
    break;
  case grade >= 60 && grade <= 69:
    console.log("D");
    break;
  case grade >= 50 && grade <= 59:
    console.log("E");
    break;
  case grade >= 40 && grade <= 49:
    console.log("F");
    break;
  default:
    console.log("Fail");
    break;
}

// ACTIVITY - 4
const Number = 34;

const checkPrimeOrNot =
  Number % 2 === 0
    ? console.log("Number is Even")
    : console.log("Number is Odd");

// ACTIVITY - 5 Check Leap Year

const year = 2004;

if (year % 4 !== 0) {
  console.log(`${year} is not a Leap Year...`); // Not divisible by 4, not a leap year
} else if (year % 100 !== 0) {
  console.log(`${year} is a Leap Years`); // Divisible by 4 but not 100, leap year
} else if (year % 400 !== 0) {
  console.log(`${year} is not a Leap Year...`); // Divisible by 100 but not 400, not a leap year
} else {
  console.log(`${year} is a Leap Years`); // Divisible by 400, leap year
}
