import React from 'react'
import {BrowserRouter as Router,} from 'react-router-dom'
import BetterLink from './BetterLink'
import RootRouter from './RootRouter'


export default function App() {

  return (
    <Router>
      <nav>
        <BetterLink to={{name:"home"}} >首页</BetterLink>
        <BetterLink to={{ name: "News" }} >新闻页</BetterLink>
      </nav>
      <div>
        <RootRouter /> 
      </div>
    </Router>
  )
}
 