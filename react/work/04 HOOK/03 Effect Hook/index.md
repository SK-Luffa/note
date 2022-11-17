# Effect Hook

Effect Hook：用于在函数组件中处理副作用

 副作用：

 1. ajax请
 2. 计时器
 3. 其他异步操作
 4. 更改真实dom对象
 5. 本地存储 
 6. 其他会对外部产生影响的操作

 
 函数： useEffe,该函数接收一个函数作为参数，接收的函数就是要进行副作用操作的函数

 **细节**
 1. 副作用函数运行的时间点，是在页面真是的UI渲染完成之后，因此他的执行是异步的，不会阻塞浏览器
       1. componentDidMount和componentDidUpdate的区别
           componentDidMount和componentDidUpdate更改了真实的DOM，但是用户还没有看到UI更新（同步的）
       2. useEffect中的副作用函数，更改了真实的DOM，并且用户已经看到UI更新(异步的)。
 2. 每个函数组件可以有多个useEffect，但不要放入判断循环等 代码块
 3. useEffect中的副作用函数，可以有返回值，返回值必须是一个函数，该函数称之为清理函数
       1. 清理函数运行的时间点：在每次运行副作用函数之前
       2. 首次渲染组件不会运行
       3. 组件被销毁时 一定会运行
 4. useEffect函数,可以传递第二个参数
       1. 第二个参数是一个数组
       2. 该数组中记录副作用函数依赖的数据
       3. 当组件重新渲染之后，只有当副作用函数所依赖的数据和上次不一样时，才会执行副作用函数
       4. 所以，当传递了依赖数据之后，如果数据没有发生变化
           1. 副作用函数仅在第一次渲染后运行
           2. 清理函数仅在卸载组件后运行
           3. 使用空数组作为依赖项，则副作用函数仅在挂载时运行
 5. 副作用函数中，，如果使用了函数上下文中的变量，则由于闭包的影响，会导致副作用函数中变量不会实时变化
 6. 如果副作用函数在每次注册时，会覆盖掉之前的副作用函数，因此尽量保持副作用函数稳定，否则控制起来会比较复杂
      