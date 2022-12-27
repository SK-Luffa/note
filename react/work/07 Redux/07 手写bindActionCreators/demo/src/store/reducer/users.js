import * as usersAction from "../action/usersAction"
// import uuid from "uuid"
const initialState = [
    {
        id:2,
        name:"张三",
        age:"11"
    },
    {
        id: 3,
        name: "李四",
        age: "10"
    }
]

const users= (state = initialState, { type, payload }) => {
  switch (type) {

  case usersAction.AddUser: 
          return [...state,payload]
      case usersAction.DeleteUser:
          return state.filler(it=>it.id!==payload)
      case usersAction.UpdateUser:
          return state.map(it => it.id === payload.id ? {...it,payload}:it)
  default:
    return state 
  }
}
export default  users

