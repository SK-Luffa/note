import React, {Component} from 'react';
import "./Ball.css"

class Ball extends Component {
    constructor(props) {
        //属性中需要分别传递横纵坐标上的速度，每秒移动的像素值
        //props.xSpeed,props.ySpeed
        //需要在传递一个背景颜色  background 如果没有传递用red
        super(props);
        this.state = {
            left: props.left || 0,//横坐标
            top: props.top || 0,//纵坐标
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed
        }
        let duration = 16//间隔的毫秒数

        setInterval(() => {

            //    根据速度改变left和top值
            let xdis = this.state.xSpeed * duration / 1000;
            let ydis = this.state.ySpeed * duration / 1000;
            let newLeft = this.state.left + xdis;
            let newTop = this.state.top + ydis;
            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }

            this.setState({
                left: newLeft,
                top: newTop
            })


        }, duration)
    }

    render() {
        return (
            <div className='ball' style={{
                left: this.state.left,
                top: this.state.top,
                background: this.props.bg || "#f40"
            }}>

            </div>
        );
    }
}

export default Ball;