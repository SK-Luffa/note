import { createStore,bindActionCreators } from "redux"
import * as NumberAction from "./action/numberAction"
import * as ActipnType from "./action/actionType"  
// 假设仓亏中仅存放了一个数字，该数字的变化可能是+1 或者-1
// 约定action的格式：{type:“操作类型”，payload：附加数据}

//reducer本质上就是一个普通函数 
// 两个参数：1.  state：之前仓库中的状态（数据） 2. action：描述要做什么的对象
//
function reducer(state, action) {
    // 返回一个新的状态
    if (action.type === ActipnType.Increase) {
        return state + 1
    } else if (action.type === ActipnType.Decrease) {
        return state - 1
    } else if (action.type === ActipnType.Set) {
        return action.payload
    }
    return state;//如果type是无效的，数据不变 

}
// 两个参数，一个是改变这个数据的方法，一个是这个数据本身(初始默认值)
const stroe = createStore(reducer, 10)

//第一个参数是action创建函数合并的对象(就是合并对于state的操作函数)，第二个参数就是仓库的dispatch函数  
// 得到一个新的对象，新对象的中的属性名与第一个参数的属性名一致
const boundActions = bindActionCreators(NumberAction, stroe.dispatch) 
//这个实际上就是stroe.dispatch(NumberAction.getPayAction(111));//向仓库分发action的缩写  简化action分发的步骤
console.log(stroe.getState());
// 得到一个Decrease action,并直接分发
boundActions.getDecreaseAction()
console.log(stroe.getState());
boundActions.getIncreaseAction()
console.log(stroe.getState());
boundActions.getPayAction(123);
console.log(stroe.getState());
// console.log(stroe.getState()); //得到仓库当前的数据
// stroe.dispatch(NumberAction.getPayAction(111));//向仓库分发action
// console.log(stroe.getState()); //得到仓库当前的数据
