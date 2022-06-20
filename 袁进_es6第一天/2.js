const arr = [1, [2, 3, [4, 5, [6, 7]]]];
const arr1 = arr.flat(); // [1, 2, 3, [4, 5, [6, 7]]]
const arr2 = arr.flat(2); // [1, 2, 3, 4, 5, [6, 7]]
const arr3 = arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7]
