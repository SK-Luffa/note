# 自定义Hook

State Hook:useState
Effect Hook:UseEffect

##### 自定义Hook
  定义：将一些常用的，跨越多个组件的Hook功能，抽离出去形成一个函数，该函数就是自定义HOOK
 
 * 自定义HOOk由于其内部需要使用HOOK功能，所以它本身也需要按照HOOk的规则实现
   1. 函数名必须以use开头
   2. 调用自定义HOOK时，应该放到最顶层


   例如：
   1. 很多组件都需要在第一次加载完成之后，获取所有学生的数据
   2. 很多组件都需要在第一次加载完成之后，启动一个计时器，然后在组件销毁时卸载

> 在使用Hook的时候，如果没有严格按照Hook的规则进行，eslint的一个插件会报出警告——（eslint-plugin-react-hooks）
   
