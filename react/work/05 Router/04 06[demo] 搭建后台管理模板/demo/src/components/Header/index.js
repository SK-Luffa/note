import React from 'react';
import "./index.css"
const index = () => {
    return (
        <div className='header-content'>
            <div className="lefts">
                    <h1>学生管理系统</h1>
            </div>
            <div className="rights"> 
                <span>用户名</span>
                <button>退出</button>
            </div>
        </div>
    );
};

export default index;