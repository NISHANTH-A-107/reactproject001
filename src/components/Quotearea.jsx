import React, { Component } from 'react'
import data from './quotefile.json'
import './Quotestyle.css'

const quotedata = data;

const size = quotedata.length;

class Quotearea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         quote:quotedata[0].qte
         ,
         auth:quotedata[0].aut
      }

      this.updateQuote = this.updateQuote.bind(this);
    }

    updateQuote = () => {
        var num = Math.floor(Math.random()*size);
        this.setState(
            {quote:quotedata[num].qte
                ,
            auth: quotedata[num].aut}
        );
    }
  render() {
    return (
      <div>
        <div className='qtespawn'>
            <h1 className='todayquote' >{this.state.quote}</h1>
        </div>
        <div className='autspawn'>
            <h2 className='todayauth'>{this.state.auth}</h2>
        </div>
        <button id='btn' hidden onClick={this.updateQuote}/>
      </div>
    )
  }
}

function nextQuote () {
    document.getElementById("btn").click();
}
export default Quotearea;
export {nextQuote};

