import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 引入redux仓库
import { store } from './redux/store'

function render(){
  ReactDOM.createRoot(document.getElementById('root')).render(

    <App store={store} />
    // 让redux和react建立关联
  )
}
render()

// subscribe订阅方法，会在仓库的状态发生改变的时候触发
store.subscribe(render)
