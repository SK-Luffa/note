import {  useEffect } from 'react';

// 组件首次渲染后，启动一个计时器
// 组件卸载后，清除该计时器
const useTimer = (fuc, duration) => {
    useEffect(() => {

        const timer = setInterval(fuc, duration)
        // 清理函数
        return()=>{
            clearInterval(timer)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>

        </div>
    );
};

export default useTimer;