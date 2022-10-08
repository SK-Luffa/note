import React,{useState,useEffect,useRef} from 'react';

const App = () => {
  const [N,setn]=useState(0)
  const setref = useRef()
  useEffect(()=>{
    setref.current.innerText=Math.random().toFixed(2)
  })

  return (
    <div>
      <h1 ref={setref}>{N}</h1>
      <button onClick={()=>{
        setn(N+1)
      }}>+1</button>
    </div>
  );
};

export default App;