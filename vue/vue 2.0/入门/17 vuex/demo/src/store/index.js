// vuex

import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)//导入vuex
export default new Vuex.Store({
    state: {
        sum: 123
    },
    mutations: {
        // 定义sum一个加一的方法
        increase(state) {
            state.sum++;
        },
        // 定义sum一个减一方法
        reduce(state) {
            state.sum--; 
        }
    },
    actions:{
        asynclus(ctx){
            setTimeout(() => {
                ctx.commit("increase ")
            }, 1000);
        
        }
    }
})


