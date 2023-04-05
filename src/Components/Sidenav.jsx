import React, { Component } from 'react'
import './Sidenav.css'

class Sidenav extends Component {
  render() {
    return (
      <div className="sideNav">
        <div className='sidehome'>
            <h3 id='sidehome'>HOME</h3>
        </div>
        <div className='sideStats'>
            <h3 id='sidestats' onClick={() => hide("sstat")}>STATISTICS</h3>
            <div className='sstatdiv' id='sstat'>
                <p>Screen Time</p>
                <p>Mobile Data used</p>
                <p>Screen time</p>
                <p>App usage</p>
            </div>
        </div>
        <div className='features'>
            <h3 id='features' onClick={() => hide("sfeat")}>FEATURES</h3>
            <div className='sfeatdiv' id='sfeat' >
                <p>Reminder</p>
                <p>To-Do</p>
                <p>Music</p>
                <p>Alarms</p>
            </div>
        </div>
        <div className='about'>
            <h3 id='about' onClick={() => hide("sabout")}>ABOUT</h3>
            <div className='saboutdiv' id='sabout'>
                <p>Licenses</p>
                <p>Version info</p>
            </div>
        </div>
      </div>
    )
  }
}

function hide(x)
{
    const disappear = document.getElementById(x);
    if(disappear.style.display !== "none")
    {
      disappear.style.display = "none";
    }
    else
    {
      disappear.style.display = "block";
    }
}


export default Sidenav