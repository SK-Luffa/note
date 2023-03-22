const http=require('http');

const urlx = require('url');
//得到要处理的文件信息

const getFileInfo=(url)=>{
  const urlObj=  urlx.parse(url)
  console.log(urlObj.pathname,'url');
 

}

// req 请求信息  res 响应信息
const handler=(req,res)=>{
   const info= getFileInfo(req.url)
   console.log(info,"info");

    res.write('hello')
    res.end()

}
const server = http.createServer(handler)

server.on("listening",()=>{
console.log('6000');
})
server.listen(888);//设置服务器端口