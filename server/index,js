// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const testimonialRoutes = require("./routes/testimonialRoutes");
// const messageRoutes = require("./routes/messageRoutes");
// const authRoutes = require("./routes/authentication");
// const errorHandler = require("./middleware/errorMiddleware");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const db = require('./config/db.js');


// app.use("/testimonials", testimonialRoutes);
// app.use("/messages", messageRoutes);
// app.use("/auth", authRoutes);

// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











require("dotenv").config();
const express = require("express");
const cors = require("cors");
const testimonialRoutes = require("./routes/testimonialRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authentication");
const errorHandler = require("./middleware/errorMiddleware");
const pingServer = require("./ping/ping");

const app = express();
app.use(express.json());
app.use(cors());

const db = require('./config/db.js');

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.use("/testimonials", testimonialRoutes);
app.use("/messages", messageRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Ping every 10 minutes no matter what
setInterval(pingServer, 10 * 60 * 1000);