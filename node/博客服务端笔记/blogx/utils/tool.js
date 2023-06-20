const JWT = require('jsonwebtoken')
const md5 = require('md5')
const env = require('../dao/env')

const multer = require('multer')
const path = require('path')

// 设置上传文件的引擎
const storage = multer.diskStorage({
    // destination:文件存储的位置
    destination: function (req, file, cb) {
     
        cb(null, __dirname + '/../public/static/uploads')
    },
    // filename：上传到服务器的文件，文件名要做一个单独处理
    filename: function (req, file, cb) {

        //获取文件名称
        const basename = path.basename(file.originalname, path.extname(file.originalname))
        const extname = path.extname(file.originalname)

        // 构建新的名称
        const newName = basename+new Date().getTime()+Math.floor(Math.random()*9000+1000)+extname;
        console.log(newName, "<<>>>><<< ");
        cb(null,newName)
        // console.log(newName);

    
        // cb(null, file.fieldname + '-' + Date.now())
    }
})
module.exports.uploading = multer({
    storage: storage, limits: {
        fileSize: 2000000,
        files: 1,
    }
})
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
module.exports.handleDataPattern = (datalist) => {
    let arrlist = []
    datalist.forEach(item => {

        arrlist.push(item.dataValues)
    });
    return arrlist

}

