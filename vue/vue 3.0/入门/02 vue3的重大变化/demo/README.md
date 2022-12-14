 # vue3 不存在构造函数Vue
 而是改成为createApp

### 并且不兼容

        mport App from './App.vue'
       const app=-createApp(App).mount('#app')
 
  * 所以应用插件也改为:
        
        app.use(vuex)

### vue3的this是代理porxy   代理指向的是vue组件实例

### composition api
    
    首先我们使用的vue2 是option api 

  * setup(){}   函数：
    1. 执行时间是在所有生命周期钩子函数之前执行
    2. 并且当中的this指向undefined
    3. return  {} 返回一个东西 这个东西会被附着在组件实例中  比如 data(){}
   * 但是得到的数据不具有响应式
   * 想要具有响应式 需要ref
         import {ref} from "vue" 
            let count = ref(0);
  
## setup 中，sount是一个对象  在实例代理中 count是count.value
 
