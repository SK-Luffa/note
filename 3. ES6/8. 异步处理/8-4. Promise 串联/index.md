# 8-5. Promise 的串联

当后续的Promise需要用到之前的promise的结果时，就需要进行 Promise的串联

Promise对象中，无论是then方法还是catch方法，他们都具有返回值，返回的是一个全新的Promise对象，他的状态满足下面的规则:

1. 如果当前的Promise是未决状态，得到的新的 promise 也是未决状态
2. 如果当前的Promise是已决状态，会运行后续的相应处理函数，并将后续处理函数的结果（返回值）作为resolved状态数据，应用到新的promise中。如果后续处理函数发生错误。则把返回值作为rejected状态数据，应用到新的Promise中

**后续的promise一定会等到前面的promise有了后续处理结果后，才会变成已决状态**

如果前面的Promise的后续处理，返回的是一个Promise ，则返回的新的Promise状态和后续 处理返回的Promise状态保持一致。