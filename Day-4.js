// ACTIVITY - 1

console.log(`Printing Value from 1 to 10`);
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

console.log(`Print the multiplication table of 5`);
for (let i = 0; i < 10; i++) {
  console.log(`5 x ${i + 1} = ${5 * (i + 1)}`);
}

// ACTIVITY - 2

let number = 1;
let answerNumber = 0;
while (number < 11) {
  answerNumber += number;
  number++;
}
console.log(`This is the total sum of Number ${answerNumber}`);

let printNumber = 10;
while (printNumber > 0) {
  console.log(printNumber);
  --printNumber;
}

// ACTIVITY - 3

let doWhileNumber = 1;
console.log(`Printing number from 1 to 5 in Do while loop`);
do {
  console.log(doWhileNumber);
  doWhileNumber += 1;
} while (doWhileNumber < 6);

let factorialNumber = 4;
let answerFactorialNumber = 1;
do {
  answerFactorialNumber *= factorialNumber;
  factorialNumber--;
} while (factorialNumber > 0);

console.log(`This is Factorial Nubmer : ${answerFactorialNumber}`);

// ACTIVITY 4

const starNumber = 5;

for (let i = 0; i < starNumber; i++) {
  let star = "";
  for (let j = 0; j < i + 1; j++) {
    star += "*" + " ";
  }

  console.log(star);
}

// ACTIVITY - 5

for (let i = 0; i < 10; i++) {
  if (i + 1 === 5) {
    continue;
  } else {
    console.log(`This is I value from the else statement of continue ${i + 1}`);
  }
}

for (let i = 0; i < 10; i++) {
  if (i + 1 === 7) {
    break;
  } else {
    console.log(`This is I value from the else statement of break ${i + 1}`);
  }
}
