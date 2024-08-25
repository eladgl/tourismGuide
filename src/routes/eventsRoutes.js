import express from "express";
import { getEventsHandler, signUpToEvent } from "../../api/events/index.js";

const router = express.Router();

// Route for retrieving events
// GET request to /getEvents will trigger the getEventsHandler function
router.get("/getEvents", getEventsHandler);

// Route for signing up to an event
// POST request to /signUpToEvent will trigger the signUpToEvent function
router.post("/signUpToEvent", signUpToEvent);

export default router;
