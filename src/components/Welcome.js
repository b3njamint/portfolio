import React from 'react';
import Box from '@mui/material/Box';
import '../style/style.css';

const Welcome = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '80vh',
      textAlign: 'left',
      padding: '10px 40px 10px 20px',
    }}>
      <h1 style={{
        fontSize: '40px'
      }}>
        I'm Benjamin Tang, an impact-delivering, creative-thinking computer science student @ Cornell.</h1>
    </Box >
  );
};

export default Welcome;
