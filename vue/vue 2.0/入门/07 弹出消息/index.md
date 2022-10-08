 ### 使用css module
在vue当中：
需要将样式名称命名为：xxx.nodule.ooo
xxx为文件名
ooo为样式文件后缀名，可以是css、less

### 得到组件渲染的dom
/**
获取某个组件渲染的Dom根元素
*/
function getComponentRootDom(comp,props){
    const vm=new Vue({
        render:h=>h(comp,[props])
    })
    vm.$mount();
    return vm.$el
}
 $el 表示vue渲染出来的真实的dom元素

 ### 向vue 注入实例成员（vue实例上挂在一些方法，）
## 我们在添加实例的时候，为了区分和防止覆盖，需要加上一些特殊符号，一般是$开头
  let vm=new Vue(...)
      vm.proptype.$imgs=()=>{
          console.log(123)
      }

### ref

<p ref="para"> some</p>

$refs:{ 
para:p元素 //在我们给自组件添加上ref的时候就相当于是在这里写上了 para :p
comp: 自组件的实例
    
}
*   一般情况下我们是拿不到自组件的this的，但是通过以上原理，就相当于在父组件这里写上了一个this 
#### 简而言之，我们可以通过这种方式直接拿到自组件的实例，可以进行很多魔幻的操作，（因为一般情况下我们是不建议直接通过父组件对子组件进行过多的操作的，所以慎用！ 慎用！ 慎用！{要用也要把注释写好，不然你们改你项目的或者自我查找bug的时候会耗费巨量时间}）
