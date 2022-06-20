 # 4-5.  明确函数的双重用途

####  ES6提供了一个特殊的API，可以使用该API在函数内部，判断该函数是否使用了new来调用

##### new.target  //该表达式，得到的是：如果没有使用new调用函数，则返回undefiend ，如果使用过new 则得到得是new关键字后面的函数本身  例如：

    var a=new s();
     console.log(new target(a))//输出s() 如果我们没写new s（） 的话，那么就输出undefined
       
 