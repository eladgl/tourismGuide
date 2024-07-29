import express from "express";
import { getGuidesHandler } from "../../api/guides/index.js";

const router = express.Router();

router.get("/getguides", getGuidesHandler);

export default router;
