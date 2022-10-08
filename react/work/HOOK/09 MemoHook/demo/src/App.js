/* eslint-disable no-unused-expressions */
import React, { useState,useMemo,useEffect } from 'react';



class Test extends React.PureComponent {
  render() {
    console.log("Test Render");
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={() => { this.props.onClick }}></button>
      </div>
    );
  }
}

function Parten(){
  console.log("Parten  Render");
  const [txt, settxt] = useState(123);
  const [n, setn]=useState(0)
  const handleClick = useMemo(()=>{
    return console.log(txt);
  },[txt])
  const effs=useEffect(()=>{
    console.log(456);
    return ()=>{
      return console.log("1231");
    }
  },[])
  console.log("qwe",effs,handleClick)
  return (
    <div>
      {/* <Test text={txt} onClick={() => {
        settxt(txt)
      }} /> */}
      <Test text={txt} onClick={handleClick} />
      <input type="number"
      value={n}
      onChange={e=>{
        setn(e.target.value)
      }}
       name="" id="" />
    </div>
  );
}

const App = () => {
  
  return (
    <div>
      <Parten />
    </div>
  );
};

export default App;