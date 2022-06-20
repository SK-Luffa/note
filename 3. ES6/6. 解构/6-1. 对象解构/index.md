# 6-1. 对象解构

## 什么是解构
使用ES6的一种语法规则，将一个对象或数组的某个属性提取到某个变量中  
**解构不会对被解构的目标造成任何影响**

 const user = {
            name: '张三',
            age: 18,
            sex: '男',
            address: {
                province: '三溪',
                city: '南山'
            }
        }
        //  平常如果我们想拿到name那么就是只能 user.name 这样拿  
        // 如果想要拿出来就得 name=user.name 这样才行，但是这样拿取是十分麻烦的，故我们需要解构进行读取

        // 例如：
        let name, age, sex, address;
        ({ name, age, sex, address } = user);
        // 并且 解构还能将以上两条语句进行合并书写  例如
        let { name, age, sex, address } = user;

## 在解构中使用默认值

``` js
{同名变量=默认值}
```
 let { name, age, sex, address,abc=465} = user;

## 非同名属性解构

```js
{属性名:变量名}
```
// 先定义四个变量 name age gender  address
        // 再从对象user中读取同名属性赋值（其中gender读取的是sex属性） 也就是说 gender是我们定义的 sex是user对象里面的
        let { name, age, sex:gender, address } = user;
        console.log(name,age,gender,address);

### 对于对象里面的对象如何进行解构？ 
解构出user中的name province{province是address的一个属性}
我们可以拿到province  但是我们不能拿到 address了
   let { name, age, sex:gender, address:{province} } = user;
