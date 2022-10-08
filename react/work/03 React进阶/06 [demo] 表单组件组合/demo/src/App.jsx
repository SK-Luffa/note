import React, { Component } from 'react'
import { Provider  } from './fromContext'
import Test from "./Test"
export default class App extends Component {
    state={
        FormData:{
        },
         changeFromData:(name,val)=>{
             this.setState({
                 FormData:{
                     ...this.FormData,//表单数据对象
                     //修改formData中的数据
                     [name]:val
                 }
             })
         }
    }
  render() {
    return (
      <div>
          <Provider value={this.state}></Provider>
      </div>
    )
  }
}
