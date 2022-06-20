# 事件

在React中，组件的事件，本质上就是一个属性

按照之前React对组件的约定，由于事件本质上是一个属性，因此也需要使用小驼峰命名法

**如果没有特殊处理，在事件处理函数中，this只想undefined**

* 解决方案
    1. 使用bind 函数绑定this
       写法1: 在调用当前组件的函数中的constructor 函数中 这样写 this.函数名=this.函数名.bind(this); 缺点：写起来比较麻烦，还得在调用组件中去写
       写法2: 在当前组件上绑定bind 例如 <Tick onClick={this.handleClick.bind(this)}/>   缺点，每次render的时候机会产生一个新的函数，有点浪费开支

    2. 使用箭头函数来绑定this
       写法1： 在当前组件上使用箭头函数 例如 <Tick onClick={()=>{})}/>   缺点，每次render的时候机会产生一个新的函数，有点浪费开支
       写法2： 在调用他的组件中写方法，直接写为 handleClick=()=>{} 后果：handleClick 不在原型上，而在对象上
     
