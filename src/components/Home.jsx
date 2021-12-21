import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Grid from '@mui/material/Grid';
import manage from '../assets/manage.svg';
import Button from '@mui/material/Button';

import '../styles/Home.css';

export default function Home() {
    return (
        <Grid container rowSpacing={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
        
            <Grid item xs={5} style={{paddingLeft: '80px'}}>
                <div id="title">
                    <h1> Research Project Management System </h1>
                </div>
                <div id="text">
                    <p> 
                        Welcome to Creasy Solutions, the web application that will help you manage your research 
                        projects in a simple and productive way 
                    </p>
                </div>
                <Link to="/signin">                 
                    <div id="sign-in">
                        <Button id="btn">Get started</Button> 
                    </div>
                </Link>
            </Grid>

            <Grid item xs={7}>
                <div id="picture">
                    <img src={manage} width="780px" alt="Management"/>
                </div>
            </Grid>
        </Grid>
    ) 
}