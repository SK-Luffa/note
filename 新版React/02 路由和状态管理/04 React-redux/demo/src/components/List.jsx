import React from 'react'

// import { useSelector,useDispatch } from "react-redux"
// import {change,del} from "../redux/todoListSlice"
import {useSelector,useDispatch,change,del} from "./lx.js"

export default function List(props) {
    const dsipatch=useDispatch();

  const {list} = useSelector(state=>state.todo)
    console.log(list);
    // 在redux中通过 store.getState（）来获取仓库数据
    const ulList = list.map((item, index) => {
        return (
            <li key={index} className='text-primary listx'>
                <span onClick={() => { dsipatch(change(index)) }}>{item.content}</span>
                <button
                    type='button'
                    className='close '
                    onClick={() => {
                        dsipatch(del(index))
                    }}
                > &times; </button>
            </li>
        )
    })
    return (
        <div className='form-inline' >

            <ul style={{
                marginTop: "20px"
            }}>
                {ulList} 
            </ul>
        </div>
    )
}
