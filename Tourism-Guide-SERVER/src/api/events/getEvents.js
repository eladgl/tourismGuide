import { getEvents } from "../../config/firebaseConfig.js";

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
