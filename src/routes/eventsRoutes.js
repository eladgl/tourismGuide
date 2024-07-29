import express from "express";
import { getEventsHandler, signUpToEvent } from "../../api/events/index.js";

const router = express.Router();

router.get("/getEvents", getEventsHandler);
router.post("/signUpToEvent", signUpToEvent);

export default router;
