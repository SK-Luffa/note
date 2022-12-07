

### 父子组件通信  子级向父级用$emit 的时候如果需要重新获父组件返回的结果可以使用回调函数

  this.$emit("lus",a,()=>{
      该函数传递给父组件，让父组件决定什么时候执行 
  })

##  $listeners      
    this.$listeners

*  $listeners是vue的一个实例属性，它用于获取父组件传过来的所有事件函数

*  $listeners 和 $emit的异同
  *  相同点：
      * 均可实现父组件向子组件传递信息
  * 差异点：
      * $emit更符合单向数据流，子组件仅发出通知，由父组件监听做出改变，而 $listeners 则是在子组件中直接使用了父组件的方法      
      * 调试工具可以监听到子组件的$emit事件，但无法监听$listeners中的方法调用（可以想想为啥）
      * 由于 $listeners中可以获得传递过来的方法，因此调用方法可以得到其返回值。但$emit仅仅是想父组件发出通知，无法知晓父组件处理的结果
    * 对于上述的三点，也可以在$emit中传递回调函数来解决

## v-model
  * 本质上其实是个语法糖， 是 :value 与 @input=’$event‘ 的合集  也就是说v-model最后会被转换为这两个 
  * v-model  也可以用在复选框中，此时v-model绑定的是一个数组， 复选框是否选中 取决于 value值是否在绑定的这个数组中
   * 并且选中状态的变化，会直接影响数组中是否含有这个值，简单来说就是，如果选中，数组会多出这个值，否则就会去掉这个值 
       * 例如 ：  
  * 
        lus:["sc","st"]
             <input type="checkbox" value="sc" v-model='lus' />
  * 同样的，v-model也可以作用于单选框 只不过这里就是绑定的是一个字符串  同样的选中也会改变 这个字符串的值
      * 例如 ：  
     * 
             lus:"sc"
             <input type="radio" value="sc" v-model='lus' />    <input type="radio" value="scs" v-model='lus' />
