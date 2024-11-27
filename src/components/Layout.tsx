import React from 'react';
import { Box, Grid } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import QueryStatsIcon from '@mui/icons-material/QueryStats';


import Welcome from './Welcome';
import Picture from './Picture';
import ContactButton from './ContactButton';
import Item from './Item';
import AboutMe from './AboutMe';
import Education from './Education';
import ProjectItem from './ProjectItem';
import Work from './Work';
import '../style/style.css';
import BallsBackground from './BallsBackground';

const paintings = ['flowers.jpg', 'falls.jpg', 'apples.jpg', 'contour.jpg', 'tiles.jpg', 'hands.jpg']
const digital = ['stingray.jpg', 'trafficlights.jpg', 'shit.jpg']
const design = ['openclose.jpg', 'gatsby.jpg', 'cardboard.jpg']
const blackwhite = ['self.jpg', 'ideas.jpg', 'look.jpg', 'containment.jpg', 'paragon.jpg', 'lanky.jpg', 'pineapple.jpg', 'stars.jpg', 'faces.jpg']
const imageNames = [...paintings, ...design, ...blackwhite, ...digital,];
console.log(imageNames);
const images = imageNames.map(name => require(`../images/art/${name}`));

export default function Layout() {
  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden' // Prevent body scrollbar
    }}>
      {/* Fixed Bokeh background that doesn't move on scroll */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        <BallsBackground zIndex={-2} />
      </Box>

      {/* Scrollable content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          paddingY: 10
        }}
      >
        <Box
          sx={{
            width: '100%', // Ensure full width
            maxWidth: '1048px',
            padding: '24px',
            backgroundSize: 'cover',
            borderRadius: '30px',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Item sx={{ height: '80vh', border: '0' }}>
                <Welcome />
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ height: 'calc(40vh - 12px)', marginBottom: '24px', backgroundColor: "transparent" }}>
                <Picture />
              </Item>
              <Item className="click" sx={{ height: 'calc(40vh - 12px)' }}>
                <ContactButton
                  href="https://drive.google.com/file/d/1cWJBDHjoZJ6Y6rob78qcmtfa-o7NnBUY/view"
                  title="Resume" icon={undefined} description={''} />
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sx={{ minHeight: '200px' }}>
              <Item className="click">
                <ContactButton
                  href="mailto:'bt283@cornell.edu'"
                  title="Email"
                  icon={<MailOutlineIcon style={{ color: "#B4DD1E" }} />}
                  description="bt283@cornell.edu"
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sx={{ minHeight: '200px' }}>
              <Item className="click">
                <ContactButton
                  href="https://www.linkedin.com/in/b3njamint/"
                  title="LinkedIn"
                  icon={<LinkedInIcon style={{ color: "#B4DD1E" }} />}
                  description="linkedin.com/in/b3njamint"
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sx={{ minHeight: '200px' }}>
              <Item className="click">
                <ContactButton
                  href="https://github.com/b3njamint"
                  title="Github"
                  icon={<GitHubIcon style={{ color: "#B4DD1E" }} />}
                  description="github.com/b3njamint"
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item sx={{ height: '60vh' }}>
                <AboutMe />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item sx={{ height: '60vh' }}>
                <Education />
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sx={{ minHeight: '200px' }}>
              <Item sx={{ height: '60vh' }}>
                <Work />
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item><h1>Portfolio</h1>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sx={{ minHeight: '80px' }}>
              <Item className="click" sx={{ height: '40vh' }}>
                <ProjectItem
                  github=""
                  title="On Demand VaR"
                  icon={<QueryStatsIcon style={{ color: "#B4DD1E" }} />}
                  link="coming soon"
                  summary={`"A large-scale database system with Millennium Management, supporting multi-threaded workloads and maintaining a 1 query per second throughput under load"`}
                  description={``} website={undefined} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item className="click" sx={{ height: '75vh' }}>
                <ProjectItem
                  github="https://github.com/cornell-dti/office-hours"
                  title="Queue Me In"
                  icon={<HourglassTopIcon style={{ color: "#B4DD1E" }} />}
                  link="github.com/cornell-dti/office-hours"
                  summary={`"Data-centric solution to optimize office hours for 2000+ students at Cornell"`}
                  description={`● Managing a team of 10 designers, developers, and business analysts
                    ● Increasing scope of Queue Me In to accomodate new styles of office hours, increasing users by 25% 
                    ● Driving product vision to deliver comprehensive student analytics
                    `} website={undefined} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item className="click" sx={{ height: '75vh' }}>
                <ProjectItem
                  github="https://github.com/cornell-dti/zing-lsc"
                  title="Zing"
                  icon={<Diversity3Icon style={{ color: "#B4DD1E" }} />}
                  link="github.com/cornell-dti/zing-lsc"
                  summary={`"All-in-one web app solution to building and managing 100s of study groups at Cornell"`}
                  description={`● Nearly 1000 users from 300+ courses, utilized the FERN tech stack
                    ● Built search bar + loading screen using TypeScript, React, and MUI, used React hooks to standardize URLs, enabled cross-listed courses in Firebase, redesigned authentication control with Azure`} website={undefined} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item className="click" sx={{ height: '75vh' }}>
                <ProjectItem
                  github="https://github.com/jjennifergu/freelance-marketplace-backend"
                  title="Circus"
                  icon={<StorefrontIcon style={{ color: "#B4DD1E" }} />}
                  link="github.com/jjennifergu/freelance-marketplace-backend"
                  summary={`"Scalable iOS app to connect Cornell student freelancers with customers."`}
                  description={`● Lead backend dev using Python and Swift
                    ● Wrote 15+ REST API endpoints with authentication using Flask, architected database in SQLite/SQLAlchemy, and containerized/deployed using Docker and GCP
                    ● Awarded Best Frontend/UI by Cornell App Development out of 150+ students`} website={undefined} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item className="click" sx={{ height: '75vh' }}>
                <ProjectItem
                  github="https://github.com/b3njamint/cs-3110-final"
                  title="Melody Generator"
                  icon={<LibraryMusicIcon style={{ color: "#B4DD1E" }} />}
                  link="github.com/b3njamint/cs-3110-final"
                  summary={`"Multi-hand music generator in modern and archaic scales, built entirely in OCaml"`}
                  description={`● Implemented multi-hand harmonies, chords, and different instruments
                    ● Enabled robust input validation through pattern matching
                    ● Wrote 100s of lines of black-box, glass-box, and randomized test cases`} website={undefined} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item className="click" sx={{ height: '75vh' }}>
                <ProjectItem
                  website="https://www.aiartcritic.com/"
                  github="https://github.com/b3njamint/aiartcritic/"
                  title="AI Art Critic"
                  icon={<ColorLensIcon style={{ color: "#B4DD1E" }} />}
                  link="aiartcritic.com"
                  summary={`"Web app to determine artictic qualities of any image you upload."`}
                  description={`● Trained classification models with 25,000 images to critique art
                    ● Designed and coded algorithms to analyze pixels and colors in Python
                    ● Developed a website using Django and deployed on Google Cloud`}
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: '200px' }}>
              <Item className="click" sx={{ height: '75vh' }}>
                <ProjectItem
                  website="https://www.voby.us/"
                  title="Vobyus"
                  icon={<CarCrashIcon style={{ color: "#B4DD1E" }} />}
                  link="voby.us"
                  summary={`"Jetson Nano-based smart dashboard detecting drowsy and distracted driving."`}
                  description={`● Co-founded student entrepreneurship team, achieved 85% accuracy to prevent vehicle accidents, using JavaScript, Python, TensorFlow
                    ● 1st place at the 2021 Model Entrepreneur Competition by Columbia Business School, named a Conrad Innovator`} github={undefined} />
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item><h1>Portfolio (the other kind)</h1>
                <h2>Artwork mostly from 2019-2020. Recent painting revival in 2024.</h2>
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
    </Box >
  );
}