import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import stripeRoutes from './stripeRoutes.js';

dotenv.config();

const app = express();

// Configure CORS
app.use(cors());

// Special handling for Stripe webhook
app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));

// Regular middleware for other routes
app.use(express.json());

// Connect to MongoDB
let isConnected = false;
const connectToDb = async () => {
  if (!isConnected) {
    await connectDB(process.env.MONGODB_URL);
    isConnected = true;
  }
};

// Routes
app.use('/api/v1/post', async (req, res, next) => {
  await connectToDb();
  return postRoutes(req, res, next);
});

app.use('/api/v1/dalle', async (req, res, next) => {
  await connectToDb();
  return dalleRoutes(req, res, next);
});

app.use('/api/stripe', async (req, res, next) => {
  await connectToDb();
  return stripeRoutes(req, res, next);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ 
    error: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong!' 
      : err.message 
  });
});

// Export the Express API
export default app;
