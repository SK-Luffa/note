const bannerModel=require('./model/bannerModule')



module.exports.findBannerDao = async () => {
    // 接下来需要连接数据库进行查询操作
    return await bannerModel.findAll()
}