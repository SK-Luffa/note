var name='window'
var person1={
    name:"person1",
    foo1:function(){
        console.log(this.name);
    },
    foo2:()=>{
        console.log(this.name);
    },
    foo3:function () {
        return function(){
        console.log(this.name);
        }
    },
    foo4:function(){
        return ()=>{
            console.log(this.name);
        }
    }  
}
var person2={ name:"person2"}


person1.foo1()
person1.foo1.call(person2)
person1.foo2()
person1.foo2.call(person2)
person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2)
person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)