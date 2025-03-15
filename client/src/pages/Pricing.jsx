import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import { Check } from '@mui/icons-material';
import { handlePayment, subscriptionPlans } from '../utils/stripe';

const PricingTier = ({ plan, recommended }) => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      await handlePayment(plan.id);
    } catch (error) {
      console.error('Subscription error:', error);
      // TODO: Show error message to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      elevation={recommended ? 8 : 2}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transform: recommended ? 'scale(1.05)' : 'none',
        border: recommended ? '2px solid #6469ff' : 'none',
      }}
    >
      {recommended && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 20,
            backgroundColor: '#6469ff',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '0 0 8px 8px',
          }}
        >
          Recommended
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {plan.name}
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          ${plan.price}
          <Typography variant="subtitle1" component="span">/month</Typography>
        </Typography>
        <Box sx={{ mt: 4 }}>
          {plan.features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Check sx={{ color: '#6469ff', mr: 1 }} />
              <Typography>{feature}</Typography>
            </Box>
          ))}
        </Box>
        <Button 
          variant={recommended ? "contained" : "outlined"}
          fullWidth 
          onClick={handleSubscribe}
          disabled={loading}
          sx={{ 
            mt: 4,
            backgroundColor: recommended ? '#6469ff' : 'transparent',
            '&:hover': {
              backgroundColor: recommended ? '#4a4fff' : 'rgba(100, 105, 255, 0.1)'
            }
          }}
        >
          {loading ? 'Processing...' : 'Get Started'}
        </Button>
      </CardContent>
    </Card>
  );
};

const Pricing = ({ darkMode }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Choose Your Plan
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Get the tools you need to build your brand
        </Typography>
      </Box>
      
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <PricingTier plan={subscriptionPlans.starter} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PricingTier plan={subscriptionPlans.professional} recommended />
        </Grid>
        <Grid item xs={12} md={4}>
          <PricingTier plan={subscriptionPlans.enterprise} />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          All plans include a 14-day free trial
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Need a custom plan? <Button color="primary">Contact us</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Pricing; 