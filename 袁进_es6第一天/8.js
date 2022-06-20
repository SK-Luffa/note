var proms = [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)];

// Promise.all(proms).then(
//   (data) => {
//     console.log(data);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

Promise.allSettled(proms).then((data) => {
  console.log(data);
});
