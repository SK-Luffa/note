// 程序主入口文件

// 引入自定义错误处理
const customError=require('./utils/errors')
// 引入第三方包
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var { expressjwt: expressJWT } = require('express-jwt')//引入express-jwt 这个包的作用是对传过来的token进行一个处理 
const md5 = require('md5');//这里引入md5 作用是 expre ssJWT secret对象 用来比对本地密钥名称是否和用户token传递过来的密钥名称一致（因为我们在sevice层在向客户端传递token的时候里面就包含了密钥名称）
const env = require('./dao/env')//这里是作为md5的参数，与用户端传递过来的token进行比对

const session=require('express-session')

require('express-async-errors')




// 数据库连接引入
require('./dao/db')

// 创建服务器实例
var app = express();
app.use(session({
  secret:env.SESSION_SECRET,
  resave:true,
  saveUninitialized:true,
  cookie:false
}))

// 路由引入 
const adminRouter = require('./routes/admin');
const qrCodeRouter=require('./routes/QRcode')
const bannerRouter=require('./routes/banner')
const upLoadRouter=require('./routes/upload')

// var usersRouter = require('./routes/users');






// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


// 引用中间件 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 配置验证token接口   一定要写在使用路由中间件之前
const jwt = expressJWT({
  secret: md5(env.JWT_SCRET),//比对token密钥名称和本地密钥名称是否一致
  algorithms: ['HS256'],//算法，是对称性1加密还是非对称加密
}).unless({
  path: [
    {
      "url": '/api/admin/login',
      methods: ['POST']
    },
    {
      "url": '/api/qrcode',
      methods: ['POST']
    },
    {
      "url": '/api/banner',
      methods: ['GET']
    },
    {
      "url": '/api/upload',
      methods: ['POST']
    }
  ]
})

app.use(jwt)


// 使用路由中间件
app.use('/api/admin', adminRouter);
app.use('/api/qrcode', qrCodeRouter)
app.use('/api/banner', bannerRouter)
app.use('/api/upload', upLoadRouter)




// catch 404 and forward to error handler


app.use(function (req, res, next) {
  next(createError(404));
});
// 错误处理 一旦发生了错误就会到这里来
// error handler
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // token 验证错误，抛出我们验证的错误

    res.send(new customError.ForbiddenError('用户未登录，或者登录已经失效').toResponseJSON()) 
  }  else if(err instanceof customError.ServiceError){
    res.send(err.toResponseJSON())  
  }else{
     res.send(new customError.UnknownError('未知错误').toResponseJSON() )
  }
});

module.exports = app;
