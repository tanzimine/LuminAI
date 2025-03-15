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
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore,
  Search,
  TrendingUp,
  Assignment,
  Speed,
  Language,
} from '@mui/icons-material';

const SeoTools = ({ darkMode }) => {
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    // TODO: Implement actual API call to backend
    setTimeout(() => {
      setAnalysis({
        score: 85,
        metrics: {
          performance: 90,
          accessibility: 85,
          seo: 88,
          bestPractices: 82,
        },
        suggestions: [
          {
            title: 'Meta Description',
            description: 'Your meta description is well-optimized but could be more compelling.',
            priority: 'medium',
          },
          {
            title: 'Image Alt Tags',
            description: 'Add alt tags to 3 images to improve accessibility and SEO.',
            priority: 'high',
          },
          {
            title: 'Mobile Responsiveness',
            description: 'Your site is mobile-friendly but could improve load times on 3G networks.',
            priority: 'low',
          },
        ],
        keywords: [
          { word: 'business', score: 95 },
          { word: 'professional', score: 88 },
          { word: 'services', score: 82 },
        ],
      });
      setLoading(false);
    }, 2000);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          AI-Powered SEO Analysis
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Get actionable insights to improve your website's SEO
        </Typography>
      </Box>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Website URL"
                variant="outlined"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://your-website.com"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Target Keywords"
                variant="outlined"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Enter keywords separated by commas"
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleAnalyze}
              disabled={loading || !url}
              startIcon={loading ? <CircularProgress size={20} /> : <Search />}
              sx={{
                backgroundColor: '#6469ff',
                '&:hover': {
                  backgroundColor: '#4a4fff',
                },
              }}
            >
              {loading ? 'Analyzing...' : 'Analyze SEO'}
            </Button>
          </Box>
        </CardContent>
      </Card>

      {analysis && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Overall Score
                </Typography>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <CircularProgress
                    variant="determinate"
                    value={analysis.score}
                    size={80}
                    sx={{ color: '#6469ff' }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {analysis.score}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Key Metrics
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(analysis.metrics).map(([key, value]) => (
                    <Grid item xs={6} sm={3} key={key}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4">{value}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Improvement Suggestions
            </Typography>
            {analysis.suggestions.map((suggestion, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography sx={{ flex: 1 }}>{suggestion.title}</Typography>
                  <Chip
                    label={suggestion.priority}
                    color={getPriorityColor(suggestion.priority)}
                    size="small"
                    sx={{ mr: 2 }}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{suggestion.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Keyword Analysis
                </Typography>
                <Grid container spacing={2}>
                  {analysis.keywords.map((keyword, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h5">{keyword.word}</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <TrendingUp sx={{ color: '#6469ff', mr: 1 }} />
                            <Typography>Score: {keyword.score}</Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default SeoTools; 