const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve dashboard files
app.use(express.static(path.join(__dirname, "public")));

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "online",
    service: "SIMON Telegram Proxy"
  });
});

// Proxy information
app.get("/api/proxy", (req, res) => {
  res.json({
    status: "online",
    server: process.env.PROXY_SERVER || "Not configured",
    port: process.env.PROXY_PORT || 443,
    connections: 0,
    traffic: "0 MB",
    uptime: "0h 0m"
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🛰️ SIMON TELEGRAM PROXY running on port ${PORT}`);
});
