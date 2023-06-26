import React from 'react';
import Box from '@mui/material/Box';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import '../style/style.css';
// import sprout from '../images/sprout.png';

const Welcome = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '80vh',
      textAlign: 'left',
      padding: '0px 40px 10px 40px',
    }}>
      <h2>Welcome to my bento box!</h2>
      <h1>
        I'm Benjamin Tang, an impact-delivering, creative-thinking computer science student @ Cornell University.</h1>
      <RamenDiningOutlinedIcon sx={{ fontSize: '100px' }} />
      {/* <img src={sprout} style={{
        objectFit: 'cover',
        width: '100px',
      }} /> */}
    </Box >
  );
};

export default Welcome;
