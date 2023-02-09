// reducer 用于计算最新的状态

import { add, del, change } from "./actionType"

// 仓库一开始默认的数据
let defaultState = {
    list: [{
        content: "学习 React",
        status: false,
    },
    {
        content: "复习 vue",
        status: false,
    },

    {
        content: "玩游戏",
        status: false,
    },
    {
        content: "听歌",
        status: false,
    },],
}
// 通过纯函数计算出最新的状态
// state 仓库数据  action描述对象 {type:add,data:'学习redux'}
// 描述对象描述了我要做什么，以及带来的额外的数据
export function todoReducer(state = defaultState, action) {
    // 有了描述对象后，就可以根据旧状态计算出新的状态并返回
    const arr = [...state.list]
    switch (action.type) {
        case add:
            arr.push({
                content: action.data,
                status: false,
            })
            // 新增
            return { list: arr };
        case del:
            // 删除
            return;
        case change:
            修改
            return;
        default:
            return state
    }
}