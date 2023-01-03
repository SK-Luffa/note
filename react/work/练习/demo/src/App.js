import fx from "./fx.js"
import React from 'react'
function x() {
    console.log('订阅触发成功')

}


export default function App() {
    fx.on("x",x)
    fx.emit('x')
    return (
        <div>App</div>
    )
}


