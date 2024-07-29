import express from "express";
import { testHandler } from "../../api/tests/index.js";

const router = express.Router();

router.get("/test", testHandler);

export default router;
