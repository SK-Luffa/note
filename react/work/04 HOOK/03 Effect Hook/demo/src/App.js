import React,{useState,useEffect} from "react";



function App() {
  const [a,seta]=useState(0)
  // document.title = `计数器：${a}`
  useEffect(()=>{
 setTimeout(() => {
   console.log(a)
 }, 5000);

  },[])
  return (
   
    <div >
      <span>{a}</span>
      <button onClick={()=>{
        seta(a+1)
      }}>+</button>
    </div>
  );
}

export default App;
