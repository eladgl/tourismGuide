import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import jwt from "jsonwebtoken";
import crypto from "crypto"; // For generating random tokens

import config from "./access/configs/config.js";

import {
  registerUser,
  loginUser,
  changePassword,
  getUserDataById,
  storeCheck,
  storeResetToken,
  getUserByEmail,
  getUserByResetToken,
  resetPassword,
  clearResetToken,
  getReviews,
} from "./config/firebaseConfig.js";

const port = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
const jwtSecret = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/test", (req, res) => {
  // Send a response when this route is accessed
  res.json({ message: "Connection successful!" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(req);
  console.log({ email, password });
  try {
    const user = await loginUser({ email, password });
    console.log("user ", user);
    if (user && user.id) {
      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });
      res
        .status(200)
        .json({ message: "User logged in successfully", token, user: user });
    } else {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    res.status(401).json({ message: "Login failed", error: error.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const user = await registerUser(req.body);
    if (user && user.id) {
      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });
      res
        .status(201)
        .json({ message: "User registered successfully", token, user: user });
    } else {
      throw new Error("User registration failed");
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to register user", error: error.message });
  }
});

app.get("/getReviews", async (req, res) => {
  try {
    const reviews = await getReviews();
    if (reviews) {
      res.status(201).json({ message: "reviews returned", reviews });
    } else {
      throw new Error("Reviews fetching failed");
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch reviews", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${config.URL}:${port}`);
});
