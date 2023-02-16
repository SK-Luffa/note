# 基本类型约束

> TS是一个可选的静态的类型系统

# 如何进行类型约束

仅需要在 变量、函数的参数、函数的返回值位置上加上```:类型```

TS可以在很多场景中完成类推导

any：表示任意类型，对该类型，TS不会进行类型检查

> 小技巧：如何区分数字字符串和数字，关键看怎么读？
> 如果按照数字的方式读取，那么就是数字，否则就是字符串


# 源代码和编译结果的差异

 编译结果中没有类型约束信息

 # 基本类型
 - number:数字
 - string:字符串
 - bool:布尔
 - 数组    let nums:object[] 或 let mus:Array<object>
 - object:对象
 - null和 undefined
  
  null和 undefined是所有其他类型的子类型，他们可以赋值给其他类型   
  设置； tsconfig.json

   "strictNullChecks": true//更加严格的模式：null和undefined将不能被其他已规定类型的变量所使用

# 其他常见类型

- 联合类型  ｜   多种类型任选其一      string | undefined       number | string

配合类型保护进行判断
 
 类型保护：当对某个变量进行判断之后，在判断的语句块中，便可以确定他的确定确切类型，typeof 可以触发类型保护

- viod类型：通常用于约束函数的返回值，表示该函数没有任何返回值
  
- never类型：通常约束函数的返回值，表示该函数永远不可能结束
  
- 字面量类型：表示使用一个值进行约束    let p:"zhangsan";//表示这个变量只能是’zhangsan‘
  
- 元祖类型（Tuple）:表示固定长度的数组，并且数组中每一项的类型确定    let arr:[string,number]     let arr:[[],[]]
  
- any类型: 可以绕过类型检查，因此 any类型的出现，可以赋值给任意类型

# 类型别名

对已知的一些类型定义名称  

```
type  类型名=。。。
```


```TS
type user = {
    name: string
    age: number
    gender: "男" | '女'
}

let usa: user

function getusers(): user[] {
    return []
}

```

# 函数相关的约束
 
 函数重载：在函数实现之前，对函数调用的多种情况进行声明
```TS
// 函数重载 得到a*b的结果
function com(a:number,b:number):number;
// 函数重载 得到a+b的拼接
function com(a:string,b:string):string;
function com(a:number|string,b:number|string):number|string{
    if(typeof a==="number"&& typeof b==="number"){
        return a*b
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b
    }
    throw new Error("a和b必须是相同类型")
}
const rest=com(1,11)
const resx = com("2","1")
```

 可选参数：可以在某些参数名后加上问号，表示该参数可以不用传递,可选参数必须在参数列表的末尾
 默认参数：可以在某些参数名后加上等号，表示该函数可以有默认值，默认参数不能和可选参数为同一个参数设置

 ```TS
 function sumx(a:number,b:number=2,c?:number){} 
 ```


