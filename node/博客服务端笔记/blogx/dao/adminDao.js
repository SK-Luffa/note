

// 这里负责进行和数据库进行打交道

// 我们对于数据库的操作全部基于数据库模型 也就model文件夹
const adminModule = require('./model/adminModel')


module.exports.loginDao=async (loginInfo)=>{

    // 接下来需要连接数据库进行查询操作
 return await adminModule.findAll({
        where:{
            loginId:loginInfo.loginId,
          loginPwd:loginInfo.loginPwd
        }
    })
    
}