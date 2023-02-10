# React-redux介绍
* 什么是状态管理
* Redux的核心思想
* React-redux介绍
  
  ### 什么是状态管理？

  所谓状态管理，指的是吧组件之间需要共享的状态抽取出来，遵循特定的约定，统一来管理，让状态的变化可以预测

  组件之间通常会有一些共享的状态，在Vue或者react中我们一般会将这部分状态提升至公共父组件的props中，由父组件来统一管理共享状态，状态的改变也是由父组件执行并向下传递。这样的话会导致以下两个问题：

  * 需要将共享的状态提升至公共的父组件，若无公共父组件，往往需要自行构造，
  * 状态由父组件自上而下逐层传递，若组件层级过多，数据传递会变的很冗杂


# redux核心思想
 早期的时候。React官方提供了Flux，Flux的特点如下：
 * 单项数据流。试图事件或者外部测试用例发出Action,经由dispatch拍送给Store，Store会触发相应的方法更新数据、更新视图
 * Store可以有多个
 * Stroe不仅存放数据，还封装了处理数据的方法

 Redux本质上就是在Flux上做了些更新

 * 单项数据流。view发出action，store调用reducer计算出新的state，若state产生变化，则调用监听函数重新渲染view
 * 单一数据源，只有一个Store
 * state是只读的，每次状态更新之后只能返回一个新的state
 * 没有Dispatch，而是在store中集成了dispatch方法，stroe.dispatch()是view发出action的唯一途径
 * 支持使用中间件管理异步数据流


需要在创建store的地方添加如下代码；
export const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())