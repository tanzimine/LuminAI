import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { preview } from '../assets';
import { FormField, Loader } from '../components';
import { API_ROUTES } from '../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(API_ROUTES.dalle, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: data.photo });
        toast.success('Image generated successfully!');
      } catch (error) {
        toast.error('Failed to generate image. Please try again.');
        console.error(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      toast.warning('Please enter a prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(API_ROUTES.posts, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        await response.json();
        toast.success('Logo shared to community successfully!');
        navigate('/');
      } catch (err) {
        toast.error('Failed to share logo. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      toast.warning('Please generate an image with proper details');
    }
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #fff 0%, #b3b3b3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Create Your Professional Logo
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Transform your ideas into stunning logos using AI-powered image generation
          </Typography>
        </Box>

        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
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
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.05)'
                        : '#ffffff',
                    '& fieldset': {
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(0,0,0,0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.3)'
                          : 'rgba(0,0,0,0.3)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.7)'
                        : 'rgba(0,0,0,0.7)',
                  },
                  '& .MuiInputBase-input': {
                    color: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '#ffffff'
                        : '#000000',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Logo Description"
                name="prompt"
                value={form.prompt}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.05)'
                        : '#ffffff',
                    '& fieldset': {
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(0,0,0,0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.3)'
                          : 'rgba(0,0,0,0.3)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.7)'
                        : 'rgba(0,0,0,0.7)',
                  },
                  '& .MuiInputBase-input': {
                    color: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '#ffffff'
                        : '#000000',
                  },
                }}
              />
            </Box>

            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Button
                onClick={generateImage}
                disabled={generatingImg}
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)'
                      : 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                  '&:hover': {
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #e0e0e0 0%, #cccccc 100%)'
                        : 'linear-gradient(135deg, #333333 0%, #000000 100%)',
                  },
                }}
              >
                {generatingImg ? 'Generating...' : 'Generate Logo'}
              </Button>
            </Box>

            <Box 
              sx={{ 
                position: 'relative',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(0,0,0,0.02)',
                borderRadius: 2,
                p: 2,
                minHeight: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px dashed',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0.2)',
              }}
            >
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }}
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  style={{ 
                    width: '40%', 
                    height: '40%', 
                    objectFit: 'contain',
                    opacity: 0.5 
                  }}
                />
              )}

              {generatingImg && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,
                  }}
                >
                  <Loader />
                </Box>
              )}
            </Box>

            {form.photo && (
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    px: 6,
                    py: 1.5,
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)'
                        : 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                    '&:hover': {
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #e0e0e0 0%, #cccccc 100%)'
                        : 'linear-gradient(135deg, #333333 0%, #000000 100%)',
                    },
                  }}
                >
                  {loading ? 'Sharing...' : 'Share with Community'}
                </Button>
              </Box>
            )}
          </form>
        </Paper>
      </motion.div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};

export default CreatePost;
