import React from 'react';
import Box from '@mui/material/Box';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import '../style/style.css';
import { colors } from '@mui/material';
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
      <br></br>
      <h2>Prev. SWE @ Amazon & Verizon</h2>
      <h1>
        I’m <span style={{ color: '#B4DD1E' }}>Benjamin Tang</span>, an impact-delivering 💡, creative-thinking 💭 computer science student @ Cornell University.</h1>
    </Box >
  );
};

export default Welcome;
