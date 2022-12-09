## vuex
  前面如何使用我就不说了

### 数据的变更

尽管可以利用数据响应式的特点直接变更数据，但这样的做法在大型项目中会遇到问题

   如果某一天你发现某个共享数据是错误的，而有一百多个组件可能都变更过这个数据，你该如何判定是那个组件改变了这个数据？

### 为了能更好的跟踪数据的变化，vuex强烈建议使用mutation来更改数据

     例： export default new Vuex.Store({
       state:{
        sum:'123'
       }
       mutations: {
        // 定义sum一个加一的方法
        increase(state) {
            state.sum++;
        },
        // 定义sum一个减一方法
        reduce(state) {
            state.sum--;
        }
       }
      }) 
  * 使用方法：
       this.$store.commit("increase")  //第一个参数写方法，第二个参数写负荷，也就是方法里面除state传递的参数
  * 注意：
     1. mutation 不得有异步操作
     2. 提交mutation是改变数据的唯一原因

###  actions  专门用来处理异步请求  
   
   * actons的用法基本上和mutations是一样的，只不过这个对象是专门用来处理异步的
 
         例子：
         actions:{
           asynclus(ctx){
              settimeout(()=>{
                ctx.commit("increase")
              },1000)
           }
         }
     
   