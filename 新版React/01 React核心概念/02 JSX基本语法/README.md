# jsx基本语法

* jsx基本语法
* createElement 方法
  
  ## jsx基础语法
  在react中使用jsx来描述页面

  ```js
  function App(){
    return(
      <div>Hello</div>
    )
  }
  ```
  你可以吧类似于HTML的代码单独提出来

  ```js
  function App(){
    const ele=<div>Hello</div>
    return ele
    
  }
  ```

  注意这种类似于HTML的语法在React中称之为JSX，这是一种javascript的语法扩展，在React中推荐使用JSX来描述用户界面，JSX乍看起来可能比较像是模版语言，但实际上他完全是在js内部实现的

  **使用JSX描述页面时，有如下的一些语法规则：**

  * 根元素只能有一个
  * JSX中使用的js表达式，表达式写在花括号{}中
  * 属性值指定为字符串字面量，或者在属性值中插入一个js表达式
  * style对应样式对象，class要写作className
  * 注释需要写在花括号{}内
  * JSX允许在模版中插入数组，数组会自动展开所有成员
  

## createElement方法

JSX是一种js的语法扩展，Babe会将JSX转译成名为React.createElement函数调用

```js 
React.createElement(type,(props)),[...children]
```
参数说明：

* type：创建的react元素类型（可选的类型有：标签名字字符串、react组件）
* props（可选）：react元素的属性
* children（可选）；react元素的子元素
  




