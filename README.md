# LuminAI - AI-Powered Business Solutions Platform

![LuminAI Logo](client/src/assets/logo.svg)

LuminAI is a comprehensive AI-powered platform that provides intelligent business solutions, including logo generation, SEO research, task management, and creative ideation tools.

## 🌟 Features

### 1. AI Logo Generator
- Generate unique, professional logos instantly
- Multiple style variations
- Customizable colors and formats
- One-click download in various formats

### 2. SEO Research Tools
- Advanced keyword analysis
- Competitor research
- Content optimization suggestions
- Real-time ranking insights

### 3. Task Management CRM
- Intelligent task automation
- Team collaboration tools
- Progress tracking
- Automated assignments

### 4. Ideas Generator
- AI-powered brainstorming
- Marketing campaign suggestions
- Content strategy planning
- Creative concept development

## 🚀 Tech Stack

### Frontend
- React 18
- Vite
- Material-UI (MUI)
- Framer Motion
- React Router DOM
- Axios
- React-Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- OpenAI API
- Stripe Integration
- JWT Authentication

### AI Tools
- Cursor
- Claude 3.7
- Manus

### SCREENSHOTS (lumin.ai)
![Image](https://github.com/user-attachments/assets/3772db09-1039-4b66-8708-2dd86ae227fa)
![Image](https://github.com/user-attachments/assets/96da2c4d-925a-4295-a3ac-ce8193ccf3ca)
![Image](https://github.com/user-attachments/assets/3046e863-f949-43c7-8980-e88c0e3962af)
![Image](https://github.com/user-attachments/assets/1d41bdf9-c07c-462c-82c9-6638bd348cb5)
![Image](https://github.com/user-attachments/assets/5409dfe4-bc36-44fb-9afe-bda1edde0a5b)
![Image](https://github.com/user-attachments/assets/c28f5d68-ce99-4ab7-9294-477e7397cff9)
![Image](https://github.com/user-attachments/assets/c564839e-cee0-4d1a-81f2-b7d7172965cc)

## 💻 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- OpenAI API key
- Stripe account (for payments)

### Installation

1. Clone the repository
```bash
git clone https://github.com/tanzimine/LuminAI.git
cd LuminAI
```

2. Install dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables

Create a `.env` file in the server directory:
```env
MONGODB_URL=your_mongodb_url
OPENAI_API_KEY=your_openai_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NODE_ENV=development
PORT=5000
```

Create a `.env` file in the client directory:
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development servers

In the server directory:
```bash
npm start
```

In the client directory:
```bash
npm run dev
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Logo Generation
- `POST /api/v1/dalle` - Generate logo
- `GET /api/v1/post` - Get all generated logos
- `POST /api/v1/post` - Save generated logo

### SEO Research
- `POST /api/v1/seo-research` - Analyze keywords
- `GET /api/v1/seo-research/:id` - Get analysis results

### Task Management
- `GET /api/v1/tasks` - Get all tasks
- `POST /api/v1/tasks` - Create new task
- `PUT /api/v1/tasks/:id` - Update task
- `DELETE /api/v1/tasks/:id` - Delete task

## 🔒 Security

- JWT authentication
- Rate limiting
- CORS protection
- Input validation
- Secure password hashing
- Environment variable protection

## 🚀 Deployment

### Using Render

1. Create a new account on Render
2. Connect your GitHub repository
3. Create a new Web Service for the backend
4. Create a new Static Site for the frontend
5. Configure environment variables
6. Deploy!

Detailed deployment instructions are available in [DEPLOYMENT.md](DEPLOYMENT.md)

## 📱 Responsive Design

LuminAI is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Different screen sizes and orientations

## ⚡ Performance

- Lazy loading of components
- Image optimization
- Code splitting
- Caching strategies
- Minified production builds

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Tanzim Sami - Full Stack Developer & Project Lead

## 📞 Support

For support, email support@luminai.com or join our Slack channel.

## 🙏 Acknowledgments

- OpenAI for their powerful API
- Material-UI team for the amazing component library
- The open-source community for their invaluable contributions

## ⚡ Quick Deploy (One-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftanzimine%2FLuminAI)

1. Click the "Deploy with Vercel" button above
2. Create a free Vercel account if you don't have one
3. Connect your GitHub repository
4. Add these environment variables:
   ```
   MONGODB_URL=your_mongodb_url
   OPENAI_API_KEY=your_openai_api_key
   NODE_ENV=production
   ```
5. Click "Deploy"

That's it! Vercel will automatically:
- Deploy both frontend and backend as serverless functions
- Set up HTTPS and CDN
- Provide a production URL
- Enable automatic deployments
- Set up preview deployments for PRs

Your app will be live in about 2 minutes! 🚀

> **Need a MongoDB URL quickly?**
> 1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
> 2. Create a free account
> 3. Click "Build a Database" (Free tier)
> 4. Create a database user
> 5. Click "Connect" and copy your connection string

> **Need an OpenAI API key?**
> 1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
> 2. Create a free account
> 3. Click "Create new secret key"
> 4. Copy your API key

---

Made with ❤️ by LuminAI Team
