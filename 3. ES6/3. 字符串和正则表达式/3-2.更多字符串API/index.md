# 更多字符串API

# 以下均为字符串的实例（原型）方法
- includes(1,2) ————判断字符串中是否包含指定的子字符串 {简单理解就是判断当前字符串是否包含某个字符} 第二个参数表示从第几位开始查找
      const text="我很帅" 
      const x=  text.includes("帅");
      console.log(x);//true


- startswith(1,2)———— 判断字符串是否以指定的字符串开始  第二个参数表示从第几位开始查找

- endsWith(1,2)———— 判断字符串是否以指定字符串结尾   第二个参数表示从第几位开始查找

- repeat  ———将字符串重复指定的次数，然后返回一个新的字符串 {把当前字符串重复N次}
         const s="aaajjjsusdoalksd"
         console.log(s.repeat(10)); //把当前字符串重复十次
