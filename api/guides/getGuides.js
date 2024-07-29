import { getGuides } from "../../src/config/firebaseConfig.js";

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
