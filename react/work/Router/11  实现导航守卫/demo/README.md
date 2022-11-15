# 导航守卫

导航守卫；当离开页面，进入另一个页面时，触发的事件

History 对象


history对象中有一个对象为listen  意为：监听


- listen:添加一个监听器， 监听地址的变化，当地址发生变化时会调用监听的函数
 - 参数：函数 运行时间点：发生在即将跳转到新页面时
      - 这个参数函数本身也有两个参数
         - 参数1:locayion对象，记录当前的地址信息
         - 参数2:action,一个字符串，表示进入该地址的方式
           - POP：出栈
              - 通过点击浏览器后退、前进
              - 调用history.go
              - 调用history.goBack
              - 调用history.goForward 
           - PUSH：入栈
              - 点击无刷新的超链接“<“Link>”
              - history.push
           - REPLACE:  替换
              - history.replace
 - 返回结果：函数，可以调用该函数取消监听

设置阻塞  
block 设置一个阻塞，并同时设置阻塞消息，当页面发生跳转时，会进入阻塞，并将阻塞消息传递到路由根组件的getUserConfirmation
 - props.history.block() 只是测试阻塞
- 真正的阻塞时写在BorswerRouter 中写入：getUserConfirmation={}
- 返回一个回调函数用于取消阻塞器


路由根组件

- getUserConfirmation
 - 参数 ：函数
  - 参数1:阻塞消息
   - 字符串消息 
   - 函数，  函数的返回结果是一个字符串，用于表示阻塞消息
      - 参数1:location对象 
      - 参数2:action值   
  - 参数2:一个回调函数，调用该函数并传递true，则表示进入到新页面，否则不做任何操作 