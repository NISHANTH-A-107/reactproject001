import React, { Component } from 'react'
import './Container.css'
import Maindiv from './Maindiv'
import Rightdiv from './Rightdiv'

class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Maindiv/>
        <Rightdiv/>
      </div>
    )
  }
}

export default Container