import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS with specific origins
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://lumin-ai.netlify.app', 'https://luminai.netlify.app', 'https://luminai-business.netlify.app']
    : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept']
}));

// Regular middleware for other routes
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
let isConnected = false;
const connectToDb = async () => {
  try {
    if (!isConnected) {
      await connectDB(process.env.MONGODB_URL);
      isConnected = true;
      console.log('MongoDB connected successfully');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Basic health check
app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  });
});

// Routes
app.use('/api/v1/post', async (req, res, next) => {
  try {
    await connectToDb();
    return postRoutes(req, res, next);
  } catch (error) {
    next(error);
  }
});

app.use('/api/v1/dalle', async (req, res, next) => {
  try {
    await connectToDb();
    return dalleRoutes(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ 
    error: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong!' 
      : err.message 
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the Express API
export default app;
