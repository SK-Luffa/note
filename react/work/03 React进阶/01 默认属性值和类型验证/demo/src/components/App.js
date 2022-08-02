import React from 'react'
import FuncDefault from "./FuncDefault"
// import ClassDefault from "./ClassDefault"
import Comp from "./Comp"
import "./index.css"
export default function App() {
  return (
    <div >
        <Comp a={"123"} />
          <FuncDefault classX={"zha"} a={10} b={20} c={30}/>
          {/* <ClassDefault a={30} b={20} c={10}/> */}
    </div>
  )
}
