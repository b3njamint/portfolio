import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import '../fonts/fonts.css';

const Item = styled(Paper)(() => ({
  backgroundColor: '#f0ece4',
  textAlign: 'center',
  fontFamily: 'Bebas Neue',
  boxShadow: `
    0px 1px 1px hsl(0deg 0% 0% / 0.6),
    1px 2px 2px hsl(0deg 0% 0% / 0.5),
    2px 4px 4px hsl(0deg 0% 0% / 0.4),
    4px 8px 8px hsl(0deg 0% 0% / 0.3),
    8px 16px 16px hsl(0deg 0% 0% / 0.2)
  `,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default Item;
