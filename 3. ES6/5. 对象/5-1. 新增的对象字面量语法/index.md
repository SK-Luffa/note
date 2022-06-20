# 5-1. 新增的对象字面量语法

1. 成员速写
 
###### 如果对象字面量初始化时，成员名称来自于一个变量，并且和变量的名称相同，则可以进行简写  例如：
###### ES5:
              function a(b,c,d,e){
                  b:b,
                  c:c,
                  d:d,
                  e:e
              }
###### ES6:
              function a(b,c,d,e){
                  b,
                  c,
                  d,
                  e
              }
        

2. 方法速写 

##### 对象字面初始化时，方法可以省略冒号和 “function” 关键字    例如 ：
###### ES5:
               const user={
            name:"张三",
            age:18,
            sayHello:function(){
                console.log(this.name,this.age)
            }  
        }
        user.sayHello();
###### ES6:
              const user={
            name:"张三",
            age:18,
            sayHello(){
                console.log(this.name,this.age)
            }  
        }
        user.sayHello();
        
 
3. 计算属性名
###### 有的时候，初始化对象时，某些属性名可能来自某个表达式的值，在ES6中，可使用 “[]”  来表示属性名师通过计算得到的 例如：
          const prop1="name";
          const prop2="age";
          const prop3="sayHello;
          const User={
              [prop1]:"张三"，
              [prop2]:'14',
              [prop3](){
                  console.log(this.[prop1],this.[prop2])
              }
          }
