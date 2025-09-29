# Usage Guide

## Starting the Application

1. Start the server:

```bash
node index.js
```

2. Open your browser and go to `http://localhost:3000`

3. Enter a domain name to check its SSL certificate

## Web Interface

- Navigate to `http://localhost:3000`
- Enter a domain name (e.g., `google.com`, `github.com`)
- Click "Check SSL Certificate"
- View the certificate information including:
  - Issuer details
  - Subject information
  - Validity dates
  - Days remaining until expiration

## API Usage

You can check SSL certificates programmatically using the API endpoint:

### Endpoint

```
GET /check?host=example.com
```

### Example Request

```bash
curl "http://localhost:3000/check?host=google.com"
```

### Example Response

```json
{
  "success": true,
  "hostname": "google.com",
  "issuer": {
    "C": "US",
    "O": "Google Trust Services LLC",
    "CN": "GTS CA 1C3"
  },
  "subject": {
    "CN": "*.google.com"
  },
  "valid_from": "Feb 13 08:26:44 2024 GMT",
  "valid_to": "May  6 08:26:43 2024 GMT",
  "days_remaining": 45,
  "server_info": {
    "tls": {
      "DEFAULT_CIPHERS": "...",
      "DEFAULT_MIN_VERSION": "TLSv1.2",
      "DEFAULT_MAX_VERSION": "TLSv1.3"
    },
    "node": {
      "version": "v18.17.0",
      "platform": "darwin",
      "arch": "x64",
      "openssl": "3.0.9+quic"
    }
  }
}
```

### Error Response

```json
{
  "error": "Invalid host",
  "success": false
}
```

## Supported Input Formats

The application accepts various input formats:

- `example.com`
- `https://example.com`
- `http://example.com`
- `www.example.com`

The application will automatically extract the hostname and connect on port 443.
