import React from 'react';
import Box from '@mui/material/Box';
import '../style/style.css';
import sprout from '../images/sprout.png';

const Welcome = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '80vh',
      textAlign: 'left',
      padding: '0px 40px 10px 20px',
    }}>
      <h1>
        I'm Benjamin Tang, an impact-delivering, creative-thinking computer science student @ Cornell.</h1>
      <img src={sprout} style={{
        objectFit: 'cover',
        width: '100px',
      }} />
    </Box >
  );
};

export default Welcome;
