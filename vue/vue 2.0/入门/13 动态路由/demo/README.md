# 动态路由

当URL地址栏后面的值是动态的时候（非参数） 我们就要使用动态路由

{ namme:XXX ,path:"/page/active/:b/:c"}    path:"/page/active/1/2"

### 如何获取？
  this.$route.params.a    this.$route.params.b 