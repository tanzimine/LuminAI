import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  LinearProgress,
  Chip,
} from '@mui/material';
import { Search as SearchIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { endpoints } from '../utils/api';

const SeoResearch = ({ darkMode }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      toast.warning('Please enter a URL to analyze');
      return;
    }

    try {
      setLoading(true);
      const data = await endpoints.analyzeSEO(url);
      setResults(data);
      toast.success('SEO analysis completed successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to analyze SEO. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Mock data for demonstration
  const mockResults = {
    keyword: url,
    searchVolume: '10K - 100K',
    difficulty: 65,
    cpc: '2.50',
    trends: [
      { month: 'Jan', value: 75 },
      { month: 'Feb', value: 82 },
      { month: 'Mar', value: 78 },
      { month: 'Apr', value: 85 },
      { month: 'May', value: 90 },
      { month: 'Jun', value: 88 },
    ],
    relatedKeywords: [
      { keyword: url + ' tutorial', volume: '5K - 10K', difficulty: 45 },
      { keyword: url + ' examples', volume: '1K - 5K', difficulty: 35 },
      { keyword: 'best ' + url, volume: '10K - 50K', difficulty: 75 },
      { keyword: url + ' for beginners', volume: '5K - 10K', difficulty: 40 },
    ],
    recommendations: [
      'Focus on long-tail variations for easier ranking',
      'Create comprehensive tutorial content',
      'Include practical examples and case studies',
      'Target beginner-friendly content',
    ],
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty < 40) return '#66bb6a';
    if (difficulty < 70) return '#fb8c00';
    return '#ef5350';
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
          SEO Research Tool
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          }}
        >
          Analyze keywords and optimize your content for better rankings
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter a URL to analyze..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                '& fieldset': {
                  borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                },
              },
              '& .MuiInputBase-input': {
                color: darkMode ? '#fff' : '#000',
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <SearchIcon />}
            sx={{
              px: 4,
              backgroundColor: darkMode ? '#fff' : '#000',
              color: darkMode ? '#000' : '#fff',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
              },
            }}
          >
            Analyze
          </Button>
        </Box>

        {loading ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <CircularProgress />
            <Typography sx={{ mt: 2, color: darkMode ? '#fff' : '#000' }}>
              Analyzing SEO data...
            </Typography>
          </Box>
        ) : url && (
          <Grid container spacing={4}>
            {/* Overview Card */}
            <Grid item xs={12}>
              <Card
                sx={{
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" sx={{ color: darkMode ? '#fff' : '#000', mb: 1 }}>
                        Search Volume
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ color: darkMode ? '#fff' : '#000', fontWeight: 600 }}
                      >
                        {mockResults.searchVolume}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" sx={{ color: darkMode ? '#fff' : '#000', mb: 1 }}>
                        Difficulty
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography
                          variant="h4"
                          sx={{ color: darkMode ? '#fff' : '#000', fontWeight: 600 }}
                        >
                          {mockResults.difficulty}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={mockResults.difficulty}
                          sx={{
                            width: '100px',
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: getDifficultyColor(mockResults.difficulty),
                            },
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" sx={{ color: darkMode ? '#fff' : '#000', mb: 1 }}>
                        CPC
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ color: darkMode ? '#fff' : '#000', fontWeight: 600 }}
                      >
                        ${mockResults.cpc}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Related Keywords */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: darkMode ? '#fff' : '#000', mb: 3 }}>
                    Related Keywords
                  </Typography>
                  {mockResults.relatedKeywords.map((kw, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                        p: 2,
                        borderRadius: 1,
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      }}
                    >
                      <Typography sx={{ color: darkMode ? '#fff' : '#000' }}>
                        {kw.keyword}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Chip
                          label={kw.volume}
                          size="small"
                          sx={{
                            backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            color: darkMode ? '#fff' : '#000',
                          }}
                        />
                        <Chip
                          label={`Difficulty: ${kw.difficulty}`}
                          size="small"
                          sx={{
                            backgroundColor: getDifficultyColor(kw.difficulty),
                            color: '#fff',
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            {/* Recommendations */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: darkMode ? '#fff' : '#000', mb: 3 }}>
                    Recommendations
                  </Typography>
                  {mockResults.recommendations.map((rec, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                        p: 2,
                        borderRadius: 1,
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      }}
                    >
                      <TrendingUpIcon
                        sx={{ color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}
                      />
                      <Typography sx={{ color: darkMode ? '#fff' : '#000' }}>
                        {rec}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </motion.div>
    </Container>
  );
};

export default SeoResearch; 