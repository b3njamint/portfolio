import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Welcome from './Welcome';
import Picture from './Picture';
import Item from './Item';
import pine from '../images/pine.jpeg';
import walnut from '../images/walnut.jpeg';

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#1A2027' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: 10 }}>
        <Box
          sx={{
            maxWidth: '1096px',
            width: '100%',
            padding: '24px',
            backgroundImage: `url(${pine})`,
            backgroundSize: 'cover',
            borderRadius: '50px',
          }}
        >
          <Box
            sx={{
              maxWidth: '1048px',
              padding: '24px',
              backgroundImage: `url(${walnut})`,
              backgroundSize: 'cover',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: `
                inset 0px 1px 1px hsl(0deg 0% 0% / 0.8),
                inset 1px 2px 2px hsl(0deg 0% 0% / 0.7),
                inset 2px 4px 4px hsl(0deg 0% 0% / 0.6),
                inset 4px 8px 8px hsl(0deg 0% 0% / 0.5),
                inset 8px 16px 16px hsl(0deg 0% 0% / 0.4)
              `,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6} md={8}>
                <Item sx={{ height: '80vh' }}>
                  <Welcome />
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item sx={{ height: 'calc(40vh - 12px)', marginBottom: '24px' }}>
                  <Picture />
                </Item>
                <Item sx={{ height: 'calc(40vh - 12px)' }}>
                  <Picture />
                </Item>
              </Grid>
              <Grid item xs={6} md={4} sx={{ minHeight: '200px' }}>
                <Item>xs=6 md=4</Item>
              </Grid>
              <Grid item xs={6} md={8} sx={{ minHeight: '200px' }}>
                <Item>xs=6 md=8</Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box >
  );
}