import React from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      sx={{ width: '100%', mb: 2 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography
          component="label"
          htmlFor={name}
          sx={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'text.primary',
          }}
        >
          {labelName}
        </Typography>
        {isSurpriseMe && (
          <Typography
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSurpriseMe}
            sx={{
              ml: 'auto',
              fontWeight: 500,
              fontSize: '0.875rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'primary.main',
              cursor: 'pointer',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            Surprise me
          </Typography>
        )}
      </Box>
      <TextField
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            fontSize: '0.875rem',
            padding: '12px 14px',
          },
        }}
      />
    </Box>
  );
};

export default FormField;
