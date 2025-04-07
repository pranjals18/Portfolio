
const http = require("http");

function pingServer() {
  const url = "https://portfolio-o8ve.onrender.com/ping";

  http.get(url, (res) => {
    console.log(`[PING] Status: ${res.statusCode}`);
  }).on("error", (err) => {
    console.error(`[PING ERROR] ${err.message}`);
  });
}

module.exports = pingServer;