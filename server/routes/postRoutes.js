import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET ALL POSTS
router.route('/').get(async(req, res) => {
    try {
        const posts = await Post.find({});
        
        // Verify each post has a valid photo URL
        const validatedPosts = posts.map(post => ({
            ...post._doc,
            photo: post.photo || 'https://via.placeholder.com/400x400?text=Image+Not+Found'
        }));
        
        res.status(200).json({ success: true, data: validatedPosts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// CREATE A POST
router.route('/').post(async(req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        
        if (!name || !prompt || !photo) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields: name, prompt, or photo' 
            });
        }

        console.log('Uploading image to Cloudinary...');
        const photoUrl = await cloudinary.uploader.upload(photo, {
            folder: 'ai-image-gen',
            transformation: [
                { width: 1024, height: 1024, crop: 'limit' },
                { quality: 'auto' }
            ]
        });

        console.log('Creating new post...');
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.secure_url, // Use secure_url for HTTPS
        });

        console.log('Post created successfully');
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message || 'Error creating post'
        });
    }
});

export default router;