# Redux中间件（Middleware）

中间件：类似于插件，可以在不影响原本功能、并且不改动原本代码的基础 上，对其功能进行增强。在redux中，中间件主要用于增强dispatch函数

实现redux中间件的基本原理，是更改仓库中的dispatch函数

Redux中间件到书写：
- 中间件本身就是一个函数，该函数接受不了一个store参数，表示创建仓库，该仓库并非一个完整的仓库对象，仅包含getState，dispatch  该函数的运行时间是：是在仓库创建之后运行
- 由于创建仓库后需要自动运行设置的中间件函数，因此，需要在创建仓库时，告诉仓库有哪些中间件
   - 需要使用redux中的 applyMiddleware 函数，将函数的返回结果作为createStore()的第二个或第三个参数
- 中间件函数必须返回一个dispatch创建函数

- applyMiddleware函数，用于记录有哪些中间件，他会返回一个函数
    - 该函数用于记录创建仓库的方法 然后又返回一个函数
        - 然后调用这个仓库并传入reducer和默认值
