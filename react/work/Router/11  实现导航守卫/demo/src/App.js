import React from 'react';
import { Route, Link } from 'react-router-dom'
import RouteGuard from './RouteGuard';


function Page1() {
  return <>
    <h1>Page1</h1>
  </>
}
function Page2() {
  return <>
    <h1>Page2</h1>
  </>
}
const App = () => {
  return (
    // <Router getUserConfirmation={(mes)=>{
    //   console.log(`禁止跳转，${mes}`,mes);
    // }}>
    <RouteGuard onChange={(prevLoction, location, action) => {
      console.log(`日志：从${prevLoction.pathname}进入页面${location.pathname}进入方式：${action}`);
    }}>
      <Link replace to="/page1" >page1</Link>
      <Link to="/page2">page2</Link>
     
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </RouteGuard>
    // </Router>
  );
};

export default App;