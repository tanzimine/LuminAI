import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';

const HeroSection = ({ darkMode }) => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <ImageSlider darkMode={darkMode} />
      
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 3,
          pt: { xs: 8, md: 0 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              textAlign: 'center',
              mb: 2,
              background: darkMode
                ? 'linear-gradient(135deg, #E0E7FF 0%, #818CF8 100%)'
                : 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            Illuminate Your Business with AI
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              textAlign: 'center',
              mb: 4,
              color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.75)',
              letterSpacing: '0.01em',
              lineHeight: 1.5,
            }}
          >
            Empower your brand with intelligent design solutions and automated business tools
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/create-post')}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                backgroundColor: darkMode ? '#fff' : '#000',
                color: darkMode ? '#000' : '#fff',
                '&:hover': {
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
                textTransform: 'none',
                borderRadius: '8px',
                boxShadow: darkMode 
                  ? '0 4px 14px 0 rgba(255,255,255,0.1)'
                  : '0 4px 14px 0 rgba(0,0,0,0.1)',
              }}
            >
              Start Creating
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={scrollToFeatures}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 500,
                borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                color: darkMode ? '#fff' : '#000',
                '&:hover': {
                  borderColor: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                  backgroundColor: 'transparent',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
                textTransform: 'none',
                borderRadius: '8px',
                borderWidth: '2px',
              }}
            >
              Explore Solutions
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection; 