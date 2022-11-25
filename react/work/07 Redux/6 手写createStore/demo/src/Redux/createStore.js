/* eslint-disable import/no-anonymous-default-export */
// 判断，某个对象是不是plain-object
function isPlainObject(obj) {
    if (typeof obj !== "object") {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}
console.log(isPlainObject({}));
// 得到一个指定长度的随机字符串
function getRandomString(length) {
    return Math.random().toString(36).substring(2, length)
}


// reducer：function  defaultState: any  默认状态值
export default function (reducer, defaultState) {

    let currentreducer = reducer;//当前使用的reducer
    let currentdefaultState = defaultState;//当前仓库中的状态
    function dispatch(action) {
        if (isPlainObject(action)) {
            throw new TypeError("action must be a plain object ")
        }

        if (action.type === undefined) {
            throw new TypeError("action must has property of type")
        }
        currentdefaultState = currentreducer(currentdefaultState, action)
    }
    function getState() {
        return currentdefaultState
    }
    function subscribe(listener) {

    }
    //创建仓库时，需要分发一次初始的action
    dispatch({
        type: `@@redux/init ${getRandomString(7)}`
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}