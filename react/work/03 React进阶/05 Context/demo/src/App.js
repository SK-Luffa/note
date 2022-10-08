import React, { Component } from 'react'
import OldContext from './OldContext'
import NewContext from './NewContext'
import Nes from './Nes'
export default class App extends Component {
  render() {
    return (
      <>
            <OldContext />
        <NewContext />
        <Nes />
      </>
    )
  }
}
