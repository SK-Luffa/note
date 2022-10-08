import { useState } from "react";

// 该函数根据当前的数据，以及action，生成一个新的数据
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;

  }
}
//自定义Hook 用于抽离数据处理
function useReducer() {
  const [N, setN] = useState(0)

  function dispatch(action) {
    const newN = reducer(N, action)
    setN(newN)
  } 
  return [N,dispatch]
}
function App() {
 const [N,dispatch]=  useReducer()
  return (
    <div  >
      <button onClick={dispatch({ type: "decrease" })}>-</button>
      <span>{N}</span>
      <button onClick={() => {
        dispatch({ type: "increase" })
      }}>+</button>
    </div>
  );
}

export default App;
