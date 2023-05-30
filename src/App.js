import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Box, Grid } from '@mui/material';


function App() {
  return (
    <div className="app">
      <Header />


      <div className='app_body'>
{/* 
        <Box>
          <Grid container spacing={2}>
            <Grid item md={6}  xs={8}>
              <Sidebar />
            </Grid>
            <Grid item md={6} xs={4}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
          
          </Grid>
        </Box> */}


        {/* feed */}
        {/* rightSidebar */}
        <Sidebar />
      </div>



    </div>
  );
}

export default App;
