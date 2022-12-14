     客户端渲染效率比vue2提升了1.3～2倍
     SSR渲染效率比vue2提升了2～3倍

## 面试题： Vue3的效率提升主要表现在哪些方面？

# 静态提升

下面的静态节点会被提升
* 元素节点
* 没有绑定动态内容

     //vue2的静态节点
     
      render（）{
         createVNode('h1',null,'Hello Word')
         //...
      }
      //vue3的静态节点
      const hoisted=createVNode('h1',null,'Hello Word')
      function render(){
          //直接使用hoisted即可
      }
    静态属性会被提升
    
       <div class="user">
       {{user.name}}
        </div>
```
       const hoisted={class:"user"}
     function render(){
         createdVNode('div',hoisted,user.name  )
         //...
     }

```


# 预字符串化

当编译器遇到大量连续的静态内容，会直接将其编译为一个普通字符串节点

# 缓存事件处理函数

```vue
  <button @click="count++">plus</button>
```
```
// vue2
  render(ctx){
      return createVNode('button',{
          onClick:function($event){
              ctx.count++
          }
      })
  }
```
```
//vue3
  render(ctx,_cache){
      return createVNode('button',{
          onClick:cache[0]||(cache[0]=($event)=>{ctx.count++})
      })
  }
```
# Block Tree
vue2在对比新旧树的时候，并不知道那些节点是静态的，那些节点是动态的，因此只能一层一层的比较，这就浪费了大部分时间在对比静态节点上 

vue3 依托强大的编译器对每个节点进行标记，从而区分出那些事静态节点，那些是动态节点 

# PacthFlag

vue2在对比每一个节点时，并不知道这个节点那些相关信息会发生变化，因此只能将所有信息一次对比

```vue
<div class='user' data-id='1' title='user name'>{{user.name}}</div>
```