import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export default class App extends Component {
    state={
        number:1,
        show:true
    }
  render() {
    const els = this.state.show ? <OldLifeCycle n={this.state.number} />:null
    return (
      <div>
        {els}
          {/* <OldLifeCycle n={this.state.number}/> */}
          <button onClick={()=>{
              this.setState(state=>({
                  number:state.number+1
              }))
          }}>n+1</button>
          <button onClick={()=>{
           this.setState({
             show:!this.state.show
           })
          }}>显示/隐藏</button>
      </div>
    )
  }
}
