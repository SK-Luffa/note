import React from "react";
import ReactDOM from "react-dom";
import MyFuncComp from "./MyfuncComp";
import ClassComp from "./MyClassComp"

const a = <MyFuncComp number={31}/>;
const b = <ClassComp/>
ReactDOM.render(
    <div>
        {" "}
        {/* 两种使用方式：1. 函数调用：{MyFuncComp()}  2. <MyFuncComp></MyFuncComp>*/}{" "}
        {a}{" "}
        {/*<MyFuncComp/>*/}
    </div>,
    document.getElementById("root")
);
