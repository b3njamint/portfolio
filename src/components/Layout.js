import React from 'react';
import { Box, Grid } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import pine from '../images/pine.jpeg';
import walnut from '../images/walnut.jpeg';

import Welcome from './Welcome';
import Picture from './Picture';
import ContactButton from './ContactButton';
import Item from './Item';
import AboutMe from './AboutMe';
import Education from './Education';
import ProjectItem from './ProjectItem';
import '../style/style.css';

export default function Layout() {
  const grain = `data:image/png;base64,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`
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../images/art', false, /\.(jpg)$/));

  return (
    <Box sx={{
      flexGrow: 1, backgroundColor: '#1A2027', backgroundImage: `url(${grain})`
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: 10 }}>
        <Box
          sx={{
            maxWidth: '1096px',
            width: '100%',
            padding: '24px',
            backgroundImage: `url(${pine})`,
            backgroundSize: 'cover',
            borderRadius: '50px',
          }}
        >
          <Box
            sx={{
              maxWidth: '1048px',
              padding: '24px',
              backgroundImage: `url(${walnut})`,
              backgroundSize: 'cover',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: `
                inset 0px 1px 1px hsl(0deg 0% 0% / 0.8),
                inset 1px 2px 2px hsl(0deg 0% 0% / 0.7),
                inset 2px 4px 4px hsl(0deg 0% 0% / 0.6),
                inset 4px 8px 8px hsl(0deg 0% 0% / 0.5),
                inset 8px 16px 16px hsl(0deg 0% 0% / 0.4)
              `,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6} md={8}>
                <Item sx={{ height: '80vh' }}>
                  <Welcome />
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item sx={{ height: 'calc(40vh - 12px)', marginBottom: '24px' }}>
                  <Picture />
                </Item>
                <Item className="click" sx={{ height: 'calc(40vh - 12px)' }}>
                  <ContactButton
                    href="https://drive.google.com/file/d/1cWJBDHjoZJ6Y6rob78qcmtfa-o7NnBUY/view"
                    title="Resume"
                  />
                </Item>
              </Grid>
              <Grid item xs={4} md={4} sx={{ minHeight: '200px' }}>
                <Item className="click">
                  <ContactButton
                    href="mailto:'bt283@cornell.edu'"
                    title="Email"
                    icon={<MailOutlineIcon />}
                    description="bt283@cornell.edu"
                  />
                </Item>
              </Grid>
              <Grid item xs={4} md={4} sx={{ minHeight: '200px' }}>
                <Item className="click">
                  <ContactButton
                    href="https://www.linkedin.com/in/b3njamint/"
                    title="LinkedIn"
                    icon={<LinkedInIcon />}
                    description="linkedin.com/in/b3njamint"
                  />
                </Item>
              </Grid>
              <Grid item xs={4} md={4} sx={{ minHeight: '200px' }}>
                <Item className="click">
                  <ContactButton
                    href="https://github.com/b3njamint"
                    title="Github"
                    icon={<GitHubIcon />}
                    description="github.com/b3njamint"
                  />
                </Item>
              </Grid>
              <Grid item xs={6} md={6} sx={{ minHeight: '200px' }}>
                <Item sx={{ height: '60vh' }}>
                  <AboutMe />
                </Item>
              </Grid>
              <Grid item xs={6} md={6} sx={{ minHeight: '200px' }}>
                <Item sx={{ height: '60vh' }}>
                  <Education />
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item><h1>Portfolio</h1>
                </Item>
              </Grid>
              <Grid item xs={6} md={6} sx={{ minHeight: '200px' }}>
                <Item className="click" sx={{ height: '70vh' }}>
                  <ProjectItem
                    github="https://github.com/cornell-dti/zing-lsc"
                    title="Zing"
                    icon={<Diversity3Icon />}
                    link="github.com/cornell-dti/zing-lsc"
                    summary={`"Scalable iOS app to connect Cornell student freelancers with customers."`}
                    description={`● Lead backend dev using Python and Swift
                    ● Wrote 15+ REST API endpoints with authentication using Flask, architected database in SQLite/SQLAlchemy, and containerized/deployed using Docker and GCP
                    ● Awarded Best Frontend/UI by Cornell App Development out of 150+ students`}
                  />
                </Item>
              </Grid>
              <Grid item xs={6} md={6} sx={{ minHeight: '200px' }}>
                <Item className="click" sx={{ height: '70vh' }}>
                  <ProjectItem
                    github="https://github.com/b3njamint/cs-3110-final"
                    title="Melody Generator"
                    icon={<LibraryMusicIcon />}
                    link="github.com/b3njamint/cs-3110-final"
                    summary={`"Multi-hand music generator in modern and archaic scales, built entirely in OCaml"`}
                    description={`● Implemented multi-hand harmonies, chords, and different instruments
                    ● Enabled robust input validation through pattern matching
                    ● Wrote 100s of lines of black-box, glass-box, and randomized test cases`}
                  />
                </Item>
              </Grid>
              <Grid item xs={6} md={6} sx={{ minHeight: '200px' }}>
                <Item className="click" sx={{ height: '70vh' }}>
                  <ProjectItem
                    website="https://www.aiartcritic.com/"
                    github="https://github.com/b3njamint/aiartcritic/"
                    title="AI Art Critic"
                    icon={<ColorLensIcon />}
                    link="aiartcritic.com"
                    summary={`"Web app to determine artictic qualities of any image you upload."`}
                    description={`● Trained classification models with 25,000 images to critique art
                    ● Designed and coded algorithms to analyze pixels and colors in Python
                    ● Developed a website using Django and deployed on Google Cloud`}
                  />
                </Item>
              </Grid>
              <Grid item xs={6} md={6} sx={{ minHeight: '200px' }}>
                <Item className="click" sx={{ height: '70vh' }}>
                  <ProjectItem
                    website="https://www.voby.us/"
                    title="Vobyus"
                    icon={<CarCrashIcon />}
                    link="voby.us"
                    summary={`"Jetson Nano-based smart dashboard detecting drowsy and distracted driving."`}
                    description={`● Co-founded student entrepreneurship team, achieved 85% accuracy to prevent vehicle accidents, using JavaScript, Python, TensorFlow
                    ● 1st place at the 2021 Model Entrepreneur Competition by Columbia Business School, named a Conrad Innovator`}
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item className="click">
                  <ContactButton
                    href="https://www.art.benjamint.me/"
                    title="Portfolio (the other kind)"
                    description="Check out art.benjamint.me for more!"
                  />
                </Item>
              </Grid>

              {images.map((image, index) => (
                <Grid item xs={4} md={4}>
                  <Item sx={{
                    height: '300px'
                  }}>
                    <img key={index} src={image} alt={`${index}`} style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                    }}
                    /></Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box >
  );
}