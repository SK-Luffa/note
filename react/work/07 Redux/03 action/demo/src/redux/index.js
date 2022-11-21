import { createStore,bindActionCreators} from "redux"
import * as actionType from "./action/action-type"
 import * as numberAction from "./action/number-action"

// 假设仓亏中仅存放了一个数字，该数字的变化可能是+1 或者-1
// 约定action的格式：{type:“操作类型”，payload：附加数据}

//reducer本质上就是一个普通函数 
// 两个参数：1.  state：之前仓库中的状态（数据） 2. action：描述要做什么的对象
//
function reducer(state, action) {
    // 返回一个新的状态
    if (action.type === actionType.Increase) {
        return state + 1 
    } else if (action.type === actionType.Decrease) {
        return state - 1
    } else if(action.type===actionType.SET){
        return action.payload
    }
    return state;//如果type是无效的，数据不变 

}
// 两个参数，一个是改变这个数据的方法，一个是这个数据本身(初始默认值)
const stroe = createStore(reducer, 10)
// 第一个参数，是action创建函数合并的对象，第二个参数是仓库的dsipatch函数
// 得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
const bind=bindActionCreators(numberAction,stroe.dispatch)
console.log(bind,numberAction);
//得到一个increase action，并自动分发
bind.getIncreaseAction()
// console.log(stroe.getState(),11); //得到仓库当前的数据
// console.log(numberAction.getIncreaseAction());
// stroe.dispatch( numberAction.getIncreaseAction());//向仓库分发action
// console.log(stroe.getState()); //得到仓库当前的数据
