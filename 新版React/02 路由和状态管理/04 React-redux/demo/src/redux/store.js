//引入创建 stroe的方法
import { configureStore} from "@reduxjs/toolkit"
import  todoListSlice  from "./todoListSlice"

// 调用该方法时传入一个对象
//其中一个选项是配置reducer

export default configureStore({
    reducer:{
        todo: todoListSlice
    }
})