import { setLoginUserType } from "../action/loginUserAction"


const initialState = null


const Loginusers= (state = initialState, { type, payload }) => {
    switch (type) {
        case setLoginUserType:
            return payload;
        default:
            return state;
    }
}
export default Loginusers
