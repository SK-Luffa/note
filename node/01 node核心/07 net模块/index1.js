const net =require('net');
const server=net.createServer()

server.listen(9527)//监听某个端口
server.on('listening',()=>{
    console.log("server all in 9527");
})
server.on('connection', socket => {
    console.log(socket,'连接已经建立');
 }) 

