const arr = [1, 2, 3, 4, 5];

/*
    [
        {number:1, doubleNumber: 2},
        {number:3, doubleNumber: 6},
        {number:5, doubleNumber: 10},
    ]
*/

const result = arr.flatMap((it) =>
  it % 2 !== 0 ? { number: it, doubleNumber: it * 2 } : []
);

// const result = arr
//   .filter((it) => it % 2 !== 0)
//   .map((it) => ({ number: it, doubleNumber: it * 2 }));
console.log(result);
