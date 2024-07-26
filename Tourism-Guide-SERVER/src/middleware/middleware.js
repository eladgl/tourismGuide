import cors from "cors";
import bodyParser from "body-parser";

const allowCors = (fn) => async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins, or specify allowed origins
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle pre-flight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Call the next middleware or handler
  return await fn(req, res);
};

export default function applyMiddleware(app) {
  app.use(express.json());
  app.use((req, res, next) => allowCors(next)(req, res));
  app.use(bodyParser.json());
}
