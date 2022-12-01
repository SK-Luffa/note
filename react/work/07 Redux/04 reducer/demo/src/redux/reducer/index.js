import Loginusers from "./loginUser";
import users from "./users";
import {combineReducers} from "redux"

export default combineReducers({
    Loginusers,
    users,
})
// const initialState = {
//     Loginusers: null,
//     users: null,
// }

// const reducer = (state = initialState, action) => {

//     const newState={
//         loginuser:Loginusers(state.loginuser,action),
//         users:users(state.users,action)
//     };
    
 
//     return newState
// }
// export default reducer
