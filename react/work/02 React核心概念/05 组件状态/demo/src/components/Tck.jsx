// 计时器，用作倒计时
import React, {Component} from 'react';
// 初始化状态 1 ：实验阶段
this.state = {
    left: this.props.number
};

class Tck extends Component {
    constructor(props) {
        super(props);
        // // 初始化状态 2:主流方式
        // this.state={
        //     left:this.props.number
        // };
        this.timer = setInterval(() => {
            if (this.state.left === 0) {
                return clearInterval(this.timer)
            }
            this.setState({
                // mixin 数据混合 相当于用了object,assign  将相同属性的值进行覆盖
                left: this.state.left - 1
            })

            //重新设置状态，触发自动的重新渲染
        }, 1000)
    }

    render() {
        return (
            <h1>倒计时剩余时间：{this.state.left}</h1>
        );
    }
}

export default Tck;