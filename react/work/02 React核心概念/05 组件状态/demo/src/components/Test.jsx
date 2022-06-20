import React, {Component} from 'react'

export default class Test extends Component {

    state = {
        m: 123
    }

    constructor(props) {
        super(props)
        setInterval(() => {
            this.setState({
                m: this.state.m - 1
            })
        }, 1000)
    }

    render() {

        return (
            <div>
                <B n={this.state.m}/>
            </div>
        )
    }
}

function B(props) {
    return <div>
        B组件:{
        props.n
    }
        <C n={props.n}/>
    </div>
}

function C(props) {
    return <div>
        C组件:{props.n}
    </div>
}
