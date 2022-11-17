 import React from 'react';
 import "./index.css"
const Menu = () => {
     return (
         <ul className='menu'>
             <li><a href="/Admin/Layout/Student">学生管理</a></li>
             <li><a href="/Admin/Layout/add">添加学生</a></li>
             <li><a href="/Admin/Layout/courses">课程列表</a></li>
             <li><a href="/Admin/Layout/courses/add">添加课程</a></li>
         </ul>
     );
 };
 
 export default Menu;