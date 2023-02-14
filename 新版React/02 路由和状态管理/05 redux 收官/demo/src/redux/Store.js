import {configureStore} from "@reduxjs/toolkit"  //导入一个创建仓库的方法
import StuReducer from "./stuSlice"
export default configureStore({//配置对象
  reducer:{//reducer配置
    stu:StuReducer
  },
})//创建一个redux仓库