import React from 'react'
import "./index.css"
export default function index(props) {
    var defaultProps = { //默认属性
        bg: "rgba(0,0,0,0.5)"
    };
    var datas = Object.assign({}, defaultProps, props)
    console.log(datas.bg)
    
    console.log(props.kus);
    return (
        <div className='modal' style={{ background: datas.bg }} onClick={e => {
            if (e.target.className === "modal") {
                props.onClose();

            }
        }} >
            <div className="modal-center">
                {datas.children}
            </div>
        </div>
    )
}
