# 5-5. 类的其他书写方式

1. 可计算的成员名

如果说类的成员名并不固定，我们可以利用可计算的成员名来写 关键字"[]"
     
         cosst pad="jus",
    class Animal {
            constructor(type, name, age, sex) {  
                this.[pad] = type; 
                this.name = name; 
                this.age = age;
                this.sex = sex;

            }

           [pad](){
                  console.log(`【种类】：${this.type}`);
                  console.log(`【名字】：${this.name}`);
                  console.log(`【年龄】：${this.age}`);
                  console.log(`【性别】：${this.sex}`);
                  }
        }


2. getter和setter

ES5 Object.defineProperty可定义某个对象成员属性的读取和设置

使用getter和setter控制的属性，不在原型上

3. 静态类成员
  
  我们为什么需要写静态成员 ：实例化很多对象，每个对象都有宽和高，那么如果我们每次都给他们设置宽和搞是十分不便的 ，那么就需要我们去写静态成员

##### 静态成员的写法：  在类里面添加关键字 static
                              class change{
                                constructor(name){
                                  this.name=name
                                }
                                static width=50;
                                static height=500;
                                static bus(){

                                }
                              }
                              }
            调用静态成员
                        change.width
            调用静态方法
                      change.bus()
                  

构造函数本身的成员  而不是构造函数构造出来的的对象的成员    意思是：我们直接添加成员到构造函数本身，那么构造函数构造出来的对象就含有这个成员 
  静态成员只能通过构造函数本身访问，不能通过构造函数原型和构造函数构造出来的对象进行访问

4. 字段初始化器（ES7）
### 注意：   
##### 1. 使用static的字段初始化器，添加的是静态类成员
##### 2. 没有使用static的字段初始化器，添加的成员位于对象上 
##### 3. 箭头函数在字段初始化器指向当前对象         

static width=50;
 static height=500;
 ###### 像这样我们直接使用 “=” 为其静态属性赋值，在ES6是不可以的，但是在ES7是可以的

      class change{
                      constructor(){
                            this.age=18      
                       }
                       //像这样我们直接进行赋值的  在ES7语法当中我们可以直接写在constructor外面
                       age=18;  


                      static width=50;
                        static height=500; 
                              }
                              
       


5. 类表达式



6. [扩展]装饰器（ES7 ）（Decorator）

横切关注点

  语法： @标记名   会报错  例如 @Obsolete

  实际上装饰器是一个函数 这个函数需要你自己进行定义
  function Obsolete（class{类名},methods{方法名},descriptor）{

    console.log(target,.methods,descriptor)  //暂时不支持此方法，但是后面TS会支持
  }




    class test{

      pint（）{
        console.warn("print方法已经过时")
        console.log("pint方法")
      }
    }

