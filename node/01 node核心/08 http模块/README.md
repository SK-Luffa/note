# http模块
  
  * http模块建立在net模块之上
      1. 无须管理socket
      2. 无须手动组装消息格式
  * http.request(url,[,options][,callback])
  * http.createServer([options][,requestListener])

总结：
  我是客户端 ：
   1. 请求：ClientRequest对象   
   2. 响应：IncomingMessage对象
  我是服务器 ：
   1. 请求：IncomingMessage对象
   2. 响应：ServerResponse对象

