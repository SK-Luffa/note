Promise.any([Promise.resolve(1), Promise.reject(2), Promise.reject(3)]).then(
  (data) => {
    console.log(data);
  },
  (reason) => {
    console.log(reason);
  }
);
