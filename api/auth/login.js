import { loginUser } from "../../src/config/firebaseConfig.js";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      const user = await loginUser({ email, password });
      if (user && user.id) {
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });
        res
          .status(200)
          .json({ message: "User logged in successfully", token, user: user });
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      res.status(401).json({ message: "Login failed", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
