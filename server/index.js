require("dotenv").config();
const express = require("express");
const cors = require("cors");
const testimonialRoutes = require("./routes/testimonialRoutes.js");
const messageRoutes = require("./routes/messageRoutes.js");
const authRoutes = require("./routes/authentication.js");
const errorHandler = require("./middleware/errorMiddleware.js");
const pingServer = require("./ping/ping.js");

const app = express();
app.use(express.json());
app.use(cors());

const db = require('./config/db.js');

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
  console.log("Keeping the setver active")
});

app.use("/testimonials", testimonialRoutes);
app.use("/messages", messageRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


setInterval(pingServer, 10 * 60 * 1000);