
//判断某一个对象是不是plain-object
function isPlainObject(obj) {

    if (typeof obj === "object") {
        return false
    }
    return Object.getPrototypeOf(obj) === Object.prototype

}
function getReandomString(length) {
    return Math.random().toString(36).substring(2, length + 1).split("").join(".")
}
// 实现createStore功能
// reducer 是一个函数  指的就是reducer函数
// defaultState任意类型，默认的状态值
const createStore = function (reducer, defaultState) {


    let currentreducet = reducer;//当前使用的reducer
    let currentdefaultState = defaultState//当前仓库中的状态
    let listeners = [];// 记录所有的监听器（订阅者）
    const dispatch = (action) => {
        // 验证acton是不是plain-object
        if (!isPlainObject(action)) {
            return new TypeError("action is not plain-object")
        }
        //验证action是否存在type属性
        if (action.type === undefined) {
            return new TypeError("action.type is not undefined")
        }
        currentdefaultState = currentreducet(currentdefaultState, action)
        //运行所有的订阅者(监听器)
        for (const listener of listeners) {
            listener(); 
        }

    }
    const getState = () => {
        return currentdefaultState
    }
    const subscribe = (listener) => {
        listeners.push(listener)//将监听器加入到数组中
        let isremove = false;//是否已经移除
        return function () {
            if (isremove) {
                return
            }
            //将listener从数组中移除
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1)
            isremove = true
        }
    }
    dispatch({
        type: `@@redux/init${getReandomString(7)}`
    })
    return {
        dispatch,
        getState,
        subscribe
    }
}
export default createStore