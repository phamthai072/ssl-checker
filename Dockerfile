# Use Node.js LTS (Long Term Support) version
# Using a specific version for reproducible builds
FROM node:18.20.5-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy application files
COPY index.js index.html ./

# Expose the port (can be overridden with docker run -p)
EXPOSE 3000

# Set default PORT environment variable (can be overridden)
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 3000), (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["node", "index.js"]
