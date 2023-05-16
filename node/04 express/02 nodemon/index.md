# nodemon

  nodemon是一个监视器，用于监控工程中的文件变化，如果发现文件有变化，可以执行一段代码脚本

   安装： yarn add  nodemon

运行命令：
 
 yarn nodemon  index

  * 由于nodemon的监听范围实在是比较广，哪怕是你多写了两个空格也会进行刷新运行
  * 那么需要我们对其设置一个边界 ——设置一个nodemon的配置文件   ——创建 nodemon.json