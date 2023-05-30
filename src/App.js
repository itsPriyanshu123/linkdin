import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Box, Grid } from '@mui/material';
import Feed from './Feed';


function App() {
  return (
    <div className="app">
      <Header />


      {/* <div className='app_body'>
        <Sidebar />
        <Feed />
      </div> */}
      <div className='app_body'>
        <Grid container spacing={1}>
          <Grid item md={2} lg={2}>   
          <Sidebar />
          </Grid>
          <Grid item md={6} lg={6}>
          <Feed />
          </Grid>
        </Grid>
      </div>



    </div>
  );
}

export default App;
