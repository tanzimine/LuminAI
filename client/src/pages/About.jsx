import React from 'react';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Tanzim Mahtab Khandaker',
    role: 'Chief AI Officer',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEDIpyOvBWQzA/profile-displayphoto-shrink_400_400/B4DZOPBWYSHIAg-/0/1733271316289?e=1747267200&v=beta&t=vRzxtbsEibiDOUg3YkoQMVQ12Pb398ah6dRcksj_GIU',
    description: 'Leading our AI research and development with experience in AI Automation and computer vision.',
  },
  {
    name: 'Maria Garcia',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
    description: 'Award-winning designer bringing creativity and innovation to our AI-powered design solutions.',
  },
  {
    name: 'James Wilson',
    role: 'Technical Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    description: 'Expert in scalable architecture and cloud computing, ensuring our platform delivers lightning-fast results.',
  },
];

const About = ({ darkMode }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mb: 3,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            background: darkMode
              ? 'linear-gradient(135deg, #fff 0%, #b3b3b3 100%)'
              : 'linear-gradient(135deg, #000 0%, #333 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Revolutionizing Design Through AI
        </Typography>

        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          }}
        >
          We're on a mission to democratize professional design by combining
          cutting-edge AI technology with human creativity.
        </Typography>

        <Grid container spacing={8} sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Our Mission"
              sx={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: darkMode
                  ? '0 4px 20px rgba(255,255,255,0.1)'
                  : '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  background: darkMode
                    ? 'linear-gradient(135deg, #fff 0%, #b3b3b3 100%)'
                    : 'linear-gradient(135deg, #000 0%, #333 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                }}
              >
                Founded in 2024, we set out to solve a fundamental challenge in the
                design industry: making professional-quality design accessible to
                everyone. By leveraging the latest advancements in artificial
                intelligence and machine learning, we've created a platform that
                empowers businesses of all sizes to create stunning visual content.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                }}
              >
                Our AI technology has been trained on millions of professional
                designs, enabling it to understand and replicate the principles of
                great design while adding unique creative elements that make each
                piece stand out.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            background: darkMode
              ? 'linear-gradient(135deg, #fff 0%, #b3b3b3 100%)'
              : 'linear-gradient(135deg, #000 0%, #333 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Meet Our Team
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          }}
        >
          The brilliant minds behind our AI-powered design revolution
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                    border: '1px solid',
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 4px 20px rgba(255,255,255,0.1)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      border: '3px solid',
                      borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      color: darkMode ? '#ffffff' : '#000000',
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                    }}
                  >
                    {member.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About; 