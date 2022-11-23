import { createStore,bindActionCreators} from "redux"

 import * as numberAction from "./action/number-action"
import reducer  from "./reducer"

// 两个参数，一个是改变这个数据的方法，一个是这个数据本身(初始默认值)
const stroe = createStore(reducer )
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
