import { React, useState } from 'react'
import {addListAction} from "../redux/actions"

export default function Input(props) {
    const [value, setValue] = useState('')
    function clickhandle(){
        // 将用户填写的内容提交给仓库

        // dispatch方法会派发一个action对象到reducer里
        // addListAction(value)===> {type:add,data:value}
        // 这个就是我们的action描述对象，该对象会被dispatc（派发）到reducer里面
        props.store.dispatch(addListAction(value));
    }
    return (
        <div className='form-inline'>
            <input
                type="text"
                className='from-control'
                placeholder='请输入代办事项'
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
            />
            <button className='btn btn-primary' onClick={clickhandle}>提交</button>
        </div>
    )
}
