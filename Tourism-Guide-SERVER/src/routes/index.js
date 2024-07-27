import express from "express";
import authRoutes from "./authRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import testRoutes from "./testRoutes.js";
import eventsRoutes from "./eventsRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/reviews", reviewRoutes);
router.use("/tests", testRoutes);
router.use("/events", eventsRoutes);

export default router;
