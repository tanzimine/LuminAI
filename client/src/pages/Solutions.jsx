import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BusinessIcon from '@mui/icons-material/Business';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { ImageSlider } from '../components';

const solutions = [
  {
    title: 'Logo Generator',
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    description: 'Create unique, professional logos instantly with our AI-powered generator. Get multiple variations and customize to perfection.',
    features: ['Multiple style options', 'Color customization', 'Vector formats', 'Instant preview'],
    images: [
      'https://images.pexels.com/photos/7376/startup-photos.jpg',
      'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg',
      'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg',
    ],
    path: '/logo-generator',
  },
  {
    title: 'SEO Research',
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    description: 'Boost your online visibility with advanced SEO analysis. Get real-time insights and actionable recommendations.',
    features: ['Keyword research', 'Competition analysis', 'Ranking tracking', 'Content optimization'],
    images: [
      'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg',
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    ],
    path: '/seo-research',
  },
  {
    title: 'Task Manager CRM',
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    description: 'Streamline your workflow and manage customer relationships in one place. Track progress and boost productivity.',
    features: ['Task organization', 'Customer tracking', 'Team collaboration', 'Analytics dashboard'],
    images: [
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    ],
    path: '/task-manager',
  },
  {
    title: 'Ideas Generator',
    icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
    description: 'Unlock creativity with AI-powered brainstorming. Generate innovative ideas for content, marketing, and business strategies.',
    features: ['Smart suggestions', 'Category filters', 'Export options', 'Idea refinement'],
    images: [
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      'https://images.pexels.com/photos/7376/startup-photos.jpg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    ],
    path: '/ideas-generator',
  },
];

const Solutions = ({ darkMode }) => {
  const navigate = useNavigate();

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
          Complete Business Solution Suite
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
          Enhance your business with our integrated AI-powered tools
        </Typography>

        <Grid container spacing={6}>
          {solutions.map((solution, index) => (
            <Grid item key={index} xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: 4,
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
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                      color: darkMode ? '#fff' : '#000',
                    }}
                  >
                    {solution.icon}
                    <Typography variant="h4" sx={{ ml: 2 }}>
                      {solution.title}
                    </Typography>
                  </Box>

                  <ImageSlider images={solution.images} darkMode={darkMode} />

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                    }}
                  >
                    {solution.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: darkMode ? '#fff' : '#000',
                      }}
                    >
                      Key Features:
                    </Typography>
                    <Grid container spacing={1}>
                      {solution.features.map((feature, featureIndex) => (
                        <Grid item xs={6} key={featureIndex}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                            }}
                          >
                            • {feature}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Button
                    variant="contained"
                    onClick={() => navigate(solution.path)}
                    sx={{
                      width: '100%',
                      py: 1.5,
                      backgroundColor: darkMode ? '#fff' : '#000',
                      color: darkMode ? '#000' : '#fff',
                      '&:hover': {
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                      },
                    }}
                  >
                    Try {solution.title}
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Solutions; 