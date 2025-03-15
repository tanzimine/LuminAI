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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp,
  AttachMoney,
  Group,
  Timeline,
  Lightbulb,
} from '@mui/icons-material';

const BusinessIdeas = ({ darkMode }) => {
  const [interests, setInterests] = useState('');
  const [budget, setBudget] = useState('');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState(null);

  const budgetRanges = [
    { value: 'low', label: '$0 - $5,000' },
    { value: 'medium', label: '$5,000 - $25,000' },
    { value: 'high', label: '$25,000 - $100,000' },
    { value: 'very_high', label: '$100,000+' },
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Some Experience' },
    { value: 'expert', label: 'Expert' },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    // TODO: Implement actual API call to AI business ideation service
    setTimeout(() => {
      setIdeas([
        {
          id: 1,
          title: 'AI-Powered Personal Shopping Assistant',
          description: 'Develop a mobile app that uses AI to provide personalized shopping recommendations and deal alerts.',
          marketPotential: 85,
          competitionLevel: 'Medium',
          initialInvestment: '$15,000 - $30,000',
          profitPotential: 'High',
          timeToMarket: '6-8 months',
          riskLevel: 3,
          skills: ['Mobile Development', 'AI/ML', 'UI/UX Design'],
        },
        {
          id: 2,
          title: 'Sustainable Food Delivery Service',
          description: 'Launch an eco-friendly food delivery service focusing on zero-waste packaging and local ingredients.',
          marketPotential: 78,
          competitionLevel: 'High',
          initialInvestment: '$20,000 - $40,000',
          profitPotential: 'Medium',
          timeToMarket: '3-4 months',
          riskLevel: 4,
          skills: ['Logistics', 'Food Service', 'Sustainability'],
        },
        {
          id: 3,
          title: 'Virtual Event Platform',
          description: 'Create a platform for hosting immersive virtual events with networking capabilities.',
          marketPotential: 92,
          competitionLevel: 'Medium',
          initialInvestment: '$25,000 - $50,000',
          profitPotential: 'Very High',
          timeToMarket: '4-6 months',
          riskLevel: 2,
          skills: ['Web Development', 'WebRTC', 'Cloud Infrastructure'],
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          AI Business Idea Generator
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Discover innovative business opportunities tailored to your interests and resources
        </Typography>
      </Box>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Your Interests & Skills"
                variant="outlined"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="Describe your interests, skills, and any specific industries you're passionate about..."
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Investment Budget</InputLabel>
                <Select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  label="Investment Budget"
                >
                  {budgetRanges.map((range) => (
                    <MenuItem key={range.value} value={range.value}>
                      {range.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Experience Level</InputLabel>
                <Select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  label="Experience Level"
                >
                  {experienceLevels.map((level) => (
                    <MenuItem key={level.value} value={level.value}>
                      {level.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleGenerate}
              disabled={loading || !interests || !budget || !experience}
              startIcon={loading ? <CircularProgress size={20} /> : <Lightbulb />}
              sx={{
                backgroundColor: '#6469ff',
                '&:hover': {
                  backgroundColor: '#4a4fff',
                },
              }}
            >
              {loading ? 'Generating Ideas...' : 'Generate Business Ideas'}
            </Button>
          </Box>
        </CardContent>
      </Card>

      {ideas && (
        <Grid container spacing={4}>
          {ideas.map((idea) => (
            <Grid item xs={12} key={idea.id}>
              <Card>
                <CardContent>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" gutterBottom>
                      {idea.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                      {idea.description}
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Market Potential
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ flexGrow: 1, mr: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={idea.marketPotential}
                              sx={{ height: 8, borderRadius: 4 }}
                            />
                          </Box>
                          <Typography variant="body2">{idea.marketPotential}%</Typography>
                        </Box>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Competition Level
                        </Typography>
                        <Typography variant="body1">{idea.competitionLevel}</Typography>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Initial Investment
                        </Typography>
                        <Typography variant="body1">{idea.initialInvestment}</Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Profit Potential
                        </Typography>
                        <Typography variant="body1">{idea.profitPotential}</Typography>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Time to Market
                        </Typography>
                        <Typography variant="body1">{idea.timeToMarket}</Typography>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Risk Level
                        </Typography>
                        <Rating value={idea.riskLevel} readOnly max={5} />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Required Skills
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {idea.skills.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            sx={{
                              backgroundColor: '#6469ff',
                              color: 'white',
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BusinessIdeas; 