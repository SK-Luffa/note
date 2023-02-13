import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice= createSlice({
    // 切片的命名空间
    name: "todoList",
    // 初始化仓库数据
    initialState: {
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
    },
    //reducers
    // state 上一次的仓库
    // payload 传递过来的数据
    reducers:{
        add:(state,{payload})=>{
            // 允许直接修改 state
            state.list.push({
                content:payload,
                status:false,
            })
        },
        del: (state, { payload })=>{
            state.list.splice(payload,1)
        },
        change: (state, { payload })=>{
            state.list[payload].status = !state.list[payload].status;
        }
    }
}) 

export const { add, del, change } = todoListSlice.actions

export default todoListSlice.reducer
console.log(todoListSlice);