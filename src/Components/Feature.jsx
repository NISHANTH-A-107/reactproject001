import React, { Component } from 'react'
import './Feature.css'

class Feature extends Component {
  render() {
    return (
      <div className='feature'>
        <div className='addnew'>
            <button className='addbtn' onClick={addtask}>NEW TASK</button>
            <button className='addbtn' onClick={() => {alert("We are having trouble right now, please try later")}}>ADD REMINDER</button>
        </div>
        <div className='tasklist' id='tk'>
            <h4 className='todo'>TO DO</h4>
        </div>
        <div className='otherdata'>
            <h1>05.04.2023</h1>
            <h2>14.45 hrs</h2>
        </div>
      </div>
    )
  }
}

function addtask()
{
    const task = document.getElementById('tk');
    const addt = document.createElement("input");
    addt.type = "text";
    addt.placeholder = "Enter the task";
    addt.id = "taskarea";
    task.append(addt);
}

export default Feature