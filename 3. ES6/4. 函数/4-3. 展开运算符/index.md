# 4-3. 展开运算符

### 主要分为两种
#### 1. 对数组进行展开{ES6}
#### 2. 对对象进行展开{ES7 }

# 使用方式:  "...要展开的的东西 "  和剩余参数的写法是一模一样的，但是使用的地方不一样:剩余参数是写在形参当中的，而展开运算符则是写在方法或者别的地方，

function sum(...jus) {
            console.log(jus); 
            let sum = 0;
            for (let i = 0; i < jus.length; i++) {
                sum += jus[i]
            }
            return sum;
        }

        function readomNumber(bus) {
            let k=[];
            for (let i = 0; i < bus; i++) {
                k.push(Math.random())
            }
            return k
        }
        const s=readomNumber(10)


# 并且展开运算符对于参数的位置和数量没有限制，

  console.log(sum(...s,...s))

# 并且还能实现数组克隆
      const  arr1=[1,2,3,4,5,6,7,8,9];
        const arr2=[...arr1];

# 还能克隆对象 对象的属性不能重复定义，否则后面的将会覆盖前面的，我们可以利用这个特点去改变这个它的默认的东西，例如：
  cosnt obj1={
      name:"zhangsan"
      age:14
  }
  const obj2={
      ...obj1
      name:"lisi"//此时obj2的name属性为lisi
  }

  # 如果对象当中有新的对象的话，那么这个新的对象就是浅克隆 如何解决，须写一个通用的克隆，此外我们还可以将这个对象进行展开运算符 例如 name:{...obj.name}