import  createStore  from "../redux/index"

// import * as ActipnType from "./action/actionType"  
import  {createAddUserAction, createDeleteUserAction} from "./action/usersAction"
import reducer from "./reducer/index"


// 假设仓亏中仅存放了一个数字，该数字的变化可能是+1 或者-1
// 约定action的格式：{type:“操作类型”，payload：附加数据}

// //reducer本质上就是一个普通函数 
// // 两个参数：1.  state：之前仓库中的状态（数据） 2. action：描述要做什么的对象
// //
// function reducer(state, action) {
//     // 返回一个新的状态
//     if (action.type === ActipnType.Increase) {
//         return state + 1
//     } else if (action.type === ActipnType.Decrease) {
//         return state - 1
//     } else if (action.type === ActipnType.Set) {
//         return action.payload
//     }
//     return state;//如果type是无效的，数据不变 

// }

const stroe = createStore(reducer)

stroe.subscribe(()=>{
   stroe .getState()
})

// //第一个参数是action创建函数合并的对象(就是合并对于state的操作函数)，第二个参数就是仓库的dispatch函数  
// // 得到一个新的对象，新对象的中的属性名与第一个参数的属性名一致


console.log(stroe.getState());
stroe.dispatch(createAddUserAction({
   id:3,
   name:"abc",
   age:10,
}))

console.log(stroe.getState());
stroe.dispatch(createDeleteUserAction(3))

// stroe.dispatch(NumberAction.getDecreaseAction())
console.log(stroe.getState());

