import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Personal from "./Personal"
import PRR from "./ProtectetRoute"
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/"  >首页</Link>
          </li>
          <li>
            <Link to="/login">登陆</Link>
          </li>
          <li>
            <Link to="/personal">个人中心</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <PRR path="/personal" exact component={Personal} />
        </Switch>

      </div>
    </BrowserRouter>
  );
};

export default App;