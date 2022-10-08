import React, { Component } from 'react'

export default class Comp extends Component {
  // constructor(props){
  //   super(props)
  //   this.text=React.createRef()
  //   console.log(this.txt)
  // }
  handleClick=()=>{
    console.log(this);
    // this.refs.txt.focus()
    this.txt.focus()
    this.setState({})
  }
  componentDidMount(){
    console.log("didMount",this.txt)
  }
  render() {
    return (
      <>
        <input ref={el=>{
          console.log("函数被调用了",el);
          this.txt=el
        }} type="text" />
      {/* <input ref={this.txt} type="text" /> */}
      <button onClick={this.handleClick}>聚焦</button>
      </>
    )
  }
}
