import express from "express";
import authRoutes from "./authRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import eventsRoutes from "./eventsRoutes.js";
import guidesRoutes from "./guidesRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/reviews", reviewRoutes);
router.use("/events", eventsRoutes);
router.use("/guides", guidesRoutes);

export default router;
