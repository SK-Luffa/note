const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // ES5
// console.log(keys);
const values = Object.values(obj);
// console.log(values);

// const entries = Object.entries(obj);

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
