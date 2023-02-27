# 文件I/O（inout/output）

* 对外部设备的输入输出
* 外部设备：
   - 磁盘
   - 网卡
   - 显卡
   - 打印机
   - 其他...
* IO的速度往往低于内存和CPU的交互速度


* fs模块：绝大部分操作都是异步的
   - 读取一个文件 ： fs.readFile() //异步     readFileSync()同步的读取文件 会导致js运行阻塞，极其影响性能 ，通常是在程序启动时运行有限的次数即可
   - 向文件写入内容:   fs.promises.writeFile(myfiles, "张三is i",{ flag:'a'}) 
   - 获取文件或目录信息：fs.stat
   - 获取目录中的文件和子目录：fs.readdir
   - 创建目录：fs.mkdir
   - 判断文件或目录是否存在：fs.exists



