# 使用const常量
## const和let完全相同，仅在于用sonst声明的变量，必须在声明时赋值，并且不可以被重新赋值。

## 实际上，在开发中，尽量使用const来声明变量，以保证变量的值不会被随意篡改。

### 为什么要尽量使用cosnt来生明变量？
   1. 根据经验，开发中的很多变量都是不会更改，也是不应该更改的
   2. 后续的很多框架和第三方库，都要求数据不可变，使用常量可以一定程度上保证这一点
### 注意的细节
#####   1. 常量不可变，是指声明的常量的内存空间不可变，  并不保证内存空间中的地址指向其他空间不可变。  也就是说如果我们声明一个对象，或者数组这样的堆内存变量 那么我们去改变当中的值是没有问题的， 
###### 故由此可得出 :const常量绑定的是栈内存，我们不能改变其指向的栈内存 但是我们可以去改变栈内存当中指向堆内存的地址  例如：
    const a={  name:"123",age:"3"}; ---指向栈内存 不可改变
    a.name="789"; a.age="8";  --------栈内存指向堆内存，栈内存存储的堆内存的地址是可以被改变的
    故a={ name:"789",age:"8"};-------所以这个时候常量的值就发生改变了    

##### 2. 常量的命名
        1. 特殊的常量：该常量从字面意义上，一定是不可变的，如圆周率、月地距离或其他一些绝不可能发生变化的配置，通常该常量的名称全部使用大写 多个单词之间用下划线分割 例如：NAME_AGE
        2. 普通的常量 首字母大写就ok
        3. 在for循环中，循环变量不可以使用常量
        

