// import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,

// })

// const openai = new OpenAIApi(configuration);

// router.route('/').get((req, res) => {
//     res.send('Hello from DALL-E!');
// });

// router.route('/').post(async (req, res) => {
//     try {
//         const { prompt } = req.body;

//         const aiResponse = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json',
//         });

//         const image = aiResponse.data.data[0].b64_json;
//         res.status(200).json({ photo: image });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//     }
// })

// export default router;

import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const PEXELS_API_URL = "https://api.pexels.com/v1/search";

// Validate Pexels API key
if (!process.env.PEXELS_API_KEY) {
  console.error('❌ PEXELS_API_KEY is not set in environment variables');
  throw new Error('PEXELS_API_KEY is required');
}

router.get('/', (req, res) => {
  res.json({ message: 'Image Generation API is running' });
});

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      return res.status(400).json({ error: 'Prompt is required and must be a valid string.' });
    }

    console.log('🔍 Searching for images on Pexels:', prompt);

    const response = await axios.get(
      `${PEXELS_API_URL}?query=${encodeURIComponent(prompt.trim())}&per_page=1`,
      {
        headers: { 
          'Authorization': process.env.PEXELS_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.data || !response.data.photos || response.data.photos.length === 0) {
      return res.status(404).json({ error: 'No images found for this prompt.' });
    }

    const imageUrl = response.data.photos[0].src.original;
    console.log('✅ Image URL:', imageUrl);
    
    res.status(200).json({ 
      photo: imageUrl,
      alt: response.data.photos[0].alt || prompt,
      photographer: response.data.photos[0].photographer
    });

  } catch (error) {
    console.error('❌ Pexels API Error:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch image', 
      details: error.message 
    });
  }
});

export default router;
