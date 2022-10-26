
import * as React from 'react';
import {AppBar,  Toolbar,  Typography, Container,  Button, } from '@mui/material/'
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";


const Navbar = (props) => {

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar variant="dense" disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'warnock',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
         
          </Typography></Link>
        

                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><Typography
            variant="h5"
            noWrap
              sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'warnock-pro',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography></Link>
            {/* if there is an active user */}
    
        <Link to="/signup"  style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="contained" endIcon={<LoginIcon />} disableRipple>     
          Access
        </Button>
          </Link>

          <Link to="/login"  style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="contained" endIcon={<LoginIcon />} disableRipple>     
          Log in
        </Button>
          </Link>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar