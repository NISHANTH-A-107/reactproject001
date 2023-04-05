import React, { Component } from 'react'
import './Body.css'
import Sidenav from './Sidenav'
import Feed from './Feed'
import Feature from './Feature'

export default class Body extends Component {
  render() {
    return (
      <div className='Body'>
        <Sidenav/>
        <Feed/>
        <Feature/>
      </div>
    )
  }
}
