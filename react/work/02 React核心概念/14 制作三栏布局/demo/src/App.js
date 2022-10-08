import React from 'react'
 import ThreeLayout from './components/common/ThreeLayout'
export default function App() {
  return (
    <div>
          <ThreeLayout left={
            <div> 
                <h1>左侧</h1>
            </div>
          }
              right={
                  <div>
                      <h1>右侧</h1>
                  </div>
              }>
              <div style={{border:"2px solid #f40"}}>
                  <h1>主区域</h1>
                  <p>721893adhdajkshdkjahkj</p>
              </div>
          </ThreeLayout>
    </div>
  )
}
