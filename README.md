# SSL Certificate Checker

A simple and efficient web application to check SSL certificates of websites with both web interface and API endpoint.

![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express](https://img.shields.io/badge/Express-5.1+-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- 🔍 Check SSL certificate information for any domain
- 🌐 User-friendly web interface
- 🚀 Simple REST API endpoint
- 📊 Detailed certificate information including expiry dates
- 🔧 Server and TLS configuration details
- ⚡ Fast and lightweight
- 🐳 Docker support with custom configuration
- 🌍 Ready for deployment on Vercel, Railway, Docker, and other platforms

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/phamthai072/ssl-checker.git
cd ssl-checker

# Install dependencies
npm install

# Start the server
npm start
```

Open your browser and go to `http://localhost:3000`

## 📚 Documentation

### Getting Started

- [📥 Installation Guide](./docs/installation.md) - Complete setup instructions
- [🎯 Usage Guide](./docs/usage.md) - How to use the web interface and API

### API Documentation

- [📋 API Reference](./docs/api.md) - Complete API documentation with examples

### Deployment Guides

- [🚀 Deploy to Vercel](./docs/deployment/vercel.md) - Deploy for free on Vercel
- [🚂 Deploy to Railway](./docs/deployment/railway.md) - Deploy for free on Railway

## 🔗 Quick Links

| Resource                                                                  | Description                     |
| ------------------------------------------------------------------------- | ------------------------------- |
| [Live Demo](https://ssl-checker-demo.vercel.app)                          | Try the application online      |
| [API Endpoint](https://ssl-checker-demo.vercel.app/check?host=google.com) | Example API call                |
| [Issues](https://github.com/phamthai072/ssl-checker/issues)               | Report bugs or request features |

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Docker, Vercel, Railway ready
- **Security**: TLS/SSL certificate validation

## 📖 Example Usage

### Web Interface

1. Navigate to `http://localhost:3000`
2. Enter a domain (e.g., `google.com`)
3. Click "Check SSL Certificate"
4. View detailed certificate information

### API Call

```bash
curl "http://localhost:3000/check?host=google.com"
```

### Response Example

```json
{
  "success": true,
  "hostname": "google.com",
  "issuer": { "CN": "GTS CA 1C3" },
  "subject": { "CN": "*.google.com" },
  "valid_from": "Feb 13 08:26:44 2024 GMT",
  "valid_to": "May  6 08:26:43 2024 GMT",
  "days_remaining": 45
}
```

## 🚀 Deployment

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/phamthai072/ssl-checker)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/ssl-checker)

### Docker Deployment

```bash
# Using Docker Compose
docker-compose up -d

# Using Docker directly
docker build -t ssl-checker .
docker run -p 3000:3000 ssl-checker
```

See the [Docker Deployment Guide](./docs/deployment/docker.md) for detailed instructions and custom configuration.

### Manual Deployment

See our deployment guides for detailed instructions:

- [🐳 Deploy with Docker](./docs/deployment/docker.md) - Deploy using Docker with custom configuration
- [Deploy to Vercel](./docs/deployment/vercel.md)
- [Deploy to Railway](./docs/deployment/railway.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- GitHub: [@phamthainb](https://github.com/phamthainb)

## 🙏 Acknowledgments

- Thanks to the Node.js and Express.js communities
- SSL/TLS implementation powered by Node.js built-in modules

---

⭐ **Star this repository if you find it helpful!**
