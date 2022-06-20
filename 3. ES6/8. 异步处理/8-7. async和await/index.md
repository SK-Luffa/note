# async 和 await

async和await是 ES2016 新增的两个关键字，他们借鉴了 ES2015中生成器在实际开发中的应用，目的是简化 Promise api的使用，并非是代替Promise。

## async   目的是简化在函数的返回值 中对promise的创建

async用于修饰函数（无论是函数字面量还是函数表达式），防止在函数最开始的位置，被修饰函数的返回结果一定是Promise对象。

```js
 async function test (){
     console.log(1);
     return 2;
 }

 //等效于

 function test (){
     return new Promise((resolve,reject)=>{
         console.log(1);
         resolve(2);
     })
 }

 ``` 
  ### await 
   ** await关键字必须出现在async函数中！！！！**
     
     await用在某个表达式之前，如果表达式是一个promise，则得到的是thenable中的状态数据。

    ```js
    async function test1(){
        console.log(1);
        return 2;
    }
    test2();



```
```js
    
        async function test() {
            
            console.log(1);
            return "ws"
        
        }
        async function  jus() {
            const bbb=await  test() //如果我们不屑await 这里输出一个promise对象， 如果我们写了await 这里输出 "ws"
        }
 ```
 ``` js
async function test(){
    const result =await 1;  // 注意这里返回的并不是一个promise
    console.log(result)

}
console.l0g(3)    //最后结果输出 3  1
```
### 等同于
```js
  function test (){
      return new prpmise ((resolve,reject)=>{
           promise.resolve(1).then(data=>{
               consy result= data;
               console.log(result);
               resolve();
                
           })
      })
  }
  test();
  console.log(123)
  ```

  ## 故 如果await的表达式不是promise，则会将其使用Promise.resolve包装后按照规则运行

## 对于成功 或失败状态 我们最好使用 try cath 来进行
async function test(){
    try{
        const result=await getPromise();
        console.log("正常状态"，result)
    }catch(err){
        console.log("错误状态"，err)
    }
}
    