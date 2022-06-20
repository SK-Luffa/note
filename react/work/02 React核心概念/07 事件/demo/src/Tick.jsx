import React, {Component} from 'react'
import MyComp from './MyComp'

export default class Tick extends Component {
    state = {
        isover: false,//是否倒计时已经完成
        status: "正在倒计时"
    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this, 123);
    }

    render() {

        if (this.state.isover) {
            console.log(this, 123);
            this.status = "倒计时完成"
        }
        return (
            <div>
                <MyComp onClick={this.handleClick} number={1} onOver={() => {
                    this.setState({
                        isover: true
                    })
                }}/>
                <h2>{this.status}</h2>
            </div>
        )
    }
}
