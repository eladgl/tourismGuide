import express from "express";

import crypto from "crypto"; // For generating random tokens

import applyMiddleware from "./middleware/middleware.js";
import routes from "./routes/index.js";

import config from "./access/configs/serverConfig.js";

const app = express();
// Setting the port to the value of the PORT environment variable or defaulting to 3001
const port = process.env.PORT || 3001;

// Applying middleware to the Express application
applyMiddleware(app);

// Setting up the main API routes, which will be accessible under the /api path
app.use("/api", routes);

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running at ${config.SERVER_URL}${port}`);
});

export default app;
