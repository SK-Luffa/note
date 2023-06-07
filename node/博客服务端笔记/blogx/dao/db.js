// 该文件负责对数据库进行一个初始化

const sequelize = require('./dbConnect')//数据库连接实例

const adminModel = require('./model/adminModel')//admin 数据模型

const md5 = require('md5')// 引入md5包对密码进行加密

const x = (async () => {  //然后这个方法本身也是异步的
    await sequelize.sync({ alter: true })//这里就是将数据库模型同步到真正的数据库当中
    console.log("数据库模型同步完毕");
    // 同步完成之后，有一些表，是需要初始化数据
    // 我们需要先查询这张表有没有内容，没有内容才会初始化数据

    const adminCount = await adminModel.count()

    //    没有数据的时候添加数据，，数据初始化
    if (!adminCount) {
        // 进入这里，说明没有数据，此时我们应该给这张表添加数据
       const adminData= await adminModel.create({
            loginId: 'admin',
            name:"超级管理员",
            loginPwd:md5('12345678')
        })

      
        console.log('admin模型表已经完成初始化,添加数据为：'+adminData.loginId);

    }



})() 