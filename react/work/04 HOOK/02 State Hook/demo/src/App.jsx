import React,{useState} from 'react'


export default function App() {
  //  const arr= useState(0);//使用一个状态，该状态的mo默认值是0
  //  const n=arr[0];//得到状态的值，也就是 0
  //  const s=arr[1];//得到一个函数 ，该函数用于改变状态


    // 其实没有必要写的这么麻烦，我们可以利用es6的结构来实现
    const [n,s]=useState(0)
    const [blocks,nones]=useState(true)
    const [data,setdata]=useState({
      x:1,
      y:2,
    })
  

  return (
    <div>
      <p style={{display:blocks?"block":"none"}}>
        <button onClick={() => {
          s(n - 1)
        }}>-</button>
        <span>{n}</span>
        <button onClick={() => {
          s(n + 1)
        }}>+</button>
      </p>
      x:{data.x}
      y:{data.y}
      <button onClick={()=>{
        setdata({
          ...data,
          x:data.x+1
        })
        setdata({
          ...data,
          x: data.x + 3
        })
      }}>X+1</button>
      <button style={{ display: blocks ? "block" : "none" }} onClick={()=>{
        nones( !blocks)
      }} >显示/隐藏</button>

  
    </div>
  )
}
