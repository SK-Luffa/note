# object的新增API

1. Object.is

###### 用于判断两个数据是否相等  基本上跟严格相等（===）是一致的，除了一下两点：  

1) NaN和NaN是相等的
2）+0和-0是不相等的 
    例：
      console.log(Object.is(NaN,NNaN));
      console.log(Object.is(+0,-0));

2. Object.assign
###### 用于混合对象 ————两个对象合并成一个对象，若属性相同，则后一个对象的属性值覆盖掉前一个对象的这个属性值 ES6  而 “...”这种展开运算符是ES7才出现的 
            
            Object.assign(对象A,对象B,对象C) //参数的个数没有限制
### 注意： Object.assign(对象A,对象B,...对象C) 这种写法是错误的，因为展开运算符"..."和object.assign 不可混用 
#  并且真正实现的原理是 将obj2的数据，覆盖到obj1，并且会对obj1产生改动 ，然后返回obj1   
# 解决方案： 第一个值传一个空对象
   Object.assign({},对象A,对象B,对象C)

3. Object.getOwnPropertyNames 的枚举顺序    
 得到一个包含对象的所有属性的数组{不包含原型链} 只不过官方没有要求对属性的顺序进行排列，如何排序完全由浏览器厂商自行决定。
 ES6规定了该方法返回的数组的排序方式如下：

 —先排数字（升序排序），再排其他{其他按照书写顺序排}


4. Object.setPrototypeOf  该函数用于设置某个对象的隐式原型


比如：Object.setPrototypeOf(pbj1,obj2),
相当于 obj1.__proto__=obj2