# [扩展] 模板字符串标记
 
 # 在模板字符串书写之前，可以加上标记  ：标记名`模板参数`

标记是一个函数，函数参数如下：
1. 参数1：被插值分割的字符串数组
2. 后续参数：所有的插值

# 如果我们想先处理一些数据然后在进行字符串拼接 ,需要对模板字符串进行一些处理 在字符串前面加上“myTag”
    sonst b=`李四`
    const a=myTag`张三喜欢${b}`

    function myTag(parts){
        console.log(parts);
        console.log(arguments);
        
        return
    }

    console.log(text);

# 给模板字符串添加一个标记 :"String.raw" 就可以实现模板字符串不转义任何东西

   var a=String.raw`sdla\465`输出 sdla\456 

