const http = require('http');


// const request = http.request('http://www.ke.qq.com/',
//     {
//         method: 'GET',
//     },
//     res => {
//         // console.log('服务器响应的状态码', res);

//         res.on('data', chunk => {
//             console.log(chunk.toString('utf-8'));
//         });
//     }
// )//参数 ：第一个参数是url 参数2 请求形式   参数：获取服务器的相应结果\\\

// request.end()//表示消息体结束


const url=require('url')
const server= http.createServer((req,res)=>{
    console.log('请求到达服务器');
    const urlobj = url.parse(req.url) 
    console.log("请求地址", urlobj);
    let body=''
    req.on('data',chunk=>{
        body+=chunk.toString('utf-8')
    })
    req.on('end',()=>{
        console.log('req读取完毕',body);
    })

    res.setHeader('a', '1') ;res.setHeader('b', '2')
    res.write('1');
    res.end()
})

server.listen(9527)
server.on('listening',()=>{
    console.log('server listening 957');
})