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

# 迭代器 iterator

JS语言规定，一个对象具有next方法，并且next方法满足一定的约束，则该对象是一个迭代器(iterator)

next方法的约束：该方法必须返回一个对象，并且该对象至少具有两个属性：

- value: any类型 下一个数据的值，如果done属性为true， 通常会将value设置为undefined
-  done: bool类型 是否已经迭代完成

通过迭代器的next方法，可以依次取出数据，并通过返回的done属性，判定是否迭代结束。

### 迭代器创建函数 iterator creator

它是一个函数，调用该函数返回一个迭代器，该函数称之为迭代器创建函数，可以简称为迭代器函数

## 可迭代协议

ES6中出现了for-of循环 ，该循环就是用于迭代某个对象的，因此，for-of循环要求对象必须是可迭代的（对象必须满足可迭代协议）

 约束如下：
1. 对象必须要有一个知名符号属性（symbol.iterator ）
2. 该属性必须是一个无参的迭代器创建函数
  
  ## for-of循环的原理

  调用对象的[Symbol.iterator ]方法，得到一个迭代器。不断调用next方法 ，只要返回的done属性仍为false，，则将返回的value传递给变量，，然后进入循环体执行一次 