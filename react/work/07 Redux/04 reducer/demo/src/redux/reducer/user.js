/* eslint-disable import/no-anonymous-default-export */
import * as user from "../action/usersAction"
import uuid from "uuid"
const initialState = [
    { id: uuid(), name: "用户1", age: 11 },
    { id: uuid(), name: "用户12", age: 12 },
    { id: uuid(), name: "用户3", age: 13 },
    { id: uuid(), name: "用户4", age: 14 },
]

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case user.fn_AddUser:
            return [...state, payload];
        case user.fn_DeleteUser:
            return state.filter(item => item.id !== payload)
        case user.fn_UpdateUser:
            return  state.map(it=>it.id===payload.id?payload:it)
        default:
            return state
    }
}
