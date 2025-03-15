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
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Lightbulb as LightbulbIcon,
  ContentCopy as ContentCopyIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const IdeasGenerator = ({ darkMode }) => {
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ideas, setIdeas] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const categories = [
    'all',
    'content',
    'marketing',
    'product',
    'design',
    'business',
  ];

  const handleGenerateIdeas = async () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic');
      return;
    }

    setLoading(true);
    try {
      // Using mock data with improved variety
      setTimeout(() => {
        const mockIdeas = [
          {
            id: 1,
            title: `How to Master ${topic} in 30 Days`,
            description: 'A comprehensive guide for beginners to experts, focusing on practical implementation and real-world examples.',
            category: 'content',
            tags: ['tutorial', 'guide', 'learning'],
          },
          {
            id: 2,
            title: `10 Innovative ${topic} Marketing Strategies`,
            description: 'Cutting-edge marketing tactics for modern businesses, with focus on digital transformation and customer engagement.',
            category: 'marketing',
            tags: ['strategy', 'growth', 'digital'],
          },
          {
            id: 3,
            title: `${topic} Product Development Roadmap`,
            description: 'Step-by-step guide to building successful products, from concept to launch and beyond.',
            category: 'product',
            tags: ['development', 'planning', 'success'],
          },
          {
            id: 4,
            title: `${topic} Design Principles`,
            description: 'Essential design guidelines for better user experience and brand consistency.',
            category: 'design',
            tags: ['ux', 'principles', 'creative'],
          },
          {
            id: 5,
            title: `${topic} Business Model Canvas`,
            description: 'Strategic planning tool for business success, with focus on scalability and market fit.',
            category: 'business',
            tags: ['strategy', 'planning', 'model'],
          },
          {
            id: 6,
            title: `${topic} Content Strategy`,
            description: 'A comprehensive content strategy focusing on engagement, conversion, and long-term growth.',
            category: 'content',
            tags: ['strategy', 'content', 'marketing'],
          },
          {
            id: 7,
            title: `${topic} Market Analysis`,
            description: 'In-depth market research and competitor analysis for strategic positioning.',
            category: 'business',
            tags: ['research', 'analysis', 'market'],
          },
          {
            id: 8,
            title: `${topic} Innovation Framework`,
            description: 'Structured approach to fostering innovation and creative problem-solving.',
            category: 'product',
            tags: ['innovation', 'framework', 'development'],
          }
        ];
        setIdeas(mockIdeas);
        toast.success('Ideas generated successfully!');
        setLoading(false);
      }, 1500);
    } catch (err) {
      toast.error(err.message || 'An error occurred');
      setLoading(false);
    }
  };

  const handleCopyIdea = (idea) => {
    navigator.clipboard.writeText(`${idea.title}\n\n${idea.description}`);
    toast.success('Copied to clipboard!');
  };

  const toggleFavorite = (ideaId) => {
    if (favorites.includes(ideaId)) {
      setFavorites(favorites.filter(id => id !== ideaId));
    } else {
      setFavorites([...favorites, ideaId]);
    }
  };

  const filteredIdeas = selectedCategory === 'all'
    ? ideas
    : ideas.filter(idea => idea.category === selectedCategory);

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
          AI Ideas Generator
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          }}
        >
          Generate creative ideas for content, marketing, and business strategies
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter a topic or concept..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
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

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category.charAt(0).toUpperCase() + category.slice(1)}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  backgroundColor: selectedCategory === category
                    ? (darkMode ? '#fff' : '#000')
                    : (darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
                  color: selectedCategory === category
                    ? (darkMode ? '#000' : '#fff')
                    : (darkMode ? '#fff' : '#000'),
                  '&:hover': {
                    backgroundColor: selectedCategory === category
                      ? (darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)')
                      : (darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'),
                  },
                }}
              />
            ))}
          </Box>

          <Button
            variant="contained"
            onClick={handleGenerateIdeas}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <LightbulbIcon />}
            sx={{
              py: 1.5,
              backgroundColor: darkMode ? '#fff' : '#000',
              color: darkMode ? '#000' : '#fff',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
              },
            }}
          >
            Generate Ideas
          </Button>
        </Box>

        <AnimatePresence>
          <Grid container spacing={3}>
            {filteredIdeas.map((idea) => (
              <Grid item xs={12} md={6} key={idea.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                      borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: darkMode ? '#fff' : '#000' }}
                        >
                          {idea.title}
                        </Typography>
                        <Box>
                          <Tooltip title="Copy idea">
                            <IconButton
                              onClick={() => handleCopyIdea(idea)}
                              sx={{ color: darkMode ? '#fff' : '#000' }}
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title={favorites.includes(idea.id) ? 'Remove from favorites' : 'Add to favorites'}>
                            <IconButton
                              onClick={() => toggleFavorite(idea.id)}
                              sx={{ color: darkMode ? '#fff' : '#000' }}
                            >
                              {favorites.includes(idea.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>

                      <Typography
                        sx={{
                          mb: 3,
                          color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                        }}
                      >
                        {idea.description}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          label={idea.category.toUpperCase()}
                          size="small"
                          sx={{
                            backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            color: darkMode ? '#fff' : '#000',
                          }}
                        />
                        {idea.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'transparent',
                              border: '1px solid',
                              borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                              color: darkMode ? '#fff' : '#000',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default IdeasGenerator; 