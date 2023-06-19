// admin 业务逻辑层

const md5 = require('md5')
const jwt = require('jsonwebtoken')
const env = require('../dao/env')
const { VerificationError } = require('../utils/errors')

const { loginDao,updateDao } = require('../dao/adminDao')
const { formatResponse } = require('../utils/tool')

//登陆
module.exports.loginService = async (loginInfo) => {

    loginInfo.loginPwd = md5(loginInfo.loginPwd) //密码加密
    // 接下来进行数据库连接，也就是查询该条数据在数据库中是否存在，属于数据库操作，应该在dao文件夹

    let data = await loginDao(loginInfo)//将从浏览器接收到的数据传递给loginDao


    if (data.length > 1 || data != null) {
        // 登陆成功
        // 首先将datavalues的值付值给data，因为这里data包含了太多东西了，我们后期需要处理的话得进入里面去寻找这个值，不是很方便


        data = {
            id: data[0].dataValues.id,
            loginId: data[0].dataValues.loginId,
            name: data[0].dataValues.name
        }



        let duration = null//这个是设置过期时常
        //如果loginInfo.remember存在那么就将过期时间设置为 用户通过remember传递上来的值，否则过期时间就是一天
        loginInfo.remember ? duration = parseInt(loginInfo.remember) : duration = 1

        // data.remember = duration//这句话实际上就是返回给客户端当前账号登陆的过期时间
        console.log('登陆成功')


        // 此时需要添加token

        const token = jwt.sign({
            id: data.id,
            loginId: data.loginId,
            name: data.name
        }, md5(env.JWT_SCRET), { expiresIn: 60 * 60 * 24 * duration })


        return {
            token,
            data,
        }

    }
    return data




}

//更新  admin 用户信息
module.exports.updateAdminService = async (accountInfo) => {



    // 根据传入的loginID和旧密码来查询账户是否存在
    const loginModule = await loginDao({
        loginId: accountInfo.loginId,
        loginPwd: md5(accountInfo.oldLoginPwd)
    })

    // 如果账户存在就进行下一步

    if (loginModule.length >= 1 ) {

        // 密码修改

        // 组装新的对象，然后进行更新
     
      const newAdmin= {
            name: accountInfo.name,
            loginId: accountInfo.loginId,
          loginPwd: md5(accountInfo.loginPwd)
        }

        await updateDao(newAdmin)

        return formatResponse(200, '密码修改成功', newAdmin)

    } else {

        console.log("旧密码不正确");
        // 如果账户不存在就直接返回null
        throw new VerificationError("旧密码不正确")
    }

}
