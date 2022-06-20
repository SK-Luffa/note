import React from "react";

export default class MyClassComp extends React.Component {
    constructor(props) {
        super(props);//这里必须调用父类的构造函数  this.props=props
        console.log(props)
    }

    render() {
        return <h1>类组件{this.props.number}</h1>
    }
}