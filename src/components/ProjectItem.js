import React from 'react';
import { Button, Typography } from '@mui/material';
import '../style/style.css';

const ProjectItem = ({ github, website, title, icon, link, summary, description }) => {
  const handleOpenMultipleLinks = () => {
    if (github) window.open(github);
    if (website) window.open(website);
  };
  return (
    <Button target="false" onClick={handleOpenMultipleLinks} sx={{
      width: '100%', height: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
    }}>
      <Typography style={{
        textTransform: 'none', maxWidth: '100%', height: '100%', margin: '20px',
        whiteSpace: 'pre-line', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
      }}>
        <div>
          <h1>{title}</h1>
          {icon}
          <h2>{link}</h2>
          <h2>{summary}</h2>
        </div>
        <h2 style={{ color: 'black', textAlign: 'left', marginTop: 'auto' }}>
          {description}
        </h2>
      </Typography>
    </Button>
  );
};

export default ProjectItem;