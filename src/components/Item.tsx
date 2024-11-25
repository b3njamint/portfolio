import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import '../fonts/fonts.css';

const Item = styled(Paper)(() => ({
  backgroundColor: '#1c1c1c',
  textAlign: 'center',
  fontFamily: 'Manrope',
  // boxShadow: `
  //   inset 0 0 10px 5px rgba(0, 0, 0, 0.25),
  //   0 0 15px 15px rgba(180, 221, 30, 0.15),
  //   0 0 25px 30px rgba(180, 221, 30, 0.075),
  //   0 0 35px 45px rgba(180, 221, 30, 0.05)`,
  opacity: 0.75,
  borderRadius: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.01)',
    // boxShadow: `
    //   inset 0 0 10px 5px rgba(0, 0, 0, 0.3),
    //   0 0 20px 20px rgba(180, 221, 30, 0.2),
    //   0 0 30px 35px rgba(180, 221, 30, 0.1),
    //   0 0 40px 50px rgba(180, 221, 30, 0.05)
    // `,
  }
}));

export default Item;