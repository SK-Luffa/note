import Vue from 'vue'
import App from './App.vue'
import  "./api/test"
import './mock'
Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
}).$mount('#app')
