import express from "express";
import {
  getReviewsHandler,
  getPopularHandler,
} from "../../api/reviews/index.js";

const router = express.Router();

// Route for retrieving reviews
// GET request to /getReviews will trigger the getReviewsHandler function
router.get("/getReviews", getReviewsHandler);

// Route for retrieving popular reviews
// GET request to /getPopular will also trigger the getReviewsHandler function
router.get("/getPopular", getReviewsHandler);

export default router;
