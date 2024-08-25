import { getGuides } from "../../src/config/firebaseConfig.js";

/**
 * Handler function to process HTTP requests.
 *
 * This function handles fetching guides from Firebase. It only allows GET requests
 * and responds with appropriate status codes and messages based on the success or failure of the operation.
 *
 * @param {Object} req - The request object, containing the HTTP request details.
 * @param {Object} res - The response object, used to send back the HTTP response.
 */
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const guides = await getGuides();
      if (guides) {
        res.status(200).json({ message: "guides returned", guides });
      } else {
        throw new Error("guides fetching failed");
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to fetch guides", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
