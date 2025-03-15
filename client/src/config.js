export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Other configuration variables can be added here
export const config = {
  apiUrl: API_URL,
  apiEndpoints: {
    dalle: '/api/v1/dalle',
    posts: '/api/v1/post',
    stripe: '/api/stripe',
    health: '/api/health'
  }
}; 