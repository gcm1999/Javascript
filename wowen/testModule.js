import { clone } from "./clone.js";
const obj = { a: 2, b: { c: 3 } };
const obj2 = clone(obj);
console.log(obj===obj2);
