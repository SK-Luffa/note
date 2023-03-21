const net =require('net');
const socket=net.createConnection({
    host:'duyi.ke.qq.com',//连接到的主机
    port:80//TCP/IP协议端口号，不写就没有，没有默认值
    
},()=>{
    console.log('连接成功');
})

const parseResponse=(response)=>{

    const index = response.split("\r\n");
  const head=response.substring(0,index);
  const body=response.substring(index+2)
  console.log(index,head);
}
socket.on('data',chounk=>{
    // console.log("来自服务器的内容",chounk.toString('utf-8'));
    const response = chounk.toString('utf-8')
    parseResponse(`${response}`)
    socket.end()
});
socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive

`)

socket.on('close',()=>{
    console.log('结束');
})
