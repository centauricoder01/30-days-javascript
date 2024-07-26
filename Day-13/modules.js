function addTwoNumber(numOne, numTwo) {
  return numOne + numTwo;
}

const exportObject = {
  name: "Rajendra",
  age: 22,
  salary: "1 CR",
  fullDetail: function () {
    console.log(
      `My Name is ${this.name} and I am ${this.age} year old. My salary is ${this.salary}`
    );
  },
};

const defaultExport = () => {
  console.log(`This is Default Export, that i am exporting value`);
};

export default defaultExport;
export { addTwoNumber, exportObject };
