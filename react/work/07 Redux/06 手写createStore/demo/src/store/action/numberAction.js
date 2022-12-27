import * as Actiontype from "./actionType"
// 得到一个用于数字增加的action
export function getIncreaseAction() {
    return {
        type: Actiontype.Increase
    }
}
export function getDecreaseAction() {
    return {
        type: Actiontype.Decrease
    }

}
export function getPayAction(newPayload) {
    return {
        type: Actiontype.Set,
        payload: newPayload
    }
}