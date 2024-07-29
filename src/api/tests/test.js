export default function handler(req, res) {
  if (req.method === "GET") {
    res.json({ message: "Connection successful!" });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
