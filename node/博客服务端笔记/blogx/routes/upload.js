const express = require("express");
const { uploading, formatResponse } = require("../utils/tool");
const multer = require("multer");
// const { upload } = require("../service/uploadService");
const { UploadError } = require("../utils/errors");

const router=express.Router()

router.post('/',async(req,res)=>{

   

 
    // single的’file‘是上传文件的name值 
  uploading.single('file')(req,res, (err)=>{
  
 
    if(err instanceof multer.MulterError){
        new UploadError("上传文件失败")
    }else{
   
        const path="/static/uploads/"+req.file.filename
        
        res.send(formatResponse(0, "", path))
    }
 })
})



module.exports=router