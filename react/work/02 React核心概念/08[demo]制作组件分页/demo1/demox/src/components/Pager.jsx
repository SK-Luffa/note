import React from 'react'
import "./pager.css"
// 分页组件
// 属性
// 1. current 初始页码， 
// 2.total   总的数量，
// 3. limit 一页显示的数量  总页数=总数据量/一页显示的数量
// 4. panelNumber 显示的最多页码数量，
// 5. onPageChange:当页码改变的事件


// 状态
//  1. current  当前页码
function Pager(props) {
    const PageNumber = getPageNumber(props);//总页数
    return (
        <>
            <span onClick={toPage(1, props)} className={props.current === 1 ? "item disabled" : "item"}>首页</span>
            <span className={props.current === 1 ? "item disabled" : "item"}>上一页</span>
            {/* 数字页码 */}
            <span className={props.current === PageNumber ? "item disabled" : "item"}>下一页</span>
            <span className={props.current === PageNumber ? "item disabled" : "item"}>末页</span>
            <span>{props.current}/{PageNumber}</span>
        </>
    )
}

// 跳转到指定的页 target : 目标页   props所有属性
function toPage(target, props) {
    if (target === props.current) {
        return
    }
    props.onPageChange && props.onPageChange(target);
}

// 计算总页数
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit);
}

export default Pager




