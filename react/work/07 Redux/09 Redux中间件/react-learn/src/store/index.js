import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reducer from "./reducer"
import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"

// 一个中间件函数
// 
function logger1(store) {

    return function (next) {
        // 下面返回的函数，是最终要应用的dispath
        return function dispatch(action) {
            console.log("中间件1"); 
            console.log('旧数据', store.getState());
            console.log('action', action);
            next(action) 
            console.log('新数据', store.getState());
            console.log('');

        }
    }
}
function logger2(store) {

    return function (next) {
        // 下面返回的函数，是最终要应用的dispath
        return function dispatch(action) {
            console.log("中间件2");
            console.log('旧数据', store.getState());
            console.log('action', action);
            next(action)
            console.log('新数据', store.getState());
            console.log('');

        }
    }
}

// const store = createStore(reducer, applyMiddleware(logger1, logger2));//如果第二个参数给了一个函数，那么表示运行中间件
const store =applyMiddleware(logger1,logger2)(createStore)(reducer)//调用这个方法，会返回一个函数，然后我们需要告诉这个返回的函AQZ¸/* Qs */
const actionCreators = {
    addUser: createAddUserAction,
    deleteUser: createDeleteUserAction
}

const actions = bindActionCreators(actionCreators, store.dispatch)

// store.subscribe(() => {
//     console.log("监听器1", store.getState());
// })

actions.addUser({ id: 3, name: "abc", age: 111 })
actions.deleteUser(3)