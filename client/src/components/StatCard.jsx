import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const StatCard = ({ icon, endValue, prefix = '', suffix = '', label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const duration = 2000; // 2 seconds
    const steps = 60;

    const animate = (currentTimestamp) => {
      if (!startTimestamp) startTimestamp = currentTimestamp;
      const progress = Math.min((currentTimestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          height: '100%',
          borderRadius: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(0,0,0,0.02)',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.08)'
                : 'rgba(0,0,0,0.04)',
            borderColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.2)'
                : 'rgba(0,0,0,0.2)',
          },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '3rem',
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>{icon}</span>
            {prefix}
            {count.toLocaleString()}
            {suffix}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              opacity: 0.8,
            }}
          >
            {label}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default StatCard; 