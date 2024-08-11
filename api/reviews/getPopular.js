import { getTopReviews } from "../../src/config/firebaseConfig.js"; // Ensure the correct path to your firebaseConfig

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const reviews = await getTopReviews();
      if (reviews) {
        res.status(200).json({ message: "Top reviews returned", reviews });
      } else {
        throw new Error("Fetching top reviews failed");
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to fetch top reviews", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
