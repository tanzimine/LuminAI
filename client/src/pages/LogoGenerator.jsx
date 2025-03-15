import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Palette,
  Style,
  Download,
  Refresh,
  ColorLens,
} from '@mui/icons-material';

const LogoGenerator = ({ darkMode }) => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [style, setStyle] = useState('modern');
  const [loading, setLoading] = useState(false);
  const [logos, setLogos] = useState(null);
  const [colorScheme, setColorScheme] = useState('');
  const [complexity, setComplexity] = useState(50);

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Entertainment',
    'Food & Beverage',
    'Real Estate',
    'Fashion',
    'Sports',
    'Other',
  ];

  const styles = [
    { value: 'modern', label: 'Modern & Minimal' },
    { value: 'classic', label: 'Classic & Professional' },
    { value: 'playful', label: 'Playful & Creative' },
    { value: 'luxury', label: 'Luxury & Elegant' },
    { value: 'tech', label: 'Tech & Digital' },
  ];

  const colorSchemes = [
    { value: 'monochrome', label: 'Monochrome' },
    { value: 'colorful', label: 'Colorful' },
    { value: 'pastel', label: 'Pastel' },
    { value: 'bold', label: 'Bold' },
    { value: 'earth', label: 'Earth Tones' },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    // TODO: Implement actual API call to AI logo generation service
    setTimeout(() => {
      setLogos([
        {
          id: 1,
          url: 'https://placeholder.com/logo1.png',
          style: 'modern',
          colors: ['#FF5733', '#33FF57'],
        },
        {
          id: 2,
          url: 'https://placeholder.com/logo2.png',
          style: 'modern',
          colors: ['#3357FF', '#FF33F5'],
        },
        {
          id: 3,
          url: 'https://placeholder.com/logo3.png',
          style: 'modern',
          colors: ['#33FFF5', '#F5FF33'],
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  const handleDownload = (logoId) => {
    // TODO: Implement logo download functionality
    console.log('Downloading logo:', logoId);
  };

  const handleRegenerateVariation = (logoId) => {
    // TODO: Implement logo regeneration functionality
    console.log('Regenerating variation for logo:', logoId);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          AI Logo Generator
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Create unique, professional logos for your brand in seconds
        </Typography>
      </Box>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Business Name"
                variant="outlined"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Enter your business name"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Industry</InputLabel>
                <Select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  label="Industry"
                >
                  {industries.map((ind) => (
                    <MenuItem key={ind} value={ind.toLowerCase()}>
                      {ind}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Logo Style</InputLabel>
                <Select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  label="Logo Style"
                >
                  {styles.map((s) => (
                    <MenuItem key={s.value} value={s.value}>
                      {s.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Color Scheme</InputLabel>
                <Select
                  value={colorScheme}
                  onChange={(e) => setColorScheme(e.target.value)}
                  label="Color Scheme"
                >
                  {colorSchemes.map((scheme) => (
                    <MenuItem key={scheme.value} value={scheme.value}>
                      {scheme.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ px: 2 }}>
                <Typography gutterBottom>Design Complexity</Typography>
                <Slider
                  value={complexity}
                  onChange={(e, newValue) => setComplexity(newValue)}
                  valueLabelDisplay="auto"
                  marks
                  min={0}
                  max={100}
                  sx={{
                    color: '#6469ff',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleGenerate}
              disabled={loading || !businessName || !industry}
              startIcon={loading ? <CircularProgress size={20} /> : <Palette />}
              sx={{
                backgroundColor: '#6469ff',
                '&:hover': {
                  backgroundColor: '#4a4fff',
                },
              }}
            >
              {loading ? 'Generating...' : 'Generate Logos'}
            </Button>
          </Box>
        </CardContent>
      </Card>

      {logos && (
        <Grid container spacing={4}>
          {logos.map((logo) => (
            <Grid item xs={12} md={4} key={logo.id}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {/* Replace with actual logo image */}
                    <Typography variant="body2" color="textSecondary">
                      Logo Preview
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Style: {logo.style}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {logo.colors.map((color, index) => (
                          <Box
                            key={index}
                            sx={{
                              width: 24,
                              height: 24,
                              backgroundColor: color,
                              borderRadius: '50%',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Tooltip title="Download Logo">
                        <IconButton onClick={() => handleDownload(logo.id)}>
                          <Download />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Generate Variation">
                        <IconButton onClick={() => handleRegenerateVariation(logo.id)}>
                          <Refresh />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default LogoGenerator; 