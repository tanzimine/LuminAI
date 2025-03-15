import React from 'react';
import { Container, Grid, Typography, Box, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const caseStudies = [
  {
    title: 'Tech Startup Rebrand',
    company: 'InnovateTech Solutions',
    description: 'How our AI-powered logo generator helped a tech startup refresh their brand identity in just 48 hours.',
    results: ['300% increase in brand recognition', '45% higher engagement', '2.5x website traffic'],
    tags: ['Logo Design', 'Brand Identity', 'Tech Industry'],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    testimonial: {
      quote: "The AI-generated designs exceeded our expectations. We got a modern, professional logo that perfectly represents our brand.",
      author: 'Sarah Chen',
      role: 'CEO, InnovateTech Solutions',
    },
  },
  {
    title: 'E-commerce Brand Launch',
    company: 'Urban Essentials',
    description: 'Complete brand identity creation for a new D2C fashion brand, from logo to marketing materials.',
    results: ['Successful launch with 10k+ orders', '28% conversion rate', '4.8/5 customer satisfaction'],
    tags: ['Brand Identity', 'E-commerce', 'Fashion'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    testimonial: {
      quote: "The AI platform helped us create a consistent brand identity across all touchpoints. Our customers love the cohesive experience.",
      author: 'Michael Ross',
      role: 'Founder, Urban Essentials',
    },
  },
  {
    title: 'Restaurant Chain Rebranding',
    company: 'Fresh Bites',
    description: 'Modernizing a restaurant chain\'s visual identity while maintaining brand recognition.',
    results: ['15% increase in foot traffic', '23% higher social media engagement', '40% faster design iterations'],
    tags: ['Restaurant', 'Rebranding', 'Marketing Materials'],
    image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg',
    testimonial: {
      quote: "The AI-powered design tools helped us maintain consistency across 50+ locations while modernizing our brand.",
      author: 'Lisa Martinez',
      role: 'Marketing Director, Fresh Bites',
    },
  },
  {
    title: 'Non-Profit Campaign',
    company: 'Green Earth Initiative',
    description: 'Creating impactful campaign materials for a global environmental non-profit organization.',
    results: ['2M+ social media impressions', '45% increase in donations', '60+ unique design assets'],
    tags: ['Non-Profit', 'Campaign Design', 'Social Impact'],
    image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg',
    testimonial: {
      quote: "The AI design platform allowed us to create professional campaign materials quickly and cost-effectively.",
      author: 'David Wilson',
      role: 'Campaign Manager, Green Earth Initiative',
    },
  },
];

const CaseStudies = ({ darkMode }) => {
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
          Success Stories
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
          See how businesses are transforming their brands with our AI-powered design solutions
        </Typography>

        <Grid container spacing={6}>
          {caseStudies.map((study, index) => (
            <Grid item key={index} xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
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
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Box
                        component="img"
                        src={study.image}
                        alt={study.title}
                        sx={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          borderRadius: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 1,
                          color: darkMode ? '#fff' : '#000',
                        }}
                      >
                        {study.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                        }}
                      >
                        {study.company}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                        }}
                      >
                        {study.description}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        {study.tags.map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                              color: darkMode ? '#fff' : '#000',
                            }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            color: darkMode ? '#fff' : '#000',
                          }}
                        >
                          Key Results:
                        </Typography>
                        {study.results.map((result, resultIndex) => (
                          <Typography
                            key={resultIndex}
                            variant="body2"
                            sx={{
                              mb: 1,
                              color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                            }}
                          >
                            • {result}
                          </Typography>
                        ))}
                      </Box>

                      <Box
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 2,
                            fontStyle: 'italic',
                            color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                          }}
                        >
                          "{study.testimonial.quote}"
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: darkMode ? '#fff' : '#000',
                            fontWeight: 'bold',
                          }}
                        >
                          {study.testimonial.author}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                          }}
                        >
                          {study.testimonial.role}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
          }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/solutions')}
            sx={{
              py: 2,
              px: 4,
              backgroundColor: darkMode ? '#fff' : '#000',
              color: darkMode ? '#000' : '#fff',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
              },
            }}
          >
            Explore Our Solutions
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default CaseStudies; 