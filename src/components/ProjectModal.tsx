import React, { useState } from 'react';
import {
    Modal,
    Box,
    Button,
    IconButton,
    Fade,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../style/style.css'; // Ensure CSS is imported

interface ProjectModalProps {
    open: boolean;
    onClose: () => void;
    github?: string;
    website?: string;
    title: string;
    icon: React.ReactNode;
    link?: string;
    summary: string;
    description: string;
    images: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    open,
    onClose,
    github,
    website,
    title,
    icon,
    link,
    summary,
    description,
    images // Add image to destructured props
}) => {
    const handleOpenLinks = () => {
        if (github) window.open(github);
        if (website) window.open(website);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
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
                        width: '80%',
                        maxWidth: '1000px',
                        maxHeight: '90%',
                        overflow: 'auto',
                        padding: '30px',
                        fontFamily: 'Manrope',
                        position: 'relative',
                        outline: 'none',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
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
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            color: '#B4DD1E',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <h1
                        id="project-modal-title"
                        style={{
                            textAlign: 'center',
                            marginBottom: '20px',
                            color: 'white',
                        }}
                    >
                        {title}
                    </h1>

                    <h2
                        style={{
                            textAlign: 'center',
                            marginBottom: '10px',
                            color: 'white',
                        }}
                    >
                        {link}
                    </h2>

                    <h2
                        style={{
                            color: '#B4DD1E',
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        {summary}
                    </h2>

                    {images && images.length > 0 && (
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '15px', // Space between images
                            marginBottom: '20px',
                        }}>
                            {images.map((imageName, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: images.length > 1 ? '45%' : '100%',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={require(`../images/projects/${imageName}`)}
                                        alt={`${title} project image ${index + 1}`}
                                        style={{
                                            height: '30vh',
                                            width: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}

                    <h2
                        id="project-modal-description"
                        style={{
                            margin: '0px 30px 30px 30px',
                            textAlign: 'left',
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {description}
                    </h2>

                    {(github || website) && (
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '15px',
                            marginBottom: '30px',
                        }}>
                            <Button
                                variant="contained"
                                onClick={handleOpenLinks}
                                sx={{
                                    backgroundColor: '#B4DD1E',
                                    color: 'black',
                                }}
                            >
                                Open Project
                            </Button>
                        </Box>
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProjectModal;