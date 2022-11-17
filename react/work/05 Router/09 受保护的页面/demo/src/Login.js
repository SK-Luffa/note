import React from 'react';
import qs from "query-string"
import logininfo from "./logininfo"
const Login = (props) => {
    return (
        <div>
            <h1>登陆授权页面</h1>
            <p>该页面仅做测试，点击下方按钮，登陆成功</p>
            <button onClick={()=>{
                logininfo.login()
               let query= qs.parse(props.location.search) 
               if(query.returnurl){
                   
                } props.history.push(query.returnurl )
                props.history.push("/")
            }}>登陆</button>
        </div>
    );
};

export default Login;