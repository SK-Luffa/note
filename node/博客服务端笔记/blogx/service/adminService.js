// admin 业务逻辑层

const md5 = require('md5')

const { loginDao } = require('../dao/adminDao')

module.exports.loginService = async (loginInfo) => {

    loginInfo.loginPwd = md5(loginInfo.loginPwd) //密码加密
    // 接下来进行数据库连接，也就是查询该条数据在数据库中是否存在，属于数据库操作，应该在dao文件夹

    const data = await loginDao(loginInfo)//将从浏览器接收到的数据传递给loginDao


    if (data.length > 1 || data != null) {
        // 登陆成功


        console.log('登陆成功');

        // 此时需要添加token

       
    }
    return data




}