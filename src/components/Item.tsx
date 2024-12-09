import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(() => ({
  backgroundColor: 'rgba(28, 28, 28, 0.75)',
  textAlign: 'center',
  fontFamily: 'Manrope',
  borderRadius: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.01)',
  }
}));

export default Item;