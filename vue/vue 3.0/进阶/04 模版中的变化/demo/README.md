# v-model
vue2比较让人诟病的一点就是提供了两种双向绑定：v-model和.sync，在vue3中去掉了.async修饰符，只需要使用v-model进行双向绑定即可。

为了让v-model更好的针对多个属性进行双向数据绑定，vue3做出了以下修改

* 当对自定义组件使用v-model时绑定的属性名由原来的value变为modelValue事件名由原来的input变为update:modelValue
 
* 去掉了 .sync修饰符他原本的功能由v-model的参数替代

* model参数配置被移除

* 允许自定义v-model修饰符
vue2无此功能
*  如果我们直接在v-model中使用某个修饰符（v-model.trim）会被解析为： modelModifiers:{trim} 或者在 某个自定义修饰符后再添加 （v-model:title.trim）则会被解析为：titleModifiers:{trim:true} 即：Modifiers前面的字母由我们制定的修饰符决定  v-model:text.trim）则会被解析为：textModifiers:{trim:true}

 # v-if v-for
 v-if的优先级现在高于v-for

 # key
 * 当使用<tempalte>进行v-for循环的时候，需要吧key值放在tempalte中，而不是它的子元素中
 * 当使用v-if v-elseif v-else分支的时候，不再需要制定key值，因为vue3中会自动给予每一个分支唯一的key
    
    即便是要手动给予key值，也必须给予每一个分支唯一的key，不能因为要重用分支而给予相同的key

# Fragment

vue3现在允许组件出现多个跟根节点
