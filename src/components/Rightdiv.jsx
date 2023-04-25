import React, { Component } from 'react'
import './Rightdiv.css'
import { change } from './Maindiv'

export default class Rightdiv extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

    }
  }

  render() {
    return (
      <div className='rightdiv'>
        <div className='rigthindiv'>
          <button onClick={change}>
            Click me
          </button>
        </div>
      </div>
    )
  }
}
