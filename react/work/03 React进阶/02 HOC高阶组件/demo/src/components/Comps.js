import React from 'react'
export class A extends React.Component{
    render(){
        return <h1 >A: {this.props.a}</h1>
    }
}

export class B extends React.Component {
    render() {
        return <h1 >B:{this.props.b}</h1>
    }
}