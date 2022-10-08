import React from 'react'

export default function index(props) {
    console.log(props)//已经完成了混合
    return (
        <div className={props.classX}>
            a:{props.a},b:{props.b},c:{props.c}
        </div>
    )
}
// 属性默认值
index.defaultProps = {
    a: 1,
    b: 2,
    c: 3
}
