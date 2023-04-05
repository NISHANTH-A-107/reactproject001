import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'

class AppHome extends Component {
  render() {
    return (
      <div className='AppHome'>
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default AppHome