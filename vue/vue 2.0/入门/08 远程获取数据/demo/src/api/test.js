import axios from "axios"
const ins=axios.create();//创建一个axios的实例
ins.interceptors.response.use(function(resp){
    console.log(resp)
})//拦截器
async function posts() {
    const a = await ins.get("http://localhost:8080/commercial_api/banners_v3/pc_top_banner?")
    // const b = await axios.get("http://localhost:8080/commercial_api/banners_v3/home_up?")
    // const c = await axios.get("http://localhost:8080/commercial_api/banners_v3/pc_right_banner?")
    console.log(a``)
}
posts();