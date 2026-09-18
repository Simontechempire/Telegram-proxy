const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>SIMON Telegram Proxy</title>
      </head>
      <body>
        <h1>🛰️ SIMON TELEGRAM PROXY</h1>
        <p>🟢 Dashboard Online</p>
        <p>MTProto Proxy Dashboard</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    service: "SIMON Telegram Proxy"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🛰️ SIMON TELEGRAM PROXY running on port ${PORT}`);
});
