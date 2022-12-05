# 自定义指令

## 全局定义
  ***vue*** 

    Vue.directive("mydirec1"{
      //指令配置
    })

    Vue.directive("mydirec2"{
      //指令配置
  })

 ## 之后所有组件均可使用mydirec1和mydirec2指令
   ***vue***
     
     <template>
     <!-- 某个组件代码 -->
    
     <MyComp v-mydirec1="js表达式"/>
     <div>
     </div v-mydirec2="js表达式" >
     </template>

 ## 局部定义
    
    在当前组件的的script

    export default{
        directive:{
            mydirec1:{
                指令配置
            },
             mydirec2:{
                指令配置
            }
        }
    }

  * 和局部注册组件一样，为了让指令更加通用，我们通常会把指令的配置提取到其他模块



