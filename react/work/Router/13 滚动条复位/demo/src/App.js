import React from 'react';

import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import WithSCrollTop from './WithSCrollTop';
function Page1(){
  return <div className="page page1">
    as
    sq
    qqweqwe
    qweqweqweqwe
    qweqweqweqweqweqw
    qweqweqweqweeqweqwe
    qweqweqwe <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p><p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
  </div>
}
function Page2() {
  return <div className="page page1">
    as
    sq
    qqweqwe
    qweqweqweqwe
    qweqweqweqweqweqw
    qweqweqweqweeqweqwe
    qweqweqwe <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p><p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
    <p>dasdasdasds</p>

    <p>dasdasdasds</p>
  </div>
}
const Page1s=WithSCrollTop(Page1);
const Page2s = WithSCrollTop(Page2);
const App = () => {
  return (
    <Router>
      <Link style={{position:"fixed" }} to="/">Page1</Link>
      <Link style={{ position: "fixed",left:"80px" }} to="/page2">Page2</Link>
      <Route path='/' component={Page1s} />
      <Route path='/page2' component={Page2s} />
    </Router>
  );
};

export default App;