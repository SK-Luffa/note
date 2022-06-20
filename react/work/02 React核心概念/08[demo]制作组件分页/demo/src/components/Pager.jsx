import React from "react";
import "./Pager.css"

// 分页组件
// 属性{由调用者提供}：1. current   2.total: 总数据量  3. limit: 页容量，每页显示的数据量  4.panelNumber:数字页码最多显示多少个 
// 状态(自我维护)   1.current：当前页码
// 事件{由调用者提供} 1. onPageChange 当页码改变
export default function Pager(props) {
    const PageNumber = getPageNumber(props);//拿到总页数
    return (
        <>
            {/*   首页  就是当 为第一页的时候 就不能点击，这里是对他的样式进行了改变*/}
            <span onClick={toPage(1, props)} className={props.current === 1 ? "item disabled" : "item"}>首页 </span>
            {/* 上一页  与首页的功能是一样的 至少在样式上   */}
            <span className={props.current === 1 ? "item disabled" : "item"}>上一页 </span>
            {/* 数字页码 */}

            {/* 下一页    就是当下一页为最后一页的时候不能点击，先对他的样式进行了改变  */}
            <span className={props.current === PageNumber ? "item disabled" : "item"}>上一页 </span>
            {/* 尾页 原理和下一页一样 */}
            <span className={props.current === PageNumber ? "item disabled" : "item"}>上一页 </span>
            {/* 当前页码 */}
            <span className="current">{props.current}/</span>
            {/* 总页数 */}
            <span>{PageNumber}</span>
        </>
    )
}

// 跳转到某页
function toPage(target, props) {//target 表示目标页码  props 所有属性
    if (props.current === target) {//目标页数和当前页数一样，就不执行操作
        return;
    }
    // 因为这个函数组件内部无法自执行 跳转，肯定是调用者传递一个方法过来然后 在进行调用
    props.onPageChange && props.onPageChange(target)//1 表示首页
}


// 计算总页数
function getPageNumber(props) {
    //  页数= 总数据量/页容量   --- 这个会有可能有小数，但是我们的页数是不能有0.5页的，故使用 marh.ceil()方法向上取整
    return Math.ceil(props.total / props.limit);
}
