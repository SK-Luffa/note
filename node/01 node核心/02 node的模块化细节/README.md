# node模块化的细节

**模块的查找(require)**

1. 绝对路径
2. 相对路径
    1. ./or../ 相对于当前模块 -》转换为绝对路径  -》加载模块
    2. 从nodemodels文件导入   检查是否是内置模块 如fs、path等 -》检查当前目录中的 node_modules文件夹 -》检查上级目录中的 node_modules文件夹-》转换为绝对路径  -》加载模块
3. 关于后缀名：如果不提供后缀名，自动补全， js、json、node、mjs
4. 关于文件名：如果仅提供目录不提供该文件名，则自动寻找该目录中的index.js文件   
     1. package.json的main字段：表示整个包的默认入口，导入或执行一个包时若仅提供目录，则使用main补全入口，默认值为index.js


module对象：module.export()：导出   module不仅仅有export()   记录了当前模块的信息

require() 导入   require此外还是一个对象   
   运行方式 ： 
  1. 将modelpath转换为绝对路径
  2. 判断该模块是否已有缓存     if(require.cache:{modelpath的绝对路径}){return modelpath的绝对路径.result }如果有就返回执行 如果没有就继续
  3. 读取文件内容
  4. 包裹到一个函数当中