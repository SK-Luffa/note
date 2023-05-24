const express = require('express')

const app = express()



app.use('/api/student', require('./api/student')) 
app.get('/abc', (req, res, next) => {//next  表示运行后续的处理函数
    // 请求
    console.log('请求头123', req.headers);
    console.log('请求路径', req.path);
    console.log('参数', req.query);
    console.log('params', req.params);


    // 响应

    res.setHeader('a', 123)//设置一个相应头
    res.send('hello')//设置返回信息
    next()

},(req,res,next)=>{
   
    console.log("我是第二个处理函数");
    next()
}, (req, res) => {
    console.log("我是第三个处理函数");
},)

const port = 5501
app.listen(port, () => {
    console.log("yes!");
})