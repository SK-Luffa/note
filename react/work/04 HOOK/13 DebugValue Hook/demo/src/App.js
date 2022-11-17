import React,{useState,useEffect,useDebugValue} from 'react';

const App = () => {
 const [n,setn] =useState(0)
  useDebugValue(n)
  useEffect(()=>{ 
    console.log("effect");
  
  },[])
  return (
    <div>
      {n}
      <button onClick={()=>{
        setn(n+1)
      }}>_1</button>
    </div>
  );
};

export default App;