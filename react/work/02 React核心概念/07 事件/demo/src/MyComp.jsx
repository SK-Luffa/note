import React, {Component} from 'react'

export default class MyComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: props.number,
        }
        console.log(this.props);


        const timer = setInterval(() => {
            this.setState({
                number: this.state.number - 1
            })
            if (this.state.number === 0) {
                clearInterval(timer)
                this.props.onOver && this.props.onOver()
            }
        }, 1000)
    }

    hands() {
        console.log(this, 123);
    }

    render() {
        return (
            <h1 onClick={this.props.onClick}>
                倒计时：{this.state.number}
            </h1>
        )
    }
}
