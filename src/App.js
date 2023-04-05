import React, { Component } from 'react';
import './App.css';
import Signup from './Components/Signup';
import AppHome from './Components/AppHome';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: 0
    }
  }

  render()
  {
    return (
    <div className='App'>
      <Signup/>
      {/* <AppHome/> */}
    </div>
    )
  }
}

export default App;
