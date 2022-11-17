# 路由信息

Router组件会创建一个上下文信息，并且，向上下文中注入一些信息

该上下文对开发者是隐藏的，Route组件若匹配到了地址，则会将这些上下文中的信息作为属性传入对应的组件

## history
  
  他并不是window.history对象，我们利用该对象无刷新跳转地址

**为什么没有直接使用history对象**

1. React-Router中有两种模式：Hash、history 如果直接使用window.history,只能支持一种模式
2. 当使用window.history,pushState方法时，无法收到任何通知，将导致react无法知晓地址发生变化，结果导致无法重新渲染组件

  - push：江某个新的地址入栈（历史记录栈）
   - 参数1:新的路径
   - 参数2:可选，附带的状态数据  - window.history.state
  - reolace:将某个新的地址替换掉当前栈中的地址
  - go: 与window，history用法完全一致
  - forward: 与window，history用法完全一致
  - back: 与window，history用法完全一致
  
  ## location
  与history.location完全一致，是同一个对象，但是与window.location不同

  location对象记录了当前地址的相关信息

  我们通常使用第三方库 ```query-string``,用于解析地址栏的数据

  ## math

  该对象中保存了路由匹配的相关信息
   - isExact:事实上，当前的路径和路由配置的路径是否是精确匹配的
   - params：获取路径规则中对应的数据


实际上在书写Route的oath属性时，可以书写一个```String pattern```（字符串正则）   <Route path="/a/:yarn/:month/:day " component={a} />   
<Route path="/a/:yarn?(正则表达式)/:month?/:day？ " component={a} /> ？表示可有可无

path={['/news',"/news/:year(正则 )"]} 可以写数组 数组里面可以写正则

react-router 使用了第三方库：path-to-Reg-Exp  该库的作用是将一个字符串正则转换成一个真正的正则表达式


 **像某个页面传递数据的方式：**
 
 1. 使用 state：在push页面时，加入state
 2. 利用search：把数据填写到地址栏中的"?"后面
 3. 利用hash：把数据填写到“#”后面
 4. 利用params:把数据填写到路径中
   

   ## 非路由组件获取路由信息

   某些组件并没有直接放在Route当中，而是嵌套在其他普通组件当中，因此它的pops当中没有路由信息，如果这些组件需要获取到路由信息，可以使用下面两种方式：

   1. 将路由信息从父组件一层一层传递给子组件
   2. 使用react-router提供的高阶组件 withRouter，包装要使用的组件，该高阶组件会反返回一个新组件，新组件将向提供的组件注入路由信息。

