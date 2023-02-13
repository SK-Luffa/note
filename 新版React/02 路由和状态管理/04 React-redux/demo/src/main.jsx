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



