/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useEffect } from 'react';



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


function Parten() {
  console.log("Parten  Render");
  const [txt, settxt] = useState(123);
  // const [n, setn] = useState(0)
  const handleClick = useCallback(() => {
    // console.log(n);
    settxt(txt+1)
  }, [txt])
  useEffect(() => {
    console.log(txt)
  }, [txt])
  return (
    <div>
      {/* <Test text={txt} onClick={() => {
        settxt(txt)
      }} /> */}
      <Test text={txt} onClick={handleClick} />
      {/* <input type="number"
        value={n}
        onChange={e => {
          setn(e.target.value)
        }}
        name="" id="" /> */}
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