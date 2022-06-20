# Hello World

直接在页面上使用React，引用下面的JS

```html

<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-demo@16/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

# React核心库

## React.createELement——创建一个react元素（虚拟dom）{本质上是一个对象}

**创建一个h1元素 // React.createElement(参数1：元素类型 如果是字符串 是一个普通的HTML元素，参数2：元素的属性 ,... 元素的子节点);</br>
var h1 =React.createElement("h1",{ title:"第一个react元素"
},"Hello World");

创建一个react元素，称作虚拟dom，本质上是一个对象

1. 参数1：元素是类型，如果是字符串，一个普通的html元素
2. 参数2：元素的属性，一个对象
3. 后续参数：元素是的子节点

## JSX

JS的扩展语法，需要使用babel进行转义