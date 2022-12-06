import vueRouter from "vue-router"
import Vue from "vue"


Vue.use(vueRouter)

export default new vueRouter({
    mode:"history",
    routes:[
        {
            path: "/",
            name: "home",
            component: Homepage,
        },
    ]
})