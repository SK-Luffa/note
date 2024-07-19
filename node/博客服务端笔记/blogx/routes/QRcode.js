let express = require('express');//引入express
let router = express.Router()//使用express的路由


const { qrcodeService } = require('../service/qrCodeservice')


// 登陆接口
// 传递两个参数，一个是请求的路径，一个是执行的方法   req：接受用户的信息，res。返回给用户的信息
router.post('/', async (req, res) => {
    const data = await qrcodeService()
    req.session.qrcode = data.text
    res.setHeader('Content-Type',"image/svg+xml")
    res.send( data.data);
   
})






module.exports = router

