 # 类：构造函数的语法糖

 ## 传统的构造函数的问题

 1. 属性和原型方法定义分离，降低了可读性

 2. 原型成员可以被枚举
 
 3. 默认情况下，构造函数仍然可以被当作普通函数使用

 # ES5 写个构造函数和ES6写个类的形式：

 ###  ES6类的写法 类就相当于ES5构造函数
  ##### 形式：
     class 名称 {
            constructor(type, name, age, sex) {  
                this.type = type;
                this.name = name; 
                this.age = age;
                this.sex = sex;

            }
           方法名(){
                  console.log(`【种类】：${this.type}`);
                  console.log(`【名字】：${this.name}`);
                  console.log(`【年龄】：${this.age}`);
                  console.log(`【性别】：${this.sex}`);
                  }
        }

# ES5:
    function Animal(type, name, age, sex) {
            this.type = type;
            this.name = name; 1515
            this.age = age;
            this.sex = sex;

        };
        // 定义实例方法（原型方法）
        Animal.prototype.pint = function () {
            console.log(`【种类】：${this.type}`);
            console.log(`【名字】：${this.name}`);
            console.log(`【年龄】：${this.age}`);
            console.log(`【性别】：${this.sex}`);
            }
        const a = new Animal("人", "张三", 18, "男");
        a.pint();


## ES6: 

       class Animal {
            constructor(type, name, age, sex) {  
                
                this.type = type; 
                this.name = name; 
                this.age = age;
                this.sex = sex;

            }
           pint(){
                  console.log(`【种类】：${this.type}`);
                  console.log(`【名字】：${this.name}`);
                  console.log(`【年龄】：${this.age}`);
                  console.log(`【性别】：${this.sex}`);
                  }
        }
         const a = new Animal("人", "张三", 18, "男");
        a.pint();

 ## 类的特点

 1. 类声明不会被提升，与let和const 一样，存在暂时性死区  也就是 window.类名 无效！ 

 2. 类中的代码均在严格模式下执行

 3. 类的所有方法都是不可枚举的

 4. 类的所有方法都无法被当作构造函数使用 

 5. 类的构造器必须使用new来调用 