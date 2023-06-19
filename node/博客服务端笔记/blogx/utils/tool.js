const JWT = require('jsonwebtoken')
const md5=require('md5')
const env=require('../dao/env')
// 格式化响应的数据
module.exports.formatResponse = (code, msg, data) => {

    return {
        "code": code,
        "message": msg,
        "data": data
    }
}
// 解析token
module.exports.analysisToken = (token) => {
    //解析token需要用到第三方库 JWT
    // verify()负责解析token 两个参数 第一个参数是 解密的token信息，第二个是加密的方法名称
    return JWT.verify(token.split(" ")[1], md5(env.JWT_SCRET))
}
// 处理数组类型的响应数据
module.exports.handleDataPattern=(datalist)=>{
     let arrlist=[]
    datalist.forEach(item => {
    
        arrlist.push(item.dataValues)
    });
    return arrlist

}

