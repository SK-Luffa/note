import * as usersAction from "../action/usersAction"
import uuid from "uuid"

const initialState = [ ];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case usersAction.ADDUSER:
            return [...state, payload];
        case usersAction.DELETEUSER:
            return state.filter(it => it.id !== payload);
        case usersAction.UPDATEUSER:
            return state.map(it => it.id === payload.id ? {...it, ...payload} : it);
            case usersAction.SETUSERS:
                return payload

        default:
            return state
    }
}
