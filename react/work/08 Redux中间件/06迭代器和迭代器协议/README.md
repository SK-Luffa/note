# 迭代器和可迭代协议

- redux-thunk:需要改动action，可接收action是一个函数
- redux-promise:需要改动action，可接收action是一个primise对象或action的payload是一个promise对象

>以上两个中间件，会导致acttion或action创建函数不再纯净
>rerux-saga将解决上述问题，它不仅可以保持action action创建函数、reducer的纯净，而且还用模块化方式解决副作用，并且功能非常强大
> redux-saga是建立在ES6生成器基础上的，要熟练的使用saga，必须理解生成器。
>要理解生成器，就必须先理解迭代器和可迭代协议

# 迭代

类似于遍历

遍历：有多个数据组成的集合数据结构（map、array、set）,需要从该数据中依次取出数据进行某种操作  
