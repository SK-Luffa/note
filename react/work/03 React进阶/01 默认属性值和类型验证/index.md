# 属性默认值 和 类型检查
## 属性默认值

通过静态属性 ```defaultProps```告知react属性默认值

## 类型检查
使用库：```prop-types```
对组件使用静态属性```propTypes```告之react如何检查属性
```js

propTypes.any //任意类型
propTypes.array//数组类型
propTypes.bool//布尔类型
propTypes.func//函数类型
propTypes.number//数字类型
propTypes.object//对象类型
propTypes.string//字符串类型
propTypes.symbol//符号类型

propTypes.node//任何可以被渲染的内容
propTypes.elementType//react元素
propTypes.instanceOf(构造函数)//必须是指定构造函数的实例
propTypes.oneOf([xxx,xxx])//枚举
propTypes.arrayOf(propTypes.XXX)//必须是某一类型组成的数组
propTypes.objectOf(propTypes.XXX)//对象由某一类型的值组成


propTypes.exact({...})//对象必须精确匹配传递的数据

//自定义属性检查，如果有错误返回错误对象即可

属性：function(props,propsName,componentName){

}
```
     a:propTypes.number.isRequired,//a属性必须是一个数字类型 并且是一个必填属性    isRequired：必填
