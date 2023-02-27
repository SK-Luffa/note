# 基本内置模块

* os    
  - EOL : os.EoL  :换行转译  
  - arch() :os.arch() :获取cpu的架构（x32 or x64）
  - cpus() :os.cpus() :获取cpu每一个核的信息，每一个核心信息都是一个对象
  - freemem() :os.freemem()：获取当前剩余空闲的内存信息
  - homedir() :os.homedir():获取用户目录
  - hostname() :os.hostname():获取主机名
  - tmpdir() :os.tmpdir()：获取操作系统的临时目录
  
* path
  - basename: 给一个路径 来获取文件的名称（实际上并不会真正的查找）  可以传两个参数，第一个参数时文件路径，第二个参数是文件后缀名，如果传递，则返回的结果中不带有文件后缀名,如果后缀名不正确则返回的结果不会取消掉后缀名
  - sep:分隔符 获取当前系统的分割符 指同一个内容 分割
  - delimiter :分隔符，指一块一块的分割
  - dirname：获取文件目录  和 basename相反，一个时获取文件名称，一个是获取路径
  - extname: 获取文件的后缀名
  - join :将多段路径拼接为一个完整路径
  - normalize: 给一个完整路径，编译为一个符合规范的路径
  - relative:  两个参数（都是路径） 根据第二个参数和第一个参数来得到第一个参数距第二个参数的相对位置的路径
  - resolve: 得到绝对路径

* url
  - URL :new url.URL("http://wwww.baidu.com") :分析分解URL地址

* util
  -  callbackify:将一个promise 异步函数转换成为callback（回调）形式
  -  promisify: 将一个callback（回调）形式转换成为promise 异步函数
  -  inherits :继承
  -  isDeepStrictEqual：两个对象或数组 进行深度严格比较
