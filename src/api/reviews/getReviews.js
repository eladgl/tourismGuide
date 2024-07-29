import { getReviews } from "../../config/firebaseConfig.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const reviews = await getReviews();
      if (reviews) {
        res.status(200).json({ message: "Reviews returned", reviews });
      } else {
        throw new Error("Reviews fetching failed");
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to fetch reviews", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
