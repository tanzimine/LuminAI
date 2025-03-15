// API Configuration
const API_URL = 'https://luminai-backend.onrender.com';
export const API_BASE_URL = API_URL;

export const API_ROUTES = {
  dalle: `${API_URL}/api/v1/dalle`,
  posts: `${API_URL}/api/v1/post`,
  stripe: '/api/stripe',
  health: `${API_URL}/api/health`
};

// Export configuration
export const config = {
  apiUrl: API_URL,
  apiEndpoints: API_ROUTES
}; 