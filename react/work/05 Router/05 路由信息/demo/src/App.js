import React from 'react'
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom"


function A(){
  const navigate = useNavigate();
  return <>
  <p>组件A</p>
  <button onClick={()=>{
    
      navigate("/b")
  }}>跳转到B</button>
  </>
}
function B() {
  const navigate = useNavigate();
  return <>
    <p>组件B</p>
    <button onClick={()=>{
    navigate("/a")
    }} >跳转到A</button>
  </>
}
function NotFound() {
  return <>
    <p>找不到页面</p>
  </>
}
export default function App() {

  return (
    <>
    <Router>
    
      <Routes>

          <Route path='/a'  element={<A />} />
          
          <Route path='/b' element={<B  />} />
        
          <Route path='/*'element={<NotFound />} />
      </Routes>
       
    </Router>
    </>
  )
}
