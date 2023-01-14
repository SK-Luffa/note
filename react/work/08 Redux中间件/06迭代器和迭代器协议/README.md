# 迭代器和可迭代协议

- redux-thunk:需要改动action，可接收action是一个函数
- redux-promise:需要改动action，可接收action是一个primise对象或action的payload是一个promise对象

>以上两个中间件，会导致acttion或action创建函数不再纯净
>rerux-saga将解决上述问题，它不仅可以保持action action创建函数、reducer的纯净，而且还用模块化方式解决副作用，并且功能非常强大
> redux-saga是建立在ES6生成器基础上的，要熟练的使用saga，必须理解生成器。
>要理解生成器，就必须先理解迭代器和可迭代协议

# 迭代

类似于遍历

遍历：有多个数据组成的集合数据结构（map、array、set等其他类数组）,需要从该数据中依次取出数据进行某种操作 

迭代：按照某种逻辑，依次取出下一个数据进行处理

# 迭代器

JS语言规定，一个对象具有next方法，并且next方法满足一定的约束，则该对象是一个迭代器(iterator)

next方法的约束：该方法必须返回一个对象，并且该对象至少具有两个属性：

- value: any类型 下一个数据的值
-  done: bool类型 是否已经迭代完成
