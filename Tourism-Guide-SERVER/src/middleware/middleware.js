import cors from "cors";
import bodyParser from "body-parser";

// Middleware to handle CORS
const allowCors = (fn) => async (req, res, next) => {
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
    // Call the next middleware or handler
    await fn(req, res, next);
  }
};

export default function applyMiddleware(app) {
  app.use(
    cors({
      origin: "*", // Allow all origins, or specify allowed origins
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      credentials: true, // Send cookies when making requests
      methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      allowedHeaders: "Content-Type, Authorization",
    })
  );
  app.use(bodyParser.json());
}
