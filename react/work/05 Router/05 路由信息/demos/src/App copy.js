import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom"
import qs from "query-string"

function a(props) {
  // debugger
  let search = qs.parse(props.location.search) 
  let  hash=qs.parse(props.location.hash)
  console.log(search, hash);
  return <>
    <h1>这是a</h1>
    <p>访问地址：{props.location.pathname}</p>
    <button onClick={() => {
      props.history.push("/b")
    }}>A</button>
  </>
}
function b(props) {
  return <>
    <h1>这是b</h1>
    <button onClick={() => {
      props.history.push("/a")
    }}>B</button>
  </>
}
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
          <Route path="/a" component={a} />
          <Route path="/b" component={b} />
          <Route path="/" component={NotFoud} />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;