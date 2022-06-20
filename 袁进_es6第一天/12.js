Promise.reject(1) // p1 rejected  1
  .then(
    // p2 rejected 2
    (data) => {
      console.log(data);
      return data;
    },
    (reason) => {
      console.log(reason); // 输出1
      throw 2;
    }
  )
  .then((data) => {
    //  p3 rejected 2
    console.log(data);
  })
  .catch((reason) => {
    console.log(reason);
  });
