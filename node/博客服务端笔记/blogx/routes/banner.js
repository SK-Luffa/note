const express=require('express');

const router=express.Router()
const {formatResponse } =require('../utils/tool')

const {findBannerService} =require('../service/bannerService')

// 获取首页标语
router.get('/',async(req,res)=>{
   const data= await findBannerService()
    res.send(formatResponse(200, "数据返回成功", data))

})

// 设置标语
router.post('/',async(req,res)=>{



})



module.exports=router