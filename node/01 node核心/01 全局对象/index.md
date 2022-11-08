## 全局对象 - global 
 

   global:{
       global:global //定义 ： global.global=global
       setTimeout  //和浏览器端基本一致，只不过返回值为对象
       setInterval //和浏览器端基本一致，只不过返回值为对象
      setImmediate ///和settimeout一样类似于settimeout(()=>{},0)
      console  //和浏览器的console是一样的
   
     
   }

       __dirname // 获取当前模块所在的目录  他不是global的属性
        __filename  //获取当前模块的文件路径
          BUffer //类型化数组   继承自Bint8Array  计算机中存储的基本单位：字节
         process: {
            cwd() 获取当前命令行
            exit()
            argv
            platform
            kill(pid)
            env

         }
  