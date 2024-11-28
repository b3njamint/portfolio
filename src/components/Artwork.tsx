import React, { useState } from 'react';
import {
  Modal,
  Box,
  Fade,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ArtworkProps {
  image: string;
  index: number;
}

const Artwork: React.FC<ArtworkProps> = ({ image, index }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          height: '300px',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <img
          src={image}
          alt={`Artwork ${index}`}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
          }}
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="artwork-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            sx={{
              backgroundColor: 'rgba(28, 28, 28, 0.85)',
              borderRadius: '30px',
              minWidth: '20%',
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'auto',
              padding: '60px',
              fontFamily: 'Manrope',
              position: 'relative',
              outline: 'none',
              transform: 'scale(0.9)',
              opacity: 0,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.01)',
              },
              '@keyframes fadeIn': {
                '0%': {
                  opacity: 0,
                  transform: 'scale(0.9)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'scale(1)',
                },
              },
              animation: 'fadeIn 0.3s ease-out forwards',
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: '#B4DD1E',
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <img
                src={image}
                alt={`Enlarged Artwork ${index}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '20px',
                }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Artwork;