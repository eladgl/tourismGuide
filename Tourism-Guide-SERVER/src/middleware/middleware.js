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
    "X-Requested-With,Content-Type,Authorization"
  );

  // Handle pre-flight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next;
  }

  // Call the next middleware or handler
  return await fn(req, res);
};

export default function applyMiddleware(app) {
  app.use(cors()); // Enable CORS for all routes
  app.use(express.json());
  app.use(bodyParser.json());
}
