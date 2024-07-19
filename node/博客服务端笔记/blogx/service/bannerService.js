

const { findBannerDao } = require('../dao/bannerDao')
const {handleDataPattern} =require("../utils/tool")



module.exports.findBannerService = async () => {
    const data =await findBannerDao()
   return handleDataPattern(data)
};