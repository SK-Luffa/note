import React from 'react'


export default function List(props) {
    // 在redux中通过 store.getState（）来获取仓库数据
    const ulList = props.store.getState().list.map((item, index) => {
        return (
            <li key={index} className='text-primary listx'>
                <span>{item.content}</span>
                <button 
                type='button'
                    className='close '
                
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
