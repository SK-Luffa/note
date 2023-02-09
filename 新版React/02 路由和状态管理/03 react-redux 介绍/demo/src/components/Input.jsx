import { React, useState } from 'react'

export default function Input() {
    const [value, setValue] = useState('')
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
            <button className='btn btn-primary'>提交</button>
        </div>
    )
}
