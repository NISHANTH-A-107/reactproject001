import React, { Component } from 'react'
import './Maindiv.css'
import src from './quotefile.json'

const quotesource = src;

const limit = quotesource.length;

export default class Maindiv extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         quote:quotesource[0].qte
         ,
         author:quotesource[0].aut
      }

      this.clkfunc = this.clkfunc.bind(this)
    }

    clkfunc = () => { 
        console.log("in");
        console.log(limit);
        var num = Math.floor(Math.random()*limit);
        console.log(num);
        this.setState(
            {quote : quotesource[num].qte,
            author : quotesource[num].aut}
            // {quote:"This quote??"}
        );
    }

  render() {
    return (
      <div className='maindiv'>
        
                <div className='quotediv'>
                    <h2>{this.state.quote}</h2>
                    <br />
                    <h4>{this.state.author}</h4>
                </div>
            
        <button id='btn' onClick={this.clkfunc} hidden>
            click me
        </button>
      </div>
    )
  }
}

function change() {
    const bbb = document.getElementById("btn");
    bbb.click();
}

export {change} ;