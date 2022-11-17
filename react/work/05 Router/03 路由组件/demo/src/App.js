import React from 'react';
import { BrowserRouter as Router, Route,Routes   } from "react-router-dom"


// 访问 /a 时 显示函数组件 A
function A(){
  return <h1>组件A</h1>
}
// 访问 /b 时 显示函数组件 B
function B() {
  return <h1>组件B</h1>
}
// 访问 /c 时 显示函数组件 C 
function C() {
  return <h1>组件C</h1>
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path='/a' element={<A/>} />
        <Route path='/b' element={<B/>} />
        <Route path='/c' element={<C/>} />
      </Routes>
    </Router>

  );
};

export default App;