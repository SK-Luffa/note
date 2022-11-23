
import loginUser from"./loginUser"
import user from "./user"
import {combineReducers} from "redux"



// export default (state={} , action) => {
//     console.log(state,action);
//  const newState={
//      loginUser: loginUser(state.loginUser,action),
//      user: user(state.user,action)
//  };
//  return newState
// }
export default combineReducers({
    loginUser,
    user
})
