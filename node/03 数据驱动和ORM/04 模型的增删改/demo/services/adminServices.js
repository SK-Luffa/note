//管理员初始化
// 1. 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const Admin = require('../models/Admin')
exports.addAdmin = async (adminObj) => {
    const ins = await Admin.create(adminObj)
    return  ins.toJSON()

}
exports.deleteAdmin = async (adminId) => {
    // 方式1  1 找到 2删除 需要执行两条sql语句 性能上会很慢
    // 1. 得到实例

    // // 先通过adminId 查找到这个实例    使用Admin，findOne()
    // const ins = await Admin.findByPk(adminId)
    // // 2. 删除实例  destroy方法
    // await ins.destroy()


    // 方式2
   const ins= await Admin.destroy({
       where:{
           loginId:adminId
       }
   })

   return ins

}

// 修改
exports.updateAdmin = async(id,adminObj) => { 

    // // 方式1 1 找到 2 修改   需要执行两条sql语句 性能上会很慢
    // //  先通过adminId 查找到这个实例    使用Admin，findOne()
    // const ins=  await Admin.findByPk(id)
    // // 修改实例
    // ins.loginId=adminObj.loginId;
    // // 保存
    // ins.save();

    // 方式2

   const ins= await Admin.update(id,{
        where:{
           loginId: adminObj.id
        }
    })

    return ins



}