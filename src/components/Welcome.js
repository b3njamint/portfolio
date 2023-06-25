import React from 'react';
import Box from '@mui/material/Box';

const Welcome = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '100px',
      backgroundColor: 'red',
      border: '1px solid blue',
      textAlign: 'left',
    }}>
      <div>I'm Benjamin Tang</div>
    </Box >
  );
};

export default Welcome;
