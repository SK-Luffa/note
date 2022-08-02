import React, { Component } from 'react'
import propTypes from "prop-types"

export default class Comp extends Component {
  static propTypes={
       a:propTypes.number.isRequired,//a属性必须是一个数字类型
  }

  render() {
    return (
      <div>{this.props.a}</div>
    )
  }
}
