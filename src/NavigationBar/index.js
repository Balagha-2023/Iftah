import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Typography> Logo</Typography>
            <Button variant='"contained' sx={{marginLeft: "auto" }} color='warning'>Hello</Button>
        </Toolbar>
       
    </AppBar>
  )
}

export default NavBar