import React from 'react'

import { connect } from 'dva'
function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onIncreatse}>+</button>
            <button onClick={props.onDecrease}>-</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        number: state.counter
    }
}
const mapDispatchToProps = dispatch => ({
    onIncreatse: () => {
        dispatch({
            type: "counter/increase"
        })
    },
    onDecrease: () => {
        dispatch({
            type: "counter/decrease"
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
