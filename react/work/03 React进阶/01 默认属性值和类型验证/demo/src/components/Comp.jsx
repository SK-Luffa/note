import React, { Component } from 'react'
import PropTypes from 'prop-types'

console.dir(PropTypes.number)
export default class Comp extends Component {
  static propTypes = {
    a: PropTypes.number.isRequired,//a属性必须是一个数字类型 且必须是必填的
    b: PropTypes.bool.isRequired,
    onclick:PropTypes.func
  }
  static defaultProps = {
b:false
  }

  render() {
    return (
      <div>{this.props.a}</div>
    )
  }
}
