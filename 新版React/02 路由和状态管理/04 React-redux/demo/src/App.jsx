import React from 'react'
import Input from './components/Input'
import List from './components/List'
import "./css/App.css"

export default function App(props) {
  return (
  <div className="container"> 
    <h1 className='lead' style={{marginBottom:"30px"}}>待办事项</h1>
      <Input  />
    <List  ></List>
  </div>
  )
}
