import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('your_publishable_key');

export const handlePayment = async (priceId) => {
  try {
    const stripe = await stripePromise;
    
    // Call your backend to create a checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};

export const subscriptionPlans = {
  starter: {
    id: 'price_starter',
    name: 'Starter',
    price: 29,
    features: [
      'Logo Generation (5/month)',
      'Basic SEO Analysis',
      'Business Name Generator',
      'Email Support'
    ]
  },
  professional: {
    id: 'price_professional',
    name: 'Professional',
    price: 79,
    features: [
      'Logo Generation (20/month)',
      'Advanced SEO Tools',
      'Business Plan Generator',
      'Priority Support',
      'Custom Brand Guidelines',
      'Social Media Kit'
    ]
  },
  enterprise: {
    id: 'price_enterprise',
    name: 'Enterprise',
    price: 199,
    features: [
      'Unlimited Logo Generation',
      'Enterprise SEO Suite',
      'Full Business Strategy',
      '24/7 Priority Support',
      'Custom Brand Guidelines',
      'Social Media Kit',
      'Marketing Analytics',
      'API Access'
    ]
  }
}; 