import React, { Component } from 'react'
import Modal from "./Modal"
export default class Test extends Component {
    state = {
        showModal: false
    }
   onColse=()=>{
       this.setState({
           showModal: !this.state.showModal
       })
   }
    render() {
 
        return (
            <>
                {
                    this.state.showModal ? (<Modal kus={this. .showModal} bg="rgba(9,9,9,0.7)" children="801283918209380128039" onClose={this.onColse} />) : null
                }
                <button onClick={() => {
                   this.onColse();
                }} >显示/隐藏</button>
            </>

        )
    }
}
