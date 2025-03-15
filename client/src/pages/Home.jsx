import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, TextField, InputAdornment, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Search as SearchIcon, AutoAwesome as AutoAwesomeIcon, Speed as SpeedIcon, Security as SecurityIcon, Palette as PaletteIcon, Analytics as AnalyticsIcon, Business as BusinessIcon } from '@mui/icons-material';
import { Card, Loader, StatCard, HeroSection, TestimonialSection } from '../components';
import { useNavigate } from 'react-router-dom';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      <Grid container spacing={3}>
        {data.map((post) => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card {...post} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Typography variant="h5" sx={{ textAlign: 'center', mt: 4, opacity: 0.7 }}>
      {title}
    </Typography>
  );
};

const features = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    title: 'AI Logo Generator',
    description: 'Create unique, professional logos instantly with our AI. Get multiple variations, customize colors, and export in various formats for all your branding needs.',
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    title: 'Task Management',
    description: 'Streamline your workflow with our intelligent task manager. Automate assignments, track progress, and collaborate seamlessly with team members.',
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    title: 'SEO Research Tools',
    description: 'Optimize your online presence with advanced SEO analysis. Get keyword insights, competitor analysis, and actionable recommendations for better rankings.',
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    title: 'Ideas Generation',
    description: 'Transform your concepts into reality with AI-powered brainstorming. Generate creative concepts, marketing campaigns, and content strategies instantly.',
  },
];

