import React from 'react';
import {AppBar, Toolbar, Box} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';

const Header = () => {
  return <AppBar sx={{bgcolor:"transparent", boxShadow:0}}>
    <Toolbar>
      <Box >
        <ApiIcon sx={{color: "black"}} />
      </Box>

    </Toolbar>
    
  </AppBar>
}

export default Header 