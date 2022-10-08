import React from 'react'
import "./index.css"
export default function ThreeLayout(props) {
  const defaultProps = {
    leftWidth: 200,
    right: 200,
    minWidth: 800,
  }
  const datas = Object.assign({}, defaultProps, props)
  console.log(props);
  return (
    <div className='three-layout'>
      <div className="main">
        {props.children}
      </div>
      <div className="aside-left" style={{
        width: datas.leftWidth
      }}>
        {props.left}
      </div>
      <div className="aside-right"
        style={{
          width: datas.right
        }}>
          {props.right}
        </div>
    </div>
  )
}
