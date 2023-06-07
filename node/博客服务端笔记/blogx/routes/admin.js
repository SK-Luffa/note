let express = require('express');//引入express
let router = express.Router()//使用express的路由

let {loginService}=require('../service/adminService')

console.log(123);

// 传递两个参数，一个是请求的路径，一个是执行的方法
router.post('/login',  async(req, res)=>{ 
  

    // 首先应该有一个验证码的验证

    // 假设验证码已经通过
   const result= await loginService(req.body)

console.log(result,">>>>");



   
})



module.exports = router 

