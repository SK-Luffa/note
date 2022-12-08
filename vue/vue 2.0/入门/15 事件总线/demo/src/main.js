import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// 测试事件总线

import eventbus from './eventbus'

function handler1(data){
  console.log("handler1",data)
}
function handler2(data) {
  console.log("handler2", data)
}
eventbus.$on('event1',handler1)
eventbus.$on('event1', handler2)
eventbus.$on('event2', handler1 )
window.eventbus=eventbus
