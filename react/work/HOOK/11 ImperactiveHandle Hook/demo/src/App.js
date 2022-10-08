
import React, { Component, useImperativeHandle, useRef } from 'react';

// class Test extends Component {
//   method(){
//     console.log("Test method called")
//   }
//   render() {
//     return (
//       <h1>
//         "Test Component"
//       </h1>
//     );
//   }
// }

function Test(props,ref) {
  useImperativeHandle(ref,()=>{

    // 如果不使用依赖项(第三个参数)，则每次运行函数组件都会重新进行加载
    // 如果使用了依赖项(第三个参数)，则第一次调用后 会缓存起来，只有依赖项发生变化 才会重新进行加载
    return {
      methods:function(){ 
        console.log("useImperativeHandle");
      }
    }
  })
  return (
    <h1 ref={ref}>
      
      "Test Component"
    </h1>
  );
}
const Tests = React.forwardRef(Test)

const App = () => {
  const testref = useRef()
  return (
    <div>
      <Tests ref={testref} />
      <button onClick={() => {
      testref.current.methods()
      
      }}>点击</button>
    </div>
  );
};

export default App;