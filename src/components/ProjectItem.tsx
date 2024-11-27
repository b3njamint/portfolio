import React from 'react';
import { Button, Typography } from '@mui/material';
import '../style/style.css';

interface ProjectItemProps {
  github?: string;
  website?: string;
  title: string;
  icon: React.ReactNode;
  link: string;
  summary: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ github, website, title, icon, link, summary, description }) => {
  const handleOpenMultipleLinks = () => {
    if (github) window.open(github);
    if (website) window.open(website);
  };
  return (
    <Button onClick={handleOpenMultipleLinks} sx={{
      width: '100%', height: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: 'rgba(180, 221, 30, 0.2)', // Green hover color
      }
    }}>
      <Typography style={{
        textTransform: 'none', maxWidth: '100%', height: '100%', margin: '20px',
        whiteSpace: 'pre-line', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
      }}>
        <div>
          <h1>{title}</h1>
          {icon}
          <h2>{link}</h2>
          <h2 style={{ color: "#B4DD1E" }}>{summary}</h2>
        </div>
        <h2 style={{ textAlign: 'left', marginTop: 'auto' }}>
          {description}
        </h2>
      </Typography>
    </Button >
  );
};

export default ProjectItem;
