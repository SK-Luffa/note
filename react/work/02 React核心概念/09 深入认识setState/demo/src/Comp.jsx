import React, {Component} from 'react'

export default class Comp extends Component {
    state = {
        n: 0
    }

    constructor(props) {
        super(props)
        setInterval(() => {
            this.setState({
                n: this.state.n + 1
            })
            this.setState({
                n: this.state.n + 1
            })
            this.setState({
                n: this.state.n + 1
            })
        }, 1000);
    }

    handleClick = () => {
        this.setState(cur => ({
            n: cur.n + 1,

        }), () => {
            console.log(1);
        })
        this.setState(cur => ({
            n: cur.n + 2
        }), () => {
            console.log(2);
        })
        this.setState(cur => ({
            n: cur.n + 3
        }), () => {
            console.log(3);
        })

    }

    render() {
        console.log('render')

        return (

            <div>
                <h1>
                    {this.state.n}
                </h1>
                <p>
                    <button onClick={this.handleClick}> +</button>
                </p>
            </div>
        )
    }
}
