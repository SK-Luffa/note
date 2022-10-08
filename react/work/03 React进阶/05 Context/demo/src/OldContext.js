import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildA(props, context) {
  return <div>
    <h1> ChildA</h1>
    {context.a}
    {context.b}
   
   
    <ChildB />
  </div>
}
ChildA.contextTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.string.isRequired,
}
class ChildB extends React.Component {
  //声明需要使用哪些上下文中的数据
  static contextTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    onChangeA:PropTypes.func
  }
  // constructor(props,context){
  //   super(props,context)//将参数的上下文交给父类处理
  //   console.log(this.context);
  // }
  render() {
    return <p>ChildB {this.context.a} {this.context.b}
      <button onClick={() => {
       this.context.onChangeA(2)
      }}>加2</button>
    </p>
  }
}


export default class OldContext extends Component {
  //约束了上下文中的类型
  static childContextTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    onChangeA:PropTypes.func.isRequired
  }
  state={
    a:123,
    b:"890"
  }



  // 得到上下文当中的数据
  getChildContext() {

    return { 
   
      a: this.state.a,
      b: this.state.b,
      onChangeA:(newa)=> {     
      
        this.setState({
          a: this.state.a + newa
        })

      }
    }
  }
  render() {
    return (
      <div>OldContext
        <ChildA />
      </div>
    )
  }
}
