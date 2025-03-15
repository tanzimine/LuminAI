import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, Twitter, Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  return (
    <Box
      component={motion.footer}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We provide cutting-edge AI solutions for modern businesses,
              helping them transform and grow in the digital age.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/create-post" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Generate Logo
            </Link>
            <Link href="#faq" color="text.secondary" display="block" sx={{ mb: 1 }}>
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                color="primary"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                color="primary"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                color="primary"
              >
                <Facebook />
              </IconButton>
              <IconButton
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                color="primary"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} LuminAI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 