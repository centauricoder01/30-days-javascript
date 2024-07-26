import { addTwoNumber } from "./modules.js";
import { exportObject } from "./modules.js";
import defaultExport from "./modules.js";
import * as modulefunction from "./modules.js"; // we can access values with modulefunction.anything
import _ from "lodash";
import axios from "axios";

console.log(addTwoNumber(5, 5));
console.log(exportObject, "This is imported Object");
exportObject.fullDetail();

defaultExport(); // default Import

// ACTIVITY - 4

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(_.chunk(arr, 3));

try {
  const response = await axios.get(`https://reqres.in/api/users`);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

// ACTIVITY - 5; its OPtional
