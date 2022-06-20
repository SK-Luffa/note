# 7-2. 共享符号


根据某个符号名称（符号描述）能够得到同一个符号{上一节可课说两个变量声明同一个符号不相等}

### 具体语法：
```js
Symbol.for("符号名/符号描述")  ///获取共享符号  
```

```js
const syb=Symbol();
        const syb1=Symbol();
        const boj1={
            a:1,
            b:2,
            [syb]:3
        }
        const obj2={
            a:"a",
            b:"b",
            [syb1]:"c",
        }
        console.log(boj1,obj2);
```
```js`
//共享符号实现原理
        const SymbolFor=(()=>{
            const global={};
            return function (name){
            if(!global[name]){
                global[name]=Symbol(name);
            }    
            console.log(global);
            return global[name];
            }
        })()
``