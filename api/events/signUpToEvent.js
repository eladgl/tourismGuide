import { signUpToEvent } from "../../src/config/firebaseConfig.js";

/**
 * Handler function to process HTTP requests.
 *
 * This function handles the sign-up process for an event. It only allows POST requests
 * and requires both email and eventId in the request body.
 *
 * @param {Object} req - The request object, containing the HTTP request details.
 * @param {Object} res - The response object, used to send back the HTTP response.
 */
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, eventId } = req.body;

    if (!email || !eventId) {
      return res
        .status(400)
        .json({ message: "Email and event ID are required" });
    }

    try {
      // Call the sign-up function and ensure it returns an object
      const result = await signUpToEvent(email, eventId);

      if (result && result.success) {
        // If successful, send a success response
        res.status(200).json({ message: result.message });
      } else {
        // If unsuccessful, send a failure response
        res
          .status(400)
          .json({ message: "Sign up failed", error: result.message });
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error signing up:", error);
      res
        .status(500)
        .json({ message: "Failed to sign up", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
