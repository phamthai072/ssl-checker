# 🐳 Docker Deployment Guide

This guide explains how to deploy the SSL Checker application using Docker and Docker Compose with custom configuration arguments.

## Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose installed (included with Docker Desktop)

## Quick Start

### Using Docker

```bash
# Build the Docker image
docker build -t ssl-checker .

# Run the container with default settings
docker run -p 3000:3000 ssl-checker

# Run with custom port
docker run -p 8080:8080 -e PORT=8080 ssl-checker
```

### Using Docker Compose

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

## Custom Configuration

### Environment Variables

Create a `.env` file in the project root (you can copy from `.env.example`):

```bash
cp .env.example .env
```

Edit the `.env` file with your custom configuration:

```env
# Port configuration
PORT=3000
HOST_PORT=3000

# Node environment
NODE_ENV=production

# Node version for Docker build
NODE_VERSION=18
```

### Available Configuration Options

| Variable       | Description                          | Default      |
| -------------- | ------------------------------------ | ------------ |
| `PORT`         | Container internal port              | `3000`       |
| `HOST_PORT`    | Host machine port to map to          | `3000`       |
| `NODE_ENV`     | Node.js environment mode             | `production` |
| `NODE_VERSION` | Node.js version for Docker build     | `18`         |

### Custom Port Example

To run on a different port (e.g., port 8080):

```bash
# Option 1: Using environment variables inline
PORT=8080 HOST_PORT=8080 docker-compose up -d

# Option 2: Using .env file
echo "PORT=8080" > .env
echo "HOST_PORT=8080" >> .env
docker-compose up -d
```

## Docker Commands

### Build and Run

```bash
# Build the image
docker build -t ssl-checker .

# Run the container
docker run -d -p 3000:3000 --name ssl-checker ssl-checker

# Run with custom configuration
docker run -d \
  -p 8080:8080 \
  -e PORT=8080 \
  -e NODE_ENV=production \
  --name ssl-checker \
  ssl-checker
```

### Container Management

```bash
# View running containers
docker ps

# Stop the container
docker stop ssl-checker

# Start the container
docker start ssl-checker

# Remove the container
docker rm ssl-checker

# View logs
docker logs ssl-checker
docker logs -f ssl-checker  # Follow logs
```

### Image Management

```bash
# List images
docker images

# Remove the image
docker rmi ssl-checker

# Rebuild without cache
docker build --no-cache -t ssl-checker .
```

## Docker Compose Commands

### Basic Operations

```bash
# Start services (detached mode)
docker-compose up -d

# Start services (with logs)
docker-compose up

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View logs
docker-compose logs
docker-compose logs -f  # Follow logs
```

### Rebuild and Update

```bash
# Rebuild and restart
docker-compose up -d --build

# Pull latest changes and restart
git pull
docker-compose up -d --build
```

## Health Check

The application includes a health check that runs every 30 seconds:

```bash
# Check container health status
docker ps

# View health check logs
docker inspect --format='{{json .State.Health}}' ssl-checker
```

## Production Deployment

### Best Practices

1. **Use specific Node.js version**: Pin the Node version in your Dockerfile
2. **Set appropriate restart policy**: Use `restart: unless-stopped` in docker-compose.yml
3. **Configure logging**: Use Docker logging drivers for centralized logs
4. **Use secrets**: Store sensitive data in Docker secrets or environment files
5. **Enable health checks**: Monitor application health automatically

### Production Example

```yaml
# docker-compose.prod.yml
services:
  ssl-checker:
    build: .
    image: ssl-checker:latest
    container_name: ssl-checker-prod
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - NODE_ENV=production
    restart: always
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

Run with production config:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Troubleshooting

### Port Already in Use

```bash
# Check what's using the port
lsof -i :3000

# Use a different port
HOST_PORT=8080 docker-compose up -d
```

### Container Won't Start

```bash
# Check logs
docker-compose logs ssl-checker

# Check container status
docker ps -a
```

### Permission Issues

```bash
# On Linux, you may need to run with sudo
sudo docker-compose up -d

# Or add your user to the docker group
sudo usermod -aG docker $USER
```

## Testing the Deployment

After starting the container:

```bash
# Test the health endpoint
curl http://localhost:3000

# Test the API
curl "http://localhost:3000/check?host=google.com"
```

## Advanced Configuration

### Using Custom Network

```yaml
services:
  ssl-checker:
    build: .
    networks:
      - ssl-checker-network
    ports:
      - "3000:3000"

networks:
  ssl-checker-network:
    driver: bridge
```

### Volume Mounting for Development

```yaml
services:
  ssl-checker:
    build: .
    volumes:
      - ./:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    command: npm run dev
```

## Next Steps

- Configure reverse proxy (Nginx/Traefik)
- Set up SSL/TLS certificates
- Implement monitoring and alerting
- Configure backup strategies

## Support

For issues or questions:
- [GitHub Issues](https://github.com/phamthai072/ssl-checker/issues)
- Check the [main README](../../README.md) for general information
