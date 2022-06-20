# 7.1 普通符号

## 符号是ES6新增的一个数据类型，它通过使用函数 ```Symbol(符号名)``` 来创建

调用函数得到这个符号 
      var a=1 ----普通声明 声明一个number
      const syb1= Symbol() ---声明一个symbol

##### 设计符号的初衷，是为了给对象设置私有属性
###### 私有属性：只能在在对象中内部使用，外面无法使用    例如
 const syb7=Symbol("这是一个符号属性")

        const o={
            a:'123',
            b:'465',
            [syb7]:'789'
        }
        console.log(o.syb7);

### 符号具有一下特点

- 没有字面量
- 使用 typeof 得到的类型是 symbol
- **每次调用 Symbol 函数得到的符号永远不相等，无论符号名是否相同**
- 符号可以作为对象的属性名存在，这种属性称之为符号属性
  - 开发者可以通过精心的设计，让这些属性无法通过常规的方式被外界访问

        const jus=(function () {
            const red=Symbol();
            return{
                a:1,
                b:2,
                kus(){
                    return this[red]+"123"
                },
                [red](){
                    return"d"
                }
            }
        })()

  - 符号属性是不能被枚举的，因此在 for-in 循环中无法读取到符号属性，Object.keys 方法也无法读取到符号的属性 
  - Object.getOwnPropertyNames 尽管可以得到所有无法枚举的属性，但是仍然无法读取到符号属性
  - ES6 新增 Object.getOwnPropertySymbols 方法，可以读取符号
- 符号无法被隐式转换，因此不能被用于数学运算、字符串拼接或其他隐式转换的场景，但符号可以显示的转换为字符串，通过String 构造函数进行转换即可，console.log 之所以可以输出符号，是它在内部进行了显示转换 