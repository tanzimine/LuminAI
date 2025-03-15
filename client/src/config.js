export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export const API_BASE_URL = API_URL;

export const API_ROUTES = {
  dalle: '/api/v1/dalle',
  posts: '/api/v1/post',
  stripe: '/api/stripe',
  health: '/api/health'
};

// Other configuration variables can be added here
export const config = {
  apiUrl: API_URL,
  apiEndpoints: API_ROUTES
}; 