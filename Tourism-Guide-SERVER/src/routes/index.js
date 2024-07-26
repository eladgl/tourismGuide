import express from "express";
import authRoutes from "./authRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import testRoutes from "./testRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/reviews", reviewRoutes);
router.use("/tests", testRoutes);

export default router;
