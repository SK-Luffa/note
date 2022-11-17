import React,{useRef} from 'react';

const App = () => {
  // const inpRef=React.createRef()
  const inpRef=useRef()
  return (
    <div>
      <input ref={inpRef} type="text" />
      <button onClick={()=>{
        console.log(inpRef.current.value); 
      }}>得到input的值</button>
    </div>
  );
};

export default App;