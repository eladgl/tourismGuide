import { getEvents } from "../../src/config/firebaseConfig.js";

/**
 * Handler function to process HTTP requests.
 *
 * This function handles fetching events from Firebase. It only allows GET requests
 * and responds with appropriate status codes and messages.
 *
 * @param {Object} req - The request object, containing the HTTP request details.
 * @param {Object} res - The response object, used to send back the HTTP response.
 */
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const events = await getEvents();
      if (events) {
        res.status(200).json({ message: "events returned", events });
      } else {
        throw new Error("events fetching failed");
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to fetch events", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
