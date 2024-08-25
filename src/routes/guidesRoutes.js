import express from "express";
import { getGuidesHandler } from "../../api/guides/index.js";

const router = express.Router();

// Route for retrieving guides
// GET request to /getGuides will trigger the getGuidesHandler function
router.get("/getGuides", getGuidesHandler);

export default router;
