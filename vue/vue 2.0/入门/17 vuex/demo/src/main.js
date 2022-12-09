import Vue from 'vue'
import App from './App.vue'
import store from "./store"
// console.log(store);


new Vue({
  store,
  render: h => h(App),

}).$mount('#app')
