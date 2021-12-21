import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import '../styles/Header.css';

export default function Header() {

  let token = sessionStorage.getItem('token');
  let typeUser = sessionStorage.getItem('typeUser');

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('typeUser');
    window.location.pathname = '/';
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appBar" style={{background: 'white'}} position="fixed" elevation={0}>
        <Toolbar>
          <Typography className="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span id="p1"> CREASY </span> <span id="p2"> SOLUTIONS </span> 
          </Typography>

          <Typography className='options'>
            {typeUser === 'Administrator' ? (
              <div>
                <Link style={styleButton} to="/users"><Button variant="light"> Users </Button></Link>
                <Link style={styleButton} to="/projects"><Button variant="light" style={{marginRight: '20px'}}> Projects </Button></Link>
              </div>
            ) : typeUser === 'Leader' ? (
              <div>
                <Link style={styleButton} to="/users"><Button variant="light"> Users </Button></Link>
                <Link style={styleButton} to="/projects"><Button variant="light"> Projects </Button></Link>
                <Link style={styleButton} to="/notifications"><Button variant="light" style={{width: '120px'}}> Inscriptions </Button></Link>
                <Link style={styleButton} to="/advances"><Button variant="light" style={{width: '120px'}}> Advances </Button></Link>
                <Link style={styleButton} to="/editProfile"><Button variant="light" style={{marginRight: '20px'}}> Profile </Button></Link>
              </div>
            ) : typeUser === 'Student' ? (
              <div>
                <Link style={styleButton} to="/projects"><Button variant="light"> Projects </Button></Link>
                <Link style={styleButton} to="/advances"><Button variant="light" style={{width: '120px'}}> Advances </Button></Link>
                <Link style={styleButton} to="/editProfile"><Button variant="light" style={{marginRight: '20px'}}> Profile </Button></Link>
              </div>
            ) : (
              null
            )}
          </Typography>

          {token !== null ? (
            <Button id="register" onClick={logout}> Logout </Button>
          ) : (
            <Link to='/signup' style={styleButton}> <Button id="register">Sign up</Button> </Link>
          )} 
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const styleButton = {
  textDecoration: 'none'
}