# 异步组件

首先第一点 vue3本身不再支持vue2方式的路由  
因为vue3 本身也被改为具名导出，所以vue-router也被改为具名导出  ：
 ``` js
import {createRouter} from "vue-router"
 ```
###   model:history(路由配置) 被更改为 history: 具体的对象（这个对象或方法由vue-router提供）   model:history=> history:createWebHistory()
     
* history 主要有以下几种：
1. createWebHistory    创建一个 HTML5 历史
2. createWebHashHistory 创建一个 hash 历史记录c
3. createMemoryHistory  创建一个基于内存的历史记录

# 异步组件
vue2 需要配置一个动态的import

vue3 需要一个函数来处理    import {defineAsyncComponent} from "vue"
defineAsyncComponent   定义一个异步组件

defineAsyncComponent(()=>{}) 传入一个函数 返回一个promise
 
import {defineAsyncComponent} from "vue"
const Block3=defineAsyncComponent(()=>import("../components/Block3.vue"))//导入异步组件

除此之外 还有加载出错  加载进行中


defineAsyncComponent(()=>{
    loader：//加载完成  resove状态
    loadingComponent://加载进行中  pending状态
    errorComponent：//记载是失败  reject 状态

})

<Teleport to="css选择器></Teleport> 会将标签内的元素直接扔到to 也就是css选择器的里面的最后面

Suspence  组件· 也是用来配置异步组件  因为是在试验阶段，暂时不建议使用