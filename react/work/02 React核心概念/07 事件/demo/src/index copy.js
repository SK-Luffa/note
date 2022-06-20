import React from 'react';
import ReactDOM from 'react-dom/client';

const btn = <button onClick={() => {
    console.log('点击了');
}} onMouseEnter={() => {
    alert("张三")
}}>点击我 </button>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    btn
);


