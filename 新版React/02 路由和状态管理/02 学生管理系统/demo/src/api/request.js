// 该文件主要对axios做一个封装
import axios from "axios"

const request=axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

// 设置请求拦截

request.interceptors.request.use((config)=>{
// config 就是你的请求
// 做一些其他事情

// 请求放行
return config 
})
//设置相应拦截
request.interceptors.response.use((response)=>{
    // 拦截到相应
    // 对响应进行处理
     
    // 处理完成后放行
    return response
},(error)=>{
    // 对错误进行一个处理
    return Promise.reject(error)
})

export default request
