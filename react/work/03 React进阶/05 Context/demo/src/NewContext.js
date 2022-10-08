import React, { Component } from 'react'
 
const nc= React.createContext();
console.log(nc,123)

function ChildA(props){

  return <div>
    <h1>ChildA</h1>
    <nc.Consumer>
      {value=>{
       <>
       {value.a}
       {value.b}
       </>
      }}
    </nc.Consumer>
    <ChildB />
  </div>
} 

class ChildB extends React.Component{
   static  contextType=nc
  render(){
    return (
    <div>
      <h1>ChildB</h1>
      :a{this.context.a} b:{this.context.b}
    </div> 
    )
  }
}


export default class NewContext extends Component {
  state={
    a:0,
    b:"abc"
  }
  render() {
 
    return (
      <>
       <nc.Provider value={this.state }>
          <ChildA />
          </nc.Provider> 
      </>
    )
  }
}
