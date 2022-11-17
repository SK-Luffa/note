import React from 'react';

import { BrowserRouter, Switch, Route ,withRouter} from "react-router-dom"

const BS=withRouter(B)
function News(props) {
console.log(props.match,"math");
  return <>
    <h1>这是a</h1>
    <p>访问地址：{props.location.pathname}</p>
    <p>{props.match.params.yarn}年{props.match.params.month}月{props.match.params.day}日</p>
     <BS />
  </>
}
function B(props) {
  return <>

    <button onClick={() => {
      props.history.push("/")
    }}>B</button>
  </>
}
// function b(props) {
//   return <>
//     <h1>这是b</h1>
//     <button onClick={() => {
//       props.history.push("/a")
//     }}>B</button>
//   </>
// }
function NotFoud() {
  
  return <h1>
    找到不到页面
  </h1>
}
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path="/news-:yarn-:month-:day" component={News} />
          {/* <Route path="/b" component={b} /> */}
          <Route path='/' component={NotFoud} />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;