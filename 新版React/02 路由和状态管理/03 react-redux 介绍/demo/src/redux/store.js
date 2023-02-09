// 仓库文件
import { todoReducer } from "./reducers"
// 创建仓库 、
import {createStore} from "redux"

// 需要你传递入一个reducer（纯函数，用于计算最新的状态）
 export const store=createStore(todoReducer)