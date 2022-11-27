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

    const listeners=[]//记录所有的监听器
    function dispatch(action) {
        if (isPlainObject(action)) {
            throw new TypeError("action must be a plain object ")
        }

        if (action.type === undefined) {
            throw new TypeError("action must has property of type")
        }
        currentdefaultState = currentreducer(currentdefaultState, action)
        
        //运行所有的订阅者（监听器）
        for(const listener of listeners){
            listener()
        }
    }
    function getState() {
        return currentdefaultState
    }
    //添加一个监听器(订阅者)
    function subscribe(listener) {
       listeners.push(listener)//将监听器加入到数组中
       let isRemove=false//是否已经移除
       return function(){
           if(isRemove){
               return
           }
        //  将listener从数组中移除
           const index = listeners.indexOf(listener)
           listeners.splice(index,1)
           isRemove=true
      }
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