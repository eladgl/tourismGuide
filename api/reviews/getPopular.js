import { getTopReviews } from "../../src/config/firebaseConfig.js"; // Ensure the correct path to your firebaseConfig

/**
 * Handler function to process HTTP requests.
 *
 * This function handles fetching the top reviews from Firebase. It only allows GET requests
 * and responds with appropriate status codes and messages based on the success or failure of the operation.
 *
 * @param {Object} req - The request object, containing the HTTP request details.
 * @param {Object} res - The response object, used to send back the HTTP response.
 */
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
