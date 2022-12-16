# v-model
vue2比较让人诟病的一点就是提供了两种双向绑定：v-model和.sync，在vue3中去掉了.async修饰符，只需要使用v-model进行双向绑定即可。

为了让v-model更好的针对多个属性进行双向数据绑定，vue3做出了以下修改

* 当对自定义组件使用v-model时绑定的属性名由原来的value变为modelValue事件名由原来的input变为update:modelValue

* 去掉了 .sync修饰符他原本的功能由v-model的参数替代