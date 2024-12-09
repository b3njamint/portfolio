import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

import ProjectModal from './ProjectModal'; // Import the new modal component
import '../style/style.css';

interface ProjectItemProps {
  github?: string;
  website?: string;
  title: string;
  icon: React.ReactNode;
  link?: string;
  summary: string;
  description: string;
  images: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  github,
  website,
  title,
  icon,
  link,
  summary,
  description,
  images,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          '&:hover': {
            backgroundColor: 'rgba(180, 221, 30, 0.2)'
          }
        }}
      >
        <Typography
          style={{
            textTransform: 'none',
            maxWidth: '100%',
            height: '100%',
            margin: '20px',
            whiteSpace: 'pre-line',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h1>{title}</h1>
            {icon}
            <h2>{link}</h2>
            <h2 style={{ color: "#B4DD1E" }}>{summary}</h2>
          </div>
        </Typography>
      </Button>

      <ProjectModal
        open={isModalOpen}
        onClose={handleCloseModal}
        github={github}
        website={website}
        title={title}
        icon={icon}
        link={link}
        summary={summary}
        description={description}
        images={images}
      />
    </>
  );
};

export default ProjectItem;