const express = require("express");
const tls = require("tls");
const constants = require("constants");

const app = express();
const PORT = process.env.PORT || 3000;

const hostRegex =
  /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;

// Endpoint: /check?host=example.com
app.get("/check", async (req, res) => {
  let host = req.query.host;
  if (!host) {
    return res.status(400).json({ error: "Missing host param" });
  }

  // validate host
  if (!hostRegex.test(host)) {
    return res.status(400).json({ error: "Invalid host" });
  }
  // remove http/https
  host = host.replace(/https?:\/\//, "");
  // remove trailing slash
  host = host.replace(/\/.*/, "");

  let server_info = {
    tls: {
      CLIENT_RENEG_LIMIT: tls["CLIENT_RENEG_LIMIT"],
      CLIENT_RENEG_WINDOW: tls["CLIENT_RENEG_WINDOW"],
      DEFAULT_CIPHERS: tls["DEFAULT_CIPHERS"],
      DEFAULT_ECDH_CURVE: tls["DEFAULT_ECDH_CURVE"],
      DEFAULT_MIN_VERSION: tls["DEFAULT_MIN_VERSION"],
      DEFAULT_MAX_VERSION: tls["DEFAULT_MAX_VERSION"],
    },
  };

  try {
    const socket = tls.connect(
      443,
      host,
      {
        servername: host,
        secureOptions:
          constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION |
          constants.SSL_OP_LEGACY_SERVER_CONNECT,
        minDHSize: 1,
      },
      () => {
        const cert = socket.getPeerCertificate();
        socket.end();

        if (!cert || !cert.valid_to) {
          return res.status(500).json({ error: "Cannot get certificate info" });
        }

        const expiryDate = new Date(cert.valid_to);

        res.json({
          host,
          issuer: cert.issuer,
          subject: cert.subject,
          valid_from: cert.valid_from,
          valid_to: cert.valid_to,
          days_remaining: Math.round(
            (expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
          ),
          server_info,
        });
      }
    );

    socket.on("error", (err) => {
      res.status(500).json({ error: err.message, server_info });
    });
  } catch (err) {
    res.status(500).json({ error: err.message, server_info });
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`SSL check API running at http://localhost:${PORT}`);
});
