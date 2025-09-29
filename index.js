const express = require("express");
const tls = require("tls");
const constants = require("constants");

const app = express();
const PORT = process.env.PORT || 3000;

function getHostname(input) {
  try {
    let url = input;
    if (!/^https?:\/\//i.test(input)) {
      url = "https://" + input;
    }

    const parsed = new URL(url);
    return parsed.hostname;
  } catch (e) {
    return null;
  }
}

// Endpoint: /check?host=example.com
app.get("/check", async (req, res) => {
  const host = req.query.host;
  if (!host) {
    return res
      .status(400)
      .json({ error: "Missing host param", success: false });
  }

  // validate host
  const hostname = getHostname(host);
  if (!hostname) {
    return res.status(400).json({ error: "Invalid host", success: false });
  }

  let server_info = {
    tls: {
      CLIENT_RENEG_LIMIT: tls["CLIENT_RENEG_LIMIT"],
      CLIENT_RENEG_WINDOW: tls["CLIENT_RENEG_WINDOW"],
      DEFAULT_CIPHERS: tls["DEFAULT_CIPHERS"],
      DEFAULT_ECDH_CURVE: tls["DEFAULT_ECDH_CURVE"],
      DEFAULT_MIN_VERSION: tls["DEFAULT_MIN_VERSION"],
      DEFAULT_MAX_VERSION: tls["DEFAULT_MAX_VERSION"],
    },
    node: {
      version: process.version,
      platform: process.platform,
      arch: process.arch,
      openssl: process.versions.openssl,
    },
  };

  try {
    let responsesSent = false;

    const socket = tls.connect(
      443,
      hostname,
      {
        servername: hostname,
        secureOptions:
          constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION |
          constants.SSL_OP_LEGACY_SERVER_CONNECT,
        minDHSize: 1,
        timeout: 10000, // 10 giây timeout
      },
      () => {
        if (responsesSent) return;

        const cert = socket.getPeerCertificate();
        socket.destroy(); // Cleanup socket

        if (!cert || !cert.valid_to) {
          responsesSent = true;
          return res
            .status(500)
            .json({ error: "Cannot get certificate info", server_info });
        }

        const expiryDate = new Date(cert.valid_to);
        responsesSent = true;

        res.json({
          success: true,
          hostname,
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

    socket.on("timeout", () => {
      if (responsesSent) return;
      responsesSent = true;
      socket.destroy();
      res
        .status(500)
        .json({ error: "Connection timeout", server_info, success: false });
    });

    socket.on("error", (err) => {
      if (responsesSent) return;
      responsesSent = true;
      socket.destroy();
      res.status(500).json({ error: err.message, server_info, success: false });
    });
  } catch (err) {
    res.status(500).json({ error: err.message, server_info, success: false });
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`SSL check API running at http://localhost:${PORT}`);
});
