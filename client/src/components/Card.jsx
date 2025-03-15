import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, IconButton, Avatar, Card as MuiCard, CardMedia, CardContent, CardActions } from '@mui/material';
import { Download as DownloadIcon, Share as ShareIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { downloadImage } from '../utils';
import { toast } from 'react-toastify';

const Card = ({ _id, name, prompt, photo }) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Logo by ${name}`,
        text: prompt,
        url: photo
      });
      toast.success('Shared successfully!');
    } catch (error) {
      // If Web Share API is not supported, fallback to copying to clipboard
      if (error.name === 'NotSupportedError') {
        navigator.clipboard.writeText(photo);
        toast.success('Link copied to clipboard!');
      } else {
        toast.error('Failed to share');
      }
    }
  };

  const handleDownload = async () => {
    try {
      await downloadImage(_id, photo);
      toast.success('Downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download');
    }
  };

  return (
    <MuiCard
      component={motion.div}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: (theme) => 
          theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'background.paper',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '75%' }}>
        <CardMedia
          component="img"
          image={photo}
          alt={prompt}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          loading="lazy"
        />
        
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 3,
            opacity: 0,
            transition: 'opacity 0.4s ease-in-out',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              mb: 2,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              fontFamily: 'Inter',
              lineHeight: 1.6,
              fontSize: '1rem',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            {prompt}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'primary.main',
              fontSize: '1.2rem',
              mr: 2,
              fontFamily: 'Playfair Display',
              fontWeight: 600,
            }}
          >
            {name[0].toUpperCase()}
          </Avatar>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              fontFamily: 'Inter',
              fontSize: '1.1rem',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
            }}
          >
            {name}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0, justifyContent: 'space-between' }}>
        <Box>
          <IconButton
            size="medium"
            onClick={handleDownload}
            sx={{
              color: 'primary.main',
              mr: 1,
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <DownloadIcon />
          </IconButton>
          <IconButton
            size="medium"
            onClick={handleShare}
            sx={{
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <ShareIcon />
          </IconButton>
        </Box>
        <IconButton
          size="medium"
          onClick={() => window.open(photo, '_blank')}
          sx={{
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <LaunchIcon />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
