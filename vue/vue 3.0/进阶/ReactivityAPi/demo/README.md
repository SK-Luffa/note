reactivity  API （数据响应式API ）


> reactivity api: https://v3.vuejs.org/api/reactivity-api

# 获取响应式数据

| API        | 传入                      | 返回             | 备注                                                         |
| :--------- | ------------------------- | ---------------- | ------------------------------------------------------------ |
| `reactive` | `plain-object`            | `对象代理`       | 深度代理对象中的所有成员                                     |
| `readonly` | `plain-object` or `proxy` | `对象代理`       | 只能读取代理对象中的成员，不可修改                           |
| `ref`      | `any`                     | `{ value: ... }` | 对value的访问是响应式的<br />如果给value的值是一个对象，<br />则会通过`reactive`函数进行代理<br />如果已经是代理，则直接使用代理 |
| `computed` | `function`                | `{ value: ... }` | 当读取value值时，<br />会**根据情况**决定是否要运行函数      |


* reactive和readonly只能代理对象，不能直接代理原始值类型：
   比方说 const a=reactive(0)，这能代理吗，代理不了，没这个能力、

   所以出现了ref  而ref可以代理任何数据  本质上其实就是构建了一个访问器和修改器
* 但是 当ref发现你传入的值是一个对象的话，很明显是不能对数据进行响应式或者说代理的，那么， ref在内部会调用一次reactive 但是如果已经是代理了，那么就直接使用代理  比如给 const a=ref(reactive({a:1,m:2}))

# 注意：computed的执行时间是在调用其本身的value属性时才会输出
### vue3 一共两种数据响应式  ref object （ref和computed）  和  proxy（reactiev与readonly）

应用：
  * 如果想要让一个对象变为响应式数据，可以使用 reactive或 ref
  * 如果想要让一个对象的所有属性只读，请使用readonly
  * 如果想要让一个非对象数据变为响应式数据，请使用 ref
  * 如果想要根据已知的响应式数据得到一个新的响应式数据，请使用 computed

 