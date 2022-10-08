import React, { Component } from 'react';
const ms = React.createContext();
function ChildA(props) {
    return <>
        <h1>
            <ChildB />
        </h1>
    </>
}
class ChildB extends Component {
    static contextType = ms;
    render() {
        return <>
            <h1>ChildB</h1>
            a:{this.context.a} b:{this.context.b}
        </>
    }
}



class nes extends Component {
    state = {
        a: 123,
        b: "张三"
    }

    render() {
        return (
            <div>
                <ms.Provider value={this.state}>
                    <ChildA />
                </ms.Provider>
            </div>
        );
    }
}

export default nes;