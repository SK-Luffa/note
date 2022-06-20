# VUE示例对象成员（三大部分）
  1. 以 $ 开头的 vue提供的一些实用方法和属性（$mount $on $emit）
  2. 以 _ 开头的是vue内部使用的成员 开发者不要使用它们(_isVue _event _data)
  3. 从配置中注入的成员（ title ... 就是打data里面的属性 ）

# 重点（render函数）


render(h){ <br/>
*  h() 方法 传递两个参数 第一个参数 是元素本身 第二个参数是函数的子节点 <br/>
return h("div",[])
},