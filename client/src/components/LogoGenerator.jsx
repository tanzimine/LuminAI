import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAs } from 'file-saver';
import { endpoints } from '../utils/api';

const LogoGenerator = ({ darkMode }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    colorScheme: '',
    style: '',
  });
  const [generatedLogo, setGeneratedLogo] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.industry || !formData.colorScheme || !formData.style) {
      toast.warning('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const result = await endpoints.generateLogo(formData);
      if (result && result.logo) {
        setGeneratedLogo(result.logo);
        toast.success('Logo generated successfully!');
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error generating logo:', err);
      toast.error(err.message || 'Failed to generate logo. Please try again.');
      setGeneratedLogo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
          AI Logo Generator
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          }}
        >
          Create unique, professional logos for your brand instantly
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                border: '1px solid',
                borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              }}
            >
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
                InputLabelProps={{
                  style: { color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' },
                }}
                InputProps={{
                  style: { color: darkMode ? '#fff' : '#000' },
                }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel sx={{ color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                  Industry
                </InputLabel>
                <Select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  sx={{ color: darkMode ? '#fff' : '#000' }}
                >
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="healthcare">Healthcare</MenuItem>
                  <MenuItem value="retail">Retail</MenuItem>
                  <MenuItem value="education">Education</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel sx={{ color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                  Color Scheme
                </InputLabel>
                <Select
                  name="colorScheme"
                  value={formData.colorScheme}
                  onChange={handleChange}
                  required
                  sx={{ color: darkMode ? '#fff' : '#000' }}
                >
                  <MenuItem value="modern">Modern & Minimal</MenuItem>
                  <MenuItem value="bold">Bold & Vibrant</MenuItem>
                  <MenuItem value="professional">Professional & Corporate</MenuItem>
                  <MenuItem value="creative">Creative & Playful</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                <InputLabel sx={{ color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                  Style
                </InputLabel>
                <Select
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  required
                  sx={{ color: darkMode ? '#fff' : '#000' }}
                >
                  <MenuItem value="minimalist">Minimalist</MenuItem>
                  <MenuItem value="geometric">Geometric</MenuItem>
                  <MenuItem value="abstract">Abstract</MenuItem>
                  <MenuItem value="mascot">Mascot</MenuItem>
                  <MenuItem value="lettermark">Lettermark</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  py: 2,
                  backgroundColor: darkMode ? '#fff' : '#000',
                  color: darkMode ? '#000' : '#fff',
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                  },
                }}
              >
                {loading ? <CircularProgress size={24} /> : 'Generate Logo'}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 2,
                backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                border: '1px solid',
                borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {loading ? (
                <CircularProgress />
              ) : generatedLogo ? (
                <Box sx={{ textAlign: 'center' }}>
                  <img
                    src={generatedLogo}
                    alt="Generated Logo"
                    style={{ maxWidth: '100%', marginBottom: '20px' }}
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      color: darkMode ? '#fff' : '#000',
                      borderColor: darkMode ? '#fff' : '#000',
                      '&:hover': {
                        borderColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                      },
                    }}
                    onClick={() => {
                      saveAs(generatedLogo, `${formData.companyName.toLowerCase().replace(/\s+/g, '-')}-logo.png`);
                      toast.success('Logo downloaded successfully!');
                    }}
                  >
                    Download Logo
                  </Button>
                </Box>
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                    textAlign: 'center',
                  }}
                >
                  Your generated logo will appear here
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default LogoGenerator;
