面试题1: 为什么vue3中去掉了vue构造函数？
面试题2: 谈谈你对vue3数据响应式的理解

# 去掉了Vue构造函数
在过去，如果遇到了一个页面有多个vue应用时，往往会遇到一些问题

     <!-- vue2 -->
     <div id="app1"></div>
      <div id="app2"></div>
      <script>
      Vue.use(...);//此代码会影响所有的vue应用
      Vue.mixin(...);//此代码会影响所有的vue应用
       Vue.component(...);//此代码会影响所有的vue应用
       
       new Vue({
           //配置
       }).$mont("#app1")
       new Vue({
           //配置
       }).$mout("#app2")
      </script>

在vue3中，去掉了Vue构造函数，转而使用CreateApp创建vue应用

     <!-- vue2 -->
     <div id="app1"></div>
      <div id="app2"></div>
      <script>
     createApp(根组件).use(...).mixin(...).component(...).mount('#app')
     createApp(根组件).mount('#app2')
      </script>
 
 # 面试参考答案
  面试题1: 为什么vue3中去掉了vue构造函数
       vue2全局构造出来的函数带来了诸多问题：
     1. 调用构造函数的静态方法会对所有vue应用效应，不利于隔开不同的应用
     2. vue2的构造函数集成了太多功能，不利于tree shaking,vue把这些功能使用普通函数导出，能充分利用tree shaking优化打包体积
     3. vue2没有把组件实例和vue应用两个概念区分开来，通过createApp创建的对象，是一个vue应用，它的内部提供的方法是针对整个应用的，而不再是针对一个特殊组件
  
  面试题2: 谈谈你对vue3数据响应式的理解  
  
   vue3不再使用object.defineProperty的方式完成数据响应式，而是使用Proxy
   除了Proxy本身效率要高于object.definePropert之外，由于不必递归遍历所有属性，而是直接得到一个Proxy。所以在vue3中，对数据的访问是动态的，当访问某个属性时，再动态获取和设置，这就极大的提升了组件初始阶段的效率
   同时，由于Proxy可以监控到成员的新增和删除，因此，在vue3中新增成员、删除成员、索引访问等均可以触发重新渲染，而这些事在vue2中难以做到的。