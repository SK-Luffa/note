# 其他组件

已学习：
 - Router:BrowswerRouter、HashRouter
 - Route
 - switch
 - 高阶函数：withRouter

## Link

生成一个无刷新跳转的 a元素

 - to
   -  字符串：跳转目标的地址
   -  对象；
      - pathname：url路径 
      - search
      - hash
      - state：附加的状态信息
 - replace：bool ,表示是否是替换当前地址，默认是fasle(默认是push方式跳转否则就是用replace方式进行跳转 )
 - innerRef: 可以将内部的a元素的ref附着在传递的对象或函数参数上
      - 函数
      - ref对象

## NavLink

是一种特殊的Link，Link组件具备的功能，他都有

它具备的额外功能是：根据当前地址(/a?b=2&c=3)和链接地址(/a)来决定该链接的样式

- activeClass: 将默认的classname(native)替换为当前设置的clasname   
    <NavLink activeClass="active_class" innerRef={(node)=>{
      console.log(node);
    }} to="/a">去a页</NavLink>
- activeStyle：匹配时使用的内联样式
- exact:是否精确匹配
- sensitive:匹配时是否区分大小写
- strict:是否严格匹配最后一个斜杠

## Redirect
  就是当路由匹配不到地址时，会加载改组件  该组件会跳转到指定的组件当中
重定向组件，当加载到该组件时，会自动跳转（无刷新）到另外一个地址

- to :跳转的地址
   - 字符串
   - 数组
- push：默认为false，表示跳转使用替换的方式，设置为true后，则使用push的方式跳转
- from：当匹配到from地址规则时，才进行地址跳转


vue-router 静态的配置

react-router v4之前 静态配置文件

react-router v4之后 动态的组件