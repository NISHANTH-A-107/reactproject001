import React, { Component } from 'react'
import './Home.css'
import QuoteDiv from './QuoteDiv';
import Buttondiv from './Buttondiv';


class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='divleft'>
            <QuoteDiv/>
        </div>
        <div className='divright'>
            <Buttondiv/>
        </div>
      </div>
    )
  }
}

export default Home;