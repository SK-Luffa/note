let express = require('express');//引入express
let router = express.Router()//使用express的路由

let { loginService, updateAdminService } = require('../service/adminService')

let tool = require('../utils/tool')

console.log(123);

// 登陆接口
// 传递两个参数，一个是请求的路径，一个是执行的方法   req：接受用户的信息，res。返回给用户的信息
router.post('/login', async (req, res) => {


    // 首先应该有一个验证码的验证

    // 调用逻辑层对数据进行处理验证，如果处理  这里在逻辑层    拿到逻辑层的结果
    const result = await loginService(req.body)
    //这里判断result的token存不存在，如果存在则返回token，如果不存在，则返回错误信息
    if (result.token) {
        res.setHeader('token', result.token)
        res.send(tool.formatResponse(200, '请求成功,已返回token', result.data))


    } else {
        res.send(tool.formatResponse(200, '请求失败', result.data))
    }

})


// 恢复登陆状态
router.get('/whoami', async (req, res) => {

   
    //  req.get()返回指定的 HTTP 请求头字段（不区分大小写匹配）
    // 1. 从客户端请求拿到token 在此之前需要先经历expressJWT的验证，  
    const token = await req.get('Authorization')
   
  

    // 2. 解析token 还原成原本的data对象信息 这里本来是放在service里面的，
    // 但是解析token是全局的事情，也就是说很多借口可能都需要进行解析，那么此时就不适合放在service当中，所以放在tools当中
    const data = tool.analysisToken(token)
    res.send(tool.formatResponse(200, '登陆状态恢复成功', {
        "loginId":data.loginId,
        "name":data.name,
        "id":data.id
    }))


})

// 修改账号信息

router.put('/',async (req,res)=>{
    

  const data=    await  updateAdminService(req.body)

  res.send(data)

})



module.exports = router

