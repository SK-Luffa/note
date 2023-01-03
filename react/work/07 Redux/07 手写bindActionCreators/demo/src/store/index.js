import  createStore  from "../redux/index"

// import * as ActipnType from "./action/actionType"  
import  {createAddUserAction, createDeleteUserAction} from "./action/usersAction"
import reducer from "./reducer/index"




const stroe = createStore(reducer)
const oldDispatch=stroe.dispatch
stroe.dispatch=function(action){
   console.log('旧数据',stroe.getState());
console.log("action",action);
oldDispatch(action);//触发原有的dispatch得到一个新的数据 store.getState
   console.log('新数据', stroe.getState());
};
stroe.subscribe(()=>{
   stroe .getState()
})



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

