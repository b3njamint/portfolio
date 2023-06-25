import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import '../fonts/fonts.css'

const Item = styled(Paper)(({ }) => ({
  backgroundColor: 'beige',
  padding: 5,
  textAlign: 'center',
  minHeight: 100,
  fontFamily: 'Josefin Sans',
}));
export default Item;
