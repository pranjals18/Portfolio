
const https = require("https");

function pingServer() {
  const url = "https://portfolio-o8ve.onrender.com/ping";

  https.get(url, (res) => {
    console.log(`[PING] Status: ${res.statusCode}`);
  }).on("error", (err) => {
    console.error(`[PING ERROR] ${err.message}`);
  });
}

module.exports = pingServer;