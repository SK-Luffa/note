# 常见应用-路由切换动画


第三方动画库 react-transition-group

CSSTransition:用于为内部的dom元素添加类样式，通过in属性决定内部的DOM处退出 还是进入阶段

我们可以利用router的children属性  来进行匹配
在Route中 
 <Route path='/' exact component={Pages.Home} >
            {props=>{
              return props.math
            }}
          </Route>

通过判断props.math是否匹配来确定究竟渲染的是哪一个页面