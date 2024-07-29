import express from "express";
import { loginHandler, registerHandler } from "../api/auth/index.js";

const router = express.Router();

router.post("/login", loginHandler);
router.post("/register", registerHandler);

export default router;
