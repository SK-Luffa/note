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

* 注意：computed的执行时间是在调用其本身的value属性时才会输出
* vue3 一共两种数据响应式  ref object （ref和computed）  和  proxy（reactiev与readonly）

应用：
  * 如果想要让一个对象变为响应式数据，可以使用 reactive或 ref
  * 如果想要让一个对象的所有属性只读，请使用readonly
  * 如果想要让一个非对象数据变为响应式数据，请使用 ref
  * 如果想要根据已知的响应式数据得到一个新的响应式数据，请使用 computed

 #  监听数据变化

WatchEffect

     const stop=watchEffect(()=>{
         //该函数会立即执行，然后追踪函数中用到的响应式数据，响应式数据发生变化后会再次执行
      })
      //通过调用stop函数，会停止监听
      stop()；//停止监听

watch
      //等效于vue2的$watch
      //监听耽搁数据的变化
      const state =reactive({count:0})
      //两个参数，你要监听谁，要干什么，所以第一个参数是你要监听的数据并且这个参数必须写成函数的形式，第二个函数是要执行的毁掉函数，也就是你想要做的事情  
      watch(()=>state,或 count,(newValue,oldValue)=>{
          //...
      },options)
      const countRef=ref(0);
      watch(countRef,(newValue,oldValue)=>{
          //...
      },options)

     //监听多个数据变化
     watch([()=>state.count,countRef],([new1,new2],[old1,old2])=>{
         //...
     })

* 注意：无论是watchEffect还是watch，当依赖项变化时，回调函数的运行都是异步的（微队列）

应用：除非遇到下面的场景，否则建议选择watchEffect

* 不希望回调函数一开始就执行
* 数据改变时，需要参考旧值
* 需要监控一些回调函数中不会用到的数据



# 判断

| API          | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| `isProxy`    | 判断某个数据是否是由`reactive`或`readonly`                   |
| `isReactive` | 判断某个数据是否是通过`reactive`创建的<br />详细:https://v3.vuejs.org/api/basic-reactivity.html#isreactive |
| `isReadonly` | 判断某个数据是否是通过`readonly`创建的                       |
| `isRef`      | 判断某个数据是否是一个`ref`对象                              |

# 转换

**unref**

等同于：`isRef(val) ? val.value : val`

应用：

```js
function useNewTodo(todos){
  todos = unref(todos);
  // ...
}
```



**toRef**

得到一个响应式对象某个属性的ref格式

```js
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo'); // fooRef: {value: ...}

fooRef.value++
console.log(state.foo) // 2

state.foo++
console.log(fooRef.value) // 3
```

**toRefs**

把一个响应式对象的所有属性转换为ref格式，然后包装到一个`plain-object`中返回

```js
const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs: not a proxy
{
  foo: { value: ... },
  bar: { value: ... }
}
*/
```

应用：

```js
setup(){
  const state1 = reactive({a:1, b:2});
  const state2 = reactive({c:3, d:4});
  return {
    ...state1, // lost reactivity
    ...state2 // lost reactivity
  }
}

setup(){
  const state1 = reactive({a:1, b:2});
  const state2 = reactive({c:3, d:4});
  return {
    ...toRefs(state1), // reactivity
    ...toRefs(state2) // reactivity
  }
}
// composition function
function usePos(){
  const pos = reactive({x:0, y:0});
  return pos;
}

setup(){
  const {x, y} = usePos(); // lost reactivity
  const {x, y} = toRefs(usePos()); // reactivity
}
```