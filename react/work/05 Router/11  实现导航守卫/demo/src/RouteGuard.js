import React from 'react';
import { BrowserRouter } from "react-router-dom"
const RouteGuard = (props) => {
    // console.log("props", props);

    props.history.listen((location, action) => {
        console.log(1);

        if (props.onChange) {
            // 之前的location就是现在的location  而跳转之后的location源自于props.history.listen中的参数loaction

            props.onChange(props.location, location, action)
        }
    })
    props.history.block("真的要跳转页面吗")

 
    return <BrowserRouter
        getUserConfirmation={(mes) => {
            console.log(`禁止跳转，${mes}`, mes);
        }}>{props.childre}</BrowserRouter>;
};
// const RouteGuards = withRouter(RouteGuard)

export default RouteGuard;