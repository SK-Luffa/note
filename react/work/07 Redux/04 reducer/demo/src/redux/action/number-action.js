import * as actionTypes from "./action-type"
export function getIncreaseAction(){
    return {
        type:actionTypes.Increase
    }
}
export function getDecreaseAction(){
    return {
        type:actionTypes.Decrease
    }
}
export function getSetAction(newNumber) {
    return {
        type: actionTypes.SET,
        payload:newNumber
    }
}