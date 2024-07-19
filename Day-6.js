// ACTIVITY - 1

const arrayValue = [1, 2, 3, 4, 5];
console.log(arrayValue);
console.log(
  `First Value = ${arrayValue[0]}, Last Value = ${
    arrayValue[arrayValue.length - 1]
  }`
);

// ACTIVITY - 2

const arrayTask = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayTask.push("Push Method");
console.log(`This is After Push method => ${arrayTask}`);
arrayTask.pop();
console.log(`This is After pop method => ${arrayTask}`);
arrayTask.shift();
console.log(`This is After Shift method => ${arrayTask}`);
arrayTask.unshift("Unshift Method");
console.log(`This is After unShift method => ${arrayTask}`);

// ACTIVITY - 3

const mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const main_Array_After_Map_Function = mainArray.map((ele) => {
  return ele + ele;
});

console.log(main_Array_After_Map_Function);

const main_Array_After_Filter_Function = mainArray.filter((ele) => {
  return ele % 2 === 0;
});

console.log(main_Array_After_Filter_Function);

const main_Array_After_Reduce_Function = mainArray.reduce((a, b) => {
  return a + b;
});

console.log(main_Array_After_Reduce_Function);

// ACTIVITY - 4

const for_Loop_Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < for_Loop_Array.length; i++) {
  console.log(`This is ${for_Loop_Array[i]} value for For Loop`);
}

for_Loop_Array.forEach((element) => {
  console.log(`This is ${element} value for ForEach Loop`);
});

// ACTIVITY - 5

const two_Dimension_array = [
  ["A", "B", "C"],
  [1, 2, 3],
  [true, false],
];

console.log(two_Dimension_array);

console.log(two_Dimension_array[0][0]);
