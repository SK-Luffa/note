let express = require('express');//引入express
let router = express.Router()//使用express的路由

console.log(123);

// 传递两个参数，一个是请求的路径，一个是执行的方法
router.post('/login', function(req, res){ 
    console.log(req.body)
})



module.exports = router
