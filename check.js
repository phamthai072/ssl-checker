
import tls from "tls";

export default function handler(req, res) {
  const { host } = req.query;
  if (!host) {
    return res.status(400).json({ error: "Missing ?host=" });
  }

  const socket = tls.connect(443, host, { servername: host }, () => {
    const cert = socket.getPeerCertificate();
    socket.end();

    if (!cert || !cert.valid_to) {
      return res.status(500).json({ error: "No certificate info" });
    }

    const validTo = new Date(cert.valid_to);
    const validFrom = new Date(cert.valid_from);
    const daysRemaining = Math.floor(
      (validTo.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    );

    res.status(200).json({
      host,
      validFrom,
      validTo,
      daysRemaining
    });
  });

  socket.on("error", (err) => {
    res.status(500).json({ error: err.message });
  });
}
