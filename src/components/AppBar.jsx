import React, { Component } from 'react'
import './AppBar.css'

import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

export default class Appbar extends Component {
  render() {
    return (
        <AppBar className='appbar' position='static' style={{backgroundColor:"black",width:"100vw"}}>
            <Typography variant='h2'>
               QUOTE OF THE DAY
            </Typography>
        </AppBar>
    )
  }
}
