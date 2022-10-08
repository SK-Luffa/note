上下文的应用场景

编写一套组件（有多个组件），这些组件之间需要相互配合才能最终完成功能

比如我们要开发一套表单组件 使用方式如下

```js
render(){
    return (
        <Form onSubmit={datas=>{
        console.log(datas)//获取表单中的所有数据{对象}
        //{loginId:xxx}
        }}>
        <div>
         账号：  <from.Input name="loginId" type="text" />
        </div>
          <div>
          密码 <from.Input name="loginPwd" type="password" />
        </div>
          <div>
         <Form.Button></Form.Button>
        </div>
        </Form>
    )
}
```
