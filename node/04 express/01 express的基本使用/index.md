# express 的基本使用

### http模块
 1. 根据不同的请求路径和请求方法，做不同的事情，处理起来比较麻烦
 2. 读取请求体和写入响应体，是通过流的方式，比较麻烦


##  使用第三方库： 
  1. express
  2. koa2 


REST风格的API接口

/api/student  post 添加学生
/api/student   get 获取学生
/api/sutdent/:id   put 修改学生
/api/sutdent/:id   delete 删除学生