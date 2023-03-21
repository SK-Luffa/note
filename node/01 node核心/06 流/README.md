# 文件流 

### 什么是流？

流是指数据的流动，数据从一个地方缓缓的流动到另一个地方

流是有方向的：（三种）

 1. 可读流（Readable） :数据从源头流向内存
 2. 可写流（Writable）：数据从内存流向源头
 3. 双工流（Duplex）：数据既可以从源头流向内存又可以从内存流向源头 


### 为什么需要流
 
 1. 其他的介质和内存的数据规模不一致 (大小不一致：磁盘很大，内存很小)
 2. 其他的介质和内存的数据处理能力不一致
   
## 读取 流

创建一个文件可读流
```
const fs =reuqire('fs');
const path=require('path')
const filename=path.resolve(__dirname,"./abc.txt")
fs.createReadStream(filename)
```

删除文件 
fs.unlink //删除文件

含义：创建一个文件可读流，用于读取文件内容
path:读取文件的路径
options：可选配置

1. encoding :编码方式
2. start：起始字节
3. end：结束字节
4. highWaterMark：每次读取数量
5. autoClose :读取完成后自动关闭
   
返回：Readable的子类ReadSteam

  事件：rs.on(事件名，处理函数):
     事件名
   1. open   文件打开事件   文件被打开后触发
   2. error  文件读取出问题（可能不存在文件）
   3. close  文件关闭后触发    可通过rs.close手动关闭  或  文件读取完成之后自动关闭 
   4. data   读取到一部分数据后触发 注册data事件后，才会真正开始读取    每次读取highWaterMark制定的数量   回调函数中会附带读取到的数据
   5. end    全部数据读取完毕触发的事件
   6. pause   暂停事件
   7. resume   恢复事件

   rs.pause()  暂停读取  会触发 pause事件

   rs.resume() 恢复读取 会触发resume事件


## 写入流
   
创建一个写入流： createWriteStream(filename,{options})

options:
1. flags:操作文件的方式
2. encoding：编码方式
3. start：起始字节 （从第几个字节开始写入）
4. highWaterMark：每次最多写入的字节数


返回：writable的字类WriteStream

1. ws.on(事件名，处理函数)  
   1. open   
   2. error
   3. close  
   4. drain 
2. ws.write(data) 写入一组数据
   1. data:可以是字符串或Buffer
   2. 返回一个Boolean值  true: 写入通道没有被填满，接下来的数据可以直接写入无需排队，false：写入通道目前已被填满，接下来的数据将进入写入队列
   3. 当写入队列清空时，会触发drain事件

3. ws.write([data])






   
   


