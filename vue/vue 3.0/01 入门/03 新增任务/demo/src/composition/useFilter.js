import { ref, onMounted, onUnmounted,computed } from "vue";
import {filter} from "../util/todoStorage"
const validHash=['all','active','completed']
const onhashchanges = () => { 
   
   const hash=location.hash.replace(/#\/?/, "")

   if(validHash.includes(hash)){
       //有效
       visibilityRef.value="hash"
   }else{
    //    无效
    location.hash=""
       visibilityRef.value="all"
   }

};
export default function (todusRef) {
    const visibilityRef = ref("all")
    // 监听hash值的变化   window.addEventListener("hashchange")

    //如何在setup中设置 生命周期函数

    // 1. 组件挂载时的生命周期函数
    onMounted(() => {
        window.addEventListener("hashchange", onhashchanges)
    })
    onUnmounted(() => {
        window.removeEventListener("hashchange", onhashchanges)
    })
    const filteredTodosRef=computed(()=>{
       return filter(todusRef.value,visibilityRef.value)
    })

    // 2. 组件销毁时的生命周期函数
    // 在vue3中  vue将这些生命周期函数变为了一些普通函数
    return{
        visibilityRef
    }
}