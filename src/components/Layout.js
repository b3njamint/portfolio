import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Welcome from './Welcome';
import Item from './Item';

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1, padding: 10, backgroundColor: '#1A2027' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} sx={{ maxHeight: '200px' }}>
          <Item>
            <Welcome />
          </Item>
        </Grid>
        <Grid item xs={6} md={4} sx={{ maxHeight: '200px' }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4} sx={{ maxHeight: '200px' }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8} sx={{ maxHeight: '200px' }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box >
  );
}