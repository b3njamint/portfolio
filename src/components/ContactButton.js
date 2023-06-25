import React from 'react';
import { Button, Typography } from '@mui/material';
import '../style/style.css';

const ContactButton = ({ href, title, icon, description }) => {
  return (
    <Button target="false" href={href} sx={{
      width: '100%', height: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
    }}>
      <Typography style={{ textTransform: 'none', maxWidth: '100%' }}>
        <h1>{title}</h1>
        {icon}
        <h2>{description}</h2>
      </Typography>
    </Button >
  );
};

export default ContactButton;
