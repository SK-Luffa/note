// 生产action对象的函数，我们一般称之为 actionCreator

import { add, del, change } from "./actionType"


export const addListAction=newItem=>({
    type:add,
    data:newItem
})
export const delListAction = index => ({
    type: del,
    data: index
})
export const changeAction = index => ({
    type: change,
    data: index
})