# Store

Stroe：用于保存数据
 
通过createStore方法创建对象 

该对象的成员
- dsipatch：分发一个action
- getState: 得到仓库中当前的状态
- replaceReducer:替换掉当前的reducer
- subscribe:注册一个监听器，监听器是一个无参函数，该函数当分发一个actio之后会运行注册的监听器，该函数会返回一个函数，用于取消监听
- Symbol("observable"):RxJS