import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    // 1. 
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        }
        console.log("constructor", "创建了一个新的组件")
    }
    // 2.
    componentWillMount = () => {
        this.setState({
            n: this.state.n + 1
        }
        )
        console.log("componentWillMount", '组件即将被挂载');
    } 
    // 4. 
    componentDidMount=()=>{
        console.log("componentDidMount","这个函数才是真正的只会运行一次")
    }
    // 5.
     componentWillReceiveProps=(nextProps)=>{
         console.log("componentWillReceiveProps","接收到新的属性值",nextProps);
        
     }
    //  5.
    // setState=(props)=>{
      
    //     console.log(props);
    // }
//    6.  
    shouldComponentUpdate = (nextProps,nextState)=>{
        console.log("shouldComponentUpdate", "是否应该重新渲染", this.props, nextProps, this.state, nextState)
         if(this.props.n===nextProps.n&&this.state.n===nextState.n ){
             return false
         }
        return true
      }
    //   7.
    componentWillUpdate = (nextProps, nextState)=>{
        console.log("componentDidUpdate","组件即将被重新渲染");
    }
    // 8 render
    // 9 
    componentDidUpdate = (nextProps, nextState)=>{
        console.log("componentDidUpdate", "组件即将被重新渲染" , nextProps, nextState);
    }
    // 10.  销毁
    componentWillUnmount(){
        console.log('销毁');
    }
// 3。
    render() {
        console.log("render",'渲染，返回的react元素会被挂在到虚拟dom树中')
        return (
            <div>
                <h1>
                    旧版生命周期
                </h1>
                <h2>属性n:{this.props.n}</h2>
                <h2>状态n:{this.state.n}</h2>
            </div>
        )
    }
}
