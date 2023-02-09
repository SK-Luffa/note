import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 引入redux仓库
import { store } from './redux/store'

// 让redux和react建立关联
ReactDOM.createRoot(document.getElementById('root')).render(

    <App store={store} />
)
