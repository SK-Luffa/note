import React from 'react';
import {Route,Redirect} from "react-router-dom"
import logininfo from "./logininfo"
const ProtectetRoute = ({ component: Component,children,render,...rest}) => {
    return (
        <Route {...rest}
        render={values=>{
            if(logininfo.isLogin){
                return  <Component/> 
            }else{
                return <Redirect to={{
                    pathname:"/login",
                    search:"?returnurl="+values.localtion.pathname
                }}
                 />
            }
        }}
        />
    );
};

export default ProtectetRoute;