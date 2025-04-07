// ping.js
const http = require("http");

function pingServer() {
  const url = "http://localhost:5000/ping"; // Replace with your actual deployed URL

  http.get(url, (res) => {
    console.log(`[PING] Status: ${res.statusCode}`);
  }).on("error", (err) => {
    console.error(`[PING ERROR] ${err.message}`);
  });
}

module.exports = pingServer;