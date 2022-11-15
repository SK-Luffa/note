# webpack的安装和使用

* webpack简介
* weboack安装
* 使用

webpack官网  https：//www.webpackjs.com/



学习：webpack4
# webpack 简介
weboack是基于模块化的打包(构建)工具，他把一切视为模块

他通过一个开发时态的入口模块为起点，分析出所有的依赖关系，然后经过一系列的过程（合并，压缩），最终生成运行时态的文件

webpack的特点：
  * 为前端工程化而生：webpack致力于解决前端工程化，特别是浏览器端工程化中遇到的问题，让开发者集中注意力编写业务代码，而把工程化过程中遇到的问题全部交给webpack来处理
  * 简单易用：支持零配置，可以不用写任何一行额外的代码就使用webpack
  * 强大的生态：webpack会非常灵活、可扩展的,webpack本身的功能并不多，但它提供了一些可以过站其他功能的机制，使得一些第三方库可以融于webpack中
  * 基于nodejs：由于webpack在构建过程中需要读取文件，引起他是运行在node环境中的
  * 基于模块化：webpack在构建过程中要分析依赖关系，方式是通过模块化导入语句进行分析的，它支持各种模块化标准，包括但不限于commonJS  Es6 Module

# Webpack的安装

webpcak通过npm安装，它提供了两个包：

* webpack:核心包，包含了webpack构建过程中要用到的所有api
* webpack-cli：提供了一个简单的cli命令，他调用了webpack核心包的api，来完成构建
  
  安装方式

* 全局安装：可以全局使用webpack命令，但是无法为不同项目对应不同的webpack版本
* 本地安装：推荐，每个项目都使用自己的webpack版本进行构建


#### 操作： 
  1. npm init  --初始化
  
  2. npm i -D webpack webpack-cli     --安装webpack和webpack-cli   -D:开发环境依赖 因为webpack只需要我们在开发环境下运行 在生产环境后压根不需要webpack的参与
  3. 在根目录(终端所在目录) 创建src目录创建index.js
  4. 在终端输入  npx webpack      因为我们写的是纯 ecma script  代码 所以打包出来的结果既可以在浏览器端运行，也可以在服务器端运行
  5. 但是我们一遍一遍写这个东西感觉有点麻烦，我直接 package.json  放到script当中

* 注意：我们直接打包的时候会报一下错误 
    ```js```


    ARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/


* 原因：是因为我们没有规定其到底是生产环境还是开发环境   webpack为我们默认为生产环境
- 解决方案（可以写在package.json 当中）：
    - npx webpack --mode=development  --开发环境
    - npx webpack --mode=production   --生产环境
  
# 使用
     webpack
   默认情况下，webpack会议 ./src/index.js作为入口文件分析依赖关系，打包到 ./dist/main.js文件中

   通过--mode选项可以控制webpack的打包结果的运行环境




 
