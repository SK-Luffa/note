import React, { Component } from 'react'

class B extends React.cloneElement {
    render() {
        return <h1 ref={this.props.ref1}>组件A
            <span>{this.props.word}</span>
        </h1>
    }
}

function A(props, ref) {
    console.log(ref);
    return <h1>组件A
        <span>{props.word}</span>
    </h1>
}
//传递一个函数组件A，得到一个新的组件NewA
const NewA = React.forwardRef(A)
export default class App extends Component {
    ARef = React.createRef()
    render() {
        return (
            <>
                <NewA ref={this.ARef} word="张三" />
            </>
        )
    }
}
