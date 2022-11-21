import { createStore } from "redux"

// 假设仓亏中仅存放了一个数字，该数字的变化可能是+1 或者-1
// 约定action的格式：{type:“操作类型”，payload：附加数据}

//reducer本质上就是一个普通函数 
// 两个参数：1.  state：之前仓库中的状态（数据） 2. action：描述要做什么的对象
//
function reducer(state,action){
    // 返回一个新的状态
    if(action.type==="increase"){
        return state + 1
    } else if (action.type ==="decrease"){
        return state-1
    }
    return state;//如果type是无效的，数据不变 
 
}
// 两个参数，一个是改变这个数据的方法，一个是这个数据本身(初始默认值)
window.stroe= createStore(reducer,10)

const action={ 
    type:"increase"
}
console.log(window.stroe.getState()); //得到仓库当前的数据
window.stroe.dispatch(action) ;//向仓库分发action
console.log(window.stroe.getState()); //得到仓库当前的数据
