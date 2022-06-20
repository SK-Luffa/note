# 5-6. 类的继承

 如果两个类A和B，如果可以描述为：B是A，则，A和B形成继承关系

 如果B是A，则

 1. B继承自A
 2. A派生B
 3. B是A的子类
 4. A是B的父类

 如果A是B的父类，则B会自动拥有A中的所有实例成员。 

## 如果利用 call()方法去指向另一个构造函数上的属性，那么他不能继承那个构造函数原型上的方法
####   Object.setPrototypeOf(Dog.prototype,Animal,prototype) //将第一个参数的隐式原型设置为第二个参数

- 关键字 extends--------继承，用于类的定义
- super
   - 直接当做函数调用表示父类构造函数 
   - 如果当作对象类使用则表示父类的原型

   class DOGS extends Animal{ //这句话的意思是  类 DOGS  继承 Animal 
        constructor(name,age,sex){
        //   关键字：super---- 
        super("犬类",name,age,sex); 
        super.pint(); 
        }
      }  


#### 注意：ES6要求，如果定义了constructor，并且该类是子类，则必须在constructor的第一行手动调用父类的构造函数  说人话就是你写继承 如果写了constructor必须在里面的第一行去写  super

#### 如果子类不写constructor，则会有默认的构造器，该构造器需要的参数和父类一致，并且自动调用父类构造器 

# 并且ES6 会自动帮你搞定父类原型上的方法 故我们可以直接调用父类原型上的方法
 
### 【冷知识】
- 用js制作抽象类
  - 抽象类：一般是父类，不能通过创建该类创建对象
- 正常情况下，this的指向，this始终指向具体的类的对象