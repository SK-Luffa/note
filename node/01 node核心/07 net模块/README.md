 ## 回顾http请求
普通连接 

长连接


 ## net 模块能干什么？

 net是一个通信模块，利用它可以实现：
1. 进程间的通信 IPC
2. 网络通信 TCP/IP

## 创建客户端

net.createConnection(options[connectListener])

返回  socket
1. socket 是一个特殊的文件
2. 在node中表现为一个双工流
3. 通过向流写入内容发送数据
4. 通过监听流的内容获取数据 

## 创建服务器
net.createServer()

返回  server对象
1. server.listen(port) //设置监听某个端口
2. server.on('listening',()=>{})  开始监听触发
3. server.on('connection',socket=>{}) //表示已经建立连接  ： 1. 当某个连接到来时，会触发该事件    2. 事件的监听函数会获得一个socket对象 
