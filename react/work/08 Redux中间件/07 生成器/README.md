# 生成器 generator

## generator

生成器：有构造函数Genertaor创建的对象，该对象既是一个迭代器，又是一个可迭代对象（满足可迭代协议的对象）


```js
//伪代码

let generator=new Generator();
generator.next();//它具有next方法

let interator=generator[Symbol.interator]//它也是一个可迭代对象

for(const item of generator){
    //由于它是一个可迭代对象，因此也可以使用for of循环
}
```

**注意：Generator构造函数, 不提供给开发者使用,仅作为JS引擎内部使用**


## generator fuction

 生成器函数（生成器创建函数）：该函数用于创建一个生成器。

 * ES6 新增了一个特殊的函数：生成器函数，只要在函数名与function关键字之间加上一个*号，则自动返回一个生成器


 * 生成器函数的特点：
  
1. 调用生成器函数，会返回一个生成器，而不是执行函数体（因为生成器函数的函数体执行，受到生成器控制）
2. 每当调用了生成器的next方法，生成器的函数体会从上一次yield的位置（或开始位置）运行到下一个yield
   1. yield关键字只能在生成器函数内部使用，不能再普通函数内部使用
   2. 它表示暂停，并返回一个当前的迭代的数据
   3. 如果没有下一个yield，到了函数结束，则生成器的next方法返回的对象的done属性为true
3. yield关键字后面的表达式返回的数据，会作为当前迭代的数据  例如：
    ```js
  function* createGenerator() {

    console.log("生成器函数的函数体");
    yield 1//1 会被作为当前迭代的数据
    console.log("生成器函数的函数体1");
    yield 2//2会被作为当前迭代的数据
   }
   let generator = createGenerator()//调用后一定得到一个生成器
    ```
4. 生成器函数的返回值，会作为迭代结束时的value
  1. 但是 ，如果在返回结束以后仍然调用next，则value为undefiend 
5. 生成器调用next()的时候，可以传递参数，该参数会作为生成器函数体上一次yield表达式的值
  1. 生成器第一次调用next方法时，传递参数没有任何意义  
6. 生成器带有一个throw方法，该方法的效果与next效果相同，唯一的区别在于 ：
  1. next方法传递的参数会被当成一个正常的返回值
  2. throw方法传递的参数是一个错误的对象，会导致生成器函数内部发生一个错误   generator.throw(new Error("错误"))
7. 生成器带有一个retun方法，该方法会直接结束生成器    generator.return()
8. 若要在生成器内部调用其他生成器，注意：如果直接调用，得到的是一个生成器，如果加入*号调用，则进入其生成器内部执行。如果是```yeild* 函数（）```调用生成器函数，则该函数的返回结果，为该表达式的结果
    ```js
    function g2(){
      yield "x";
      console.log(123)
      yeild 'y'
    }

    function* createGenerator() {

    console.log("生成器函数的函数体");
    
    yield* g2 //1 会被作为当前迭代的数据
    console.log("生成器函数的函数体1");
    yield 2//2会被作为当前迭代的数据
   }
   let generator = createGenerator()
    ```
    

  

