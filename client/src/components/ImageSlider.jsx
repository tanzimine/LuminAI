import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  33.33% {
    transform: translateX(-100%);
  }
  66.66% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
`;

const ImageSlider = ({ darkMode }) => {
  const images = [
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg'
  ];

  // Duplicate images array to create seamless loop
  const allImages = [...images, ...images];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: darkMode
            ? 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))'
            : 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))',
          zIndex: 2,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: `${(images.length * 100)}%`,
          height: '100%',
          animation: `${slideAnimation} 30s linear infinite`,
          zIndex: 1,
        }}
      >
        {allImages.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index + 1}`}
            sx={{
              width: `${100 / allImages.length}%`,
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider; 