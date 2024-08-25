import express from "express";
import getPopular from "../../api/reviews/getPopular.js";

const router = express.Router();

// Route for retrieving popular items
// GET request to / will trigger the getPopular function
router.get("/", getPopular);

export default router;
