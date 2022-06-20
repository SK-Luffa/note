# 路由

安装 npm i vue-router

1. 创建一个router.js文件，import 导入main.js   
   new Vue({
   render: h => h(App),
   router,
   store  
   }).$mount('#app')
2. router.js
   导入import vue 导入 import vue-router
   vue.ues(router)
   export default new router({ routes:[{path: '/',
   component: HomePage,
   children: []}]})
3. "<RouterView"  />"

更改路由的规则  
在 new VueRouter({}) 当中  "mode:"关键字 hash/history/acstract
hash 兼容性最好 ，主要改变的就是#之后的值 location.hash="/login"
history 主要改变的#之前的值 并且不会出现# history.pushState(null,null,"/login")
abstract 主要用在非浏览器当中，比如手机端的游戏什么的

<RouterLink/">"  组件 相当于a元素 href改为to =""

* 如果当前的路径是以导航路径开头，则算作匹配，会为导航的a元素添加类名：router-link-active
* 如果当前的路径完全等于导航路径，则算作精确匹配，会为导航的a元素添加类名：router-link-exact-active

#### 例如，当前访问的路径是`/blog`，则：

| 导航路径 | 类名                                          |
| -------- | --------------------------------------------- |
| /        | router-link-active                            |
| /blog    | router-link-active   router-link-exact-active |
| /about   | 无                                            |
| /message | 无                                                  |

##### 可以为组件`RouterLink`添加bool属性`exact`，将匹配规则改为：必须要精确匹配才能添加匹配类名`router-link-active`

例如，当前访问的路径是`/blog`，则：

| 导航路径 | exact | 类名                                          |
| -------- | ----- | --------------------------------------------- |
| /        | true  | 无                                            |
| /blog    | false | router-link-active   router-link-exact-active |
| /about   | true  | 无                                            |
| /message | true  | 无

路由当中可以加name

routes:[
{path:"/login",components,name:login}   
]
this.$router.push("/login"") 如果要改url当中的路径· 那么此时只需需要修改path就可以了