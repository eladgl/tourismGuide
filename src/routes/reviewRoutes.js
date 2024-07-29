import express from "express";
import { getReviewsHandler } from "../../api/reviews/index.js";

const router = express.Router();

router.get("/getReviews", getReviewsHandler);

export default router;
