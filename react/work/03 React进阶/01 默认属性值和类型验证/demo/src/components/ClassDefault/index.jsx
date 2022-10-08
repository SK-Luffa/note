import React, { Component } from 'react'

export default class index extends Component {
    constructor(props){
        console.log(props);
    }
  render() {
    return (
      <div className='zha'>
            a:{this.props.a},b:{this.props.b},c:{this.props.c}
      </div>
    )
  }
}
index.defaultProps={
    a: 1,
    b: 2,
    c: 3
}
