const s1 = Symbol("s");
const s2 = Symbol("s");

const obj = {a:1};
obj[s1] = "a";
obj[s2] = "b";

// Symbol 值作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
// const arr = Object.getOwnPropertySymbols(obj);
// for (const v of arr) {
//   console.log(obj[v]);
// }

const arr = [1,2,,4,5]

console.log(obj.toString());
console.log(arr.toString());
