import express from "express";
import { loginHandler, registerHandler } from "../../api/auth/index.js";

const router = express.Router();

// Route for handling user login
// POST request to /login will trigger the loginHandler function
router.post("/login", loginHandler);

// Route for handling user registration
// POST request to /register will trigger the registerHandler function
router.post("/register", registerHandler);

export default router;
