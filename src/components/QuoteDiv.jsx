import React, { Component } from 'react'
import Quotearea from './Quotearea';
import './Quotestyle.css'
import old1 from './assets/bg1.jpeg'

class QuoteDiv extends Component {
  render() {
    return (
      <div className='divquote'>
        <img className='bgimg' src={old1} alt="bgimg" />
        <div className='divquote2'>
            <h1>QUOTE OF THE DAY</h1>
            <Quotearea/>
        </div>
      </div>
    )
  }
}

export default QuoteDiv;