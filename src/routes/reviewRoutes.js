import express from "express";
import {
  getReviewsHandler,
  getPopularHandler,
} from "../../api/reviews/index.js";

const router = express.Router();

router.get("/getReviews", getReviewsHandler);
router.get("/getPopular", getReviewsHandler);

export default router;
