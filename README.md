# LuminAI - AI-Powered Business Solutions Platform

![LuminAI Banner](screenshots/banner.png)

## 🎥 Live Demo

Watch a complete walkthrough of LuminAI's features:

[▶️ Watch Demo Video](your-youtube-link-here)

## ✨ Key Features

### 1. AI Logo Generator
Generate unique, professional logos for your business using AI.
![Logo Generator](screenshots/logo-generator.png)

### 2. SEO Research Tools
Optimize your content with AI-powered SEO insights.
![SEO Tools](screenshots/seo-tools.png)

### 3. Task Management CRM
Streamline your workflow with our intuitive task management system.
![Task Management](screenshots/task-management.png)

### 4. Ideas Generator
Get AI-powered creative suggestions for your business.
![Ideas Generator](screenshots/ideas-generator.png)

## 🛠️ Tech Stack

### Frontend
- React 18 with Vite
- Material-UI for modern UI components
- Redux Toolkit for state management
- React Router for navigation
- Axios for API communication

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- RESTful API architecture
- JWT authentication
- Integration with Pexels API
- Cloudinary for image management

## 🚀 Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB account
- Pexels API key
- Cloudinary account

### Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/tanzimine/LuminAI.git
cd LuminAI
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables

Create a `.env` file in the server directory:
```env
MONGODB_URL=your_mongodb_url
PEXELS_API_KEY=your_pexels_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

Create a `.env` file in the client directory:
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development servers

Backend:
```bash
cd server
npm start
```

Frontend:
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 📱 Responsive Design

LuminAI is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

![Responsive Design](screenshots/responsive.png)

## ⚡ Performance

- Lazy loading for optimal performance
- Image optimization
- Efficient caching strategies
- Fast API response times

## 🔒 Security Features

- JWT authentication
- Input validation
- Secure password hashing
- Protected API endpoints
- Environment variable protection

## 👥 Contributing

Interested in contributing? Please read our [Contributing Guidelines](CONTRIBUTING.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Developer

**Tanzim Sami**  
Full Stack Developer & Project Lead
- GitHub: [@tanzimine](https://github.com/tanzimine)
- LinkedIn: [Tanzim Sami](your-linkedin-url)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the beautiful components
- [Pexels](https://www.pexels.com/) for the image generation API
- [Cloudinary](https://cloudinary.com/) for image management
- The open-source community for inspiration and resources

---

<p align="center">Made with ❤️ by Tanzim Sami</p>
