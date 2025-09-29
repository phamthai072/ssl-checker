# SSL Certificate Checker# SSL Certificate Checker

A simple web application to check SSL certificates of websites.A simple web application to check SSL certificates of websites.

![SSL Checker](https://img.shields.io/badge/Node.js-18+-green.svg)## Features

![Express](https://img.shields.io/badge/Express-4.18+-blue.svg)

![License](https://img.shields.io/badge/License-MIT-yellow.svg)- Check SSL certificate information for any domain

- User-friendly web interface

## ✨ Features- Simple GET request API endpoint

- 🔍 Check SSL certificate information for any domain## Installation

- 🌐 User-friendly web interface

- 🚀 Simple GET request API endpoint1. Clone the repository:

- 📊 Detailed certificate information including expiry dates```bash

- 🔧 Server and TLS configuration detailsgit clone https://github.com/phamthai072/ssl-checker.git

cd ssl-checker

## 🚀 Quick Start```

````bash2. Install dependencies:

# Clone the repository```bash

git clone https://github.com/phamthai072/ssl-checker.gitnpm install

cd ssl-checker```



# Install dependencies## Usage

npm install

1. Start the server:

# Start the server```bash

node index.jsnode index.js

````

Open your browser and go to `http://localhost:3000`2. Open your browser and go to `http://localhost:3000`

3. Enter a domain name to check its SSL certificate

## 📚 Documentation4. You can also use the API endpoint directly: `http://localhost:3000/check?host=example.com`

### Getting Started## Deploy to Vercel

- [📥 Installation Guide](./docs/installation.md) - Complete setup instructions

- [🎯 Usage Guide](./docs/usage.md) - How to use the web interface and APIYou can easily deploy this SSL checker to Vercel for free. Follow these steps:

### API Documentation### Prerequisites

- [📋 API Reference](./docs/api.md) - Complete API documentation with examples

- A [Vercel account](https://vercel.com/signup)

### Deployment Guides- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

- [🚀 Deploy to Vercel](./docs/deployment/vercel.md) - Deploy for free on Vercel

- [🚂 Deploy to Railway](./docs/deployment/railway.md) - Deploy for free on Railway### Method 1: Deploy via Vercel Dashboard (Recommended)

## 🔗 Quick Links1. **Push your code to GitHub** (if not already done):

````bash

| Resource | Description |   git add .

|----------|-------------|   git commit -m "Initial commit"

| [Live Demo](https://ssl-checker-demo.vercel.app) | Try the application online |   git push origin main

| [API Endpoint](https://ssl-checker-demo.vercel.app/check?host=google.com) | Example API call |   ```

| [Issues](https://github.com/phamthai072/ssl-checker/issues) | Report bugs or request features |

2. **Import your project to Vercel**:

## 🛠️ Tech Stack   - Go to [vercel.com](https://vercel.com)

- Click "New Project"

- **Backend**: Node.js, Express.js   - Import your repository from GitHub/GitLab/Bitbucket

- **Frontend**: HTML, CSS, JavaScript   - Select your `ssl-checker` repository

- **Deployment**: Vercel, Railway ready

- **Security**: TLS/SSL certificate validation3. **Configure deployment settings**:

- **Framework Preset**: Select "Other" or "Node.js"

## 📖 Example Usage   - **Root Directory**: Leave as default (`.`)

- **Build Command**: Leave empty (not needed for this project)

### Web Interface   - **Output Directory**: Leave empty

1. Navigate to `http://localhost:3000`   - **Install Command**: `npm install`

2. Enter a domain (e.g., `google.com`)

3. Click "Check SSL Certificate"4. **Add required configuration**:

4. View certificate details   - Create a `vercel.json` file in your project root (see configuration below)

- No environment variables are needed for this project

### API Call

```bash5. **Deploy**:

curl "http://localhost:3000/check?host=google.com"   - Click "Deploy"

```   - Wait for the deployment to complete

- Your app will be available at `https://your-project-name.vercel.app`

### Response

```json### Method 2: Deploy via Vercel CLI

{

"success": true,1. **Install Vercel CLI**:

"hostname": "google.com",   ```bash

"issuer": { "CN": "GTS CA 1C3" },   npm i -g vercel

"subject": { "CN": "*.google.com" },   ```

"valid_from": "Feb 13 08:26:44 2024 GMT",

"valid_to": "May  6 08:26:43 2024 GMT",2. **Login to Vercel**:

"days_remaining": 45   ```bash

}   vercel login

```   ```



## 🤝 Contributing3. **Deploy your project**:

```bash

1. Fork the repository   vercel

2. Create your feature branch (`git checkout -b feature/amazing-feature`)   ```

3. Commit your changes (`git commit -m 'Add some amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)4. **Follow the prompts**:

5. Open a Pull Request   - Set up and deploy? `Y`

- Which scope? (Select your account)

## 📄 License   - Link to existing project? `N`

- Project name: `ssl-checker` (or your preferred name)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.   - In which directory is your code located? `./`



## 👨‍💻 Author### Required Configuration File



**phamthainb**Create a `vercel.json` file in your project root with the following configuration:

- GitHub: [@phamthai072](https://github.com/phamthai072)

```json

## 🙏 Acknowledgments{

"version": 2,

- Thanks to the Node.js and Express.js communities  "builds": [

- SSL/TLS implementation powered by Node.js built-in modules    {

   "src": "index.js",

---      "use": "@vercel/node"

 }

⭐ **Star this repository if you find it helpful!**  ],
"routes": [
 {
   "src": "/(.*)",
   "dest": "/index.js"
 }
]
}
````

### Package.json Updates

Make sure your `package.json` includes a start script:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

### Environment Variables (if needed)

If you need to set environment variables:

1. **Via Vercel Dashboard**:

   - Go to your project dashboard
   - Navigate to "Settings" → "Environment Variables"
   - Add your variables

2. **Via Vercel CLI**:
   ```bash
   vercel env add
   ```

### Custom Domain (Optional)

To use a custom domain:

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

### Deployment Notes

- **Automatic Deployments**: Vercel automatically deploys when you push to your main branch
- **Preview Deployments**: Each pull request gets its own preview URL
- **Serverless Functions**: Your Express.js app runs as serverless functions on Vercel
- **Global CDN**: Your app is automatically distributed globally for better performance

### Troubleshooting

1. **Build Errors**: Check the build logs in your Vercel dashboard
2. **Function Timeout**: Vercel has a 10-second timeout for serverless functions
3. **File Size Limits**: Maximum of 50MB per deployment
4. **Cold Starts**: First request might be slower due to serverless nature

### Live Demo

After deployment, your SSL checker will be available at:

- Main app: `https://your-project-name.vercel.app`
- API endpoint: `https://your-project-name.vercel.app/check?host=example.com`

### Cost

Vercel's Hobby plan is free and includes:

- Unlimited personal projects
- Automatic HTTPS
- Global CDN
- 100GB bandwidth per month
- 10 serverless functions

## Deploy to Railway

Railway is another excellent platform for deploying Node.js applications. Here's how to deploy your SSL checker to Railway:

### Prerequisites

- A [Railway account](https://railway.app/login)
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

### Method 1: Deploy via Railway Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create a new project on Railway**:

   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `ssl-checker` repository

3. **Configure deployment settings**:

   - Railway will automatically detect your Node.js application
   - It will use `npm install` and `npm start` by default
   - Make sure your `package.json` has a proper start script

4. **Environment Variables**:

   - Railway will automatically set the `PORT` environment variable
   - No additional environment variables are needed for this project

5. **Deploy**:
   - Railway will automatically build and deploy your application
   - Your app will be available at a generated Railway URL (e.g., `https://your-app-name.up.railway.app`)

### Method 2: Deploy via Railway CLI

1. **Install Railway CLI**:

   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**:

   ```bash
   railway login
   ```

3. **Initialize Railway in your project**:

   ```bash
   railway init
   ```

4. **Deploy your project**:
   ```bash
   railway up
   ```

### Required Configuration

Make sure your `package.json` includes a start script:

```json
{
  "name": "ssl-checker",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

### Custom Domain (Optional)

To use a custom domain with Railway:

1. Go to your Railway project dashboard
2. Navigate to "Settings" → "Domains"
3. Click "Custom Domain"
4. Add your domain and configure DNS records as instructed

### Environment Variables (if needed)

To add environment variables:

1. **Via Railway Dashboard**:

   - Go to your project dashboard
   - Navigate to "Variables"
   - Add your environment variables

2. **Via Railway CLI**:
   ```bash
   railway variables set KEY=value
   ```

### Railway Features

- **Automatic Deployments**: Deploys automatically when you push to your connected branch
- **Built-in Database**: Easy to add PostgreSQL, MySQL, Redis, or MongoDB
- **Metrics & Logs**: Built-in monitoring and logging
- **Scalability**: Automatic scaling based on traffic
- **Global Infrastructure**: Deployed on Google Cloud Platform

### Deployment Notes

- **Build Process**: Railway automatically detects and builds Node.js applications
- **Port Configuration**: Railway automatically assigns and provides the PORT environment variable
- **Health Checks**: Railway monitors your application and restarts if needed
- **Zero Downtime**: Rolling deployments ensure no downtime during updates

### Troubleshooting

1. **Build Errors**: Check the deployment logs in your Railway dashboard
2. **Port Issues**: Ensure your app uses `process.env.PORT` for the port
3. **Start Script**: Make sure your `package.json` has a proper start script
4. **Dependencies**: Ensure all dependencies are listed in `package.json`

### Cost

Railway offers a generous free tier:

- $5 worth of usage credits per month
- Perfect for small to medium applications
- Pay-as-you-go pricing for additional usage
- No credit card required for the free tier

### Live Demo

After deployment, your SSL checker will be available at:

- Main app: `https://your-app-name.up.railway.app`
- API endpoint: `https://your-app-name.up.railway.app/check?host=example.com`

2. Open your web browser and navigate to `http://localhost:3000`

3. Enter a domain name (e.g., example.com) and click "Check SSL Certificate"

## API Usage

You can check SSL certificates programmatically using the API endpoint:

```
GET /check?host=example.com
```

## Tech Stack

- HTML/CSS for the frontend
- Node.js for the backend
- Express.js for the web server

## License

MIT License

## Author

phamthainb
