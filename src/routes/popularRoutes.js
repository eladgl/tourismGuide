import express from "express";
import getPopular from "../api/reviews/getPopular.js";

const router = express.Router();

router.get("/", getPopular);

export default router;
