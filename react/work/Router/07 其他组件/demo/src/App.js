import React from 'react';
// import Link from './Link';
import { BrowserRouter, Route, Switch,Link,NavLink,Redirect} from "react-router-dom"

function PageA() {
  return <>
  <h1>A页</h1>
  </>
}

function PageB() {
  return <>
  <h1>B页</h1>
  </>
}
function PageC() {
  return <>
    <h1>C页</h1>
  </>
}
function NavBar(){
  return <>
  
    
    <NavLink activeclass="active_class" innerRef={(node)=>{
      console.log(node);
    }} to="/abc">去a页</NavLink>
    <Link replace to={{
      pathname:"/b",
      hash:"#bbb",
      search:"?a=1&b=2"
    }
    }>去b页</Link>
    <Redirect to="/c" push={true} />  

    
  </>
}

const App = () => {
  return (
    <div>
  
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/c' component={PageC} />
          <Route path='/a' component={PageA} />
          <Route path='/b' component={PageB} />
         
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;
