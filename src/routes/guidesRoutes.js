import express from "express";
import { getGuidesHandler } from "../../api/guides/index.js";

const router = express.Router();

router.get("/getGuides", getGuidesHandler);

export default router;
