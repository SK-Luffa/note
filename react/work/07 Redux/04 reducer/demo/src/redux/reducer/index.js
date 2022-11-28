import * as ActipnType from "../action/actionType"
function reducer(state=10, action) {
    console.log("reducer运行了",state);
    switch(action.type){
        case ActipnType.Increase:
            return state + 1
        case ActipnType.Decrease:
            return state - 1
        case ActipnType.Set:
            return action.payload
            default: 
                return
    }
    // 返回一个新的状态
    // if (action.type === ActipnType.Increase) {
    //     return state + 1
    // } else if (action.type === ActipnType.Decrease) {
    //     return state - 1
    // } else if (action.type === ActipnType.Set) {
    //     return action.payload
    // }
    // return state;//如果type是无效的，数据不变 

}
export default reducer