const Home = ({ darkMode }) => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  const [expandedFaqs, setExpandedFaqs] = useState({});
  const navigate = useNavigate();

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const toggleFaq = (index) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    
    const elem = document.getElementById(`faq-answer-${index}`);
    const isExpanded = expandedFaqs[index];
    elem.style.maxHeight = isExpanded ? '0px' : '500px';
    elem.style.padding = isExpanded ? '0px 24px' : '16px 24px';
    elem.style.opacity = isExpanded ? '0' : '1';
  };

  return (
    <Box>
      <HeroSection darkMode={darkMode} />

      {/* Stats Section */}
      <Box sx={{ py: 12, backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <StatCard
                darkMode={darkMode}
                icon={<AutoAwesomeIcon />}
                endValue={5000000}
                prefix="$"
                label="Revenue Generated"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <StatCard
                darkMode={darkMode}
                icon={<AnalyticsIcon />}
                endValue={45}
                suffix="%"
                label="SEO Improvement"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <StatCard
                darkMode={darkMode}
                icon={<BusinessIcon />}
                endValue={15000}
                suffix="+"
                label="Active Users"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <StatCard
                darkMode={darkMode}
                icon={<SecurityIcon />}
                endValue={98}
                suffix="%"
                label="Client Satisfaction"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }} id="features-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
              background: darkMode
                ? 'linear-gradient(135deg, #E0E7FF 0%, #818CF8 100%)'
                : 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            Intelligent Solutions for Modern Business
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 8,
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.75)',
              letterSpacing: '0.01em',
              lineHeight: 1.6,
            }}
          >
            Streamline your workflow with our comprehensive suite of AI-powered tools
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                    border: '1px solid',
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 4px 20px rgba(255,255,255,0.1)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ color: darkMode ? '#fff' : '#000', mb: 2 }}>
                    <AutoAwesomeIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: darkMode ? '#fff' : '#000',
                    }}
                  >
                    Logo Generator
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                      lineHeight: 1.8,
                    }}
                  >
                    Create professional, unique logos instantly with our AI. Get multiple variations, customize colors, and export in various formats for all your branding needs.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                    border: '1px solid',
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 4px 20px rgba(255,255,255,0.1)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ color: darkMode ? '#fff' : '#000', mb: 2 }}>
                    <BusinessIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: darkMode ? '#fff' : '#000',
                    }}
                  >
                    Task Management
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                      lineHeight: 1.8,
                    }}
                  >
                    Streamline your workflow with our intelligent task manager. Automate assignments, track progress, and collaborate seamlessly with team members.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                    border: '1px solid',
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 4px 20px rgba(255,255,255,0.1)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ color: darkMode ? '#fff' : '#000', mb: 2 }}>
                    <AnalyticsIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: darkMode ? '#fff' : '#000',
                    }}
                  >
                    SEO Research
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                      lineHeight: 1.8,
                    }}
                  >
                    Optimize your online presence with advanced SEO analysis. Get keyword insights, competitor analysis, and actionable recommendations for better rankings.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                    border: '1px solid',
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 4px 20px rgba(255,255,255,0.1)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ color: darkMode ? '#fff' : '#000', mb: 2 }}>
                    <PaletteIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: darkMode ? '#fff' : '#000',
                    }}
                  >
                    Ideas Generation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                      lineHeight: 1.8,
                    }}
                  >
                    Transform your concepts into reality with AI-powered brainstorming. Generate creative concepts, marketing campaigns, and content strategies instantly.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ py: 12, backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              Streamlined Workflow
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 8,
                maxWidth: '800px',
                mx: 'auto',
                color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
              }}
            >
              Create, optimize, and manage your designs with our integrated tools
            </Typography>

            <Grid container spacing={4}>
              {[
                {
                  number: '01',
                  title: 'Design & Optimize',
                  description: 'Create stunning designs while our AI automatically optimizes them for SEO and customer engagement.',
                },
                {
                  number: '02',
                  title: 'Analyze & Enhance',
                  description: 'Track performance metrics and customer interactions to continuously improve your designs and marketing strategy.',
                },
                {
                  number: '03',
                  title: 'Manage & Scale',
                  description: 'Leverage CRM tools to manage customer relationships and scale your design operations efficiently.',
                },
              ].map((step, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 4,
                        height: '380px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderRadius: 2,
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                        border: '1px solid',
                        borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        transition: 'all 0.5s ease',
                        boxShadow: darkMode 
                          ? '0 0 15px rgba(255,255,255,0.05)'
                          : '0 0 15px rgba(0,0,0,0.05)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: darkMode
                            ? '0 0 30px rgba(255,255,255,0.15), 0 0 60px rgba(255,255,255,0.05)'
                            : '0 0 30px rgba(0,0,0,0.15), 0 0 60px rgba(0,0,0,0.05)',
                        },
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: '4.5rem',
                          fontWeight: 700,
                          mb: 3,
                          background: darkMode
                            ? 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.3) 100%)'
                            : 'linear-gradient(135deg, #000 0%, rgba(0,0,0,0.3) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: darkMode 
                            ? 'drop-shadow(0 0 8px rgba(255,255,255,0.2))'
                            : 'drop-shadow(0 0 8px rgba(0,0,0,0.2))',
                        }}
                      >
                        {step.number}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 3,
                          color: darkMode ? '#fff' : '#000',
                          fontWeight: 600,
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/create-post')}
                  sx={{
                    py: 2,
                    px: 6,
                    backgroundColor: darkMode ? '#fff' : '#000',
                    color: darkMode ? '#000' : '#fff',
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                    },
                  }}
                >
                  Start Creating Now
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Community Showcase Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            Community Showcase
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
            }}
          >
            Explore amazing creations from our community
          </Typography>

          <Box sx={{ position: 'relative', mb: 4 }}>
            <TextField
              type="text"
              name="text"
              placeholder="Search posts..."
              value={searchText}
              onChange={handleSearchChange}
              required
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: darkMode ? '#fff' : '#000',
                  },
                },
                '& .MuiInputBase-input': {
                  color: darkMode ? '#fff' : '#000',
                  '&::placeholder': {
                    color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                    opacity: 1,
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Loader />
            </Box>
          ) : (
            <>
              {searchText && (
                <Typography variant="h6" sx={{ mb: 3, color: darkMode ? '#fff' : '#000' }}>
                  Showing results for <span style={{ color: darkMode ? '#b3b3b3' : '#666' }}>{searchText}</span>
                </Typography>
              )}
              <RenderCards
                data={searchText ? searchedResults : allPosts}
                title="No posts found"
              />
            </>
          )}
        </motion.div>
      </Container>

      {/* Testimonials Section */}
      <TestimonialSection darkMode={darkMode} />

      {/* FAQ Section */}
      <Box sx={{ py: 12, backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 8,
                maxWidth: '800px',
                mx: 'auto',
                color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
              }}
            >
              Get answers to common questions about our AI design platform
            </Typography>

            {[
              {
                question: 'How does your AI enhance SEO performance?',
                answer: 'Our AI analyzes search trends, keyword opportunities, and competitor strategies to optimize your designs for better visibility. It automatically generates SEO-friendly alt text, meta descriptions, and suggests content improvements. The system continuously learns from performance data to refine optimization strategies.',
              },
              {
                question: 'What CRM features are included?',
                answer: 'Our CRM system includes automated lead scoring, customer segmentation, engagement tracking, and personalized communication workflows. It integrates with your designs to track campaign performance, customer interactions, and provides AI-driven insights for better relationship management.',
              },
              {
                question: 'Can I integrate with existing marketing tools?',
                answer: 'Yes! Our platform offers seamless integration with popular marketing tools, analytics platforms, and CMS systems. This includes direct connections to Google Analytics, social media platforms, email marketing services, and major e-commerce platforms.',
              },
              {
                question: 'How do you handle design optimization for different platforms?',
                answer: 'Our AI automatically adapts designs for various platforms while maintaining SEO effectiveness. It optimizes image sizes, formats, and layouts for web, mobile, and social media, ensuring fast loading times and maximum engagement across all channels.',
              },
              {
                question: 'What analytics and reporting features are available?',
                answer: 'Our comprehensive analytics suite provides real-time insights into design performance, SEO metrics, and customer engagement. Track keyword rankings, user behavior, conversion rates, and ROI through customizable dashboards and automated reports.',
              },
              {
                question: 'How secure is the platform for enterprise use?',
                answer: 'We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, and role-based access control. Regular security audits, GDPR compliance, and secure data backups ensure your business information remains protected.',
              },
              {
                question: 'What kind of customer support do you offer?',
                answer: 'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our team of experts offers personalized onboarding, technical assistance, and strategic guidance to help you maximize platform benefits.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                    border: '1px solid',
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                      transform: 'translateY(-2px)',
                      boxShadow: darkMode
                        ? '0 4px 20px rgba(255,255,255,0.1)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Button
                    onClick={() => toggleFaq(index)}
                    fullWidth
                    sx={{
                      py: 3,
                      px: 3,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: darkMode ? '#fff' : '#000',
                      textAlign: 'left',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      {faq.question}
                    </Typography>
                    <Box
                      sx={{
                        width: '24px',
                        height: '24px',
                        position: 'relative',
                        '&::before, &::after': {
                          content: '""',
                          position: 'absolute',
                          backgroundColor: darkMode ? '#fff' : '#000',
                          transition: 'transform 0.3s ease',
                        },
                        '&::before': {
                          width: '2px',
                          height: '16px',
                          left: '11px',
                          top: '4px',
                          transform: expandedFaqs[index] ? 'rotate(90deg)' : 'rotate(0)',
                        },
                        '&::after': {
                          width: '16px',
                          height: '2px',
                          left: '4px',
                          top: '11px',
                        },
                      }}
                    />
                  </Button>
                  <Box
                    id={`faq-answer-${index}`}
                    sx={{
                      maxHeight: '0px',
                      opacity: 0,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.answer}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

