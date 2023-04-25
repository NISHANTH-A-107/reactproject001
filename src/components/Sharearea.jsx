import React, { Component } from 'react'
import Icon from '@mui/material/Icon';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './Sharearea.css'

export default class Sharearea extends Component {
  render() {
    return (
      <div>
        <div className='sharediv'>
            <div className='sharec'>
                <InstagramIcon className='icons' fontSize='large' onClick={()=> window.open('https://www.instagram.com', '_blank')}/>
                <TwitterIcon className='icons' fontSize='large' onClick={()=> window.open('https://www.twitter.com', '_blank')}/>
                <FacebookIcon className='icons' fontSize='large' onClick={()=> window.open('https://www.facebook.com', '_blank')}/>
            </div>
            <div>
                <ContentCopyIcon className='icons' fontSize='large' onClick={ () => alert("Copied to Clipboard")}/>
            </div>
        </div>
      </div>
    )
  }
}
