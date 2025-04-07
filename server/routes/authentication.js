const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;
const ADMIN_HASHED_PASSWORD = process.env.ADMIN_HASHED_PASSWORD;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;

if (!SECRET_KEY) {
  console.error("SECRET_KEY is not defined in .env file");
  process.exit(1);
}

if (!ADMIN_HASHED_PASSWORD || !ADMIN_USERNAME) {
  console.error("ADMIN credentials are not properly set in .env file");
  process.exit(1);
}

const adminUser = {
  username: ADMIN_USERNAME,
  passwordHash: ADMIN_HASHED_PASSWORD
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username !== adminUser.username) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const validPassword = await bcrypt.compare(password, adminUser.passwordHash);
  if (!validPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Access denied, token missing or invalid" });
  }

  const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};

// Protected Route Example
router.get("/admin/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

module.exports = router;
