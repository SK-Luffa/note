#  React-router v6 版本学生管理系统

## 快速搭建服务器
 
选择使用 json-server( npm包) 快速搭建服务

首先 npm init 然后 npm install json-server 然后在当前文件夹的根目录创建一个db.json ，写入数据，然后在package.json 的script加上一个新的启动项   "json:server":"json-server --watch db.json",  然后 npm run json:server


## 先快速搭建整个管理系统

因为目前还没学习组件库， 我们选择使用 *BootStrap*

https://v3.bootcss.com/examples/starter-template/


因为我们用到了bootstrap 相关的样式类，所以我们需要引入Bootstrap，去 bootcdn



react-router-dom  组件：

* BrowserRouter  
* Routes
* Route
* Navigate
* NavLink
  

  # Hook

  useNavigate //跳转hook

  useLocation //当前location对象

 useParams //获取动态路由参数


## React-router  V6 路由总结

### 组件

* BrowserRouter:整个路由以history模式开始，包裹根组件
* HashRouter:整个路由以hash模式开始，包裹根组件
* Routes：类似于v5版本的Switch，主要提供一个上下文环境
  
* Route:在Route组件中书写你对应的路由，以及路由所对应的组件
    * path :匹配的路由
    * element：对应的组件
*  Navigate：导航组件，类似于useNavigate的返回值函数，只不过这是一个组件
*  NavLink:类似于Link，最终和Link一样，会被渲染为a标签，注意它和Link的区别,实际上就是当前的链接，会有一个一个名为active的激活样式，所以一般用于做顶部或者左侧导航栏的跳转
  

### Hooks 

* useloaction：获取location对象，获取到loaction对象后，我们可以获取satet属性，这往往是其他路由跳转过来的时候，会在state里面传递额外的数据
* useNavigate:调用之后会返回一个函数，通过该函数可以做跳转
* useParams:获取路由动态参数

### 补充内容

* useRoutes ：类似于vue那种配置式路由   使用实例如下：
```jsx
import React from 'react'
import { useRoutes, Navigate } from "react-router-dom"

import Home from '../components/Home'
import About from '../components/About'
import AddOrEdit from '../components/AddOrEdit'
import Detail from '../components/Detail'
export default function Index() {
    return useRoutes([
        {
            path: "/",
            element: <Navigate replace to='/home' />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/addOrEdit",
            element: <AddOrEdit />
        },
        {
            path: "/detail/:id",
            element: <Detail />
        },
        {
            path: "/edit/:id",
            element: <AddOrEdit />
        },

    ])

}

```


### 嵌套路由
直接在useRoutes进行chilren 属性的配置即可，类似于vue-router，children对应的是一个数组，数组里面数组里面是一个一个对象

之后使用Outlet组件，该组件表示匹配上的字路由渲染的位置，类似于vue中的Router组件

