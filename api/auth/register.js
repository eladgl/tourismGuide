import { registerUser } from "../../src/config/firebaseConfig.js";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const user = await registerUser(req.body);
      if (user && user.id) {
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });
        res
          .status(201)
          .json({ message: "User registered successfully", token, user: user });
      } else {
        throw new Error("User registration failed");
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to register user", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
