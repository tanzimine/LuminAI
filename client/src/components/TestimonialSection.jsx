import React from 'react';
import { Box, Container, Typography, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
    text: 'The AI-powered logo generation transformed our brand identity in hours, not weeks. The quality and creativity exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director, Design Hub',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    text: 'As a design professional, I was skeptical about AI-generated logos. But this platform proved me wrong. The results are stunning and highly customizable.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Bloom Boutique',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
    text: 'Our boutique needed a fresh, modern logo that captured our essence. The AI tool delivered exactly what we wanted, saving us time and money.',
  },
];

const TestimonialSection = ({ darkMode }) => {
  return (
    <Box sx={{ py: 8, backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
            Client Success Stories
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
            Hear from businesses that have transformed their brands using our AI technology
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 4px 20px rgba(255,255,255,0.1)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                      borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 56,
                        height: 56,
                        mr: 2,
                        border: '2px solid',
                        borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: darkMode ? '#ffffff' : '#000000',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
