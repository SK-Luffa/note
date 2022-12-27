// 实现createStore功能
// reducer 是一个函数  指的就是reducer函数
// defaultState任意类型，默认的状态值
const createStore=function(reducer,defaultState){


    return{
        dispatch,
        getState,
        subscribe
    }
}
export default createStore