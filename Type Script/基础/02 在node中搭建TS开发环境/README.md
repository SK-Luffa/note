# 在node中搭建TS开发环境

# 安装TS

默认情况下，TS会做出下面几种假设：

1. 假设当前的执行环境时DOM
2. 如果代码中没有使用模块化语句（import，export），便认为该代码是全局执行
3. 编译的目标是ES3
   
   有两种方式更改以上假设：
1. 使用 tsc命令行的时候，加上选项参数
2. 使用TS配置文件，更改编译选项

# TS的配置文件
  
  1. 右键新建 tsconfig.json
  2. 终端（命令）tsc --init
 * 使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件


 * 由于我们在配置文件规定了lib（环境），去掉了浏览器环境，但是没有办法直接配置node环境 所以需要安装一个第三方库：
    
     **@types/node**

 * @types是一个ts官方的类型库，其中包含了很多对js代码的类型描述。 

> JQuery:用js写的，没有类型检查
> 安装@types/jquery，为jquery库添加类型定义

# 使用第三方库简化流程 

* ts-node:将TS代码在内存中完成编译，同时完成运行
* nodemon:用于监测文件的变化  cnpm i -g nodemon       运行命令： nodemon --exec ts-node src/index.ts