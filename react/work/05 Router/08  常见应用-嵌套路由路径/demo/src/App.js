import React from 'react'
import { BrowserRouter, Switch, Route,Link} from 'react-router-dom'
 import routeConfig from "./RouteConfig"
function User(props) {
  console.log(props.match.url);
  return <div>
    <h1>user组件固定区域</h1>
    <p>
      <Link to={routeConfig.user.update}>用户信息</Link>
      <Link to={routeConfig.user.pay.root} >充值</Link>
    </p>
    <div style={{
      height: 500,
      width: 500,
      background: "#f40",
      border: "2px solid #ccc",
      margin: "0 auto"
    }}>
      <Route path={routeConfig.user.update} component={UserUpdate}/>
      <Route path={routeConfig.user.pay.root} component={UserPay} />
    </div>
  </div>
}
function UserUpdate() {
  return <>
    <h1>修改用户信息</h1>
  </>
}
function UserPay() {
  return <h1>用户充值</h1>
}
export default function App() {
  return (
   <BrowserRouter>
     <Switch>
   
    <Route path={routeConfig.user.root} component={User} />
     </Switch>
   </BrowserRouter>
   
  )
}
