import React from 'react'

import {NavLink} from 'react-router-dom'
import Router from "./router/index"
import "./CSS/App.css"

export default function App() {
  // let loaction=useLocation();
  // console.log(loaction);
  return (
    // 最外层容器
    <div className="container" id='app'>
      {/* 导航栏 */}
      <nav className="navbar navbar-inverse   navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">学生管理系统</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"> <NavLink to="/home" className='navigation' >主页</NavLink></li>
              <li><NavLink to="/about">关于我们</NavLink></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li ><NavLink to='/addOrEdit'>添加用户 </NavLink></li>
            </ul>
          </div>
        </div> 
      </nav>
      <div className="routers">
        <Router />
        {/* 匹配上的路由所对应的组件显示在这个位置 */}
        {/* <Routes > */}
          {/* 在route组件中书写对应的路由，以及路由所对应的组件 */}
          {/* <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/addOrEdit' element={<AddOrEdit />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/edit/:id' element={<AddOrEdit />} />
        </Routes>  */}
      </div>
     
    </div>
   
  )
}
