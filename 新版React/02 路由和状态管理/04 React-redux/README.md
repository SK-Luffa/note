# React-Redux 介绍

redux是一个独立的第三方库，之后react在redux的基础上推出了react-redux https://react-redux.js.org/

最新版的react-redux已经全面拥抱了 hooks，内置了诸如：

* useSelector()
* useDeispatch()
* useStore()
  
这一类的的hook，只要我们掌握这类hook，就可以轻松上手

另外redux官方还推出了  Redux Toolkit,来简化redux的使用 https://redux-toolkit.js.org/ 

因此在React应用中，状态管理库的使用 一般都是 React-redux +  Redux Toolkit


npm install @reduxjs/toolkit react-redux


main.js的变化：需要从React-redux中引入Provider组件，用于提供一个上下文环境，包裹住<App/>，之后仓库会作为Provider的store属性，不需要再在APP.jsx个组件上面挂载了

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux"
// 引入redux仓库
import store  from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App  />
  </Provider>

  // 让redux和react建立关联
)


```

store的变化，从toolkit引入 configureStore 方法,用于创建数据仓库

```js
//引入创建 stroe的方法
import { configureStore} from "@reduxjs/toolkit"

// 调用该方法时传入一个对象
//其中一个选项是配置reducer

export default configureStore({
    reducer:{
        
    }
})
```

 
组件连接仓库的改变，之前使用redux的时候，组件还是需要从父组件传递的props上面拿到仓库的数据，现在可以通过useSelector 这个Hook直接连接仓库

  const {list} = useSelector(state=>state.todo)

组件向仓库派发action时，的改变，首先获取dispatch()方法的方式，之前使用纯redux的时候，dsipatch是通过store拿到的 ，现在通过usedispatch

dispatch(add(value))

action之前是通过我们自己书写的action cretor来创建的，现在是直接从slice里面导出即可
```js

export const { add, del, change } = todoListSlice.actions
```


