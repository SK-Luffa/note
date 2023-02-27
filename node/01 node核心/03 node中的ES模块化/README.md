# node中的ES模块化

* 目前，node中的ES模块化仍然处于试验阶段
* 模块化在同一个文件中要么全部是commonjs 要么全部是ES modules
   * 后缀名为.mjs
   * 最近的package.json中type的值是module
* 当使用ESmodule模块化标准来运行时，必须添加标记--experimental-modules标记
   * package.json:  script{  start: "node --experimental-modules index.mjs"   }

