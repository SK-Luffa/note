# 动态路由

当URL地址栏后面的值是动态的时候（非参数） 我们就要使用动态路由

{ namme:XXX ,path:"/page/active/:b/:c"}    path:"/page/active/1/2"

### 如何获取？
  this.$route.params.a    this.$route.params.b 

## 监听放在计算属性 computed  当中

### Router 
    this.$router.push({
      name:"Blog",
      query,
      params:{
        categoryId:this.routeInfo.XXX
      }
    })
  
* watch 监听路由
   
   watch:{
     $route(){},
     ["$route.params"](newval,oldval){}
     $router(){},
     }