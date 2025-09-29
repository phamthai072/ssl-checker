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