import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardContent,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const Success = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = new URLSearchParams(location.search).get('session_id');
    if (!sessionId) {
      navigate('/pricing');
      return;
    }

    const fetchSubscriptionDetails = async () => {
      try {
        const response = await fetch(`/api/stripe/session/${sessionId}`);
        if (!response.ok) throw new Error('Failed to fetch subscription details');
        
        const data = await response.json();
        setSubscription(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionDetails();
  }, [location, navigate]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm">
        <Card sx={{ mt: 8, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h5" color="error" gutterBottom>
              Something went wrong
            </Typography>
            <Typography color="textSecondary" paragraph>
              {error}
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/pricing')}
              sx={{
                backgroundColor: '#6469ff',
                '&:hover': {
                  backgroundColor: '#4a4fff',
                },
              }}
            >
              Return to Pricing
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 8, textAlign: 'center' }}>
        <CardContent>
          <CheckCircle
            sx={{
              fontSize: 64,
              color: '#4CAF50',
              mb: 2,
            }}
          />
          <Typography variant="h4" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Your subscription has been confirmed
          </Typography>
          
          {subscription && (
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="body1" paragraph>
                You now have access to:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                • All {subscription.plan.name} features
              </Typography>
              <Typography variant="body1" color="textSecondary">
                • Priority support
              </Typography>
              <Typography variant="body1" color="textSecondary">
                • Regular updates
              </Typography>
            </Box>
          )}

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => navigate('/dashboard')}
              sx={{
                backgroundColor: '#6469ff',
                '&:hover': {
                  backgroundColor: '#4a4fff',
                },
                mr: 2,
              }}
            >
              Go to Dashboard
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/')}
              sx={{
                borderColor: '#6469ff',
                color: '#6469ff',
                '&:hover': {
                  borderColor: '#4a4fff',
                  backgroundColor: 'rgba(100, 105, 255, 0.1)',
                },
              }}
            >
              Return Home
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Success; 