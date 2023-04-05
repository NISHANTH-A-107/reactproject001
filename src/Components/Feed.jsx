import React, { Component } from 'react'
import './Feed.css'

class Feed extends Component {
  render() {
    return (
      <div className='feed'>
            <h1>HELLO USER!!!!!</h1>
            <div className='feedarea'>
                <h2>What's New</h2>

            </div>
            <div className='commandarea'>
                {/* <input type="text" className='cmdarea' placeholder='Enter something to do'/> */}
                <select className='cmdarea' id='cmdid' placeholder='Enter a command'>
                    <option hidden selected >Enter a command</option>
                    <option >Task</option>
                    <option >Reminder</option>
                    <option >Statistics</option>
                </select>
                <button className='cmdgo' id='gocmd' onClick={cmdadd}>GO</button>
            </div>
      </div>
    )
  }
}

function cmdadd()
{
    const task = document.getElementById("cmdid").value;
    alert("New " + task + " will be shown");
}

export default Feed