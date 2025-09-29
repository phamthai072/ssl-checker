# SSL Certificate Checker

A simple web application to check SSL certificates of websites.

## Features

- Check SSL certificate information for any domain
- User-friendly web interface
- Simple GET request API endpoint

## Installation

1. Clone the repository:
```bash
git clone https://github.com/phamthai072/ssl-checker.git
cd ssl-checker
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node index.js
```

2. Open your browser and go to `http://localhost:3000`
3. Enter a domain name to check its SSL certificate
4. You can also use the API endpoint directly: `http://localhost:3000/check?host=example.com`

## Deploy to Vercel

You can easily deploy this SSL checker to Vercel for free. Follow these steps:

### Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import your project to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository from GitHub/GitLab/Bitbucket
   - Select your `ssl-checker` repository

3. **Configure deployment settings**:
   - **Framework Preset**: Select "Other" or "Node.js"
   - **Root Directory**: Leave as default (`.`)
   - **Build Command**: Leave empty (not needed for this project)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

4. **Add required configuration**:
   - Create a `vercel.json` file in your project root (see configuration below)
   - No environment variables are needed for this project

5. **Deploy**:
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your app will be available at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your project**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N`
   - Project name: `ssl-checker` (or your preferred name)
   - In which directory is your code located? `./`

### Required Configuration File

Create a `vercel.json` file in your project root with the following configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ]
}
```

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