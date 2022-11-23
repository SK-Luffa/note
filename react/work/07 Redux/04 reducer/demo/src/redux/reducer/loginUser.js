/* eslint-disable import/no-anonymous-default-export */
import { setLoginUserType } from "../action/loginUserAction"

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {

      case setLoginUserType:
    return payload

  default:
    return state
  }
}



