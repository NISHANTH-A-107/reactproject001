import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import './Signup.css'
import video from './bgv2.mp4';
import AppHome from './AppHome';

class Signup extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
          logged : 0
        }
    }
    checker = () =>
    {
      const u = document.getElementById("user").value;
      const p = document.getElementById("pass").value;

      if(p!=="" && u!=="")
      {
        console.log(u+" "+p);
        this.setState (
          {logged:1}
        )
      }
      else
      {
        console.log("Please enter the credentials");
        alert("Enter the credentials properly!!!");
      }
    }

  render() {
    return this.state.logged ? 
    (
      <div>
        <AppHome/>
      </div>
    ) :
    (
      <div id='main2'>
        <div className='div1'>
          <video autoPlay loop muted id='bgvideo'>
            <source src={video} type='video/mp4'/>
          </video>
        </div>
        <div className='div2'>
          <div className='left_cont'>
              <h2>KYRA</h2>
          </div>
          <div className='userarea'>
              <TextField className='tf' id="user" label="UserName" variant="outlined"/>
              <TextField className='tf' id="pass" label="Password" variant="outlined" />
              <Button variant="text" className='btn' sx={{color: 'yellow'}} onClick={this.checker}>SIGN IN</Button>
          </div>
          <div className='right_cont'>    
              <h2>Sign In To Continue</h2>
              <h6>or <a className='signup' href="">signup</a></h6>
          </div>
        </div>
      </div>
    )
  }
}



export default Signup
