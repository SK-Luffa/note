import {createRouter,createWebHistory} from "vue-router"
import routes from "./Routes.js";
export default createRouter({
    history: createWebHistory(), //model:history=>history:createWebHistory()
    routes

})