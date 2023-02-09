// 生产action对象的函数，我们一般称之为 actionCreator

import {add} from "./actionType"

export const addListAction=newItem=>({
    type:add,
    data:newItem
})