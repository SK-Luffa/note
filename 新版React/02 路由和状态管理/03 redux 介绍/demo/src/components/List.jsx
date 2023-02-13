import React from 'react'
import {delListAction,changeAction} from "../redux/actions"


export default function List(props) {
    // 在redux中通过 store.getState（）来获取仓库数据
    const ulList = props.store.getState().list.map((item, index) => {
        return (
            <li key={index} className='text-primary listx'>
                <span onClick={() => { props.store.dispatch(changeAction(index)) }}>{item.content}</span>
                <button 
                type='button'
                    className='close '
                    onClick={()=>{
                        props.store.dispatch(delListAction(index))
                    }}
                > &times; </button>
            </li>
        )
    })
    return (
        <div className='form-inline' >

            <ul  style={{
                marginTop:"20px"
            }}>
                {ulList}
            </ul>
        </div>
    )
}
