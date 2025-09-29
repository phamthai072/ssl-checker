# API Documentation

## Overview

The SSL Checker API provides a simple REST endpoint to check SSL certificate information for any domain.

## Base URL

```
Local: http://localhost:3000
Production: https://your-domain.com
```

## Endpoints

### Check SSL Certificate

Retrieve SSL certificate information for a given host.

**Endpoint:** `GET /check`

**Parameters:**

- `host` (required): The domain to check (e.g., `example.com`)

**Example Request:**

```bash
curl "http://localhost:3000/check?host=google.com"
```

**Successful Response (200):**

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
      "CLIENT_RENEG_LIMIT": 3,
      "CLIENT_RENEG_WINDOW": 600,
      "DEFAULT_CIPHERS": "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256...",
      "DEFAULT_ECDH_CURVE": "auto",
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

**Error Responses:**

**400 Bad Request - Missing host parameter:**

```json
{
  "error": "Missing host param"
}
```

**400 Bad Request - Invalid host:**

```json
{
  "error": "Invalid host"
}
```

**500 Internal Server Error - Connection timeout:**

```json
{
  "error": "Connection timeout",
  "server_info": {
    "tls": {...},
    "node": {...}
  },
  "success": false
}
```

**500 Internal Server Error - Cannot get certificate:**

```json
{
  "error": "Cannot get certificate info",
  "server_info": {
    "tls": {...},
    "node": {...}
  }
}
```

## Response Fields

### Success Response Fields

| Field            | Type    | Description                              |
| ---------------- | ------- | ---------------------------------------- |
| `success`        | boolean | Indicates if the request was successful  |
| `hostname`       | string  | The resolved hostname                    |
| `issuer`         | object  | Certificate issuer information           |
| `subject`        | object  | Certificate subject information          |
| `valid_from`     | string  | Certificate valid from date              |
| `valid_to`       | string  | Certificate valid to date                |
| `days_remaining` | number  | Days until certificate expires           |
| `server_info`    | object  | Server and TLS configuration information |

### Server Info Fields

| Field                     | Type   | Description               |
| ------------------------- | ------ | ------------------------- |
| `tls.DEFAULT_CIPHERS`     | string | Default cipher suites     |
| `tls.DEFAULT_MIN_VERSION` | string | Minimum TLS version       |
| `tls.DEFAULT_MAX_VERSION` | string | Maximum TLS version       |
| `node.version`            | string | Node.js version           |
| `node.platform`           | string | Operating system platform |
| `node.arch`               | string | System architecture       |
| `node.openssl`            | string | OpenSSL version           |

## Input Formats

The API accepts various input formats for the `host` parameter:

- `example.com`
- `https://example.com`
- `http://example.com`
- `www.example.com`
- `subdomain.example.com`

The API will automatically extract the hostname and connect on port 443.

## Rate Limiting

Currently, there are no rate limits implemented. However, each request has a 10-second timeout.

## Error Handling

The API handles various error scenarios:

1. **Invalid URL format**: Returns 400 with "Invalid host" message
2. **Missing host parameter**: Returns 400 with "Missing host param" message
3. **Connection timeout**: Returns 500 with timeout message
4. **SSL handshake failure**: Returns 500 with error details
5. **Certificate parsing errors**: Returns 500 with certificate error message

## Security Considerations

- The API connects to external hosts, so ensure proper network security
- Input validation is performed on the host parameter
- Connections timeout after 10 seconds to prevent hanging requests
- The API supports legacy SSL options for compatibility with older servers

## Example Usage in Different Languages

### JavaScript (Node.js)

```javascript
const response = await fetch("http://localhost:3000/check?host=google.com");
const data = await response.json();
console.log(data);
```

### Python

```python
import requests

response = requests.get('http://localhost:3000/check?host=google.com')
data = response.json()
print(data)
```

### PHP

```php
$response = file_get_contents('http://localhost:3000/check?host=google.com');
$data = json_decode($response, true);
var_dump($data);
```

### cURL

```bash
curl -X GET "http://localhost:3000/check?host=google.com" \
     -H "Accept: application/json"
```
