# 仿写vueRouter模式

配置文件 routeConfig.js

创建RootRouter.js
 在app.js 引入根路由，命名为 <RootRouter/>  相当于 Router-view

 后续子页面  的Router-view    实际上则是 {props.children}