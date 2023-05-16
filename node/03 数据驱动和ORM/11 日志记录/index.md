# 日志记录：

   第三方库：log4.js

### 概念：

  * level:日志级别:例如调试日志，信息日志，错误日志等
      从低到高为：all > trace > debug > info > warn > error > fatal > mark > off 
  * category ：日志分类： 例如：sql日志、请求日志等
  * appender：日志出口   应该吧日志写到哪里？ 日志的书写格式（layouts ）

npm i log4js

const log4js=require('log4js')

log4js,getLooger() 