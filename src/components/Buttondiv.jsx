import React, { Component } from 'react'
import { nextQuote } from './Quotearea'
import './Buttondiv.css';
import Sharearea from './Sharearea';

export default class Buttondiv extends Component {
  render() {
    return (
      <div className='btndiv'>
        <h1 className='nxtbtn' onClick={nextQuote}>NEXT QUOTE??</h1>
        <div className='sharearea'>
            <Sharearea/>
        </div>
      </div>
    )
  }
}
