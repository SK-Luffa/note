import React, { Component } from 'react'

export default class App extends Component {
  state={
    val:"123",
    loves:["篮球","足球","乒乓球","羽毛球","橄榄球"],
    chooselove: ["篮球","乒乓球"]
  }


  render() {
   const   checkbox=this.state.loves.map(it=>(
          <label key={it}>
              <input type="checkbox"
                     checked={this.state.chooselove.includes(it)}
                     onChange={e=>{

                         if(e.target.checked){

                             this.setState({
                                 chooselove: [...this.state.chooselove,it]
                             })
                         }else{
                             this.setState({
                                 chooselove: this.state.chooselove.filter(l => l !== it)

                             })
                         }
                     }}
              />
              {it}
          </label>
      ))
    return (
      <div>
          {/* 默认情况下是一个非受控组件 */}
            <input type="text" value="123 " readOnly  /> 
        <input type="text" defaultValue={123}  /> 
        <input type="text" value={this.state.val} onChange={e=>{
        this.setState({
          val:e.target.value
        })  
        }} /> 
        {checkbox}
          <button onClick={()=>{
              console.log(this.state.chooselove)
          }}
          >获取选中的值</button>
      </div>
    )
  }
}

