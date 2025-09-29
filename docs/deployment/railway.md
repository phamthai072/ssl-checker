# Deploy to Railway

Railway is another excellent platform for deploying Node.js applications. Here's how to deploy your SSL checker to Railway:

## Prerequisites

- A [Railway account](https://railway.app/login)
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Deploy via Railway Dashboard (Recommended)

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

## Method 2: Deploy via Railway CLI

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

## Required Configuration

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

## Custom Domain (Optional)

To use a custom domain with Railway:

1. Go to your Railway project dashboard
2. Navigate to "Settings" → "Domains"
3. Click "Custom Domain"
4. Add your domain and configure DNS records as instructed

## Environment Variables (if needed)

To add environment variables:

1. **Via Railway Dashboard**:

   - Go to your project dashboard
   - Navigate to "Variables"
   - Add your environment variables

2. **Via Railway CLI**:
   ```bash
   railway variables set KEY=value
   ```

## Railway Features

- **Automatic Deployments**: Deploys automatically when you push to your connected branch
- **Built-in Database**: Easy to add PostgreSQL, MySQL, Redis, or MongoDB
- **Metrics & Logs**: Built-in monitoring and logging
- **Scalability**: Automatic scaling based on traffic
- **Global Infrastructure**: Deployed on Google Cloud Platform

## Deployment Notes

- **Build Process**: Railway automatically detects and builds Node.js applications
- **Port Configuration**: Railway automatically assigns and provides the PORT environment variable
- **Health Checks**: Railway monitors your application and restarts if needed
- **Zero Downtime**: Rolling deployments ensure no downtime during updates

## Troubleshooting

1. **Build Errors**: Check the deployment logs in your Railway dashboard
2. **Port Issues**: Ensure your app uses `process.env.PORT` for the port
3. **Start Script**: Make sure your `package.json` has a proper start script
4. **Dependencies**: Ensure all dependencies are listed in `package.json`

## Cost

Railway offers a generous free tier:

- $5 worth of usage credits per month
- Perfect for small to medium applications
- Pay-as-you-go pricing for additional usage
- No credit card required for the free tier

## Live Demo

After deployment, your SSL checker will be available at:

- Main app: `https://your-app-name.up.railway.app`
- API endpoint: `https://your-app-name.up.railway.app/check?host=example.com`
