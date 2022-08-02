import React from 'react'
import FuncDefault from "./FuncDefault"
// import ClassDefault from "./ClassDefault"
import "./index.css"
export default function App() {
  return (
    <div >
          <FuncDefault classX={"zha"} a={10} b={20} c={30}/>
          {/* <ClassDefault a={30} b={20} c={10}/> */}
    </div>
  )
}
