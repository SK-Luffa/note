# dva

> 官网：https://dvajs.com/
> dva不仅仅是一个第三方库，更是一个框架，它主要整合了redux的相关内容，让我们处理数据更加容易，实际上dva依赖了很多：react、react-router、redux、redux-sagaredux-saga、react-redux、connected-react-router等。


# dva的使用

1. dva默认导出一个函数，通过调用该函数，可以得到一个dva应用程序对象
2. dva对象.router：路由方法，传入一个函数，该函数返回一个react节点，将来应用程序启动后，会自动渲染该节点。
3. dva对象.start:该方法用于启动dva程序应用，可认为启动的就是react应用程序，该函数传入一个选择器，用于选中页面中的某个dom元素，react会将内容渲染到该元素内部
4. dva对象.model:该方法用于定义一个模型，该模型可以理解为redux的action、reducer、redux-saga的副作用处理的整合，整合成一个对象，将该对象传入model方法即可
    1. namespace:命名空间，该属性是一个字符串，字符串的值，会被作为仓库中的属性保存
    2. state:该模型的默认状态
    3. reducers:该属性配置为一个对象，对象中的每个方法就是一个reducer,dva约定方法的名字就是匹配的action的类型
    4. effects: 处理副作用，底层是使用redux-saga实现的，该属性配置为一个对象，对象中的每个方法均处理一个副作用。方法的名字就是匹配的action类型。
       1. 函数的参数1:action
       2. 函数的参数2:一个封装好的的saga/effects对象
    5. subscriptions