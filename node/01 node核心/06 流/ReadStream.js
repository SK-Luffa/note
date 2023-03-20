// const {Readable,Writable}=require("stream")

const fs =require('fs');
const path=require('path')
const filename=path.resolve(__dirname,"./abc.txt")
const rs=fs.createReadStream(filename,{
    encoding:'utf-8',
    highWaterMark:1,
    autoClose:true,//读取完毕后自动关闭
})
rs.on('open',()=>{
console.log("文件被打开了");
})

rs.on('error', () => {
    console.log("错误");
})


rs.on('close', () => {
    console.log("关闭");
})

rs.on('data', chunk => {
    console.log("读到了一部分数据",chunk);
    rs.pause()
    rs.resume()
})
rs.on('resume',()=>{
    console.log('ikun');
})
rs.on('pause', () => {
    console.log('你干嘛～');
})
rs.on('end', () => {
    console.log("读取完毕");
})
// rs.close()