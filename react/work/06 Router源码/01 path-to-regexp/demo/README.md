# path-to-regexp

第三方库 path-to-regexp 用于将一个字符串正则（路径正则，path，regexp）
- 其实就是解决我们<Route>组件中的 path="/a/:id?b=1" 的问题     
- 去 npm下载安装   然后引入 npm官网有用法
 
 pathToRegexp(path,keys?,options?)

 - path(string): 路径 会被匹配为一个正则 
 - keys(Array):  接收path的关键字     
    - const keys=[]   const result= pathToRegexp("/news/:id/:page",keys);
    - 关键字是一个数组 数组里面是对象， 保存了 id   page
- options
    - sensitive :是否区分大小写，默认不区分  bool
    - stict :是否严格匹配路径（主要针对末尾的斜杠） 默认不区分 bool
