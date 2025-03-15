import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import stripeRoutes from './stripeRoutes.js';

dotenv.config();

const app = express();

// Configure CORS for production
const allowedOrigins = [
  process.env.CLIENT_URL,
  'https://lumin-ai-frontend.onrender.com',
  'http://localhost:5173'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Special handling for Stripe webhook
app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));

// Regular middleware for other routes
app.use(express.json());

console.log('✅ Loaded API Key:', process.env.OPENAI_API_KEY ? 'Exists' : 'Not Found');

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/stripe', stripeRoutes);

app.get('/', async (req, res) => {
    res.send('LuminAI API is running!');
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`✅ Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
            console.log('✅ MongoDB Connected');
        });
    } catch (error) {
        console.error('❌ Error starting server:', error);
    }
};

startServer();

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: process.env.NODE_ENV === 'production' 
            ? 'Something went wrong!' 
            : err.message 
    });
});
