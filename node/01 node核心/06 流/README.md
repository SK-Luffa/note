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
   
## 可读流

创建一个文件可读流
```
const fs =reuqire('fs');
const path=require('path')
const filename=path.resolve(__dirname,"./abc.txt")
fs.createReadStream(filename)
```

含义：创建一个文件可读流，用于读取文件内容
path:读取文件的路径
options：可选配置
返回：Readable的子类ReadSteam


