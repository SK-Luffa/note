// require('./models/sync')

require('./models/relation')

const adminServ= require('./services/adminServices')
// adminServ.login('abc','1234').then(res=>{console.log(res);})
adminServ.getAdminById(1).then(res=>{console.log(res);})
// mock模拟数据添加到数据库
// require('./mock/mockStudent')






// const Admin=require('./models/Admin')

// 新增一个Admin对象

// // 方式1  采用 build+save的方式
// const ins=Admin.build({//同步方法，构建一个模型是实例
//     loginId: 'abc',
//     loginPwd:'123',
// })
// // seve 是一个异步方法，这就相当于同步代码到数据库

// ins.save().then(()=>{
//     console.log('新建管理员成功 ');
// })


// 方式2  采用create方法直接执行   相当于build+save的方式  同样的也是一个异步方法，所以可以使用then等，来查看是否执行成功

// Admin.create({
//     loginId: 'abcd',
//     loginPwd: '1234'
// }).then(()=>{
//     console.log('执行成功yes');
// })
 
// const adminServices= require('./services/adminServices')

// adminServices.addAdmin({
//     loginId:'abcs',
//     loginPwd:'1231231'

// })

// adminServices.deleteAdmin('abcs')


// adminServices.updateAdmin(2,{
//     loginId:'666'
// })


